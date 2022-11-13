export const setupMTRequest = () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  const urlencoded = new URLSearchParams();
  urlencoded.append('client_secret', import.meta.env.VITE_CLIENT_SECRET);
  urlencoded.append('client_id', import.meta.env.VITE_CLIENT_ID);
  urlencoded.append('grant_type', 'client_credentials');
  urlencoded.append('scope', import.meta.env.VITE_SCOPE);

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: headers,
    body: urlencoded,
    redirect: 'follow',
  };
  return requestOptions;
};
