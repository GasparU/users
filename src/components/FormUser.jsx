import { useEffect } from "react";
import { useForm } from "react-hook-form";
import defaultValues from "../utils/defaultValues";
import "./styles/formUser.css"
import Swal from 'sweetalert2'


const FormUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormClose, formClose }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        reset(updateInfo);
    }, [updateInfo])
    const Submit = async (data) => {
        if (updateInfo) {
            // update
            console.log(updateInfo)
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
            handleExit()
        } else {
            // Create
            await Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: `Usuario ${data.firstname} ${data.lastname} creado correctamente`,
                showConfirmButton: false,
                timer: 2500
            })
            console.log(data)
            createNewUser(data)
            setFormClose(true)
        }
        reset(defaultValues)
    }
    const handleExit = () => {
        setFormClose(true)
    }

    return (
        <div className={`form-container ${formClose ? "close" : ""}`}>
            <form className="form" onSubmit={handleSubmit(Submit)}>
                <h3 className="form__title">{updateInfo ? 'Update User' : 'Create New User'}</h3>
                <span onClick={handleExit} className="form__exit">x</span>
                <div className="form__item">
                    <label className="form__label" htmlFor="email">Email</label>
                    <input className="form__input" {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} type="email" id="email" />
                    {errors.email?.type === 'required' && <p className="form__errors_message" role="alert">el campo "Email" es obligatorio</p>}
                </div>
                <div className="form__item">
                    <label className="form__label" htmlFor="password">Password</label>
                    <input className="form__input"  {...register("password", { required: true })} aria-invalid={errors.password ? "true" : "false"} type="password" id="password" />
                    {errors.password?.type === 'required' && <p className="form__errors_message" role="alert">el campo "Contraseña" es Obligatorio</p>}
                </div>
                <div className="form__item">
                    <label className="form__label" htmlFor="firstname">First Name</label>
                    <input className="form__input"  {...register("firstname", { required: true })} aria-invalid={errors.firstname ? "true" : "false"} type="text" id="firstname" />
                    {errors.firstname?.type === 'required' && <p className="form__errors_message" role="alert">el campo "First Name" es Obligatorio</p>}
                </div>
                <div className="form__item">
                    <label className="form__label" htmlFor="lastname">Last Name</label>
                    <input className="form__input" {...register("lastname", { required: true })} aria-invalid={errors.lastname ? "true" : "false"} type="text" id="lastname" />
                    {errors.lastname?.type === 'required' && <p className="form__errors_message" role="alert">el campo "Last Name" es Obligatorio</p>}
                </div>
                <div className="form__item">
                    <label className="form__label" htmlFor="birthday">Birthday</label>
                    <input className="form__input"  {...register("birthday", { required: true })} aria-invalid={errors.birthday ? "true" : "false"} type="date" id="birthday" />
                    {errors.birthday?.type === 'required' && <p className="form__errors_message" role="alert">el campo "Birthay" es Obligatorio</p>}
                </div>
                <div className={`form__container__btn ${formClose ? "close" : ""}`}>
                    {/* <button onClick={handleExit} className="form__btn__close">Close</button> */}
                    <button className={`form__btn__create`}>{updateInfo ? "update" : "create"}</button>
                </div>
            </form>
        </div>

    )
}

export default FormUser