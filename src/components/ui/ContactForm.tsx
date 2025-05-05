import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center w-full max-w-[507px]"
    >
      <input
        {...register("name")}
        placeholder="Name"
        className="bg-white w-full text-base text-[rgba(1,44,81,1)] font-normal mt-7 px-4 py-2"
      />
      {errors.name && (
        <span className="text-red-500 text-sm">{errors.name.message}</span>
      )}

      <input
        {...register("email")}
        placeholder="Email"
        className="bg-white w-full text-base text-[rgba(1,44,81,1)] font-normal mt-4 px-4 py-2"
      />
      {errors.email && (
        <span className="text-red-500 text-sm">{errors.email.message}</span>
      )}

      <input
        {...register("subject")}
        placeholder="Subject"
        className="bg-white w-full text-base text-[rgba(1,44,81,1)] font-normal mt-4 px-4 py-2"
      />
      {errors.subject && (
        <span className="text-red-500 text-sm">{errors.subject.message}</span>
      )}

      <textarea
        {...register("message")}
        placeholder="Message"
        className="bg-white w-full text-base text-[rgba(1,44,81,1)] font-normal mt-4 px-4 pt-2 pb-[139px] max-md:pb-[110px]"
      />
      {errors.message && (
        <span className="text-red-500 text-sm">{errors.message.message}</span>
      )}

      <button
        type="submit"
        className="bg-[rgba(205,185,137,1)] w-[187px] max-w-full text-base text-[rgba(1,44,81,1)] font-normal mt-4 px-11 py-[9px] rounded-[30px] max-md:px-5"
      >
        Send Message
      </button>
    </form>
  );
};
