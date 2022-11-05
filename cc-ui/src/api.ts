// TODO:
// construct headers
// read tokens from session storage
const serviceProviders = [
  {
    id: 1,
    displayValue: 'Purkukartoitus',
    authEndpoint:
      'https://auth.purkukartoitus.fi/auth/realms/rapurc/protocol/openid-connect/token',
  },
];

export const getServiceProviders = () => {
  try {
    const token = sessionStorage.getItem('mtToken');
    console.log(token);
    const spToken = sessionStorage.getItem('spToken');
    console.log(spToken);
    return { status: 200, providers: serviceProviders };
  } catch (err) {
    console.log(err);
    return { status: 500, providers: [] };
  }
};

export const getUserItems = async () => {
  try {
    console.log('TODO: get user items');
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await fetch(
      'http://localhost:3000/v1/items/97541e5c-847f-41c2-8120-d9d93d0a4798',
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  } catch (err) {
    console.log(err);
  }
};

export const getUserItem = () => {
  try {
    console.log('TODO: get specific item');
  } catch (err) {
    console.log(err);
  }
};
