import { HeaderClient } from './Component.client';
import { getCachedGlobal } from '@/utilities/getGlobals';
import React from 'react';

import type { Header } from '@/payload-types';

export async function Header() {
  const headerData: Header = await getCachedGlobal('header', 1)() ?? {} as Header;
  
  console.log('🚀 Debug Header Component: headerData:', headerData);

  return <HeaderClient data={headerData} />;
}
