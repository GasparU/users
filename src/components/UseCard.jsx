import React from 'react'
import "./styles/userCard.css"
import Swal from 'sweetalert2'

const UseCard = ({ user, setUpdateInfo, deleteUserBiId, setFormClose }) => {

    const handleDelete = () => {

        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Usuario eliminado correctamente',
            showConfirmButton: false,
            timer: 2500
        })

        deleteUserBiId(user.id)
    }
    const handleUpdate = () => {

        setUpdateInfo(user)
        setFormClose(false)

    }
    return (
        <article className={`user`}>
            <h2 className='user__name'>{user.firstname} {user.lastname}</h2>

            <ul className='user__list'>
                <li className='user__item'><span className='user__label'>Email: </span><span className='user__value'>{user.email}</span></li>
                <li className='user__item'><span className='user__label'>Cumpleaños: </span><span className='user__value'>{user.birthday}</span></li>
            </ul>
            <footer className='user__footer'>
                <button className='user__btn user__delete' onClick={handleDelete}><i className='bx bx-trash user__icons'></i></button>
                <button className='user__btn user__update' onClick={handleUpdate}><i className='bx bx-edit-alt user__icons'></i></button>
            </footer>
        </article>
    )
}

export default UseCard