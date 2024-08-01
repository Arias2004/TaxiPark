"use client";

import { useContext } from "react";
import { FormContext } from "..";

interface InputProps {
  type?: "text" | "password";
  name: string;
  label: string;
  placeholder?: string;
}

export function Input({ type, name, label, placeholder }: InputProps) {
  const { formValues, setFormValues } = useContext(FormContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="input-container">
      <input className="input w-[350px] text-white placeholder:text-xs  focus:placeholder:text-transparent"
      type={type}
      name={name}
      id={name}
      value={formValues[name] || ''}
      onChange={handleChange}
      placeholder={placeholder}/>
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="topline"></div>
      <div className="underline"></div>
    </div>
  );
}
