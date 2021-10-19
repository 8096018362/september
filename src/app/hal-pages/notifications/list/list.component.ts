import { Component } from "@angular/core";

declare const $: any;
@Component({
    selector: '',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']

})

export class ListComponent {
    showTemplate = 'SMS'
    constructor( ) { }

    ngOnInit() { }
    selectTnype(req){
        console.log(req);
        this.showTemplate = req;
    }
}
