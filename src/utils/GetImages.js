export const getImages=async(name)=>{
    const api="Xj2lLmVKMNS1QQGTiAmKtKvC7RXl2QjB"
    const URL_BASE="https://api.giphy.com/v1/gifs/search?"
    const dataFetch=await fetch(`${URL_BASE}api_key=${api}&q=${name}&limit=4`)
    const {data}=await dataFetch.json()
    console.log({data})
    return data
}
