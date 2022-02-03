export const state = {
    headerStats:{},
}

const getHeaderStats =async function(){
    const resp = await fetch('https://api.coinstats.app/public/v1/charts?period=1m&coinId=ethereum')
    const resp1 = await resp.json()
    console.log(resp1)

}
