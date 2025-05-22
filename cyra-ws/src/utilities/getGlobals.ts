import type { Config } from 'src/payload-types';

import configPromise from '@payload-config';
import { getPayload } from 'payload';
import { unstable_cache } from 'next/cache';

type Global = keyof Config['globals'];

async function getGlobal(slug: Global, depth = 0) {
  const payload = await getPayload({ config: configPromise });
  
  console.log(`🚀 Debug getGlobal: Payload for "${slug}":`, payload);

  if (!payload) {
    console.error(`❌ getGlobal Error: Payload is undefined for slug "${slug}"`);
    return null;
  }

  const global = await payload.findGlobal({ slug, depth });

  if (!global) {
    console.error(`❌ getGlobal Error: findGlobal() returned undefined for slug "${slug}"`);
  } else {
    console.log(`📌 Debug getGlobal: global.docs for "${slug}":`, global?.docs);
  }

  return global || null;
}

/**
 * Returns an unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (slug: Global, depth = 0) =>
  unstable_cache(async () => getGlobal(slug, depth), [slug], {
    tags: [`global_${slug}`],
  });
