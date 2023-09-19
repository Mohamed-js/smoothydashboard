'use-client';
import { Card, Title, Text } from '@tremor/react';
import ProductsTable from '../products-table';

import { getProducts } from '../../helpers';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function IndexPage({ searchParams }) {
  const search = searchParams.q ?? '';

  const products = await getProducts();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-8xl">
      {/* Products */}
      <br />
      <Title>Products - {products.length} </Title>
      <Link
        href={'products/create'}
        className="py-2 px-4 bg-green-400 text-white my-2 inline-block"
      >
        Create
      </Link>
      <Text>A list of store products.</Text>
      {/* <Search /> */}
      <Card className="mt-6">
        <ProductsTable products={products} />
      </Card>
    </main>
  );
}
