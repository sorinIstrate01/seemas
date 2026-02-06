"use client";
import InputWrapper from "@/components/custom-ui/input-wrapper";
import { PhoneInput } from "@/components/ui/phone-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";

const Form = ({
  onSubmit,
  isLoading,
}: {
  onSubmit: (data: any) => void;
  isLoading: boolean;
}) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValues: {
      firstName: null,
      lastName: null,
      email: null,
      companyName: null,
      jobTitle: null,
      phone: undefined,
      message: null,
    },
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-6 md:gap-8"
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-4 w-full">
          <InputWrapper
            labelProps={{ children: "First Name" }}
            className="flex-1"
          >
            <Input
              type="text"
              {...register("firstName", {
                required: { value: true, message: "First name is required" },
              })}
              placeholder="First"
              aria-invalid={!!errors.firstName}
            />
          </InputWrapper>
          <InputWrapper
            labelProps={{ children: "Last Name" }}
            className="flex-1"
          >
            <Input
              type="text"
              {...register("lastName", { required: true })}
              placeholder="Last"
              aria-invalid={!!errors.lastName}
            />
          </InputWrapper>
        </div>
        <InputWrapper
          labelProps={{ children: "Company email" }}
          className="w-full"
        >
          <Input
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Your work email"
            className=""
            aria-invalid={!!errors.email}
          />
        </InputWrapper>

        <div className="flex gap-4 w-full">
          <InputWrapper
            labelProps={{ children: "Company name" }}
            className="flex-1"
          >
            <Input
              type="text"
              {...register("companyName", {
                required: { value: true, message: "Company name is required" },
              })}
              placeholder="Your company"
              aria-invalid={!!errors.companyName}
            />
          </InputWrapper>
          <InputWrapper
            labelProps={{ children: "Job Title" }}
            className="flex-1"
          >
            <Input
              type="text"
              {...register("jobTitle")}
              placeholder="Your role"
              aria-invalid={!!errors.jobTitle}
            />
          </InputWrapper>
        </div>

        <Controller
          control={control}
          name="phone"
          rules={{
            required: false,
            validate: (value) => {
              if (!value) return true;
              const isValid = isValidPhoneNumber(value);
              if (!isValid) return "Invalid phone number";
              return true;
            },
          }}
          render={({ field }) => {
            return (
              <InputWrapper
                labelProps={{ children: "Phone Number" }}
                className="w-full"
                isOptional
              >
                <PhoneInput
                  placeholder="Enter a phone number"
                  {...field}
                  defaultCountry="US"
                  aria-invalid={!!errors.phone}
                />
              </InputWrapper>
            );
          }}
        />
        <InputWrapper
          labelProps={{ children: "Message" }}
          className="w-full"
          isOptional
        >
          <Textarea
            {...register("message")}
            placeholder="What would you like to talk about?"
          />
        </InputWrapper>
      </div>

      <Button type="submit" size={"L"} disabled={!isValid || isLoading}>
        {isLoading ? "Booking..." : "Book a Demo"}
      </Button>
    </form>
  );
};
export default Form;
