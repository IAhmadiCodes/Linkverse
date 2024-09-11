import React from "react";
import classNames from "classnames";

export default function InputField({
  name,
  type,
  placeholder,
  value,
  onChange,
  ...rest
}) {
  const classes = classNames(
    rest.className,
    "w-full p-3 my-1 font-normal border rounded-md outline-none bg-gray-50 focus-within:border-gray-300"
  );

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classes}
    />
  );
}
