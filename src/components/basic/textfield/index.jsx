export default function TextField({
  label,
  type,
  placeholder,
  onChange,
  value,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={type}>{label}</label>

      <input
        value={value}
        onChange={onChange}
        className="py-5 px-7 bg-white text-black"
        type={type}
        name={type}
        id={type}
        placeholder={placeholder}
      />
    </div>
  );
}
