import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root' // enables class to use the dependancy injection system
})
export class UniqueUsername {
    constructor(private http: HttpClient){}
}
