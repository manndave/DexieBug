/**************************************************************************
 * 
 * This is essentially verbatim from http://dexie.org/docs/Typescript 
 * 
 **************************************************************************/

import Dexie from 'dexie';
export class MyAppDatabase extends Dexie {
    // Declare implicit table properties.
    // (just to inform Typescript. Instanciated by Dexie in stores() method)
    contacts: Dexie.Table<IContact, number>; // number = type of the primkey
    //...other tables goes here...

    constructor () {
        super("MyAppDatabase");
        console.log('init DB');
        this.version(1).stores({
            contacts: '++id, first, last',
            //...other tables goes here...
        });
    }

    insertRecord(): void {
        this.table("contacts").put({first: "First name", last: "Last name"});
        console.log('record inserted');
    }
    
}

interface IContact {
    id?: number,
    first: string,
    last: string
}
