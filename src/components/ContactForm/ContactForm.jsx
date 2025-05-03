import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { ContactSchema } from "../schemas/contactSchema";

const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (values, actions) => {
    handleAddContact({ id: nanoid(), ...values });
    actions.resetForm();
  };

  const initialValues = { name: "", number: "" };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name
        </label>
        <Field type="text" name="name" className={css.field} />
        <ErrorMessage name="name" component="span" className={css.error} />

        <label htmlFor="number" className={css.label}>
          Number
        </label>
        <Field type="text" name="number" className={css.field} />
        <ErrorMessage name="number" component="span" className={css.error} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
