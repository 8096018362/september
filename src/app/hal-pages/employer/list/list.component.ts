import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: '',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']

})

export class ListComponent {
    showDetailsFlag:boolean=false;
    constructor(
        public router: Router
    ) { }

    ngOnInit() {

    }

    gotoNewEmployer() {
        this.router.navigate(['./hal/employer/add'])
    }

    showdetails(type){
        if(type == 'show'){
            this.showDetailsFlag = true;
        }else{
            this.showDetailsFlag = false;
        }
    }


}
