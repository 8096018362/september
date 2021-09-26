import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: '',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']

})

export class ListComponent {

    constructor(
        public router: Router
    ) { }

    ngOnInit() {

    }

    gotoNewEmployer() {
        this.router.navigate(['./hal/employer/add'])
    }
}
