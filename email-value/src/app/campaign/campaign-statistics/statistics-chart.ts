export class StatisticsChart {
  public lineChartData: Array<any> = [
    {data: [0, 250, 0, 0, 0, 0, 0], label: 'Sent'},
    {data: [0, 250, 0, 0, 0, 0, 0], label: 'Delivered'},
    {data: [0, 0, 135, 0, 0, 0, 0], label: 'Opened'},
    {data: [0, 0, 0, 50, 0, 0, 0], label: 'Clicked'},
    {data: [0, 0, 0, 0, 13, 0, 0], label: 'Unsubscribed'},
    {data: [0, 0, 0, 0, 0, 5, 0], label: 'Spam'},
    {data: [0, 0, 0, 0, 0, 0, 0], label: 'Mistakes'}
  ];

  public labels: Array<string> = [
    'Sent',
    'Delivered',
    'Opened',
    'Clicked',
    'Unsubscribed',
    'Spam',
    'Mistakes'
  ];

  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
}
