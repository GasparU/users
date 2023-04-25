import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCrud'
import UseCard from './components/UseCard'
import FormUser from './components/FormUser'

function App() {
  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true)
  const { users, getAllUsers, createNewUser, deleteUserBiId, updateUserById } = useUserCrud()
  useEffect(() => {
    getAllUsers()
  }, [])
  const handleOpenForm = () => {
    setFormClose(false)
  }
  return (
    <div className='app'>
      <header className='app__header'>
        <h1 className='app__title'>App Users</h1>
        <h2>Portfolio - José Gaspar</h2>
        <button onClick={handleOpenForm} className='app__btn'>Create New User</button>
      </header>
      <FormUser
        setUpdateInfo={setUpdateInfo}
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setFormClose={setFormClose} formClose={formClose} />

      <div className='app__user-container'>{
        users?.map(user => (
          <UseCard setFormClose={setFormClose} deleteUserBiId={deleteUserBiId} setUpdateInfo={setUpdateInfo} key={user.id} user={user} />
        ))
      }</div>
    </div>
  )
}

export default App
