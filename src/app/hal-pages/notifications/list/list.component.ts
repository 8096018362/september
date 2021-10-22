import { Component } from "@angular/core";

declare const $: any;
@Component({
    selector: '',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']

})

export class ListComponent {
    showTemplate = 'SMS'
    constructor() { }

    ngOnInit() {
        childRowTable();
        function childRowTable() {
            var childData = [
                {
                    id: "1",
                    date_time: "30/04/2021 9:30 am",
                    requests: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    id: "2",
                    date_time: "30/04/2021 9:30 am",
                    requests: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    id: "3",
                    date_time: "30/04/2021 9:30 am",
                    requests: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    id: "4",
                    date_time: "30/04/2021 9:30 am",
                    requests: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    id: "5",
                    date_time: "30/04/2021 9:30 am",
                    requests: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    id: "6",
                    date_time: "30/04/2021 9:30 am",
                    requests: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    id: "7",
                    date_time: "30/04/2021 9:30 am",
                    requests: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }, {
                    id: "8",
                    date_time: "30/04/2021 9:30 am",
                    requests: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                },
                {
                    id: "9",
                    date_time: "30/04/2021 9:30 am",
                    requests: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                }

            ];

            var table = $('#chieldRow').DataTable({
                data: childData,
                bLengthChange: false,
                bFilter: true,
                columns: [
                    {
                        data: 'id'
                    },
                    {
                        data: "date_time"
                    },
                    {
                        data: "requests",
                        className: 'nationalId',
                    },
                    {
                        orderable: false,
                        data: null,
                        defaultContent: 'view details',
                        className: 'view-details',
                    },
                ],
                order: [[1, 'asc']]
            });
        }
    }

    selectTnype(req) {
        console.log(req);
        this.showTemplate = req;
    }
}
