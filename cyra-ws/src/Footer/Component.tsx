import { getCachedGlobal } from '@/utilities/getGlobals';
import Link from 'next/link';
import React from 'react';

import type { Footer as FooterType } from '@/payload-types';

import { ThemeSelector } from '@/providers/Theme/ThemeSelector';
import { CMSLink } from '@/components/Link';
import { Logo } from '@/components/Logo/Logo';

export async function Footer() {
  const footerData: FooterType = await getCachedGlobal('footer', 1)() ?? {} as FooterType;
  
  console.log('🚀 Debug Footer Component: footerData:', footerData);

  const navItems = footerData?.navItems ?? [];
  
  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 flex flex-col gap-8 md:flex-row md:justify-between">
        {/* Substack Subscribe Iframe */}
        <div className="w-full flex justify-center">
          <form
            action="https://erinjerri.substack.com/subscribe"
            method="POST"
            target="_blank"
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-white bg-transparent px-4 py-3 text-white placeholder-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="rounded-lg bg-[#AEE3FA] text-white font-bold px-8 py-3 transition hover:bg-[#37EDFF] w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Main Content */}
        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center w-full justify-between">
          <Link className="flex items-center" href="/">
            <Logo />
          </Link>
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => (
              <CMSLink className="text-white" key={i} {...link} />
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
