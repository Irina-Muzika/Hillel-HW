import React from 'react';

function ListPhotoItem({ photo }) {
    return (
        <img src={photo.thumbnailUrl} alt="color" />
    );
}

export default ListPhotoItem;