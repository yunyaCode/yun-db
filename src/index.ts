import yun_Cookies from './cookies';
import yun_IDB from './indexedDB';
import yun_LStorage from './localStorage';
import yun_Redux from './redux';
import yun_SStorage from './sessionStorage';
import yun_Vuex from './vuex';
import yun_WebSql from './webSql';


export class yun_db {
    static cookies = yun_Cookies;
    static indexedDB = yun_IDB;
    static localStorage = yun_LStorage;
    // static redux = yun_Redux;
    static sessionStorage = yun_SStorage;
    // static vuex = yun_Vuex;
    static webSql = yun_WebSql;

    constructor() {




    }
}


if (window) {
    window['yun_db'] = yun_db;
}

export {
    yun_Cookies,
    yun_IDB,
    yun_LStorage,
    // yun_Redux,
    // yun_Vuex,
    yun_SStorage,
    yun_WebSql
}

