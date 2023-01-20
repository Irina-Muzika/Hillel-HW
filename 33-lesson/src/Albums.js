import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from './Api';
import ListAlbum from './ListAlbum';

function Albums() {
    const [albumsList, setAlbumsList] = useState([])
    const [error, setError] = useState('')
    const parametrs = new URLSearchParams(document.location.search)
    const id = parametrs.get('userid')
    const navigate = useNavigate()

    useEffect(() => {
        Api
            .getList(`albums?userId=${id}`)
            .then(list => {
                setAlbumsList(list)
                setError('')
            })
            .catch(err => setError(err))
    }, [id])

    return (
        <>
            <button onClick={() => navigate(-1)}>Back</button>
            {error ? <span>{error}</span> : ''}
            {albumsList.length > 0 && (<ListAlbum albumsList={albumsList} />)}
        </>
    );
}

export default Albums;