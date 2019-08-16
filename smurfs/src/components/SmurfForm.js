import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const Basic = ({ touched, errors, onFire }) => {
  return (
    <Form className={onFire ? 'fire' : ''}>
      <div>
        <Field type='text' name='name' placeholder='name' />
        {touched.name && errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <Field type='text' name='age' placeholder='age' />
        {touched.age && errors.age && <p>{errors.age}</p>}
      </div>
      <div>
        <Field type='text' name='height' placeholder='height' />
        {touched.height && errors.height && <p>{errors.height}</p>}
      </div>
      <button type='submit'>submit</button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues(props) {
    return {
      name: '',
      age: '',
      height: '',
      subFun: props.subFun,
      onFire: props.onFire
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup
      .string()
      .required("name can't be empty"),
    age: Yup
      .number()
      .moreThan(0, "the smurf must exist")
      .required(),
    height: Yup
      .number()
      .moreThan(0, "the smurf must exist")
      .required(),
  }),

  handleSubmit(vals, { resetForm }) {
    vals.subFun({name: vals.name, age: vals.age, height: vals.height});
    resetForm();
  }
})(Basic);