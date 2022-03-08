import * as model from './model.js'
import headerView from './headerView.js'
import coinsView from './coinsView.js'
import coinsTrending from './TrendingCoins.js'
import PaginationView from './PaginationView.js'

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

    //getting the object we are using as a parameter
    await model.loadCoins()


    //rendering the data
    coinsView.render(model.GetPageNumber(1))

    PaginationView.render(model.state.getSeachResultsPage)

}

//function for the updating of the pagination buttons
const controlPagination = function(goToPage){
    coinsView.render(model.GetPageNumber(goToPage))

    PaginationView.render(model.state.getSeachResultsPage)

}




const renderTrending = async function(){
    await model.getTrend()


    coinsTrending.render(model.state.trends)
}

renderTrending()
//this function calls the adaHandler function and inserts that btn we get and uses it a parameter for our control pagination function
const init = function(){
    
PaginationView.adaHandler(controlPagination)
renderCoins()
   
}
init();
