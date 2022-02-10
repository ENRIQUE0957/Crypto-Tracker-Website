export class coinsView{
_parentElement = document.querySelector('.coins-box')
_data;



_render(data){
this._data = data
const markup =this._generateMarkup
this._clear()
this._parentElement.insertAdjacentElement('afterbegin',markup)
}

_generateMarkup(){



    
}
_clear(){
    this._parentElement.innerHTML =""
}

}
export default new coinsView()