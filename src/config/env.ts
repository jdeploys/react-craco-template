export const globalEnv = {
  API_BASE_URL:
    (process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_PROXY_HOST
      : process.env.REACT_APP_API_BASE_URL) || '',
  APP_NAME: 'craco-admin-template'
};

export const globalKey = {
  TOKEN: 'global_token',
};
