import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Container,
  Grid,
  Button,
  TextField,
  FormLabel,
  Input,
} from "@material-ui/core";
import { uploadProduct } from "../../libs/api";
import Swal from "sweetalert2";

/* interface ValuesInterface {
  name: string;
  price: string;
  img1: any;
  img2: any;
} */

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Nombre debe tener al menos 2 carecteres")
    .required("Nombre es requerido"),
  price: yup
    .string()
    .min(1, "Debe tener un valor de al menos 1 peso")
    .required("Precio es requerido"),
});

const UploadProductoForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "100",
      img1: "",
      img2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      uploadProduct(values)
        .then((r) =>
          Swal.fire("Correcto!", "Producto guardado correctamente", "success")
        )
        .catch((err) =>
          Swal.fire(
            "Error!",
            "Ha ocurrido un error, intente más tarde!",
            "error"
          )
        );
    },
  });

  return (
    <Container>
      <Grid container>
        <Grid item md={4} xs={12}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Nombre"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              id="price"
              name="price"
              label="Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
            />

            <FormLabel htmlFor="img1">Image 1 upload</FormLabel>
            <Input
              id="img1"
              name="img1"
              type="file"
              style={{ marginBottom: "40px" }}
              onChange={(e) => {
                formik.setFieldValue("img1", e.target);
              }}
              className="form-control"
            />

            <FormLabel htmlFor="img2">Image 2 upload</FormLabel>
            <Input
              id="img2"
              name="img2"
              type="file"
              style={{ marginBottom: "40px" }}
              onChange={(e) => {
                formik.setFieldValue("img2", e.target);
              }}
              className="form-control"
            />
            {/* <Thumb file={values.file} /> */}

            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UploadProductoForm;
