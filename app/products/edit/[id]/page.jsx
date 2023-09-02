'use client';
import { getProduct, updateProduct } from '../../../../helpers';
import { useState, useEffect } from 'react';
export default async function UpdateProductPage({ params }) {
  const [product, setProduct] = useState();

  const storeProduct = async () => {
    setProduct(await getProduct(params.id));
  };

  useEffect(() => {
    storeProduct();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = Object.fromEntries(new FormData(e.target));
    const res = await updateProduct(params.id, data);
    setProduct(res.product);
  };

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      {product && (
        <>
          <h1 className="font-semibold capitalize">Update {product.title}</h1>
          <form
            className="py-4 md
          <br />
            <hr />:py-10 flex flex-col"
            onSubmit={handleSubmit}
          >
            <label className="mt-3" htmlFor="title">
              Title
            </label>
            <input
              className="p-1 border rounded border-1 mt-2"
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={product.title}
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
              defaultValue={product.category}
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
              defaultValue={product.ar_category}
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
              defaultValue={product.price}
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
              defaultValue={product.description}
              rows={8}
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
              defaultValue={product.ar_description}
              rows={8}
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
              defaultValue={product.usage}
              rows={8}
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
              defaultValue={product.ar_usage}
              rows={8}
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
              defaultValue={product.ingredients}
              rows={8}
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
              defaultValue={product.ar_ingredients}
              rows={8}
            ></textarea>
            <button className="p-1 rounded mt-2 text-orange-700 bg-orange-200">
              Update
            </button>
          </form>
        </>
      )}
    </main>
  );
}
