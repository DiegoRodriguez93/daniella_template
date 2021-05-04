const API_URL: string | undefined = process.env.REACT_APP_API_URL;

export const getProducts: () => Promise<object> = () => {
  const URL: string = `${API_URL}/home-products`;

  return fetch(URL).then((res) => res.json());
};

export const uploadProduct = (data: any) => {
  const URL: string = `${API_URL}/upload-product`;
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("price", data.price);
  formData.append("img1", data.img1.files[0]);
  formData.append("img2", data.img2.files[0]);

  console.log(data.img1.files[0]);
  console.log(data.img2.files[0]);

  /*   for (const name in data) {
    console.log("key: " + name);
    console.log("value: " + data[name]);
    formData.append(name, data[name]);
  } */

  return new Promise((res, rej) => {
    fetch(URL, {
      method: "POST",
      body: formData,
    })
      .then((r) => res(r.json()))
      .catch((err) => rej(err));
  });
};
