class HeaderView{
_parentElement = document.querySelector('.header')
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
    
    return`
        <div class = 'header-stats'>
        
        <ul class = 'stats'>
        <li class = "stats-li">
            <div class = "crypto-name">
                cryptos:
            </div>
            <div class = "crypto-value">
                ${this._data.cryptos}
            </div>
            </li>
         <li class = "stats-li">
                <div class = "crypto-name">
                    Market Cap:
                </div>
                <div class = "crypto-value">
                    ${this._data.marketCap}
                </div>
            </li>
        <li class = "stats-li">
                <div class = "crypto-name">
                        24h Vol:
                </div>
                <div class = "crypto-value">
                        ${this._data.Vol24}
                </div>
            </li>
            <li class = "stats-li">
                        <div class = "crypto-name">
                            Dominance:
                        </div>
                        <div class = "crypto-value">
                            BTC:${this._data.dominance[0]}, 
                            Eth:${this._data.dominance[1]}
                        </div>
                        </li>
                <li class = "stats-li">
                        <div class = "crypto-name">
                                MarketCap-Change:
                        </div>
                        <div class = "crypto-value">
                                ${this._data.marketCapChange}
                        </div>
                </li>
        </ul>
    
    </div>
    `


}



}
export default new HeaderView()