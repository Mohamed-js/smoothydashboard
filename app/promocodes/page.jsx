'use-client';
import { Card, Title, Text } from '@tremor/react';

import PromoCodesTable from '../promocodes-table';
import { getPromoCodes } from '../../helpers';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function IndexPage({ searchParams }) {
  const search = searchParams.q ?? '';

  const promoCodes = await getPromoCodes();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-8xl">
      {/* Orders */}
      <br />
      <Title>PromoCodes - {promoCodes.length} </Title>
      <Link
        href={'promocodes/create'}
        className="py-2 px-4 bg-green-400 text-white my-2 inline-block"
      >
        Create
      </Link>
      <Text>A list of store PromoCodes.</Text>
      {/* <Search /> */}
      <Card className="mt-6">
        <PromoCodesTable loadPromoCodes={promoCodes} />
      </Card>
    </main>
  );
}
