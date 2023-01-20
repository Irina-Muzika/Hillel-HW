import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from './Api';
import ListPhoto from './ListPhoto';

function Photo() {
    const [photoList, setPhotoList] = useState([])
    const [error, setError] = useState('')
    const parametrs = new URLSearchParams(document.location.search)
    const id = parametrs.get('albumid')
    const navigate = useNavigate()

    useEffect(() => {
        Api
            .getList(`photos?albumId=${id}`)
            .then(list => {
                setPhotoList(list)
                setError('')
            })
            .catch(err => setError(err))
    }, [id])

    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            {error ? <span>{error}</span> : ''}
            {photoList.length > 0 && (<ListPhoto photoList={photoList} />)}
        </>
    );
}

export default Photo;