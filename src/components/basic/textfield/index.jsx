import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { GoEyeClosed } from "react-icons/go";

export default function TextField({
  label,
  name = "",
  type,
  placeholder,
  onChange,
  value,
}) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={type}>{label}</label>

      {type !== "password" ? (
        <input
          value={value}
          onChange={onChange}
          className="py-5 px-7 bg-white text-black"
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
        />
      ) : (
        <div className="h-16 bg-white flex justify-between items-center">
          <input
            value={value}
            onChange={onChange}
            className="py-3 px-7 text-black h-full w-[80%] outline-none"
            type={showPassword ? "text" : "password"}
            name={name}
            id={name}
            placeholder={placeholder}
          />
          <span
            onClick={toggleShowPassword}
            className="text-gray-400 w-[20%] flex items-center justify-center cursor-pointer"
          >
            {showPassword ? <GoEyeClosed size={25} /> : <FiEye size={25} />}
          </span>
        </div>
      )}
    </div>
  );
}
