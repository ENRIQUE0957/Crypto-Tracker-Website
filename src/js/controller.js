import * as model from './model.js'
import headerView from './headerView.js'
const RenderHeader =async function(){
    //fetching getting the object with the data we need
    await model.getHeaderStats()
    

    //rendering the data to the GUI
    headerView.render(model.state.headerStats)
    




}
RenderHeader()




console.log('heydsd')

