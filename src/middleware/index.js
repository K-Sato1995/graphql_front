const baseUrl = "http://localhost:3000/graphql";

export default function request(query) {
  const fetchConfig = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: query })
  };

  fetch(baseUrl, fetchConfig)
    .then(res => res.json())
    .then(res => console.log(res.data));
}
