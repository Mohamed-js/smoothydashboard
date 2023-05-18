import { Card, Title, Text } from '@tremor/react';

import Search from './search';
import UsersTable from './table';
import ProductsTable from './products-table';
import { getProducts, getUsers } from '../helpers';

export const dynamic = 'force-dynamic';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';

  const products = await getProducts();
  const users = await getUsers();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      {/* Products */}
      <Title>Products - {products.length} -</Title>
      <Text>A list of store products.</Text>
      <Search />
      <Card className="mt-6">
        <ProductsTable products={products} />
      </Card>

      {/* Users */}
      <br />
      <Title>Users - {users.length} -</Title>
      <Text>A list of store users.</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
