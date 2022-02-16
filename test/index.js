function test_yun_LStorage() {

    let db = window.yun_db.localStorage;

    db.set('test_key', {
        a: 2,
        t: 3
    }, {
        time: 1000 * 5
    })

    console.log(db.get('test_key'))

    db.set('test_key2', {
        v: 2,
    }, {
        readonly: true
    })


    console.log(db.get('test_key2'))

    db.set('test_key2', {
        v: 3,
    })

}

function test_yun_SStorage() {

    let db = window.yun_db.sessionStorage;

    db.set('test_key', {
        a: 2,
        t: 3
    }, {
        time: 1000 * 10
    })

    console.log(db.get('test_key'))

    db.set('test_key2', {
        v: 2,
    }, {
        readonly: true
    })


    console.log(db.get('test_key2'))

    db.set('test_key2', {
        v: 3,
    })

}

test_yun_LStorage()

test_yun_SStorage()