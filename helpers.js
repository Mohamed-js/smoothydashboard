// import { getToken } from './auth';
const host = 'https://smoothy-api.onrender.com';
// const host = 'http://localhost:3000';

export async function getUsers() {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const res = await fetch(host + `/admin/users`, options);

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