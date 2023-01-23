export async function getService<T>(url: string): Promise<T> {
	let myHeaders = new Headers();

	myHeaders.append('apiKey', process.env.API_KEY || '');

	const requestOptions = {
		method: 'GET',
		headers: myHeaders
	};

	return fetch(url, requestOptions).then((response) => response.json());
}
