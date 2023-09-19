'use-client';
import { Card, Title, Text } from '@tremor/react';

import UsersTable from '../table';

import { getUsers } from '../../helpers';

export const dynamic = 'force-dynamic';

export default async function IndexPage({ searchParams }) {
  const search = searchParams.q ?? '';

  const users = await getUsers();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-8xl">
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
