import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ValidationMessages } from "src/app/common/validation-messages";
import { ValidationPatterns } from "src/app/common/validation-patterns";

declare var $:any;
@Component({
  selector: 'app-add-repayment',
  templateUrl: './add-repayment.component.html',
  styleUrls: ['./add-repayment.component.scss']
})
export class AddRepaymentComponent implements OnInit {

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
          amount_outstanding: [null, this.pattens.required],
          emi_serial_number: [null, this.pattens.required],
          repayment_due_date: [null, this.pattens.required],
          emi_amount: [null, this.pattens.required],
          repayment_id: [null, this.pattens.required]
      });

  }

  ngOnInit(){
    
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
