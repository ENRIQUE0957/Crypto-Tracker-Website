import * as model from './model.js'
import headerView from './headerView.js'
import coinsView from './coinsView.js'
const parentElement = document.querySelector('.coins-box')
const RenderHeader =async function(){
    //fetching getting the object with the data we need
    await model.getHeaderStats()
    

    //rendering the data to the GUI
    headerView.render(model.state.headerStats)
    

//here we used the mvc paradigm 


}
RenderHeader()









//rendering our coins 
const renderCoins = async function(){
document.addEventListener('DOMContentLoaded',async() =>{
    //getting the object we are using as a parameter
    await model.loadCoins()


    //rendering the data
    coinsView.render(model.state.coins.coins)

})
}

renderCoins()


const renderTrending = async function(){
    //await model.getTrend()
}