import React from 'react';
import { NavLink } from 'react-router-dom';

function ListAlbumItem({album}) {
    return (
        <li><NavLink to={`photos?albumid=${album.id}`}>{album.title}</NavLink></li>
    );
}

export default ListAlbumItem;