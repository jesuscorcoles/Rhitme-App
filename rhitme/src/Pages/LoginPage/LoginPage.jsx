// import React, { useContext } from 'react'
// import { useForm } from "react-hook-form";
// import { Link } from 'react-router-dom';
// import { JwtContext } from '../../shared/contexts/JwtContext';
// import { API } from "../../shared/services/api";
// import './LoginPage.scss';


// export default function LoginPage () {
//     const { register, handleSubmit } = useForm();
//     const { setJwt } = useContext(JwtContext);

//     const onSubmit = formData => {
//         API.post('users/login', formData).then(res => {
//             localStorage.setItem('token', res.data.token)
//             localStorage.setItem('user', JSON.stringify(res.data.user))
//             setJwt(true);
//         })
//     }

//     return (
//         <div className='generalLogin'>

//             <div className='downGenLogin'>

//                 <div className='inputsBox'>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     {/* register your input into the hook by invoking the "register" function */}

//                     <div className='loginImput'>

//                         <div className='title'>
//                             <label htmlFor="email">Email</label>
//                         </div>
                        
//                         <input className='imp'  id="email" defaultValue="alberto@upgrade.com"
//                         {...register("email",{ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
//                         {/* include validation with required or other standard HTML validation rules */}
//                     </div>

//                     <div className='loginImput'>
//                         <div className='title'>
//                             <label htmlFor="password">Password</label>
//                         </div>

//                         <input className='imp'  id="password" type="password" defaultValue={'Fuenla123'}
//                         {...register("password",{
//                             required: true,
//                                 pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
//                         })}/> 
//                         {/* errors will return when field validation fails  */}
//                         {/*{errors.exampleRequired && <span>This field is required</span>}*/}
//                     </div>

//                     <div>
//                     <Link to="/"><input className='botonLog' type="submit" value="Login"/></Link>
//                     </div>

//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { JwtContext } from '../../shared/contexts/JwtContext';
import { API } from "../../shared/services/api";
import './LoginPage.scss';

export default function LoginPage () {
    
    const { register, handleSubmit } = useForm();
    const { setJwt } = useContext(JwtContext);
    const onSubmit = formData => {
        API.post('users/login', formData).then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            window.location.href="/"
            setJwt(true);
        })
    }
    return (

    <div className='generalLogin'>
        <div className='downGenLogin'>
            <div className='inputsBox'>

                <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}

                <div className='loginImput'>

                    <div className='title'>
                        <label htmlFor="email">Email</label>
                    </div>


                    <input className='imp'  id="email" defaultValue="alberto@upgrade.com"
                        {...register("email",{ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
                        {/* include validation with required or other standard HTML validation rules */}

                </div>
                <div className='loginImput'>

                    <div className='title'>
                    <label htmlFor="password">Password</label>
                    </div>


                    <input className='imp'  id="password" type="password" defaultValue={'Fuenla123'}
                        {...register("password",{
                        required: true,
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                        })}/> {/* errors will return when field validation fails  */}
                    {/*{errors.exampleRequired && <span>This field is required</span>}*/}

                </div>

                <div>
                <input className='botonLog' type="submit" value="Login"/>
                </div>
                <div className='register'>
                    <Link to="/registerpage"><p>o puedes registrarte aquí</p></Link>
                </div>

            </form>
        </div>
        </div>
    </div>
    )
}