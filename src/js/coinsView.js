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
            <li class = "coin row">
                <a class = "preview-link" href = "#"></a>
                    <span class = "rank">${this._data.cryptoRank}</span>
                    <figure class ="figure">
                        <img src = "#" alt = "image" class ="coin-image">
                    </figure>
                    <span class = "name">
                        name: ${this._data.cryptoRank}
                    </span>
                    <span class = "24H change">
                        24Hchange:${this._data.cryptoPriceChange1H} 
                    </span>
                    <span class = "price">
                        price:} 
                    </span>
                    <span class = "coin-graph">
                        Graph: 
                    </span>
                </li>
            </ul>




`


    
}


}
export default new coinsView()