export default class WebSocet {
    constructor(option) {
        this.option = option
        this.ws = new WebSocket('ws://localhost:8080')
        this.ws.onopen = this.openServer.bind(this)
        this.ws.onclose = this.closeServer.bind(this)
        this.ws.onerror = this.onerror
        this.ws.onmessage = this.onmessage.bind(this)
    }

    sendMessage(message) {
        this.ws.send(JSON.stringify(message))
    }

    onmessage(e) {
        const data = JSON.parse(e.data)

        this.option.onMessage(data)
    }

    openServer() {
        this.sendMessage({ name: 'serve', message: 'connection on server' })
    }

    closeServer() {
        this.sendMessage({ name: 'serve', message: 'disconnect from server' })
    }

    onerror(err) {
        console.log('error', err);
    }
}