class CoinsView{
_parentElement = document.querySelector('.template')
_c



render(c){
    this._c = c;
    //clearing the parent element before we manipulate it
    this._parentElement.innerHTML = ''
    
    this.loopOverCoins(c)
}



loopOverCoins(c){
    //function to get the chart array prices
    const renderGraph = async function(c){
        //first we will have a function to get the chart info 
        //this function will return an array with the price info into an array
       const res = await fetch(`https://api.coinstats.app/public/v1/charts?period=1w&coinId=${c}`)
       const resp1 = res.json()
       try{
        const resp2 = await resp1
        const data = resp2.chart
        const priceHistory = data
        data.forEach((element,j) => {
          priceHistory.push(element[1])
            
          
        });
        return priceHistory
        
    
    
       }catch(err){
           alert(err)
       }
        
    }
    





    //we will loop over the html we want to insert into our webpage 
    for(let j = 0; j < c.length;j++){
        //markup that will be manipulated into html
       const markup = `
      
       <li class = "crypto">
        <div class = "crypto-ID">
        <img src = "${c[j].icon}" alt = "image" class ="coin-image">
            <a class = "preview-link" href = "#"></a>
            <span class = "name">
                     ${c[j].name}
                </span>
                <span class = "rank">${c[j].symbol}</span>
                </div>
                
                <span class = "Volume-change">${c[j].volume}%</span>
                <span class = "coin-marketcap">
                    ${c[j].marketCap.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })} 
                </span>
                
                <span class = "price">
                    ${c[j].price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                        </span>
                        <div class="chart__container" id="container${j+1}" style="width: 13%">
                        </div>

                       
                        <span class = "coin-Supply">
                        ${c[j].totalSupply}M
                        </span>

                     
                       
                </li>
                
                    
                     
                ` 
                //this will insert the crypto id as a paramater for our crypo array function we will use this in our graph data
                const graphArray = renderGraph(c[j].id).then((success, err) =>{
                    if(err){
                      console.log(err)
                    }
                
                this._parentElement.insertAdjacentHTML('beforeend',markup)
                

                    //creating the chart for our container 
                new Highcharts.stockChart(`container${j+1}`, {
                    responsive: {
                      
                      rules: [
                        {
                          condition: {
                            maxWidth:10,
                            
                          },
                        },
                      ],
                    },
                    chart: {
                      margin: 1,
                      backgroundColor: "white",
                     
                      
                      
                    },
                    series: [
                      {
                        data:success 
                      },
                    ],
                    navigation: {
                      buttonOptions: {
                        enabled: false,
                      },
                    },
                    rangeSelector: {
                      enabled: false,
                    },
                    navigator: {
                      enabled: false,
                    },
                    scrollbar: {
                      enabled: false,
                    },
                    tooltip: { enabled: false },
                    credits: {
                      enabled: false,
                    },
                    xAxis: {
                      lineWidth: 0,
                      minorGridLineWidth: 0,
                      lineColor: "transparent",
                
                      labels: {
                        enabled: false,
                      },
                      minorTickLength: 0,
                      tickLength: 0,
                    },
                
                    yAxis: {
                      gridLineWidth: 0,
                      minorGridLineWidth: 0,
                      labels: {
                        enabled: false,
                      },
                      plotLines: [
                        {
                          value: 0,
                          width: 0,
                          color: 'green',
                          zIndex: 10,
                        },
                      ],
                
                      stackLabels: {
                        enabled: true,
                      },
                
                    
                
                    
                 
                
                
                
                    
                }         })
            
            
            
            
            
            
            
                })}
                    
    
                
    
    
    
    
}


}

export default new CoinsView()