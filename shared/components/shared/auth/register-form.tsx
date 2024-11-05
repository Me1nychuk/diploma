"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button, Label, LogoIcon } from "@/shared/components/ui";
import css from "./login-page.module.scss";
import Link from "next/link";

const Schema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Мінімум 2 символи")
    .max(50, "Максимум 50 символів")
    .required("Обов'язкове поле"),
  nickname: Yup.string()
    .min(3, "Мінімум 3 символи")
    .max(20, "Максимум 20 символів")
    .required("Обов'язкове поле"),
  email: Yup.string()
    .email("Введіть коректний емейл")
    .required("Обов'язкове поле"),
  password: Yup.string()
    .min(8, "Мінімум 8 символів")
    .max(50, "Максимум 50 символів")
    .required("Обов'язкове поле"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Паролі мають співпадати")
    .required("Обов'язкове поле"),
});

interface Credentials {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  nickname: string;
}

const initialValues: Credentials = {
  email: "",
  password: "",
  confirmPassword: "",
  fullName: "",
  nickname: "",
};
interface RegisterFormProps {
  className?: string;
}
export const RegisterForm = ({}: RegisterFormProps) => {
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
            <h2 className={css.title}>Реєстрація</h2>
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
            <span className={css.label}>Повне ім'я</span>
            <Field type="text" name="fullName" className={css.input} />
            <ErrorMessage
              name="fullName"
              component="span"
              className={css.err}
            ></ErrorMessage>
          </Label>
          <Label className={css.labelCase}>
            <span className={css.label}>Нікнейм</span>
            <Field type="text" name="nickname" className={css.input} />
            <ErrorMessage
              name="nickname"
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
          <Label className={css.labelCase}>
            <span className={css.label}>Підтвердіть пароль</span>
            <Field
              type="password"
              name="confirmPassword"
              className={css.input}
            />
            <ErrorMessage
              name="confirmPassword"
              component="span"
              className={css.err}
            ></ErrorMessage>
          </Label>

          <Button
            type="submit"
            className="block rounded-xl bg-tertiary mb-2 font-bold text-lg text-background cursor-pointer hover:bg-secondary active:translate-y-[2px]"
          >
            Зареєструватись
          </Button>
          <Button
            type="button"
            className="block p-2 mx-auto rounded-xl bg-red-500 mb-2 font-bold text-sm text-text cursor-pointer hover:bg-red-600 active:translate-y-[2px]"
          >
            Увійти через Google
          </Button>
          <Link href="/login" className={css.hint}>
            Вже зареєстровані?
          </Link>
        </Form>
      </Formik>
    </>
  );
};
