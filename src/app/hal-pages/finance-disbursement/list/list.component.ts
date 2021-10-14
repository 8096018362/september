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
                    '<h5>Finance Date</h5>' +
                    '<p>25/02/2021</p>' +
                    '</div>' +
                    ' <div class="carddiv">' +
                    '<h5>Finance Approved Date</h5>' +
                    '<p>29/02/2021</p>' +
                    '</div>' +
                    ' <div class="carddiv">' +
                    '<h5>Disbursement Date</h5>' +
                    '<p>14/05/2021</p>' +
                    '</div>' +
                    ' <div class="carddiv">' +
                    '<h5>Amount</h5>' +
                    '<p>KES 678</p>' +
                    '</div>' +
                    ' <div class="carddiv">' +
                    '<h5>Mpesa Receipt</h5>' +
                    '<p>67890</p>' +
                    '</div>' +
                    '</div>' +
                    ' <div class="rowdiv">' +
                    ' <div class="carddiv">' +
                    '<h5>Status</h5>' +
                    '<p class="finstatus_approv">Approved</p>' +
                    '</div>' +
                    '</div>' +
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
