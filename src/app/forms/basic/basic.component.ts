import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { FormGroup, FormControl } from '@angular/forms';

import { DynamicScriptLoaderService } from './../../services/dynamic-script-loader.service';

declare const $: any;
declare const M: any;

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  basicForm: FormGroup;
  floatingForm: FormGroup;
  diffWidthForm: FormGroup;

  // dragdrop file upload
  public config: DropzoneConfigInterface = {
    url: 'https://example.com/post',    //Change your upload url
    maxFiles: 10,
    clickable: true,
    uploadMultiple: true,
    acceptedFiles: 'image/*',
    createImageThumbnails: true
  };

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) { }

  ngOnInit() {
    this.basicForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });

    this.floatingForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });

    this.diffWidthForm = new FormGroup({
      col1: new FormControl(''),
      col2: new FormControl(''),
      col3: new FormControl(''),
      col4: new FormControl(''),
      disableField: new FormControl({ value: '', disabled: true }),
    });

    this.startScript();

    // for labels overlapping prefilled content on floating label textitem
    M.updateTextFields();
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('username', form.value.username);
    console.log('password', form.value.password);
  }
  async startScript() {
    await this.dynamicScriptLoader.load('form.min').then(data => {
      this.loadData();
    }).catch(error => console.log(error));
  }
  private loadData() {

    //Datetimepicker plugin
    $('.datetimepicker').bootstrapMaterialDatePicker({
      format: 'dddd DD MMMM YYYY - HH:mm',
      clearButton: true,
      weekStart: 1
    });

    $('.datepicker').bootstrapMaterialDatePicker({
      format: 'dddd DD MMMM YYYY',
      clearButton: true,
      weekStart: 1,
      time: false
    });
    $('.datepicker2').bootstrapMaterialDatePicker({
      format: 'DD MMMM YYYY',
      clearButton: true,
      weekStart: 1,
      time: false
    });

    $('.timepicker').bootstrapMaterialDatePicker({
      format: 'HH:mm',
      clearButton: true,
      date: false
    });

    $('input#input_text, textarea#textarea2').characterCounter();

  }

}
