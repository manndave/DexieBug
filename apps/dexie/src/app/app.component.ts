import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MyAppDatabase } from './my-app-database';

@Component({
    selector: 'dexie1-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'dexie';
    count: number = 0;
    private db: MyAppDatabase;
    ngOnInit(): void {
        this.db = new MyAppDatabase();
    }
    insert(): void {
        this.db.insertRecord();
        this.count++;
    }
}

