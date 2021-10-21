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
                            <h5>Request Date</h5>
                            <p>22/06/2021</p>
                        </div>
                        <div class="carddiv">
                            <h5>Approved Date</h5>
                            <p>22/06/2021</p>
                        </div>
                        <div class="carddiv">
                            <h5>Finance Start Date</h5>
                            <p>22/06/2021</p>
                        </div>
                    </div>

                    <div class="rowdiv">
                        <div class="carddiv">
                            <h5>Finance Amount Requested</h5>
                            <p>67890</p>
                        </div>
                        <div class="carddiv">
                            <h5>EMI Amount</h5>
                            <p> ${d.total} </p>
                        </div>
                        <div class="carddiv">
                            <h5>EMI Due Date</h5>
                            <p>22/06/2021</p>
                        </div>
                        <div class="carddiv">
                            <h5>Current EMI State</h5>
                            <p>2/5</p>
                        </div>
                    </div>

                    <div class="rowdiv">
                        <div class="carddiv">
                            <h5>Status</h5>
                            <p class="finstatus_approv">Approved</p>
                        </div>
                    </div>
                    
                </div>
                `;
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
