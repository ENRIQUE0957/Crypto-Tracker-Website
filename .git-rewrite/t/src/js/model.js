import { async } from 'regenerator-Runtime'
import { getJSON } from './helpers'

export const state = {
    headerStats:{},
    crypto:{}


    
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

export const getCoins = async function(){
    try{
        const resp1 = await getJSON('https://api.coinstats.app/public/v1/coins?skip=0&limit=30&currency=EUR')
        crypto = resp1
        console.log(resp1)
        state.crypto = {
            cryptoMarketCap:resp1.coins[0].marketCap,
            cryptoRank :resp1.coins[0].rank,
            cryptoIcon:resp1.coins[0].icon,
            cryptoSymbol:resp1.coins[0].symbol,
            CryptoSupply:resp1.coins[0].availableSupply,
            cryptoVolume:resp1.coins[0].volume,
            cryptoPriceChange1D:resp1.coins[0].priceChange1d,
            cryptoPriceChange1H:resp1.coins[0].priceChange1h,
            cryptoPriceChange1W:resp1.coins[0].priceChange1w,
            cryptoPrice:resp1.coins[0].price
            
            }
            console.log(state.crypto)



    }catch(err){
        alert(err)
    }
} 
