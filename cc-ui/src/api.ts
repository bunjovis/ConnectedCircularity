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

export const getUserCount = async () => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_CC_DB_SERVICE}v1/users/count`,
      {
        headers: {
          Accept: 'application/json',
        },
        method: 'GET',
      }
    );
    if (request.status === 200) {
      const result = await request.json();
      return { status: 200, count: result };
    } else {
      return { status: 500, count: null };
    }
  } catch (err) {
    return { status: 500, count: null };
  }
};

export const getMTRequests = async() => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_CC_DB_SERVICE}v1/apistatistics/Materiaalitori/adverts`,
      {
        headers: {
          Accept: 'application/json',
        },
        method: 'GET',
      }
    );
    if (request.status === 200) {
      const result = await request.json();
      return { status: 200, count: result };
    } else {
      return { status: 500, count: null };
    }
  } catch (err) {
    return { status: 500, count: null };
  }
};

export const getPKRequests = async() => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_CC_DB_SERVICE}v1/apistatistics/Purkukartoitus/unique`,
      {
        headers: {
          Accept: 'application/json',
        },
        method: 'GET',
      }
    );
    if (request.status === 200) {
      const result = await request.json();
      return { status: 200, count: result };
    } else {
      return { status: 500, count: null };
    }
  } catch (err) {
    return { status: 500, count: null };
  }
};