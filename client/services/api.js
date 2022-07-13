export async function apiGet(name) {
  const fetchURL = name !== "" ? `/api/apiGet?name=${name}` : "/api/apiGet";
  const response = await fetch(fetchURL);
  return await response.json();
}
