import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Badge
} from '@tremor/react';
import Image from 'next/image';
import { HiEye } from 'react-icons/hi2';

export default function ProductsTable({ products }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Product</TableHeaderCell>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>Price</TableHeaderCell>
          <TableHeaderCell>Views</TableHeaderCell>
          <TableHeaderCell>Controls</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product) => (
          <>
            <TableRow key={product.id} className="h-28">
              <TableCell className="relative">
                <Image
                  className="object-contain object-left p-2"
                  src={product.image}
                  alt={product.title}
                  fill
                />
              </TableCell>
              <TableCell className="capitalize">{product.title}</TableCell>
              <TableCell>
                <Text>{product.price}</Text>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-between rounded-xl p-1 px-3 bg-green-200 text-green-700 w-16">
                  <HiEye />
                  <span className="leading-4">{product.views.length}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center justify-between">
                  <a
                    href={`products/edit/${product.id}`}
                    className="p-1 px-3 bg-orange-200 rounded text-orange-700 font-semibold mr-1"
                  >
                    Update
                  </a>
                </div>
              </TableCell>
            </TableRow>
          </>
        ))}
      </TableBody>
    </Table>
  );
}
