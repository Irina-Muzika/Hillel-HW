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

    static getList(url) {
        return this.request(url)
            .catch(err => {
                throw new Error('can not get list from server')
            })
    }
}