"use client";

import { League_Spartan, Atkinson_Hyperlegible } from "next/font/google";
import { ContactInput, ContactTextArea } from "..";
import { useState } from "react";

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
  const [formData, setFormData] = useState({
    full_name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Thank you! Your inquiry has been sent to sales@arecoid.in");
        setFormData({
          full_name: "",
          company: "",
          country: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Error: " + result.error.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
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
      <form onSubmit={handleSubmit} className=" xl:w-1/2 flex flex-col gap-4">
        <ContactInput
          label="Full Name*"
          name="full_name"
          placeholder={"e.g., Mike Shinoda"}
          value={formData.full_name}
          formData={formData}
          setFormData={setFormData}
        />
        <ContactInput
          label="Company Name*"
          name="company"
          placeholder={"e.g., Acme Corp"}
          value={formData.company}
          formData={formData}
          setFormData={setFormData}
        />
        <ContactInput
          label="Country/Region*"
          name="country"
          placeholder={"e.g., United States"}
          value={formData.country}
          formData={formData}
          setFormData={setFormData}
        />
        <ContactInput
          label="Email*"
          name="email"
          placeholder={"e.g., name@company.com"}
          value={formData.email}
          formData={formData}
          setFormData={setFormData}
        />
        <ContactInput
          label="Phone Number"
          name="phone"
          placeholder={"e.g., +44 1234 567890"}
          value={formData.phone}
          formData={formData}
          setFormData={setFormData}
          required={false}
        />
        <ContactTextArea
          label={"Message"}
          name={"message"}
          value={formData.message}
          placeholder={"Tell us about your requirements..."}
          formData={formData}
          setFormData={setFormData}
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
