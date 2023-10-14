'use client';

import { deleteOrder, getOrders, updateOrder } from '../helpers';
import { useState } from 'react';
export default function OrderStatusButton({ order, setOrders }) {
  const statuses = ['pending', 'on delivery', 'complete'];
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const handleStatusChange = async (id, status) => {
    await updateOrder(id, status);
    toggleMenu();
    setOrders(await getOrders());
  };

  const handleDeleteOrder = async (id) => {
    await deleteOrder(id);
    toggleMenu();
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
    >
      <div className="relative">
        <button
          className="leading-4 text-center capitalize relative"
          onClick={() => toggleMenu()}
        >
          {order.status}
        </button>
        {menuOpened && (
          <div className="rounded-md p-2 absolute right-0 top-0 bg-white shadow-sm shadow-slate-600">
            <div
              className="flex justify-center items-center"
              onClick={toggleMenu}
            >
              <span className="rounded p-1 bg-gray-200 text-black h-8 w-8 text-center">
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
            <div
              key={order.id + '1'}
              className="p-1 capitalize cursor-pointer mb-1 text-white bg-red-600 rounded font-semibold text-center"
              onClick={() => handleDeleteOrder(order.id)}
            >
              × Delete Order ×
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
