import { Component } from "@angular/core";
declare const $: any;

@Component({
    selector: '',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']

})

export class ListComponent {
    constructor() { }

    ngOnInit() {
        childRowTable();
        function childRowTable() {
          var childData = [
            {
              "id": "1",
              "name": "Faisal",
              "requestPending": "30/04/2021",
              "requestApprove": "KT0323455",
              "requestAmount": "+2541283621",
              "approveAmount": "KES 2000"
            }, {
              "id": "1",
              "name": "Yousef",
              "requestPending": "30/04/2021",
              "requestApprove": "KT0323455",
              "requestAmount": "+2541283621",
              "approveAmount": "KES 2000"
            }, {
              "id": "1",
              "name": "Yousef",
              "requestPending": "30/04/2021",
              "requestApprove": "KT0323455",
              "requestAmount": "+2541283621",
              "approveAmount": "KES 2000"
            }, {
              "id": "1",
              "name": "Yousef",
              "requestPending": "30/04/2021",
              "requestApprove": "KT0323455",
              "requestAmount": "+2541283621",
              "approveAmount": "KES 2000"
            }, {
              "id": "1",
              "name": "Yousef",
              "requestPending": "30/04/2021",
              "requestApprove": "KT0323455",
              "requestAmount": "+2541283621",
              "approveAmount": "KES 2000"
            }, {
              "id": "1",
              "name": "Yousef",
              "requestPending": "30/04/2021",
              "requestApprove": "KT0323455",
              "requestAmount": "+2541283621",
              "approveAmount": "KES 2000"
            }, {
              "id": "1",
              "name": "Faisel",
              "requestPending": "30/04/2021",
              "requestApprove": "KT0323455",
              "requestAmount": "+2541283621",
              "approveAmount": "KES 2000"
            }, {
              "id": "1",
              "name": "Yousef",
              "requestPending": "30/04/2021",
              "requestApprove": "KT0323455",
              "requestAmount": "+2541283621",
              "approveAmount": "KES 2000"
            }, {
              "id": "1",
              "name": "Yousef",
              "requestPending": "30/04/2021",
              "requestApprove": "KT0323452",
              "requestAmount": "+2541283621",
              "approveAmount": "KES 2000"
            }, {
              "id": "1",
              "name": "Yousef",
              "requestPending": "30/04/2021",
              "requestApprove": "KT0323452",
              "requestAmount": "+2541283621",
              "approveAmount": "KES 2000"
            }, {
              "id": "1",
              "name": "Yousef",
              "requestPending": "30/04/2021",
              "requestApprove": "2KT032345",
              "requestAmount": "+2541283621",
              "approveAmount": "KES 2000"
            }, {
              "id": "1",
              "name": "Yousef",
              "requestPending": "30/04/2021",
              "requestApprove": "KT0323452",
              "requestAmount": "+2541283621",
              "approveAmount": "KES 2000"
            },
    
          ];
    
          /* Formatting function for row details - modify as you need */
          function format(d) {
            // `d` is the original data object for the row
            return ` 
                    <div class="containerdiv">
                        <div class="row">
                            <div class="col-md-12">
                                <h4>Finance Details</h4>
                            </div>
                        </div>
                        <div class="rowdiv">
                            <div class="carddiv">
                                <h5>Finance ID</h5>
                                <p>${d.nationalId} </p>
                            </div>
                            <div class="carddiv">
                                <h5>Repayment Due Date</h5>
                                <p>22/06/2021</p>
                            </div>
                            <div class="carddiv">
                                <h5>EMI Serial Number</h5>
                                <p>KND001</p>
                            </div>
                            <div class="carddiv">
                                <h5>Amount Outstanding</h5>
                                <p>KES 7,000</p>
                            </div>
                            <div class="carddiv">
                            <h5>EMI Amount</h5>
                            <p>KES 800</p>
                        </div>
                        </div>
    
                        <div class="rowdiv">
                            <div class="carddiv">
                                <h5>Repayment ID</h5>
                                <p>HLK7899RT5</p>
                            </div>
                         
                        </div>
    
                        <div class="rowdiv">
                            <div class="carddiv">
                                <h5>Coordinates</h5>
                                <div class="subcarddiv">
                                    <h6>Longitude</h6>
                                    <p>3.1390O N</p>
                                </div>
                                <div class="subcarddiv">
                                <h6>Latitude</h6>
                                <p>101.6869O E</p>
                                </div>
                            </div>
                          
                        </div>
                        
                    </div>
                    `;
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
              '<h4 ><a href="#/hal/employee/upload">Upload Employee List</a></h4>' +
              '  </div>' +
              '<div class="col-md-12">' +
              // '<img src="../../../../assets/images/user-setting.svg">'+
              '<h4 ><a>Download Employee List</a></h4>' +
              '  </div>' +
              '  </div>' +
              '</div>';
          }
    
    
          var table = $('#chieldRow').DataTable({
            data: childData,
            bLengthChange: false,
            bFilter: false,
            columns: [
              { data: 'name' },
              { data: "requestPending" },
              {
                data: "requestApprove",
                className: 'nationalId',
              },
              { data: "requestAmount" },
              { data: "approveAmount" },
            
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
              row.child().addClass('newrow')
              tr.addClass('shown1');
            }
    
          });
    
    
    
    
        }
      }

}
