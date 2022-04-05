let myChart = document.getElementById('myChart').getContext('2d');





let massPopChart = new Chart(myChart , {


    // Histogram 
    // 1 . Various pincodes vs no of subscribers (agency)
    // 2 . Varous newspapers vs no of subscribers (in particualar area) (vender , agency)

    // Bar
    // 1 . Users per vendor in different localities 

    // type : 'bar',
    // data : {
    //     labels : ['416001','416002','416003','416004','416005','416006'],
    //     datasets : [{
    //         label : 'Number of Subscripbers',
    //         data :  [
    //             302,
    //             507,
    //             276,
    //             347,
    //             389,
    //             189
    //         ],
    //         backgroundColor: [
    //             'rgba(255, 99, 132, 0.6)',
    //             'rgba(255, 159, 64, 0.6)',
    //             'rgba(255, 205, 86, 0.6)',
    //             'rgba(75, 192, 192, 0.6)',
    //             'rgba(54, 162, 235, 0.6)',
    //             'rgba(153, 102, 255, 0.6)',
    //             'rgba(201, 203, 207, 0.6)'
    //           ],
    //     }]
    // },
    // options : {    
    //     layout: {
    //         padding: {
    //             left : 30,
    //             top : 40,
    //             right : 50
    //         }
    //     }
    // }


    

     // Doughnut 
    // 1 . Various pincodes vs no of subscribers (agency)
    // 2 . Varous newspapers vs no of subscribers (in particualar area) (vender , agency)
    
    
    // type : 'doughnut',
    // data : {
    //     labels: [
    //         'Sakal',
    //         'Lokmat',
    //         'Laksatta',
    //         'TOI',
    //         'The Hindu',
    //         'Indian Express',
    //         'Pudhari'
    //     ],
    //     datasets: [{
    //         label: 'Newspaper Distribution in 416001',
    //         data: [453, 237, 180 , 341 , 127 , 436],
    //         backgroundColor: [
    //             'rgba(255, 99, 132)',
    //             'rgba(255, 159, 64)',
    //             'rgba(255, 205, 86)',
    //             'rgba(75, 192, 192)',
    //             'rgba(54, 162, 235)',
    //             'rgba(153, 102, 255)',
    //             'rgba(201, 203, 207)'
    //         ],
    //         hoverOffset: 5
    //     }]
    // },
    // borderWidth : 1,
    // options : {
    //     layout: {
    //         // padding: {
    //         //     left : 30,
    //         //     top : 40,
    //         //     right : 50
    //         // }
    //     },
    //     radius : 150
    // }


    

    // Line Graph

    // 1 . Revenue History of a pariticular vendor (Monthly) (vendor)
    // 2 . Comparison Graph of Various news paper users of particualar locality and district (locality -> vendor , locality and district -> vendor , agency) 
    // type : 'line',
    // data : {
    //     labels: ['1','2','3','4','5','6','7'],
    //     datasets: [{
    //         label: 'My First Dataset',
    //         data: [65, 59, 80, 81, 56, 55, 40],
    //         fill: true,
    //         borderColor: 'rgb(75, 192, 192)',
    //         tension: 0.1
    //     } , 
    //     {
    //         label: 'My First Dataset',
    //         data: [5, 49, 102, 54, 109, 23, 40],
    //         fill: true,
    //         borderColor: 'rgb(75, 150, 192)',
    //         tension: 0.1
    //     }
    // ]}


    // Gauge Chart
    // 1 . Comparison of current month revenue with his maximum revenue

    type: 'doughnut',
    data: {
        labels: ["Last Month Revenue", "Max Revenue"],
        datasets: [{
        label: '# of Votes',
        data: [90, 10],
        backgroundColor: ['Green','Grey']
        }]
    },
    options: {
        rotation: 270, 
        circumference: 180, 
        radius : 150
    }


});