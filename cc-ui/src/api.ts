export const getServiceProviders = async () => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_CC_DB_SERVICE}v1/apis`,
      {
        headers: {
          Accept: 'application/json',
        },
        method: 'GET',
      }
    );
    if (request.status === 200) {
      const result = await request.json();
      return { status: 200, providers: result };
    } else {
      return { status: 500, providers: [] };
    }
  } catch (err) {
    return { status: 500, providers: [] };
  }
};
