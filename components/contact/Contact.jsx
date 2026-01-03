"use client";

import { League_Spartan, Atkinson_Hyperlegible } from "next/font/google";
import { ContactInput, ContactTextArea } from "..";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // Send the 'data' from useForm
      });

      if (response.ok) {
        toast.success("Inquiry sent to sales@arecoid.in");
        reset(); // Clears the form fields
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col xl:flex-row gap-8 justify-between">
      <div className="flex flex-col gap-8">
        <h1
          className={`${leagueSpartan.className} text-4xl leading-11 md:text-[44px] md:leading-13 xl:text-[52px] xl:leading-16 font-bold text-arecoidGreen`}
        >
          Contact Us
        </h1>
        <div className="flex flex-col gap-1">
          <p
            className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown `}
          >
            Contact us for export enquiries, bulk orders, and sample requests.
          </p>
          <p
            className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown`}
          >
            We work with importers, distributors, and eco-focused brands
            worldwide.
          </p>
        </div>
        <div
          className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown flex flex-col gap-2`}
        >
          <span>📧Email: sales@arecoid.in</span>
          <span>📍Manufacturing Base: India</span>
          <p
            className={`${atkinsonHyperlegible.className} text-[16px] leading-6 text-arecoidBrown`}
          >
            Arecoid is an export brand of Parashakthi Industries.
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className=" xl:w-1/2 flex flex-col gap-4"
      >
        <ContactInput
          label="Full Name"
          name="full_name"
          placeholder={"e.g., Mike Shinoda"}
          register={register}
          errors={errors}
        />
        <ContactInput
          label="Company Name"
          name="company"
          placeholder={"e.g., Acme Corp"}
          register={register}
          errors={errors}
        />
        <ContactInput
          label="Country/Region"
          name="country"
          placeholder={"e.g., United States"}
          register={register}
          errors={errors}
        />
        <ContactInput
          label="Email"
          name="email"
          placeholder={"e.g., name@company.com"}
          register={register}
          errors={errors}
        />
        <ContactInput
          label="Phone Number"
          name="phone"
          placeholder={"e.g., +44 1234 567890"}
          required={false}
          register={register}
          errors={errors}
        />
        <ContactTextArea
        label={"Message"}
        placeholder={"Write your message here..."}
        name={"message"}
        register={register}
        />
        <button
          disabled={loading}
          className={`${atkinsonHyperlegible.className} flex justify-center gap-4 text-sm leading-5 text-arecoidPrimary bg-arecoidGreen disabled:bg-[#527544] disabled:cursor-not-allowed py-3.5 px-6 rounded-lg mt-3`}
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </section>
  );
}
