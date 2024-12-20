"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button, Label, LogoIcon } from "@/shared/components/ui";
import css from "./login-page.module.scss";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/shared/store/store";
import { apiRegisterUser } from "@/shared/store/user/operations";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const Schema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Мінімум 2 символи")
    .max(50, "Максимум 50 символів")
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
  isTermsAccepted: Yup.boolean()
    .oneOf([true], "Ви повинні погодитися з умовами")
    .required("Обов'язкове поле"),
});

interface Credentials {
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  isTermsAccepted: boolean;
}

const initialValues: Credentials = {
  email: "",
  password: "",
  confirmPassword: "",
  fullName: "",
  isTermsAccepted: false,
};
interface RegisterFormProps {
  className?: string;
}
export const RegisterForm = ({}: RegisterFormProps) => {
  const dispatch = useAppDispatch();
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const toggleTerms = () => setIsTermsAccepted(!isTermsAccepted);
  const { isLoading, currentUser } = useAppSelector((state) => state.user);
  const router = useRouter();
  if (currentUser) {
    router.replace("/");
  }
  const handleSubmit = (
    values: Credentials,
    actions: FormikHelpers<Credentials>
  ) => {
    dispatch(
      apiRegisterUser({
        fullname: values.fullName,
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
            <Label className={css.labelCase}>
              <div className={css.checkboxblock}>
                <Field
                  type="checkbox"
                  name="isTermsAccepted"
                  onClick={toggleTerms}
                  className={css.input + " " + css.checkbox}
                />
                <span className={css.label}>
                  Ви погоджуєтесь з{" "}
                  <Link href="/policy" className=" underline opacity-80">
                    нашою політикою
                  </Link>
                  ?
                </span>
              </div>
              <ErrorMessage
                name="isTermsAccepted"
                component="span"
                className={css.err}
              ></ErrorMessage>
            </Label>

            <Button
              type="submit"
              disabled={!isTermsAccepted}
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
      )}
    </>
  );
};
