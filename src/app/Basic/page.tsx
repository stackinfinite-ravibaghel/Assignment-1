// "use client"
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Basic = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password must be 16 characters or less")
      .required("Required"),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-6 text-center">Sign In</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>

                < Field
                  type="email"
                  name="email"
                  id="email"
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />

              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>

                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1c " />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Basic;

