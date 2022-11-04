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
