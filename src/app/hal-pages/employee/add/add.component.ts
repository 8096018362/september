import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ValidationMessages } from "src/app/common/validation-messages";
import { ValidationPatterns } from "src/app/common/validation-patterns";

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
        public formBuilder: FormBuilder
    ) {
        this.validation_messages = ValidationMessages;
        this.pattens = ValidationPatterns;


        this.employeeForm = this.formBuilder.group({
            nameOfEmployee: [null, this.pattens.required],
            nationalId: [null, this.pattens.required],
            phoneNumber: [null, this.pattens.required],
            nationalIdCopy: [null, this.pattens.required],
            age: [null, this.pattens.required],
            salary: [null, this.pattens.required],
            durationOfEmployement: [null, this.pattens.required],
            status: [null, this.pattens.required],
            financesTaken: [null, this.pattens.required],
            financesRepaid: [null, this.pattens.required],
            appointmentLetter: [null, this.pattens.required],
            paySlip: [null, this.pattens.required]
        });

    }

    doSubmit() {
        console.log(this.employeeForm.value)
    }

}
