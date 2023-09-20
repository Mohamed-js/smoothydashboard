'use client';

import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';
import { useState } from 'react';

export default function OrdersTable({ loadPromoCodes }) {
  const [promoCodes, setPromoCodes] = useState(loadPromoCodes);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>PromoCode</TableHeaderCell>
          <TableHeaderCell>Code</TableHeaderCell>
          <TableHeaderCell>Discount</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>UsageTimes</TableHeaderCell>
          <TableHeaderCell>PeriodInDays</TableHeaderCell>
          <TableHeaderCell>IsOutdated</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {promoCodes.map((promoCode) => {
          return (
            <>
              <TableRow key={promoCode.id} className="h-28">
                <TableCell className="relative">
                  <p>{promoCode.id}</p>
                </TableCell>
                <TableCell>{promoCode.code}</TableCell>

                <TableCell>{promoCode.discount}</TableCell>
                <TableCell>
                  <Text className="capitalize">
                    {promoCode.type.split('_').join(' ')}
                  </Text>
                </TableCell>
                <TableCell>
                  <Text>{promoCode.usageTimes}</Text>
                </TableCell>
                <TableCell className="capitalize">
                  {promoCode.periodInDays}
                </TableCell>
                <TableCell>
                  <Text>{promoCode.isOutdated}</Text>
                </TableCell>
                <TableCell>
                  {/* <Menu promoCode={promoCode} setOrders={setOrders} /> */}
                </TableCell>
              </TableRow>
            </>
          );
        })}
      </TableBody>
    </Table>
  );
}

export const Menu = ({ promoCode, setOrders }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const handleStatusChange = async (id, status) => {
    await updateOrder(id, status);
    // toggleMenu();
    setOrders(await getOrders());
  };

  return (
    <div
      className={`flex items-center justify-center rounded-xl p-1 px-3 w-20 cursor-pointer ${
        promoCode.status === 'pending'
          ? 'bg-red-200 text-red-700'
          : promoCode.status === 'on delivery'
          ? 'bg-orange-300 text-orange-800'
          : 'bg-green-200 text-green-700'
      }`}
      onClick={toggleMenu}
    >
      <div className="relative">
        <button className="leading-4 text-center capitalize relative">
          {promoCode.status}
        </button>
        {menuOpened && (
          <div className="rounded-md p-2 absolute right-0 top-0 bg-white shadow-sm shadow-slate-600">
            <div className="flex justify-center items-center">
              <span
                onClick={toggleMenu}
                className="rounded p-1 bg-gray-200 text-black h-8 w-8 text-center"
              >
                ×
              </span>
            </div>
            {statuses.map((status) => {
              if (status !== order.status) {
                return (
                  <div
                    key={status}
                    className="p-1 capitalize cursor-pointer mb-1 text-black font-semibold"
                    onClick={() => handleStatusChange(order.id, status)}
                  >
                    Mark As {status}
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};
