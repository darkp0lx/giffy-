import { useEffect, useState } from "react"
import { getImages } from "../utils/GetImages"
export const useFetchGif = (name) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

  useEffect(() => {
        if (items.length === 0) {
            getImages(name).then(res => {
              const clearData = res.map(item => ({
                id: item.id,
                image: item.images.downsized.url,
                title: item.title
              }))
              setItems(clearData)
            })
          }
          if(items.length > 0) {
              setLoading(!loading)
          }
          console.log('Category', items)
  }, [items])
  return [items,loading]
}
