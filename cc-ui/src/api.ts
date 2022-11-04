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

export const getUserItems = () => {
  try {
    console.log('TODO: get user items');
  } catch (err) {
    console.log(err);
  }
};
