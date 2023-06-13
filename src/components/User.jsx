const User = ({ user, deleteUser, changeShowModal, setIsUserToUpdate }) => {
    const handleClickDelete = () => {
        deleteUser(user.id)
    }
    const handleClickUpdate = ()=>{
        changeShowModal()
        setIsUserToUpdate(user)
    }
    return (
        <article className=" border-2 p-4 " >
            <h4 className="font-bold text-">{user.first_name} {user.last_name}</h4>
            <div>
                <h5 className="text-gray-300">Correo</h5>
                <span>{user.email}</span>
            </div>
            <div>
                <h5 className="text-gray-300">Cumpleaños</h5>
                <span><i className='bx bxs-cake'></i> {user.birthday || "Oculto"}</span>
            </div>
            <div className="flex gap-2 justify-end">
            <button onClick={handleClickDelete}><i className='bg-secondary border-2 border-secondary p-2 text-white rounded-md bx bxs-trash'></i></button>
            <button onClick={handleClickUpdate}><i className='p-2 text-gray-300 border-2 rounded-md bx bxs-pencil'></i></button>

            </div>
           
        </article>
    )
}

export default User