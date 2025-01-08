"use client";
import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button, Label, LogoIcon } from "@/shared/components/ui";
import css from "./login-page.module.scss";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/shared/store/store";
import { apiLoginUser } from "@/shared/store/user/operations";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Введіть коректний емейл")
    .required("Обов'язкове поле"),
  password: Yup.string()
    .min(8, "Мінімум 8 символів")
    .max(50, "Максимум 50 символів")
    .required("Обов'язкове поле"),
});

interface Credentials {
  email: string;
  password: string;
}

const initialValues: Credentials = {
  email: "",
  password: "",
};
interface LoginFormProps {
  className?: string;
}
export const LoginForm = ({}: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, currentUser } = useAppSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (currentUser) {
      router.replace("/");
    }
  }, [currentUser, router]);

  const handleSubmit = (
    values: Credentials,
    actions: FormikHelpers<Credentials>
  ) => {
    dispatch(
      apiLoginUser({
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  return (
    <>
      {isLoading && <Loader2 className="animate-spin mx-auto my-5" size={40} />}
      {!isLoading && (
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={Schema}
        >
          <Form className={css.form}>
            <div className={css.titleWrapper}>
              <h2 className={css.title}>Вхід</h2>
              <LogoIcon className={css.logo} size={200} />
            </div>

            <Label className={css.labelCase}>
              <span className={css.label}>Пошта</span>
              <Field type="email" name="email" className={css.input} />
              <ErrorMessage
                name="email"
                component="span"
                className={css.err}
              ></ErrorMessage>
            </Label>
            <Label className={css.labelCase}>
              <span className={css.label}>Пароль</span>
              <Field type="password" name="password" className={css.input} />
              <ErrorMessage
                name="password"
                component="span"
                className={css.err}
              ></ErrorMessage>
            </Label>
            <Button
              type="submit"
              className="block rounded-xl bg-tertiary mb-2 font-bold text-lg text-background cursor-pointer hover:bg-secondary active:translate-y-[2px]"
            >
              Увійти
            </Button>
            <Link
              href={process.env.NEXT_PUBLIC_API_URL + "auth/google"}
              className="block p-2 mx-auto rounded-xl bg-red-500 mb-2 font-bold text-sm text-text cursor-pointer hover:bg-red-600 active:translate-y-[2px]"
            >
              Увійти через Google
            </Link>

            {currentUser && currentUser?.fullname && (
              <p className="text-lg font-bold text-secondary text-center">
                Вітаємо, {currentUser.fullname}!
              </p>
            )}
            <Link href="/reset" className={css.hint + " mb-2"}>
              Забули пароль?
            </Link>
            <Link href="/register" className={css.hint}>
              Ще не маєте облікового запису?
            </Link>
          </Form>
        </Formik>
      )}
    </>
  );
};
