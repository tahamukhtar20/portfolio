"use client";
import { Card } from "@/app/components/card";
import { useState } from "react";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    hasSubmitted: false,
  });
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setFormStatus({
      isSubmitting: true,
      hasSubmitted: false,
    });
    const emailRes = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (emailRes.status !== 200) {
      toast.error("An Error Occurred! Please try again later.");
    } else {
      toast.success("Message Sent Successfully!");
    }
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setFormStatus({
        isSubmitting: false,
        hasSubmitted: true,
      });
    }, 1000);
  };
  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <fieldset disabled={formStatus.isSubmitting}>
        <div className="flex flex-col justify-center w-full gap-4 font-normal tracking-tighter">
          <div className="flex flex-col justify-center items-center gap-2">
            <label className="text-gray-100 text-sm text-start w-full">
              Name
            </label>
            <input
              className="bg-gray-800 rounded w-full p-2"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <label className="text-gray-100 text-sm text-start w-full">
              Email
            </label>
            <input
              className="bg-gray-800 rounded text-start w-full p-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <label className="text-gray-100 text-sm text-start w-full">
              Message
            </label>
            <textarea
              className="bg-gray-800 rounded text-start min-h-[12rem] w-full p-2"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col items-end">
            <Card>
              <button
                className="text-start p-2 px-5 flex justify-center items-center flex-row"
                type="submit"
              >
                Send
                {formStatus.isSubmitting && (
                  <span className="ml-3 loading"></span>
                )}
              </button>
            </Card>
          </div>
        </div>
      </fieldset>
    </form>
  );
};
