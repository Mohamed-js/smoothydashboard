'use-client';
import { Card, Title, Text } from '@tremor/react';

import { getProducts, getUsers, getOrders, getPromoCodes } from '../helpers';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function IndexPage({ searchParams }) {
  const search = searchParams.q ?? '';

  const products = await getProducts();
  const users = await getUsers();
  const orders = await getOrders();
  const promoCodes = await getPromoCodes();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-8xl">
      {/* Products */}
      <br />
      <Title>
        <Link href="/products">Products - {products.length} </Link>
      </Title>

      {/* Orders */}
      <br />
      <Title>
        <Link href="/orders">Orders - {orders.length} </Link>
      </Title>

      {/* Users */}
      <br />
      <Title>
        <Link href="/users">Users - {users.length} </Link>
      </Title>

      {/* Promo Codes */}
      <br />
      <Title>
        <Link href="/promocodes">PromoCodes - {promoCodes.length} </Link>
      </Title>
    </main>
  );
}
