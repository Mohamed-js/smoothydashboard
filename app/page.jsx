'use-client';
import { Card, Title, Text } from '@tremor/react';

import Search from './search';
import UsersTable from './table';
import ProductsTable from './products-table';
import OrdersTable from './orders-table';
import { getProducts, getUsers, getOrders } from '../helpers';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function IndexPage({ searchParams }) {
  const search = searchParams.q ?? '';

  const products = await getProducts();
  const users = await getUsers();
  const orders = await getOrders();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-8xl">
      {/* Orders */}
      <Title>Orders - {orders.length} </Title>
      <Text>A list of store orders.</Text>
      {/* <Search /> */}
      <Card className="mt-6">
        <OrdersTable loadOrders={orders} />
      </Card>

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

      {/* Users */}
      <br />
      <Title>Users - {users.length} </Title>
      <Text>A list of store users.</Text>
      {/* <Search /> */}
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
