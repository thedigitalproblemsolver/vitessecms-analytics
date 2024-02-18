export default async function FetchApi(url: string): Promise<FetchResult> {
    const response = await fetch(url);
    return await response.json();
}