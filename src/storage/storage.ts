const log = console.log.bind(console)
const Storage = class {
    constructor() {}

    static get(key: string) {
        let value = localStorage.getItem(key)
        if (typeof value === 'string') {
            return JSON.parse(value)
        } else {
            return null
        }
    }

    static set(key:string, value:any) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export default Storage
