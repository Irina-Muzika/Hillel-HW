class ContactApi {
    static URL = 'https://636937fa28cd16bba7184e47.mockapi.io/api/todo/contact-list'

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
            throw new Error('Can not retrieve contact list from server',);
        })
    }

    static create(newContact) {
        return this.request('POST', '', newContact).catch((error) => {
            throw new Error('Can not create contact on server');
        })
    }

    static update(id, changes) {
        return this.request('PUT', id, changes).catch((error) => {
            throw new Error('Can not update contact on server');
        })
    }

    static delete(id) {
        return this.request('DELETE', id).catch((error) => {
            throw new Error('Can not delete contact on server');
        })
    }
}