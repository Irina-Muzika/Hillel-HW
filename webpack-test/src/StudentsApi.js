export default class StudentsApi {
    static URL = 'https://636937fa28cd16bba7184e47.mockapi.io/api/todo/students-list'


    static request(method, urlId, body) {
        return fetch(`${this.URL}${urlId ? `/${urlId}` : ''}`, {
            method: method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                throw new Error('Canot execute request method', { cause: response });
            })
    }

    static getList() {
        return this.request('GET').catch((error) => {
            throw new Error('Can not retrieve students list from server',);
        })
    }

    static create(student) {
        return this.request('POST', '', student).catch((error) => {
            throw new Error('Can not create student on server');
        })
    }

    static update(id, change) {
        return this.request('PUT', id, change).catch((error) => {
            throw new Error('Can not update student on server');
        })
    }

    static delete(id) {
        return this.request('DELETE', id).catch((error) => {
            throw new Error('Can not delete student on server');
        })
    }
}