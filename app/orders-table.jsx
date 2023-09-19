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
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { getOrders, updateOrder } from '../helpers';
import { io } from 'socket.io-client';
import useSound from 'use-sound';

const statuses = ['pending', 'on delivery', 'complete'];
export default function OrdersTable({ loadOrders }) {
  const [orders, setOrders] = useState(loadOrders);
  const audRef = useRef();

  useEffect(() => {
    // const socket = io('ws://knowledgeable-helpful-bubbler.glitch.me');
    // const socket = io('ws://localhost:8000');
    // socket.on('connect', () => {});
    // socket.on('new-order', () => {
    //   getOrders()
    //     .then((data) => data)
    //     .then((data) => setOrders(data));
    //   console.log('order received');
    //   audRef.current.play();
    // });
    // // handle the event sent with socket.emit()
    // socket.on('salutations', (elem1, elem2, elem3) => {
    //   console.log(elem1, elem2, elem3);
    // });
    // return () => {
    //   socket.off('connect', onConnect);
    //   socket.off('disconnect', onDisconnect);
    // };
  }, []);

  return (
    <Table>
      <audio controls ref={audRef} className="hidden">
        <source src="/alarm.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Order</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Location</TableHeaderCell>
          <TableHeaderCell>Address</TableHeaderCell>
          <TableHeaderCell>User</TableHeaderCell>
          <TableHeaderCell>Phone</TableHeaderCell>
          <TableHeaderCell>Total</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((order) => {
          return (
            <>
              <TableRow key={order.id} className="h-28">
                <TableCell className="relative">
                  <p>{order.id}</p>
                </TableCell>
                <TableCell>{order.user.email}</TableCell>
                <TableCell className="capitalize">{order.city}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-between rounded-xl p-1 px-3">
                    <span className="leading-4">{order.address}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Text className="capitalize">{order.first_name}</Text>
                </TableCell>
                <TableCell>
                  <Text>{order.phone}</Text>
                </TableCell>
                <TableCell>
                  <Text>
                    {order.products.reduce((prev, product) => {
                      return prev + product.order_item.quantity * product.price;
                    }, 0)}{' '}
                    EGP
                  </Text>
                </TableCell>
                <TableCell>
                  <Menu order={order} setOrders={setOrders} />
                </TableCell>
              </TableRow>

              {order.products.map((product) => (
                <TableRow key={product.id} className="h-28 bg-slate-100">
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
                    <Text>{product.price} EGP</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{product.order_item.quantity} Units</Text>
                  </TableCell>
                  <TableCell>
                    <Text>
                      {product.order_item.quantity * product.price} EGP
                    </Text>
                  </TableCell>
                </TableRow>
              ))}
            </>
          );
        })}
      </TableBody>
    </Table>
  );
}

export const Menu = ({ order, setOrders }) => {
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
        order.status === 'pending'
          ? 'bg-red-200 text-red-700'
          : order.status === 'on delivery'
          ? 'bg-orange-300 text-orange-800'
          : 'bg-green-200 text-green-700'
      }`}
      onClick={toggleMenu}
    >
      <div className="relative">
        <button className="leading-4 text-center capitalize relative">
          {order.status}
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
