// const { GME, MSFT, DIS, BNTX } = mockData;
// const stocks = [GME, MSFT, DIS, BNTX];

async function main() {
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    const response = await fetch('https://api.twelvedata.com/time_series?symbol=GME,AMC,AAPL,LCID&interval=1day&apikey=51d76cbd08364f46b0761ba1a3f954c2')
    const result = await response.json()
    console.log(result)

    stocks.forEach(stock => stock.values.reverse())

    // Line Chart
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.reverse().map(value => value.datetime),
            datasets: stocks.map(stock => ({
                label: stock.meta.symbol,
                data: stock.values.reverse().map(value => parseFloat(value.high)),
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
            })
            )
        },
    });

    // Bar Chart
    const xValues = stocks.map(stock => stock.meta.symbol);
    const yValues = stocks.map(value => stock.parseFloat(value.high));
    
    new Chart(highestPriceChartCanvas.getContext('2d'), {
        type: 'bar',
        data: {
            labels: xValues,
            datasets: [{
                // label: getHighestPrice(stocks.high),
                // data: stocks.values.map(value => parseFloat(value.high)),
                borderColor: ['black', 'black', 'black', 'black'],
                backgroundColor: ['red', 'pink', 'yellow', 'blue'],
                data: yValues,
            }]
        }
    });

    function getHighestValue(stock) {
        let highest = 0;
        
        for (let i = 1; i < highest.length; i++) {
            stocks[0].value.map(highest.value)
        }
    }

    function getHighestPrice(stock) {
        if (stock === "GME") {
            return Math.max(...GME.map(value => value.high))
        }
        if (stock === "MSFT") {
            return Math.max(...MSFT.map(value => value.high))
        }
        if (stock === "DIS") {
            return Math.max(...DIS.map(value => value.high))
        }
        if (stock === "BNTX") {
            return Math.max(...BNTX.map(value => value.high))
        }
    }

    function getColor(stock) {
        if (stock === "GME") {
            return 'rgba(61, 161, 61, 0.7)'
        }
        if (stock === "MSFT") {
            return 'rgba(209, 4, 25, 0.7)'
        }
        if (stock === "DIS") {
            return 'rgba(18, 4, 209, 0.7)'
        }
        if (stock === "BNTX") {
            return 'rgba(166, 43, 158, 0.7)'
        }
    }
}

main()