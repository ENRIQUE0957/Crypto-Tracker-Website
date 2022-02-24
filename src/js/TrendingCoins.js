class coinsTrending{
_parentElement = document.querySelector('.container-header')
_data;

render(data){
this._data = data
this._parentElement.innerHTML = "";
this.GenerateMarkup()
//markup
}



GenerateMarkup(data){
    for(let c = 0;c <= 2; c++){
    //you have the markup now you just have to add the properties for the coins in the specific elements 
        const markupTrend = `
    <div class = "trending-Container">
    <h2 class = "Trending-Coin-Title">
    
    </h2>
    <div class = "Trending-img">
    <img>
    </div>
    <h3 class = "Trending-Coin-ID">
    
    </h3>
    <span class  "Trending-market-Rank"></span>
    </div>
    
    
    
    
    
    `
    
    this._parentElement.insertAdjacentHTML('beforeend',markupTrend)
}
}

}
export default new TrendingCoins()