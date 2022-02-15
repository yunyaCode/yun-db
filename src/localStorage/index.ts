class main {

    static id: Number;

    constructor() {

        main.id = new Date().getTime();

        console.log('localStorage.main',main.id )

    }
    

}

export default main;