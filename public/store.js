import Vue from './vue.js'

class Store {
    constructor (data = {}) {
        this.storeVM = new Vue({ data })
    }

    get state () {
        return this.storeVM.$data
    }
}

export { Store }