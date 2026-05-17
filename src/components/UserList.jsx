import { useEffect } from "react";

import {
 useDispatch,
 useSelector,
} from "react-redux";

import { fetchUsers }
from "../redux/userSlice";

function UserList() {

 const dispatch = useDispatch();

 const {
   users,
   loading,
   error,
 } = useSelector(
   (state) => state.users
 );

 useEffect(() => {
   dispatch(fetchUsers());
 }, [dispatch]);

 if (loading) {
   return <h2>Loading...</h2>;
 }

 if (error) {
   return <h2>{error}</h2>;
 }

 return (
   <div>

     <h2>Users</h2>

     {users.map((user) => (
       <div key={user.id}>
         {user.name}
       </div>
     ))}

   </div>
 );
}

export default UserList;
