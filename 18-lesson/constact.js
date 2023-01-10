class Contact {
    static URL = 'https://636937fa28cd16bba7184e47.mockapi.io/api/todo/contact-list'

    static getContact() {
        return fetch(this.URL)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not retrieve Todo list from server');
            })
    }
    static create(contact) {
        return fetch(this.URL, {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not create Todo on server');
            })
    }
    static update(id, changes) {
        return fetch(`${this.URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(changes),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not update Todo on server');
            })
    }
    static delete(id) {
        return fetch(`${this.URL}/${id}`, {
            method: "DELETE",
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not update Todo on server');
            })
    }
}