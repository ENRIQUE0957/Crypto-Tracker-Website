import { async } from 'regenerator-Runtime'
import { getJSON } from './helpers'


export const state = {
    headerStats:{},
    coins:{},
    trends:{}




    
}

export const getHeaderStats = async function(){
    try{
    const resp1 = await getJSON('https://api.coinlore.net/api/global/')
    headerStats = resp1
    state.headerStats = {
        marketCap:resp1[0].total_mcap,
        cryptos:resp1[0].coins_count,
        dominance:[resp1[0].btc_d,resp1[0].eth_d],
        Vol24:resp1[0].volume_change,
        marketCapChange:resp1[0].mcap_change,
    }
    console.log(state.headerStats)
    
    }catch(err){
        alert(err)
    }

}



    
//function to get coins we will use as parameters for our coins rendering 
export const loadCoins = async function(){
    const resp1 = await fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=EUR')
    const resp2 = await resp1.json()
   
    state.coins = resp2;
    console.log(state.coins)
    
    
    
}
loadCoins()

//we will be adding trending coins at the top 
export const getTrend = async function(){
const resp5  = await fetch('https://api.coingecko.com/api/v3/search/trending')
const resp6 = await resp5.json()

state.trends = resp6.coins
console.log(state.trends)
}
getTrend()
    

