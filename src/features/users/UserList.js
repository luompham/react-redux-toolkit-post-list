import { useSelector } from 'react-redux';
import { selectAllUsers } from './usersSlice'



export const UserList = () => {

    const userList = useSelector(selectAllUsers);
    console.log(userList);

    return (
        <section>
            <h2>Users</h2>
            <ul>

            </ul>
        </section>
    )
};
