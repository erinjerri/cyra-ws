import type { Config } from 'src/payload-types';

import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { unstable_cache } from 'next/cache';

type Global = keyof Config['globals'];

async function getGlobal(slug: Global, depth = 0) {
  try {
    const payload = await getPayload({ config: configPromise });
    
    if (!payload) {
      console.error(`❌ getGlobal Error: Payload is undefined for slug "${slug}"`);
      return null;
    }

    const global = await payload.findGlobal({ slug, depth });

    if (!global) {
      console.error(`❌ getGlobal Error: findGlobal() returned undefined for slug "${slug}"`);
      return null;
    }

    return global;
  } catch (error) {
    console.error(`❌ getGlobal Error: Failed to fetch global "${slug}":`, error);
    return null;
  }
}

/**
 * Returns an unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (slug: Global, depth = 0) =>
  unstable_cache(async () => getGlobal(slug, depth), [slug], {
    tags: [`global_${slug}`],
  });
