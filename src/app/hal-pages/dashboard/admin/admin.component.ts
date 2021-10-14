import { Component } from "@angular/core";
declare const $: any;
// declare const ApexCharts: any;

@Component({
    selector: '',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']

})

export class AdminComponent {
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
                    '<h4>Employee Details</h4>' +
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
    // private chart1() {
    //     var options = {
    //         chart: {
    //             height: 350,
    //             type: 'bar',
    //             toolbar: {
    //                 show: false
    //             }
    //         },
    //         plotOptions: {
    //             bar: {
    //                 horizontal: false,
    //                 endingShape: 'rounded',
    //                 distributed: true,
    //                 columnWidth: '25%',
    //                 color: {
    //                     backgroundBarColors: ['#F9A44A', '#2EAFBC', '#F35F67', '#5A36CC'],
    //                 }
    //             },
    //         },
    //         dataLabels: {
    //             enabled: false
    //         },
    //         stroke: {
    //             show: true,
    //             width: 2,
    //             colors: ['transparent']
    //         },
    //         series: [{
    //             name: '',
    //             data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    //         }],
    //         xaxis: {
    //             categories: ['Tup', 'Hur', '5G Cap', 'ABC', 'Ang', 'Ari', 'Asp', 'Bles', 'Bomi'],
    //             labels: {
    //                 style: {
    //                     colors: '#52504F',
    //                     fontSize: '18px',
    //                     fontWeight: 'bold',
    //                     fontFamily: 'Source Sans Pro sans-serif !important',
    //                 }
    //             }, title: {
    //                 text: '',
    //                 style: {
    //                     fontSize: '22px',
    //                     fontWeight: 'bold',
    //                     fontFamily: 'Source Sans Pro sans-serif !important',
    //                     color: '#585555'
    //                 },
    //             },
    //         },
    //         yaxis: {
    //             labels: {
    //                 style: {
    //                     colors: '#52504F',
    //                     fontSize: '18px',
    //                     fontWeight: 'bold',
    //                     fontFamily: 'Source Sans Pro sans-serif !important',
    //                 }
    //             }
    //         },
    //         fill: {
    //             opacity: 1

    //         },
    //         tooltip: {
    //             y: {
    //                 formatter: function (val) {
    //                     return "$ " + val + " thousands"
    //                 }
    //             }
    //         }
    //     }

    //     var chart = new ApexCharts(
    //         document.querySelector("#chart1"),
    //         options
    //     );

    //     chart.render();


    // }
}
