import { string, object } from "yup";

const ContactSchema = object({
  name: string().min(3, "Too short").max(50, "Too long").required("Required"),
  number: string().matches(/^\d+$/, "Phone number must contain only digits").min(3, "Too short").max(50, "Too long").required("Required")
})

export { ContactSchema };