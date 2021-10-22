import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ValidationMessages } from "src/app/common/validation-messages";
import { ValidationPatterns } from "src/app/common/validation-patterns";
// import {MatSnackBar } from '@angular/material/snack-bar';

declare var $:any;

@Component({
    selector: '',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']

})

export class AddComponent {
    employeeForm: FormGroup;
    validation_messages: any = {};
    pattens: any = {};

    constructor(
        public formBuilder: FormBuilder,
        // public matsnackbar:MatSnackBar
    ) {
        this.validation_messages = ValidationMessages;
        this.pattens = ValidationPatterns;


        this.employeeForm = this.formBuilder.group({
            nameOfEmployee: [null, this.pattens.required],
            nationalId: [null, this.pattens.required],
            financeId: [null, this.pattens.required],
            phoneNumber: [null, this.pattens.required],
            total_finance_amount: [null, this.pattens.required],
            request_date: [null, this.pattens.required],
            approved_date: [null, this.pattens.required],
            finance_start_date: [null, this.pattens.required],
            finance_due_date: [null, this.pattens.required],
            emi_amount: [null, this.pattens.required],
            emi_due_date: [null, this.pattens.required],
            emi_state: [null, this.pattens.required],
            status: [null, this.pattens.required]
        });

    }

    doSubmit() {
        console.log(this.employeeForm.value)
    }

    save(){
        if(this.employeeForm.valid){
            $('#basicModal').modal('show')
        }else{
            // this.matsnackbar.open('Please fill Valid Data', 'OK',{
            //     verticalPosition: 'top',
            //     duration: 2000,
            //     panelClass:'snack-error'
            // })
        }
    }

}
