import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: '',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']

})

export class EditProductComponent {

    constructor(
        public router: Router
    ) { }

    ngOnInit() {

    }

    gotoProduct() {
        this.router.navigate(['./hal/product/list'])
    }
}
