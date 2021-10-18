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
                    "name": "Tiger Nixon",
                    "requestPending": "1",
                    "requestApprove": "2",
                    "requestAmount": "KES 2000",
                    "approveAmount": "KES 2000",
                    "status": 'Pending'
                }, {
                    "id": "1",
                    "name": "Tiger Nixon",
                    "requestPending": "1",
                    "requestApprove": "2",
                    "requestAmount": "KES 2000",
                    "approveAmount": "KES 2000",
                    "status": 'Approved'
                }, {
                    "id": "1",
                    "name": "Tiger Nixon",
                    "requestPending": "1",
                    "requestApprove": "2",
                    "requestAmount": "KES 2000",
                    "approveAmount": "KES 2000",
                    "status": 'Rejected'
                }, {
                    "id": "1",
                    "name": "Tiger Nixon",
                    "requestPending": "1",
                    "requestApprove": "2",
                    "requestAmount": "KES 2000",
                    "approveAmount": "KES 2000",
                    "status": 'Rejected'

                }, {
                    "id": "1",
                    "name": "Tiger Nixon",
                    "requestPending": "1",
                    "requestApprove": "2",
                    "requestAmount": "KES 2000",
                    "approveAmount": "KES 2000",
                    "status": 'Rejected'

                }, {
                    "id": "1",
                    "name": "Tiger Nixon",
                    "requestPending": "1",
                    "requestApprove": "2",
                    "requestAmount": "KES 2000",
                    "approveAmount": "KES 2000",
                    "status": 'Rejected'

                }, {
                    "id": "1",
                    "name": "Tiger Nixon",
                    "requestPending": "1",
                    "requestApprove": "2",
                    "requestAmount": "KES 2000",
                    "approveAmount": "KES 2000",
                    "status": 'Rejected'

                }, {
                    "id": "1",
                    "name": "Tiger Nixon",
                    "requestPending": "1",
                    "requestApprove": "2",
                    "requestAmount": "KES 2000",
                    "approveAmount": "KES 2000",
                    "status": 'Rejected'

                }, {
                    "id": "1",
                    "name": "Tiger Nixon",
                    "requestPending": "1",
                    "requestApprove": "2",
                    "requestAmount": "KES 2000",
                    "approveAmount": "KES 2000",
                    "status": 'Rejected'

                }, {
                    "id": "1",
                    "name": "Tiger Nixon",
                    "requestPending": "1",
                    "requestApprove": "2",
                    "requestAmount": "KES 2000",
                    "approveAmount": "KES 2000",
                    "status": 'Rejected'

                },

            ];



            /* Formatting function for row details - modify as you need */
            function format(d) {
                // `d` is the original data object for the row
                return ` <div class="containerdiv">  
                    <div class="row">  
                    <div class="col-md-12"> 
                    <h4>Finance Details</h4> 
                     </div> 
                     </div> 
                     <div class="rowdiv"> 
                     <div class="carddiv"> 
                    <h5>Finance ID</h5>  
                    <p>546456</p>  
                    </div>  
                    <div class="carddiv">  
                    <h5>Request Date</h5>  
                    <p>23/02/2021</p>  
                    </div>  
                    <div class="carddiv">  
                    <h5>Approved Date</h5>  
                    <p>14/04/2021</p>  
                    </div>  
                    <div class="carddiv">  
                    <h5>Finance Start Date</h5>  
                    <p>14/04/2021</p>  
                    </div>  
                    </div>  
                    <div class="rowdiv"> 
                    <div class="carddiv">  
                    <h5>Finance Amount Requested</h5> 
                    <p>67890</p>  
                    </div>  
                    <div class="carddiv"> 
                    <h5>EMI Amount</h5>  
                    <p>KES 800</p>  
                    </div>  
                    <div class="carddiv">  
                    <h5>EMI Due Date</h5>  
                    <p>22/06/2021</p>  
                    </div>  
                    <div class="carddiv">  
                    <h5>Current EMI State</h5>  
                    <p>3/5</p>  
                    </div>  
                    <div class="carddiv">  
                    <h5>Status</h5>  
                    <p class="finstatus_reject">${d.status}</p>'  
                    </div>   
                    </div>  
                    <div class="rowdiv"> 
                    <div class=""> 
                    ${d.status == 'Rejected' ? `<h5>Reason</h5>  
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover.</p>`: ''}
                    </div>  
                    </div>  
                    </div>`
            }



            var table = $('#chieldRow').DataTable({
                data: childData,
                "columns": [

                    { "data": "name" },
                    { "data": "requestPending" },
                    { "data": "requestApprove" },
                    { "data": "requestAmount" },
                    { "data": "approveAmount" },
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
            $('#chieldRow tbody').on('click', 'td', function () {
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

        }
    }
}
