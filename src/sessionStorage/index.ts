
import { getId } from '../../shared/fun'
import { isFunction, isBoolean, isObject } from '../../shared/type'

let SessionStorage = window.sessionStorage;

type sessionStorageParams = {
    time: number,
    readonly: boolean,
}

class main {
    id: string;

    constructor() {

        this.id = getId('SS')

        console.log('SessionStorage.main', this.id)

    }

    set(key: string, val: (string | object), params: sessionStorageParams): Boolean {

        if (isObject(val)) {
            val = JSON.stringify(val)
        }
        if (isObject(params)) {

            // 有效期
            if (params && params.time) {
                setTimeout(() => {
                    SessionStorage.removeItem(this.getKey(key));
                }, params.time);
            }

            // 只读属性
            if (isBoolean(params.readonly) && params.readonly) {
                if (SessionStorage.hasOwnProperty(key)) console.error(`key= “${key}” 受保护,不能修改`);
            }
        }

        SessionStorage.setItem(this.getKey(key), val);

        return true

    }

    get(key: string): any {

        let val = SessionStorage.getItem(this.getKey(key));

        return JSON.parse(val);

    }

    getKey(key: string) {

        return this.id + "_" + key

    }



}

export default new main();