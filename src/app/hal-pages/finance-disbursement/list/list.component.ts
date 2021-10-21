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
                    name: 'Faisal',
                    createdAt: '11/11/2022',
                    nationalId: 'KT0323455',
                    phoneNumber: '+2541283621',
                    total: 'KES 10,100'
                },
                {
                    name: 'Yousef',
                    createdAt: '11/11/2022',
                    nationalId: 'KT0323455',
                    phoneNumber: '+2541283621',
                    total: 'KES 10,300'
                },
                {
                    name: 'Faisal',
                    createdAt: '11/11/2022',
                    nationalId: 'KT0323455',
                    phoneNumber: '+2541283621',
                    total: 'KES 10,030'
                },
                {
                    name: 'Faisal',
                    createdAt: '11/11/2022',
                    nationalId: 'KT0323455',
                    phoneNumber: '+2541283621',
                    total: 'KES 30,000'
                },
                {
                    name: 'Faisal',
                    createdAt: '11/11/2022',
                    nationalId: 'KT0323455',
                    phoneNumber: '+2541283621',
                    total: 'KES 14,000'
                },
                {
                    name: 'Yousef',
                    createdAt: '11/11/2022',
                    nationalId: 'KT0323455',
                    phoneNumber: '+2541283621',
                    total: 'KES 19,020'
                }, {
                    name: 'Faisal',
                    createdAt: '11/11/2022',
                    nationalId: 'KT0323455',
                    phoneNumber: '+2541283621',
                    total: 'KES 10,100'
                },
                {
                    name: 'Yousef',
                    createdAt: '11/11/2022',
                    nationalId: 'KT0323455',
                    phoneNumber: '+2541283621',
                    total: 'KES 10,300'
                },
                {
                    name: 'Faisal',
                    createdAt: '11/11/2022',
                    nationalId: 'KT0323455',
                    phoneNumber: '+2541283621',
                    total: 'KES 10,030'
                },
                {
                    name: 'Faisal',
                    createdAt: '11/11/2022',
                    nationalId: 'KT0323455',
                    phoneNumber: '+2541283621',
                    total: 'KES 30,000'
                },
                {
                    name: 'Faisal',
                    createdAt: '11/11/2022',
                    nationalId: 'KT0323455',
                    phoneNumber: '+2541283621',
                    total: 'KES 14,000'
                },
                {
                    name: 'Yousef',
                    createdAt: '11/11/2022',
                    nationalId: 'KT0323455',
                    phoneNumber: '+2541283621',
                    total: 'KES 19,020'
                }
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
                    '<div class="iconDwnld"><img src="../../../../assets/images/pdf.svg"><p>MPS089975YZ67.pdf</p></div>' +
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
                    {
                        data: "name",
                        className: "name"
                    },
                    {
                        data: "createdAt",
                        className: "date"
                    },
                    {
                        data: "nationalId",
                        className: 'nationalId',
                    },
                    {
                        data: "phoneNumber",
                        className: 'phoneNumber'
                    },
                    {
                        data: "total",
                        className: "amount"
                    },
                   
                    {
                        className: 'details-control',
                        orderable: false,
                        data: null,
                        defaultContent: ''
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

         
        }
    }
}
