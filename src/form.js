/** @format */

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./css/formdata.css";

const FormData = () => {
  const initialValues = {
    email: "",
    fullName: "",
    address: "",
  };

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const validation = (formData) => {
    const errors = {};

    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!formData.email.includes("@")) {
      errors.email = "Must contain an @ symbol.";
    }

    if (!formData.fullName) {
      errors.fullName = "Full name is required.";
    } else if (formData.fullName.length < 2) {
      errors.fullName = "Must be at least 2 characters.";
    } else if (formData.fullName.length > 15) {
      errors.fullName = "Must be less than 15 characters";
    }

    if (!formData.address) {
      errors.address = "Address is required.";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={validation}
    >
      <Form className="form-container">
        <div className="form-control">
          <label for="email">Email:</label>
          <Field name="email" id="email"></Field>
          <div className="error">
            <ErrorMessage name="email" />
          </div>
        </div>
        <div className="form-control">
          <label for="fullName">Full Name:</label>
          <Field name="fullName" id="fullName"></Field>
          <div className="error">
            <ErrorMessage name="fullName" />
          </div>
        </div>
        <div className="form-control">
          <label for="address">Address:</label>
          <Field name="address" id="address"></Field>
          <div className="error">
            <ErrorMessage name="address" />
          </div>
        </div>
        <div className="btn-wrap">
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormData;
