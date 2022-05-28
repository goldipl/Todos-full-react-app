import { object, string } from "yup";

const validationSchema = object().shape({
  title: string().min(2).max(40).required(),
  description: string().min(2).max(255),
});

const initialValues = {
  title: "",
  description: "",
};

export { validationSchema, initialValues };
