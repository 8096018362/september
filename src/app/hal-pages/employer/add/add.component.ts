import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ValidationMessages } from "src/app/common/validation-messages";
import { ValidationPatterns } from "src/app/common/validation-patterns";


@Component({
  selector: '',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']

})

export class AddComponent implements  OnInit{
  addEmployerForm:FormGroup;
  validation_messages: any = {};
  pattens: any = {};
  submitted:boolean=false;

  constructor(public formBuilder: FormBuilder){

  }

  ngOnInit(){
    this.validation_messages = ValidationMessages;
    this.pattens = ValidationPatterns;


    this.addEmployerForm = this.formBuilder.group({
        employer_name: [null, this.pattens.required],
        reg_no: [null, this.pattens.required],
        employer_id: [null, this.pattens.required],
        reg_certificate: [null, this.pattens.required],
        max_fund: [null, this.pattens.required],
        business_type: [null, this.pattens.required],
        approved_fund: [null, this.pattens.required],
        no_of_employees: [null, this.pattens.required],
        no_of_employees_finance: [null, this.pattens.required],
        country: [null, this.pattens.required],
        state: [null, this.pattens.required],
        address1: [null, this.pattens.required],
        address2: [null, this.pattens.required],
        address3: [null, this.pattens.required],
        pincode: [null, this.pattens.required],
        latitude: [null, this.pattens.required],
        longitude: [null, this.pattens.required],
        dir_national_id: [null, this.pattens.required],
        dir_natonal_id_copy: [null, this.pattens.required],
        contact_person: [null, this.pattens.required],
        status: [null, this.pattens.required]
    });
  }

  addEmployer(){
    this.submitted = true;
    console.log(this.addEmployerForm.value)
  }

}
