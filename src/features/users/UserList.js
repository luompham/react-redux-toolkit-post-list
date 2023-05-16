import { useSelector } from 'react-redux';
import { selectAllUsers } from './usersSlice'



export const UserList = () => {

    const userList = useSelector(selectAllUsers);

    const renderedUsers = userList.map(user => {
        return (
            <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>  
        )   
    })

    return (
        <section>
            <h2>Users</h2>
            <ul>
                {renderedUsers}
            </ul>
        </section>
    )
};
