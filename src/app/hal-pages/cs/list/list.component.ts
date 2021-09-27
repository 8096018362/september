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
                },

            ];



            /* Formatting function for row details - modify as you need */
            function format(d) {
                // `d` is the original data object for the row
                return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;background:#f5f5f5;">' +
                    '<tr>' +
                    '<td>Full name:</td>' +
                    '<td>' + d.name + '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Extension number:</td>' +
                    '<td>' + d.approveAmount + '</td>' +
                    '</tr>' +
                    '<tr>' +
                    '<td>Extra info:</td>' +
                    '<td>And any further details here (images etc)...</td>' +
                    '</tr>' +
                    '</table>';
            }



            var table = $('#chieldRow').DataTable({
                data: childData,
                "columns": [
                    {
                        "className": 'details-control',
                        "orderable": false,
                        "data": null,
                        "defaultContent": ''
                    },
                    { "data": "name" },
                    { "data": "requestPending" },
                    { "data": "requestApprove" },
                    { "data": "requestAmount" },
                    { "data": "approveAmount" }
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

        }
    }
}
