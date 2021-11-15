import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.service";
import {User} from "../User/user";

import './users.list.css'

export function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers([...value]))
    },[]);
    return (
         <div className={'userList'}>
             <div className={'title'}>
                 <div className={'item'}>
                     <h5>USERNAME</h5>
                 </div>
                 <div className={'item'}>
                     <h5>FIRST NAME</h5>
                 </div>
                 <div className={'item'}>
                     <h5>LAST NAME</h5>
                 </div>
                 <div className={'item'}>
                     <h5>EMAIL</h5>
                 </div>
                 <div className={'item'}>
                     <h5>TYPE</h5>
                 </div>
             </div>
             {
                 users.map(value => <User item={value} key={value.id}/>)
             }
         </div>
    );
}
