

import { getId } from '../../shared/fun'
import { isFunction, isBoolean, isObject } from '../../shared/type'

let LocalStorage = window.localStorage;

type localStorageParams = {
    time: number,
    readonly: boolean,
}


class main {
    private id: string;

    constructor() {

        this.id = getId('LS')

        console.log('localStorage.main', this.id)

    }

    set(key: string, val: (string | object), params: localStorageParams): Boolean {

        if (isObject(val)) {
            val = JSON.stringify(val)
        }

        if (isObject(params)) {
            // 有效期
            if (params.time) {
                setTimeout(() => {
                    LocalStorage.removeItem(this.getKey(key));
                }, params.time);
            }

            // 只读属性
            if (params && isBoolean(params.readonly) && params.readonly) {
                if (LocalStorage.hasOwnProperty(this.getKey(key))) console.error(`key= “${key}” 受保护,不能修改`);
            }
        }


        LocalStorage.setItem(this.getKey(key), val);

        return true

    }

    get(key: string): any {

        let val = LocalStorage.getItem(key);

        return JSON.parse(val);

    }

    getKey(key: string) {

        return this.id + "_" + key

    }



}

export default new main();