const API_URL: string | undefined = process.env.REACT_APP_API_URL;

export const getProducts: () => Promise<object> = () => {
  const URL: string = `${API_URL}/home-products`;

  return fetch(URL).then((res) => res.json());
};

export const uploadProduct = async (data: Array<string>) => {
  const URL: string = `${API_URL}/upload-product`;
  const formData = new FormData();

  for (const name in data) {
    formData.append(name, data[name]);
  }

  const response = await fetch(URL, {
    method: "POST",
    body: formData,
  });

  return response;
};
