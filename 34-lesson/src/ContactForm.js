import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Error from './Error';
import styles from './style.module.css';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, 'Must be > 3 characters')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
 email: Yup.string()
    .min(3, 'Must be > 3 characters')
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  phone: Yup.string().max(12, 'Must be 12 characters or less').required('Required'),
});


export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      phone: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik)

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName" className={styles.label_firstName}>First Name</label>
        <input className={styles.input_firstName}
          id="firstName"
          type="text"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <Error value={formik.errors.firstName} />
      </div>
      <div>
        <label htmlFor="email" className={styles.label_email}>email</label>
        <input className={styles.input_email}
          id="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <Error value={formik.errors.email} />
      </div>
      <div>
        <label htmlFor="phone" className={styles.label_phone}>Phone</label>
        <input className={styles.input_phone}
          id="phone"
          type="number"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        <Error value={formik.errors.phone} />
      </div>

      <button disabled={!formik.isValid} className={styles.btn}>Save</button>
    </form>
  );
}


