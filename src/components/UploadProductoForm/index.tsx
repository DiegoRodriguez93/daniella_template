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

/* interface Values {
  email: string;
  password: string;
} */

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const UploadProductoForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
      img1: {},
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <Grid container>
        <Grid item md={4} xs={12}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <FormLabel htmlFor="img1">File upload</FormLabel>
            <Input
              id="img1"
              name="img1"
              type="file"
              style={{ marginBottom: "40px" }}
              value={formik.values.img1}
              onChange={formik.handleChange}
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
