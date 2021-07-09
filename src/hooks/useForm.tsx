import { useState } from "react"

type FormInputElements = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export const useForm = (initialState: any = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const reset = () => setFormValues(initialState);

  const handleInputChange = ( target: FormInputElements ) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  return [ formValues, handleInputChange, reset, setFormValues]

}