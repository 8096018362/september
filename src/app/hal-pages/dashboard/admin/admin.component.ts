import { Component } from "@angular/core";
declare const $: any;
@Component({
    selector: '',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']

})

export class AdminComponent {
    constructor() {

    }
    records: any = []
    ngOnInit() {
        this.records[100] = 0;
        setTimeout(() => {
            $('.js-basic-example').DataTable({
                responsive: true
            });
        }, 1000);
    }
}
