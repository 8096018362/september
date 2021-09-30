import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidationMessages } from "src/app/common/validation-messages";
import { ValidationPatterns } from "src/app/common/validation-patterns";


declare const jQuery: any;

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
    loginForm:FormGroup;
    validation_messages: any = {};
    pattens: any = {};
    submitted:boolean=false;

    login(){
        this.submitted = true;
    }
    constructor(public formBuilder: FormBuilder) { }

    ngOnInit() {
        this.validation_messages = ValidationMessages;
        this.pattens = ValidationPatterns;
    
        this.loginForm = this.formBuilder.group({
            email:['', this.pattens.required],
            password:['', this.pattens.required]
        })

        // (function ($) {
        //     "use strict";



        //     /*==================================================================
        //     [ Focus input ]*/
        //     $('.input100').each(function () {
        //         $(this).on('blur', function () {
        //             if ($(this).val().trim() != "") {
        //                 $(this).addClass('has-val');
        //             }
        //             else {
        //                 $(this).removeClass('has-val');
        //             }
        //         })
        //     })


        //     /*==================================================================
        //     [ Validate ]*/
        //     var input = $('.validate-input .input100');

        //     $('.validate-form').on('submit', function () {
        //         var check = true;

        //         for (var i = 0; i < input.length; i++) {
        //             if (validate(input[i]) == false) {
        //                 showValidate(input[i]);
        //                 check = false;
        //             }
        //         }

        //         return check;
        //     });


        //     $('.validate-form .input100').each(function () {
        //         $(this).focus(function () {
        //             hideValidate(this);
        //         });
        //     });

        //     function validate(input) {
        //         if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        //             if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        //                 return false;
        //             }
        //         }
        //         else {
        //             if ($(input).val().trim() == '') {
        //                 return false;
        //             }
        //         }
        //     }

        //     function showValidate(input) {
        //         var thisAlert = $(input).parent();

        //         $(thisAlert).addClass('alert-validate');
        //         $(".erroe_dis").remove();
        //         $(".alert-validate").append('<i class="material-icons erroe_dis">error</i>');
        //     }

        //     function hideValidate(input) {
        //         var thisAlert = $(input).parent();

        //         $(thisAlert).removeClass('alert-validate');
        //         $(".erroe_dis").remove();
        //     }

        //     /*==================================================================
        //     [ Show pass ]*/
        //     var showPass = 0;
        //     $('.btn-show-pass').on('click', function () {
        //         if (showPass == 0) {
        //             $(this).next('input').attr('type', 'text');
        //             $(this).addClass('active');
        //             showPass = 1;
        //         }
        //         else {
        //             $(this).next('input').attr('type', 'password');
        //             $(this).removeClass('active');
        //             showPass = 0;
        //         }

        //     });


        // })(jQuery);
    }

}
