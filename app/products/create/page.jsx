'use client';
import { createProduct } from '../../../helpers';
import { useState, useEffect } from 'react';
export default async function CreateProductPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = Object.fromEntries(new FormData(e.target));
    const res = await createProduct(data);
  };

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <>
        <h1 className="font-semibold capitalize">Create Product</h1>
        <form className="py-4 md:py-5 flex flex-col" onSubmit={handleSubmit}>
          <label className="mt-3" htmlFor="title">
            Title
          </label>
          <input
            className="p-1 border rounded border-1 mt-2"
            type="text"
            name="title"
            placeholder="Title"
          />
          <br />
          <hr />
          <label className="mt-3" htmlFor="category">
            Category
          </label>
          <input
            className="p-1 border rounded border-1 mt-2"
            type="text"
            name="category"
            placeholder="Category"
          />
          <br />
          <hr />
          <label className="mt-3" htmlFor="ar_category">
            AR Category
          </label>
          <input
            className="p-1 border rounded border-1 mt-2"
            type="text"
            name="ar_category"
            placeholder="AR Category"
          />
          <br />
          <hr />
          <label className="mt-3" htmlFor="price">
            Price
          </label>
          <input
            className="p-1 border rounded border-1 mt-2"
            type="number"
            name="price"
            placeholder="Price"
          />
          <br />
          <hr />
          <label className="mt-3" htmlFor="description">
            Description
          </label>
          <textarea
            className="p-1 border rounded border-1 mt-2"
            type="text"
            name="description"
            placeholder="Description"
            rows={4}
          ></textarea>
          <br />
          <hr />
          <label className="mt-3" htmlFor="ar_description">
            AR Description
          </label>
          <textarea
            className="p-1 border rounded border-1 mt-2"
            type="text"
            name="ar_description"
            placeholder="Arabic Description"
            rows={4}
          ></textarea>
          <br />
          <hr />
          <label className="mt-3" htmlFor="usage">
            Usage
          </label>
          <textarea
            className="p-1 border rounded border-1 mt-2"
            type="text"
            name="usage"
            placeholder="Usage"
            rows={4}
          ></textarea>
          <br />
          <hr />
          <label className="mt-3" htmlFor="ar_usage">
            AR Usage
          </label>
          <textarea
            className="p-1 border rounded border-1 mt-2"
            type="text"
            name="ar_usage"
            placeholder="Arabic Usage"
            rows={4}
          ></textarea>
          <br />
          <hr />
          <label className="mt-3" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            className="p-1 border rounded border-1 mt-2"
            type="text"
            name="ingredients"
            placeholder="ingredients"
            rows={4}
          ></textarea>
          <br />
          <hr />
          <label className="mt-3" htmlFor="ar_ingredients">
            AR Ingredients
          </label>
          <textarea
            className="p-1 border rounded border-1 mt-2"
            type="text"
            name="ar_ingredients"
            placeholder="Arabic ingredients"
            rows={4}
          ></textarea>
          <button className="p-1 rounded mt-2 text-orange-700 bg-orange-200">
            Create
          </button>
        </form>
      </>
    </main>
  );
}
