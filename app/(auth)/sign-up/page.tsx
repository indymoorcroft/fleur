"use client";

import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validation";

const SignUp = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{ firstName: "", lastName: "", email: "", password: "" }}
    // onSubmit={() => {}}
  />
);

export default SignUp;
