"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button, Label, LogoIcon } from "@/shared/components/ui";
import css from "./login-page.module.scss";
import Link from "next/link";

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
  const handleSubmit = (
    values: Credentials,
    actions: FormikHelpers<Credentials>
  ) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <>
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
          <Button
            type="button"
            className="block p-2 mx-auto rounded-xl bg-red-500 mb-2 font-bold text-sm text-text cursor-pointer hover:bg-red-600 active:translate-y-[2px]"
          >
            Увійти через Google
          </Button>
          <Link href="/register" className={css.hint}>
            Ще не маєте облікового запису?
          </Link>
        </Form>
      </Formik>
    </>
  );
};
