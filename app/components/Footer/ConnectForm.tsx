"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ConnectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    const templateParams = {
      your_name: data.name,
      reply_to: data.email,
    };

    // You can connect this to an API or show a success message here
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[18px] text-[#FAFAFA] font-semibold">Connect:</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full border px-3 py-2 rounded-md bg-[#242424]"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-600 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w.-]+@[\w.-]+\.\w+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full border px-3 py-2 rounded-md bg-[#242424]"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium">Message:</label>
          <textarea
            {...register("message")}
            className="w-full border px-3 h-[100px] py-2 rounded-md bg-[#242424]"
            placeholder="Message"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Connect
        </button>
      </form>
    </div>
  );
};

export default ConnectForm;
