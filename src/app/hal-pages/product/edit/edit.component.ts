import { Component } from "@angular/core";
import { Router } from '@angular/router';
declare const $: any;

@Component({
    selector: '',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']

})

export class EditProductComponent {

    constructor(
        public router: Router
    ) { }

    ngOnInit() {
        childRowTable();
        function childRowTable() {
            var childData = [
                {
                    "id": "1",
                    "name": "Golden Pack",
                    "valid_from": "20-02-2021",
                    "valid_to": "20-02-2021",
                    "tenure": "30 Days",

                }, {
                    "id": "2",
                    "name": "Starter Pack",
                    "valid_from": "20-02-2021",
                    "valid_to": "20-02-2021",
                    "tenure": "30 Days",

                }, {
                    "id": "3",
                    "name": "Golden Pack",
                    "valid_from": "20-02-2021",
                    "valid_to": "20-02-2021",
                    "tenure": "30 Days",

                }, {
                    "id": "4",
                    "name": "Starter Pack",
                    "valid_from": "20-02-2021",
                    "valid_to": "20-02-2021",
                    "tenure": "30 Days",

                }, {
                    "id": "5",
                    "name": "Golden Pack",
                    "valid_from": "20-02-2021",
                    "valid_to": "20-02-2021",
                    "tenure": "30 Days",

                }, {
                    "id": "6",
                    "name": "Starter Pack",
                    "valid_from": "20-02-2021",
                    "valid_to": "20-02-2021",
                    "tenure": "30 Days",

                }, {
                    "id": "7",
                    "name": "Golden Pack",
                    "valid_from": "20-02-2021",
                    "valid_to": "20-02-2021",
                    "tenure": "30 Days",

                }, {
                    "id": "8",
                    "name": "Starter Pack",
                    "valid_from": "20-02-2021",
                    "valid_to": "20-02-2021",
                    "tenure": "30 Days",

                }, {
                    "id": "9",
                    "name": "Golden Pack",
                    "valid_from": "20-02-2021",
                    "valid_to": "20-02-2021",
                    "tenure": "30 Days",

                }, {
                    "id": "10",
                    "name": "Starter Pack",
                    "valid_from": "20-02-2021",
                    "valid_to": "20-02-2021",
                    "tenure": "30 Days",
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
                        data: "name",
                        className:'nationalId'
                    },
                    {
                        data: "valid_from",
                        className: 'phoneNumber',
                    },
                    {
                        data: "valid_to",
                        className: 'phoneNumber',
                    },
                    {
                        data: "tenure",
                        className: 'nationalId',
                    },
                    {
                        className: 'editcenter',
                        render: (data, type, row, meta) => {
                            return '<a class="f-12 mr-2 reactivate">Reactivate</a> <a class="f-12 disqualify">Disqualify </a>'
                        },
                        "orderable": false,
                        "data": null,
                        "defaultContent": ''
                    }
                ],
                order: [[1, 'asc']]
            });
        }
    }

    gotoProduct() {
        this.router.navigate(['./hal/product/list'])
    }
}
