import { useForm, SubmitHandler, } from "react-hook-form";
import React , {FC} from "react"
import classes from "./Forms.module.scss"

type Inputs = {
  shipping: string,
  street: string,
  city: string,
  state: string,
  country: string,
};



interface IForms {
  closeModal:(flag: boolean) => void;

}
const  Forms : FC<IForms> = ({closeModal} ) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data =>{ console.log(data); closeModal(false)};

  console.log(watch("city")) // watch input value by passing the name of it

  return (
    <div className={classes.wrapper}>
        
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                      <div className={classes.cross}>
                        <i onClick={()=>closeModal(false)} className="fa-regular fa-circle-xmark"></i>
                      </div>
                        {/* register your input into the hook by invoking the "register" function */}
                        <p className={classes.title}>Your Name</p>
                        <input className={classes.input}  {...register("shipping" ,{ required: true })} />
                         {/* errors will return when field validation fails  */}
                         {errors.shipping && <span className={classes.error}>This field is required</span>}

                         <p className={classes.title}>Country</p>
                        <input className={classes.input}  {...register("country" ,{ required: true })} />
                         {/* errors will return when field validation fails  */}
                        {errors.country && <span className={classes.error}>This field is required</span>}

                        <p className={classes.title}>City</p>
                        <input className={classes.input}  {...register("city" ,{ required: true })} />
                         {/* errors will return when field validation fails  */}
                         {errors.city && <span className={classes.error}>This field is required</span>}

                        {/* include validation with required or other standard HTML validation rules */}
                        <p className={classes.title}>Street Name</p>
                        <input className={classes.input} {...register("street", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.street && <span className={classes.error}>This field is required</span>}

                    
                        {/* include validation with required or other standard HTML validation rules */}
                        <p className={classes.title}>Phone Number</p>
                        <input className={classes.input} {...register("state", { required: true , minLength: 11, maxLength: 12})} />
                         {/* errors will return when field validation fails  */}
                         {errors.state && <span className={classes.error}>This field is required</span>}
                        
                        <button className={classes.button}  type="submit" >Add Address</button>
                   
                </form>
            
    </div>
  );
}

export default Forms; 