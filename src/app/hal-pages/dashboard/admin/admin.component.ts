import { Component } from "@angular/core";
declare const $: any;
declare const ApexCharts: any;

@Component({
    selector: '',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']

})

export class AdminComponent {
    constructor() {

    }
    records: any = []
    ngOnInit() {
        this.records[100] = 0;
        setTimeout(() => {
            $('.js-basic-example').DataTable({
                responsive: true
            });
        }, 1000);
        this.chart1()
    }
    private chart1() {
        var options = {
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    endingShape: 'rounded',
                    distributed: true,
                    columnWidth: '25%',
                    color: {
                        backgroundBarColors: ['#F9A44A', '#2EAFBC', '#F35F67', '#5A36CC'],
                    }
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            series: [{
                name: '',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }],
            xaxis: {
                categories: ['Tup', 'Hur', '5G Cap', 'ABC', 'Ang', 'Ari', 'Asp', 'Bles', 'Bomi'],
                labels: {
                    style: {
                        colors: '#52504F',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        fontFamily: 'Source Sans Pro sans-serif !important',
                    }
                }, title: {
                    text: '',
                    style: {
                        fontSize: '22px',
                        fontWeight: 'bold',
                        fontFamily: 'Source Sans Pro sans-serif !important',
                        color: '#585555'
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#52504F',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        fontFamily: 'Source Sans Pro sans-serif !important',
                    }
                }
            },
            fill: {
                opacity: 1

            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#chart1"),
            options
        );

        chart.render();


    }
}
