class coinsTrending{
_parentElement = document.querySelector('.container-header')
_data;

render(data){
this._data = data
console.log(this._data)
this.GenerateMarkup(data)


}



GenerateMarkup(data){
    for(let c = 0;c <= 2; c++){
    //you have the markup now you just have to add the properties for the coins in the specific elements 
        const markup = `
        <div class = "trending-Container">
        <h2 class = "Trending-Coin-Title">
            ${data[c].item.name}
        </h2>
        <div class = "Trending-img">
            <img class = "Trending-img" src = ${data[c].item.small}>
        </div>
        <h3 class = "Trending-Coin-ID">
            ${data[c].item.symbol}
        </h3>
        <span class ="Trending-market-Rank">
        Rank
        ${data[c].item.market_cap_rank}
        </span>
        </div>
    `
        this._parentElement.insertAdjacentHTML('beforeend',markup)
    
}
}

}
export default new coinsTrending()