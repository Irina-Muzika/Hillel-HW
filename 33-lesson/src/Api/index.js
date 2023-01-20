export default class Api {
    static URL = 'https://jsonplaceholder.typicode.com/'
    static albumId = 'albums?userId='
    static photoId = 'photos?albumId='
 
    static request(url = '', id, method = 'GET', body) {
        return fetch(this.URL + url, {
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