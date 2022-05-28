import { object, string, ref } from "yup";

const validationSchema = object().shape({
  email: string().email().required(),
  username: string().required(),
  password: string().required(),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Passwords must match"
  ),
});

const initialValues = {
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

export { validationSchema, initialValues };
