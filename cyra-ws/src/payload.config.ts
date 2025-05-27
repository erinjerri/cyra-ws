import { postgresAdapter } from '@payloadcms/db-postgres'

// import sharp from 'sharp' // ❗ Commented out since it's not used directly
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      ssl: {
        rejectUnauthorized: process.env.NODE_ENV === 'production',
      },
    },
  }),
  collections: [Pages, Posts, Media, Categories, Users],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: {
            name: 'supabase',
            config: {
              supabaseURL: process.env.SUPABASE_URL,
              supabaseKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
              bucket: process.env.SUPABASE_BUCKET,
            },
          },
        },
      },
    }),
    ...plugins,
  ],
  secret: process.env.PAYLOAD_SECRET,

  // sharp: {
  //   imageOptions: {
  //     // resize: { width: 1200, height: 1200, fit: 'inside' },
  //     // quality: 80,
  //   },
  // },

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        if (req.user) return true

        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})