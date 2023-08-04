import React from "react";

const TextInput = ({
  id,
  title,
  input,
  textarea,
  type,
  dropdown,
  data,
  setItem,
  value,
  check,
  setCheck,
  placeholder,
  className,
  required,
  password,
  readOnly,
  file,
  minLength,
}) => {
  return (
    <div className={`${check ? "flex gap-2 items-center" : "block"} my-2`}>
      <label className='text-black text-sm block font-medium' htmlFor={id}>
        {title}
      </label>
      {dropdown && (
        <select
          className={`w-full rounded-md block p-4 py-4 my-2 text-sm ${className}`}
          name={id}
          id=''
          onChange={setItem}
          value={value}
          required={required}
        >
          {data.map((item, id) => {
            return (
              <option key={id} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default TextInput;
