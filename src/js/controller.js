import * as model from './model.js'
import headerView from './headerView.js'
import coinsView from './coinsView.js'
const RenderHeader =async function(){
    //fetching getting the object with the data we need
    await model.getHeaderStats()
    

    //rendering the data to the GUI
    headerView.render(model.state.headerStats)
    




}
RenderHeader()

const renderCoins = async function(){
    //calling the object we created 
    await model.getCoins()

    //rendering the object we created in model

    coinsView.render(model.state.crypto)






}
renderCoins()

console.log('heydsd')

