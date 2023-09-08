import kv from '@vercel/kv';

export default async function ViewCounter() {
  const kvRestApiUrl = process.env.KV_REST_API_URL;
  const kvRestApiToken = process.env.KV_REST_API_TOKEN;

  if (!kvRestApiUrl || !kvRestApiToken) {
    console.error("Missing required environment variables: KV_REST_API_URL and KV_REST_API_TOKEN");
    return;
  }

  // const views = await kv.incr('views', { url: kvRestApiUrl, token: kvRestApiToken });

  // Your code to display the views goes here

  return (
    <p className="text-sm text-gray-500">
      {/* Display the views */}
    </p>
  );
}
