import React from 'react';
import { NavLink } from 'react-router-dom';


function ListUsersItem({ user }) {
    return (
        <li><NavLink to={`/albums?userid=${user.id}`}>{user.name}</NavLink></li>
    );
}

export default ListUsersItem;