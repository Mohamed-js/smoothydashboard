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
import OrderStatusButton from './order-status-button';
import { io } from 'socket.io-client';
import useSound from 'use-sound';

export default function OrdersTable({ loadOrders }) {
  const [orders, setOrders] = useState(loadOrders.reverse());
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
          <TableHeaderCell>PromoCode</TableHeaderCell>
          <TableHeaderCell>Discount</TableHeaderCell>
          <TableHeaderCell>Total</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.map((order) => {
          return (
            <>
              <TableRow key={order.id} className="h-28 ">
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
                  {order.promo_code ? (
                    <Text>{order.promo_code}</Text>
                  ) : (
                    <Text>_</Text>
                  )}
                </TableCell>
                <TableCell>
                  {order.discount ? (
                    <Text>{order.discount}%</Text>
                  ) : (
                    <Text>_</Text>
                  )}
                </TableCell>
                <TableCell>
                  {order.discount && (
                    <Text>
                      {order.products.reduce((prev, product) => {
                        return (
                          prev + product.order_item.quantity * product.price
                        );
                      }, 0) -
                        (order.discount / 100) *
                          order.products.reduce((prev, product) => {
                            return (
                              prev + product.order_item.quantity * product.price
                            );
                          }, 0)}{' '}
                      EGP
                    </Text>
                  )}
                  <Text className={order.discount ? 'line-through' : ''}>
                    {order.products.reduce((prev, product) => {
                      return prev + product.order_item.quantity * product.price;
                    }, 0)}{' '}
                    EGP
                  </Text>
                </TableCell>
                <TableCell>
                  <OrderStatusButton order={order} setOrders={setOrders} />
                </TableCell>
              </TableRow>

              {order.products.map((product) => (
                <TableRow key={product.id} className="h-28 bg-slate-100  ">
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
