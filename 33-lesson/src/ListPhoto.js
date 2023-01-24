import React from 'react';
import ListPhotoItem from './ListPhotoItem';

function ListPhoto({ photoList }) {
    return (
        <nav>
            <ul>
                {photoList.map(photo => <ListPhotoItem key={photo.id} photo={photo} />)}
            </ul>
        </nav>
    );
}

export default ListPhoto;