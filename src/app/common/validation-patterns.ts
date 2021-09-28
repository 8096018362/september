import { Validators } from '@angular/forms';

export const ValidationPatterns = {
    required: Validators.required,
    fullName: Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z][a-zA-Z]+$/)]),
    email: Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(256), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$*^.[\]{}()?\-"!@#%&/\\,><':;|_~`])[0-9a-zA-Z$*^.[\]{}()?\-"!@#%&/\\,><':;|_~`]{8,}$/)]),
    mobile_countrycode: Validators.compose([Validators.required, Validators.minLength(10), Validators.pattern(/^(\+\d{10,})$/)]),
    mobile: Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/[0-9]{8,20}$/)]),
    country: Validators.compose([Validators.required]),
    confirmpassword: Validators.compose([Validators.required]),
    selectedbank: Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]),
    accountNumber: Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")]),
    swiftCode: Validators.compose([Validators.required, Validators.pattern("^$|^[A-Za-z0-9]+")]),
    branchName: Validators.compose([Validators.required, Validators.pattern("^[A-Za-z0-9]*$")]),
};
