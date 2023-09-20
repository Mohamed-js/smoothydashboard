'use client';
import { createPromoCode } from '../../../helpers';

export default async function CreateProductPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = Object.fromEntries(new FormData(e.target));
    const res = await createPromoCode(data);
    if (res.message === 'Promocode created.') {
      window.location.reload();
    }
  };

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <>
        <h1 className="font-semibold capitalize">Create PromoCode</h1>
        <form className="py-4 md:py-5 flex flex-col" onSubmit={handleSubmit}>
          <label className="mt-3" htmlFor="code">
            Code
          </label>
          <input
            className="p-1 border rounded border-1 mt-2"
            type="text"
            name="code"
            placeholder="Code"
          />
          <br />
          <hr />
          <label className="mt-3" htmlFor="discount">
            Discount Percentage
          </label>
          <input
            className="p-1 border rounded border-1 mt-2"
            type="text"
            name="discount"
            placeholder="Discount"
          />
          <br />
          <hr />
          <label className="mt-3" htmlFor="type">
            Type
          </label>
          <select
            className="p-1 border rounded border-1 mt-2"
            name="type"
            placeholder="Type"
          >
            <option value="by_period">By Period</option>
            <option value="by_usage">By Usage</option>
          </select>
          <br />
          <hr />
          <label className="mt-3" htmlFor="usageTimes">
            UsageTimes
          </label>
          <input
            className="p-1 border rounded border-1 mt-2"
            type="number"
            name="usageTimes"
            placeholder="UsageTimes"
          />
          <br />
          <hr />
          <label className="mt-3" htmlFor="periodInDays">
            PeriodInDays
          </label>
          <input
            className="p-1 border rounded border-1 mt-2"
            type="number"
            name="periodInDays"
            placeholder="PeriodInDays"
          />
          <button className="p-1 rounded mt-2 text-orange-700 bg-orange-200">
            Create
          </button>
        </form>
      </>
    </main>
  );
}
