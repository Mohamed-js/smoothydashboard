// import { getToken } from './auth';
const host = 'https://lucky-industrious-fortnight.glitch.me';
// const host = 'http://localhost:4000';

export async function getPromoCodes() {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const res = await fetch(host + `/admin/promocodes`, options);

  return await res.json();
}

export async function createPromoCode(promocode) {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(promocode)
  };

  const res = await fetch(host + `/admin/promocodes`, options);
  return await res.json();
}

export async function updateOrder(id, status) {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify({ status })
  };

  const res = await fetch(host + `/admin/orders/${id}`, options);

  return await res.json();
}

export async function deleteOrder(id) {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  };

  const res = await fetch(host + `/admin/orders/${id}`, options);

  return await res.json();
}

export async function getOrders() {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const res = await fetch(host + `/admin/orders`, options);

  return await res.json();
}

export async function getUsers() {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const res = await fetch(host + `/admin/users`, options);

  // console.log(await res.json());
  return await res.json();
}

export async function getProducts() {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const res = await fetch(host + `/admin/products`, options);

  return await res.json();
}

export async function getProduct(id) {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const res = await fetch(host + `/admin/products/${id}`, options);

  return await res.json();
}

export async function createProduct(product) {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(product)
  };

  const res = await fetch(host + `/admin/products`, options);
  return await res.json();
}

export async function updateProduct(id, product) {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PATCH',
    body: JSON.stringify(product)
  };

  const res = await fetch(host + `/admin/products/${id}`, options);
  return await res.json();
}

export async function getBlogPosts() {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      authorization: ``
    },
    method: 'GET'
  };

  const res = await fetch(host + `/admin/blogposts`, options);
  return await res.json();
}

export async function getBlogPost(slug) {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const res = await fetch(host + `/admin/blogposts/${id}`, options);
  return await res.json();
}
