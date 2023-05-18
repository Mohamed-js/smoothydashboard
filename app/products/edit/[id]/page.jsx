'use client';
import { getProduct, updateProduct } from '../../../../helpers';

export default async function UpdateProductPage({ params }) {
  const product = await getProduct(params.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = Object.fromEntries(new FormData(e.target));
    const res = await updateProduct(params.id, data);
    console.log(res);
  };

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <h1 className="font-semibold capitalize">Update {product.title}</h1>
      <form className="py-4 md:py-10 flex flex-col" onSubmit={handleSubmit}>
        <input
          className="p-1 border rounded border-1 mt-2"
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={product.title}
        />
        <input
          className="p-1 border rounded border-1 mt-2"
          type="number"
          name="price"
          placeholder="Price"
          defaultValue={product.price}
        />
        <textarea
          className="p-1 border rounded border-1 mt-2"
          type="text"
          name="description"
          placeholder="Description"
          defaultValue={product.description}
          rows={8}
        ></textarea>
        <button className="p-1 rounded mt-2 text-orange-700 bg-orange-200">
          Update
        </button>
      </form>
    </main>
  );
}
