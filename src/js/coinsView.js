class coinsView {
_parentElement = document.querySelector('.coins-box')
_data;


render(data){
    this._data = data;
    const markup = this._GenerateMarkup();
    this._clear()
    this._parentElement.insertAdjacentHTML("afterbegin",markup)
    console.log(this._data)
}

_clear(){
    this._parentElement.innerHTML = ''
 }


_GenerateMarkup(){
        return `
        <ul class = 'coins'>
            <li class = "coin-row">
            <div class = "crypto-ID">
            <img src = "${this._data.cryptoIcon}" alt = "image" class ="coin-image">
                <a class = "preview-link" href = "#"></a>
                <span class = "name">
                         ${this._data.cryptoSymbol}
                    </span>
                    <span class = "rank">${this._data.cryptoRank}</span>
                    </div>
                    <div class ="crypto-Stats">
                    <span class = "Volume-change">${this._data.cryptoVolume}</span>
                    <span class = "coin-marketcap">
                        ${this._data.cryptoMarketCap} 
                    </span>
                    <span class = "price">
                        ${this._data.cryptoPrice} 
                    </span>
                    </div>
                    <span class = "coin-graph">
                        Graph: 
                    </span>
                </li>
            </ul>




`


    
}


}
export default new coinsView()