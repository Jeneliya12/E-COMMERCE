import React from "react";

const CustomInput = ({
  type,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  className,
  error,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`${className} ${error ? "border-red-500" : ""}`}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default CustomInput;
