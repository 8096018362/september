import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  loginType: any = 'admin';
  constructor() {
    //this.loginType = sessionStorage.getItem('LOGIN_TYPE')
  }

  ngOnInit() {
  }

}
