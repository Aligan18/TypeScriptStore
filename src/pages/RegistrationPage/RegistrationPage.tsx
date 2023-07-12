import React, { FC } from "react";
import classes from "./RegistrationPage.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Link, useNavigate, useNavigationType } from "react-router-dom";
import { RoutersPathEnum } from "../../router/router";

type Inputs = {
  email: string;
  password: string;
};

const RegistrationPage: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate(RoutersPathEnum.LOGIN);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage;
      });

    console.log(data);
  };

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div className={classes.wrapper}>
      <div className={classes.box}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h2>REGISTRATION</h2>
          <hr></hr>
          <div className={classes.inputs_box}>
            <p className={classes.title}>Email</p>
            <input
              className={classes.input}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className={classes.error}>This field is required</span>
            )}

            <p className={classes.title}>Password</p>
            <input
              className={classes.input}
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && (
              <span className={classes.error}>This field is required</span>
            )}
          </div>
          <div className={classes.button_wrapper}>
            <button className={classes.button} type="submit">
              Registration
            </button>
            <Link to={RoutersPathEnum.LOGIN}> Login </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
