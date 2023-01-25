const { Chart } = require("chart.js");

async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    const response = await fetch ('https://api.twelvedata.com/time_series?symbol=GME,AMC,AAPL,LCID&interval=1day&apikey=')
    console.log(response)

    let GME = result.GME
    let MSFT = result.MSFT
    let DIS = result.DIS
    let BTNX = result.BTNX

    const { GME, MSFT, DIS, BNTX } = mockData;
    const stocks = [GME, MSFT, DIS, BNTX];
    console.log(Chart)

    const result = await response.json()
    console.log(result)

    stocks.forEach(stock => stock.values.reverse())

    // Chart
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: stocks[0].values.map(value => value.datetime),
        datasets: stocks.map(stock => ({
            label: stock.meta.symbol,
            data: stock.values.map(calue => parseFloat(value.high)),
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

}


main()

