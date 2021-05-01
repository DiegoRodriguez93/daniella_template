const API_URL: string | undefined = process.env.REACT_APP_API_URL;

export const getProducts: () => Promise<object> = () => {
  const URL: string = `${API_URL}/home-products`;

  return fetch(URL).then((res) => res.json());
};
