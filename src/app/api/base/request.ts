import createClient from "./client";

const client = createClient();

async function get(url: string) {
	const response = await client.fetch(url, { method: "GET" });
	if (!response.ok) throw response;
	else return response.json();
}

async function post<B extends object | FormData>(url: string, body: B) {
	const response = await client.fetch(url, {
		method: "POST",
		body: body instanceof FormData ? body : JSON.stringify(body),
	});
	if (!response.ok) throw response;
	else return response.json();
}

async function remove(url: string) {
	const response = await client.fetch(url, { method: "DELETE" });
	if (!response.ok) throw response;
}

export default {
	get,
	post,
	delete: remove,
};
