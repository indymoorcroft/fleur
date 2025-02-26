"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import Link from "next/link";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";

interface Props<T extends FieldValues> {
  type: "SIGN_IN" | "SIGN_UP";
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit?: (data: T) => Promise<{ success: boolean; error?: string }>; //remove '?' once onSubmit functionality added
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  const isSignIn = type === "SIGN_IN";

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {};

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-blue-950">
        {isSignIn ? "Welcome back to fleur" : "Create your account"}
      </h1>
      <p className="text-dark-600">
        {isSignIn
          ? "Discover, book, and experience the best events near you"
          : "Sign up to find the best events happening now near you"}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6 w-full"
        >
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    <Input
                      required
                      type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                      {...field}
                      className="w-full min-h-14 border-none text-base font-light placeholder:font-normal text-dark-950 placeholder:text-dark-600 focus-visible:ring-0 focus-visible:shadow-none bg-light-100"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="submit"
            className="bg-primary text-dark-100 hover:bg-primary inline-flex min-h-14 w-full items-center justify-center rounded-md px-6 py-2 font-semibold text-base"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>

      <p className="text-center text-base font-medium">
        {isSignIn ? "New to fleur? " : "Already have an account? "}
        <Link
          href={isSignIn ? "/sign-up" : "/sign-in"}
          className="font-bold text-purple-700"
        >
          {isSignIn ? "Create an account" : "Sign in"}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
