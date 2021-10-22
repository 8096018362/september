import { Component } from "@angular/core";
import { Router } from '@angular/router';
declare const $: any;
declare const ApexCharts: any;

@Component({
    selector: '',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']

})

export class ListComponent {

    constructor(
        public router: Router
    ) { }

    ngOnInit() {
        this.productportfolio(['Paying', 'Pending', 'Failed', 'Requested'], [2, 3, 4, 5])
    }


    gotoEditProduct(obj) {
        this.router.navigate(['./hal/product/edit'])
    }

    private productportfolio(labels, values) {

        var options = {
            chart: {
                type: 'pie',
                height: '400px'
            },

            dataLabels: {
                enabled: true,
                formatter: function (val, opts) {
                    return opts.w.config.series[opts.seriesIndex]
                }
            },
            legend: {
                position: 'bottom',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#585555'
            },

            colors: ['#4695C7', '#61D69C', '#DD7915', '#8D929B'],
            labels: labels,
            series: values,
        }

        var chart = new ApexCharts(
            document.querySelector("#productportfolio"),
            options
        );

        chart.render();


    }
}
