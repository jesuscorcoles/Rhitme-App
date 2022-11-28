import React from 'react'
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";

export default function RegisterPage () {
    const { register, handleSubmit } = useForm();

    // const user = {
    //     name: 'Abel',
    //     email: 'contacto@abelcabezaroman.com',
    //     password: 'ABCedf123'
    // }

    const onSubmit = formData => {
        API.post('users/register', formData).then(res => {
            console.log('Register user',);
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="name">Nombre</label>
            <input id="name" defaultValue=""
                   {...register("name", { required: true })}/>

            <label htmlFor="surname">Apellido</label>
            <input id="surname" defaultValue=""
                   {...register("surname", { required: true })}/>

            {/*<input name="role" id="role" defaultValue="admin"*/}
            {/*       ref={register({ required: true })}/>*/}

            <label htmlFor="email">Email</label>
            <input id="email" defaultValue=""
                   {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>

            {/* <label htmlFor="surname">Surname</label>
            <input name="surname" id="surname" defaultValue="abelcabezaroman"
                   ref={register({ required: true, minLength: 4 })}/> */}

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="password">Contraseña</label>
            <input name="password" id="password" type="password" defaultValue=""
                   {...register("password", {
                       required: true,
                       pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                   })}/>
            {/* errors will return when field validation fails  */}
            {/*{errors.exampleRequired && <span>This field is required</span>}*/}

            <input type="submit" value="Register"/>
        </form>
    )
}
