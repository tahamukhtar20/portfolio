"use client";
import { Card } from "@/app/components/card";
import useSWR, { mutate } from "swr";
import { LogOut } from "@/app/components/clientButtons";
import { useState } from "react";
import { toast } from "react-toastify";

export function GuestbookForm() {
  const [formData, setFormData] = useState({
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
    try {
      setFormStatus({
        isSubmitting: true,
        hasSubmitted: false,
      });
      const response = await fetch("/api/signature", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setFormData({
        message: "",
      });
      setFormStatus({
        isSubmitting: false,
        hasSubmitted: true,
      });
      await mutate("/api/signature");
    } catch (error) {
      toast.error("An Error Occurred! Please try again later.");
    }
  };
  return (
    <form className="pb-4 flex md:flex-row flex-col" onSubmit={handleSubmit}>
      <input
        className="border-b-2 border-gray-500 p-2 bg-transparent focus:outline-none focus:border-gray-700"
        type={"text"}
        name={"message"}
        required={true}
        value={formData.message}
        onChange={handleInputChange}
      />
      <div className="flex">
        <button className="ml-1 mt-4" type={"submit"}>
          <Card>
            <div className="w-full h-full flex flex-row p-2 px-4">
              <p className="">Sign</p>
              {formStatus.isSubmitting && <p className="ml-3 loading"></p>}
            </div>
          </Card>
        </button>
        <LogOut />
      </div>
    </form>
  );
}
