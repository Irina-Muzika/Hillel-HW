class AlbumAPI {
    static request(url = '', method = 'GET', body) {
        return fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }

                throw new Error('can not get request')
            })
    }

    static getListAlbum() {
        return this.request()
            .catch(err => {
                throw new Error('can not get list from server')
            })
    }

    static getListImg(id) {
        return this.request(id)
            .catch(err => {
                throw new Error('can not get list from server')
            })
    }
}