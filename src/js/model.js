import { async } from 'regenerator-Runtime'
import { getJSON } from './helpers'

export const state = {
    headerStats:{},


    
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
