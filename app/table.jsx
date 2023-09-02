import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';

export default function UsersTable({ users }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Phone</TableHeaderCell>
          <TableHeaderCell>City</TableHeaderCell>
          <TableHeaderCell>Orders</TableHeaderCell>
          <TableHeaderCell>Cart Items</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
            <TableCell className="capitalize">
              {(user.orders.length > 0 && user.orders[0].first_name) || '-'}
            </TableCell>
            <TableCell>
              <Text>
                {(user.orders.length > 0 && user.orders[0].phone) || '-'}
              </Text>
            </TableCell>
            <TableCell>
              <Text>
                {(user.orders.length > 0 && user.orders[0].city) || '-'}
              </Text>
            </TableCell>
            <TableCell>
              <Text>{user.orders.length}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.products.length}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
