import type { Metadata } from 'next';

import { PayloadRedirects } from '@/components/PayloadRedirects';
import configPromise from '@payload-config';
import { getPayload, type RequiredDataFromCollectionSlug } from 'payload';
import { draftMode } from 'next/headers';
import React, { cache } from 'react';
import { homeStatic } from '@/endpoints/seed/home-static';

import { RenderBlocks } from '@/blocks/RenderBlocks';
import { RenderHero } from '@/heros/RenderHero';
import { generateMeta } from '@/utilities/generateMeta';
import PageClient from './page.client';
import { LivePreviewListener } from '@/components/LivePreviewListener';

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });

  if (!payload) {
    console.error('❌ generateStaticParams Error: Payload is undefined');
    return [];
  }

  console.log('🚀 Debug generateStaticParams: Payload:', payload);

  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  });

  if (!pages?.docs) {
    console.error('❌ generateStaticParams Error: pages.docs is undefined');
    return [];
  }

  console.log('📌 Debug generateStaticParams: pages.docs:', pages?.docs);

  const params = pages.docs
    ?.filter((doc) => doc?.slug !== 'home')
    ?.map(({ slug }) => ({ slug })) || [];

  console.log('✅ Debug generateStaticParams: params:', params);

  return params;
}

type Args = {
  params: Promise<{
    slug?: string;
  }>;
};

export default async function Page({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode();
  const { slug = 'home' } = await paramsPromise;
  const url = '/' + slug;

  let page: RequiredDataFromCollectionSlug<'pages'> | null;

  page = await queryPageBySlug({ slug });

  if (!page) {
    console.error(`❌ Page Component Error: No data found for slug "${slug}"`);
  } else {
    console.log(`🚀 Debug Page Component: page for slug "${slug}":`, page);
  }

  // Remove this code once your website is seeded
  if (!page && slug === 'home') {
    page = homeStatic;
  }

  if (!page) {
    console.log(`❌ Page not found for slug "${slug}", redirecting.`);
    return <PayloadRedirects url={url} />;
  }

  const { hero, layout } = page;

  return (
    <article className="pt-16 pb-24">
      <PageClient />
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  );
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise;
  const page = await queryPageBySlug({ slug });

  if (!page) {
    console.error(`❌ generateMetadata Error: No metadata found for slug "${slug}"`);
  } else {
    console.log(`📌 Debug generateMetadata: Metadata for "${slug}":`, page);
  }

  return generateMeta({ doc: page });
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode();
  const payload = await getPayload({ config: configPromise });

  if (!payload) {
    console.error(`❌ queryPageBySlug Error: Payload is undefined for slug "${slug}"`);
    return null;
  }

  console.log(`🚀 Debug queryPageBySlug: Payload for "${slug}":`, payload);

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: {
      slug: { equals: slug },
    },
  });

  if (!result?.docs) {
    console.error(`❌ queryPageBySlug Error: No data found for slug "${slug}"`);
    return null;
  }

  console.log(`📌 Debug queryPageBySlug: Result for "${slug}":`, result.docs);

  return result.docs?.[0] || null;
});
