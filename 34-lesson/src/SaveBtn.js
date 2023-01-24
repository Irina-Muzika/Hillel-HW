import React from "react";
import {useFormikContext} from "formik";

export default function SaveButton() {
  const formik = useFormikContext();

  return <button  disabled={!formik.isValid} >Save</button>;
}