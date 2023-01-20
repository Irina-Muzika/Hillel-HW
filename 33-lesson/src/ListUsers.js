import React from 'react';
import ListUsersItem from './ListUsersItem';

function ListUsers({ usersList }) {
    return (
        <nav>
            <ul>
                {usersList.map(user => <ListUsersItem key={user.id} user={user} />)}
            </ul>
        </nav>
    );
}

export default ListUsers;