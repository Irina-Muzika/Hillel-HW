import React from 'react';
import ListAlbumItem from './ListAlbumItem';

function ListAlbum({ albumsList }) {
    return (
        <nav>
            <ul>
                {albumsList.map(album => <ListAlbumItem key={album.id} album={album} />)}
            </ul>
        </nav>
    );
}

export default ListAlbum;