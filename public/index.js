const { Chart } = require("chart.js");


const { GME, MSFT, DIS, BNTX } = mockData;
    const stocks = [GME, MSFT, DIS, BNTX];
    console.log(Chart)

async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    const response = await fetch ('https://api.twelvedata.com/time_series?symbol=GME,AMC,AAPL,LCID&interval=1day&apikey=')
    console.log(response)

    // let GME = result.GME
    // let MSFT = result.MSFT
    // let DIS = result.DIS
    // let BTNX = result.BTNX

    

    const result = await response.json()
    console.log(result)

    stocks.forEach(stock => stock.values.reverse())

    // Line Chart
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: stocks[0].values.map(value => value.datetime),
        datasets: stocks.map(stock => ({
            label: stock.meta.symbol,
            data: stock.values.map(value => parseFloat(value.high)),
            backgroundColor: getColor(stock.meta.symbol),
            borderColor: getColor(stock.meta.symbol),
        })
    )}, 
});

function getColor(stock){
    if(stock === "GME"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}
console.log(stocks[0].values)

// Bar Chart
var ctx = document.getElementById('highest-price-chart').getContext('2d');
var barChart = new Chart(highestPriceChartCanvas.getContext('2d')), {
    type: 'bar',
    data: {
        labels: stocks[0].value.map(cost => cost.highestprice),
        datasets: [{
            label: getHighestPrice(stocks.meta.symbol),
            data: stocks.cost.map(cost => parseFloat(cost.high)),
            backgroundColor: getColor(stock.meta.symbol),
            borderColor: getColor(stock.meta.symbol),
            options: {
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              },
        }]
    }
};

function getHighestPrice(stock) {
    if(stock === "GME"){
        return Math.max(...GME.map(cost => cost.highestprice))
    }
    if(stock === "MSFT"){
        return Math.max(...MSFT.map(cost => cost.highestprice))
    }
    if(stock === "DIS"){
        return Math.max(...DIS.map(cost => cost.highestprice))
    }
    if(stock === "BNTX"){
        return Math.max(...BNTX.map(cost => cost.highestprice))
    }
}
console.log(stocks[0].cost)
  
}

main()
