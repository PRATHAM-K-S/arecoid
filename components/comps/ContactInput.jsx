import { Atkinson_Hyperlegible } from "next/font/google";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ContactInput({
  label,
  name,
  value,
  placeholder,
  type = "text",
  required=true,
  formData,
  setFormData
}) {

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-2">
      <label
        className={`${atkinsonHyperlegible.className} text-sm leading-5 text-arecoidBrown`}
      >
        {label}
      </label>
      <input
        required={required}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        className={`${atkinsonHyperlegible.className} text-sm leading-5  border border-arecoidBrown p-3 py-4  rounded-lg outline-arecoidBrown text-arecoidBrown`}
      />
    </div>
  );
}
