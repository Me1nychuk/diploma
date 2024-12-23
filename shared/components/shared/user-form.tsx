"use client";
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { Button, Label, LogoIcon } from "../ui";
import css from "./auth/login-page.module.scss";
import { Loader2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/shared/store/store";
import { apiUpdateCurrentUser } from "@/shared/store/user/operations";

export interface UserData {
  fullname: string | undefined;
  phone: string | undefined;
  bio: string | undefined;
}

const initialValues: UserData = {
  fullname: "",
  phone: "",
  bio: "",
};

interface UserFormProps {
  className?: string;
}
const Schema = Yup.object().shape({
  fullname: Yup.string()
    .min(3, "Мінімум 3 символи")
    .max(50, "Максимум 20 символів"),
  phone: Yup.string().matches(
    /^\+380\d{9}$/,
    "Введіть коректний номер телефону"
  ),
  bio: Yup.string().max(200, "Максимум 200 символів"),
});

const UserForm: React.FC<UserFormProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { isLoading, currentUser } = useAppSelector((state) => state.user);
  const handleSubmit = (values: UserData, actions: FormikHelpers<UserData>) => {
    console.log(values);
    if (values.bio || values.fullname || values.phone) {
      dispatch(
        apiUpdateCurrentUser({
          newData: {
            bio: values.bio ? values.bio : undefined,
            fullname: values.fullname ? values.fullname : undefined,
            phone: values.phone ? values.phone : undefined,
          },
          id: currentUser!.id,
        })
      );
    }
    actions.resetForm();
  };
  return (
    <>
      {isLoading && <Loader2 className="animate-spin mx-auto my-5" size={40} />}
      {!isLoading && (
        <Formik
          initialValues={initialValues}
          validationSchema={Schema}
          onSubmit={handleSubmit}
        >
          <Form className={css.form}>
            <div className={css.titleWrapper}>
              <h2 className={css.title}>Оновити профіль</h2>
              <LogoIcon className={css.logo} size={200} />
            </div>
            <Label className={css.labelCase}>
              <span>Повне ім'я</span>
              <Field type="text" name="fullname" className={css.input} />
              <ErrorMessage
                name="fullname"
                component="span"
                className={css.err}
              ></ErrorMessage>
            </Label>
            <Label className={css.labelCase}>
              <span>Телефон</span>
              <Field type="tel" name="phone" className={css.input} />
              <ErrorMessage
                name="phone"
                component="span"
                className={css.err}
              ></ErrorMessage>
            </Label>
            <Label className={css.labelCase}>
              <span>Про себе</span>
              <Field type="textarea" name="bio" className={css.input} />
              <ErrorMessage
                name="bio"
                component="span"
                className={css.err}
              ></ErrorMessage>
            </Label>
            <Button
              type="submit"
              className="block  rounded-xl bg-tertiary mb-2 font-bold text-lg text-background cursor-pointer hover:bg-secondary active:translate-y-[2px]"
            >
              Оновити
            </Button>
          </Form>
        </Formik>
      )}
    </>
  );
};

export { UserForm };
