'use-client';
import { Card, Title, Text } from '@tremor/react';

import OrdersTable from '../orders-table';
import { getOrders } from '../../helpers';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function IndexPage({ searchParams }) {
  const search = searchParams.q ?? '';

  const orders = await getOrders();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-8xl">
      {/* Orders */}
      <br />
      <Title>Orders - {orders.length} </Title>
      <Text>A list of store orders.</Text>
      {/* <Search /> */}
      <Card className="mt-6">
        <OrdersTable loadOrders={orders} />
      </Card>
    </main>
  );
}
