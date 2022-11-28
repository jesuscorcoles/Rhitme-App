import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
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

        <div className='generalLogin'>
            <div className='downGenLogin downGenLogin--reg'>
                <div className='inputsBox'>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* register your input into the hook by invoking the "register" function */}

                    <div className='loginImput'>

                        <div className='title'>
                        <label htmlFor="name">Nombre</label>
                        </div>

                        <input className='imp' id="name" defaultValue=""
                            {...register("name", { required: true })}/>
                    </div>
                    <div className='loginImput'>

                        <div className='title'>
                        <label htmlFor="surname">Apellido</label>
                        </div>


                        <input className='imp' id="surname" defaultValue=""
                            {...register("surname", { required: true })}/>
                    </div>
                            {/*<input name="role" id="role" defaultValue="admin"*/}
                            {/*       ref={register({ required: true })}/>*/}
                    
                    <div className='loginImput'>

                        <div className='title'>
                        <label htmlFor="email">Email</label>
                        </div>


                        <input className='imp' id="email" defaultValue=""
                            {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>

                        {/* <label htmlFor="surname">Surname</label>
                        <input name="surname" id="surname" defaultValue="abelcabezaroman"
                            ref={register({ required: true, minLength: 4 })}/> */}

                        {/* include validation with required or other standard HTML validation rules */}
                    </div>

                    <div className='loginImput'>

                        <div className='title'>
                        <label htmlFor="password">Contraseña</label>
                        </div>


                        <input className='imp' name="password" id="password" type="password" defaultValue=""
                            {...register("password", {
                                required: true,
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                            })}/>
                        {/* errors will return when field validation fails  */}
                        {/*{errors.exampleRequired && <span>This field is required</span>}*/}
                    </div>

                    <div>
                        <input className='botonLog' type="submit" value="Register"/>
                    </div>
                    <div className='register'>
                    <Link to="/loginpage"><p>Login aquí</p></Link>
                </div>
                
                    </form>
                </div>
            </div>
        </div>
    )
}
