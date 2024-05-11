export async function fetchApi(api) {
        const response = await fetch(api);
        const result = await response.json();
        return result;
}