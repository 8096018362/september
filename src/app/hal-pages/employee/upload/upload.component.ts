import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    childRowTable();
    function childRowTable() {
      var childData = [
        {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        }, {
          "id": "1",
          "name": "Tiger Nixon",
          "requestPending": "1",
          "requestApprove": "2",
          "requestAmount": "KES 2000",
          "approveAmount": "KES 2000"
        },

      ];

      /* Formatting function for row details - modify as you need */
      function format(d) {
        // `d` is the original data object for the row
        return '<div class="containerdiv">' +
          ' <div class="row">' +
          '<div class="col-md-12">' +
          '<h4>Finance Details</h4>' +
          '  </div>' +
          '  </div>' +
          ' <div class="rowdiv">' +
          ' <div class="carddiv">' +
          '<h5>Employee Name</h5>' +
          '<p>' + d.name + '</p>' +
          '</div>' +
          ' <div class="carddiv">' +
          '<h5>Finance ID</h5>' +
          '<p>' + d.approveAmount + '</p>' +
          '</div>' +
          ' <div class="carddiv">' +
          '<h5>National ID</h5>' +
          '<p>' + d.approveAmount + '</p>' +
          '</div>' +
          ' <div class="carddiv">' +
          '<h5>Phone Number</h5>' +
          '<p>' + d.approveAmount + '</p>' +
          '</div>' +
          ' <div class="carddiv">' +
          '<h5>Finance Amount Requested</h5>' +
          '<p>67890</p>' +
          '</div>' +
          '</div>' +
          ' <div class="rowdiv">' +
          ' <div class="carddiv">' +
          '<h5>Request Date</h5>' +
          '<p>22/06/2021</p>' +
          '</div>' +
          ' <div class="carddiv">' +
          '<h5>Approved Date</h5>' +
          '<p>22/06/2021</p>' +
          '</div>' +
          ' <div class="carddiv">' +
          '<h5>Finance Start Date</h5>' +
          '<p>22/06/2021</p>' +
          '</div>' +
          ' <div class="carddiv">' +
          '<h5>EMI Amount</h5>' +
          '<p>' + d.approveAmount + '</p>' +
          '</div>' +
          ' <div class="carddiv">' +
          '<h5>Status</h5>' +
          '<p class="finstatus_approv">Approved</p>' +
          '</div>' +
          '</div>' +
          '</div>';
      }

     
      function popover(d) {
        return '<div class="popoverdiv">' +
          ' <div class="row">' +
          '<div class="col-md-12">' +
          // '<img src="../../../../assets/images/user-setting.svg">'+
          '<h4 ><a href="#/hal/employee/add">Add Employee</a></h4>' +
          '  </div>' +
          '<div class="col-md-12">' +
          // '<img src="../../../../assets/images/user-setting.svg">'+
          '<h4 >Upload Employee List</h4>' +
          '  </div>' +
          '<div class="col-md-12">' +
          // '<img src="../../../../assets/images/user-setting.svg">'+
          '<h4 >Download Employee List</h4>' +
          '  </div>' +
          '  </div>' +
          '</div>';
      }


      var table = $('#chieldRow').DataTable({
        data: childData,
        bLengthChange: false,
        bFilter: false,
        columns: [
          { "data": "name" },
          { "data": "requestPending" },
          { "data": "requestApprove" },
          { "data": "requestAmount" },
          { "data": "approveAmount" },
          {
            "className": 'action-btn',
            "orderable": false,
            "data": null,
            "defaultContent": ''
          },
          {
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": ''
          }
        ],
        "order": [[1, 'asc']]
      });

      // Add event listener for opening and closing details
      $('#chieldRow tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
        }
        else {
          // Open this row
          row.child(format(row.data())).show();
          tr.addClass('shown');
        }
      });

      $('#chieldRow tbody').on('click', 'td.action-btn', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {

          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown1');
        }
        else {

          // Open this row
          row.child(popover(row.data())).show();
          tr.addClass('shown1');
        }
      });




    }
  }

}
