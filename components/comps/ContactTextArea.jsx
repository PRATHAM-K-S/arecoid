import { Atkinson_Hyperlegible } from "next/font/google";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ContactTextArea({
  label,
  name,
  placeholder,
  register,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className={`${atkinsonHyperlegible.className} text-sm leading-5 text-arecoidBrown`}
      >
        {label}
      </label>
      <textarea
        {...register(name)}
        name={name}
        rows={5}
        placeholder={placeholder}
        className={`${atkinsonHyperlegible.className} text-sm leading-5  border border-arecoidBrown p-3 rounded-lg outline-arecoidBrown text-arecoidBrown`}
      />
    </div>
  );
}
