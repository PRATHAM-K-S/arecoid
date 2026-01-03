import { Atkinson_Hyperlegible } from "next/font/google";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ContactInput({
  label,
  name,
  placeholder,
  type = "text",
  required = true,
  register,
  errors,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className={`${atkinsonHyperlegible.className} text-sm leading-5 text-arecoidBrown`}
      >
        {label}
      </label>
      <input
        // register handles value and onChange internally
        {...register(name, { required: required })}
        placeholder={placeholder}
        type={type}
        className={`${atkinsonHyperlegible.className} text-sm leading-5 border border-arecoidBrown p-3 py-4 rounded-lg outline-arecoidBrown outline-none focus:border-2 text-arecoidBrown ${errors[name] ? "border-red-500" : ""}`}
      />
      {errors[name] && (
        <span
          className={`${atkinsonHyperlegible.className}  text-red-500 text-xs italic`}
        >
          {label} is required
        </span>
      )}
    </div>
  );
}
