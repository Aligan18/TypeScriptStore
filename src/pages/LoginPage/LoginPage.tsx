import React  , {FC} from 'react'
import classes from './LoginPage.module.scss'
import { useForm, SubmitHandler, } from "react-hook-form";

import { Link, useNavigate } from 'react-router-dom';
import { RoutersPathEnum } from '../../router/router';
import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase/firebase'
import useActions from '../../нooks/useActions';

type Inputs = {
    email: string,
    password: string,
    
  };
  
const LoginPage :FC = () => {
    const navigate = useNavigate()  
    const {AddUser }=useActions()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data =>{
      signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 

        const user = userCredential.user;
        AddUser({email :user.email, id: user.uid})
        navigate(RoutersPathEnum.HOME)
        console.log('user',user)
        return user 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorMessage
      });
        console.log(data);
    };
  
    console.log(watch("email")) // watch input value by passing the name of it
  


  return (

    <div className={classes.wrapper}>
        <div className={classes.box}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <p>LOGIN</p>
                        <hr></hr>
                       <div className={classes.inputs_box}>
                        <p className={classes.title}>Email</p>
                        <input className={classes.input} {...register("email", { required: true , })} />
                         {errors.email && <span className={classes.error}>This field is required</span>}


                         <p className={classes.title}>Password</p>
                        <input className={classes.input} {...register("password", { required: true, minLength:8   , })} />
                        {errors.password && <span className={classes.error}>This field is required</span>}
                        </div>
                        <div className = {classes.button }>
                            <button className={classes.button}  type="submit" >Login</button>
                            <Link to={RoutersPathEnum.REGISTRATION}> SignUp</Link>
                        </div>
                </form> 

        </div>

    </div>
  )
}

export default LoginPage