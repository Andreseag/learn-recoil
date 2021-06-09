export default function apiCAll({ url, params, method, body, headers }) {
  return fetch(url, { params, method, body, headers });
}
