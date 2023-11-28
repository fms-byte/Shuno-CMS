import Layout from '../components/layout'
import AlbumItems from '../components/Albums/AlbumItems'
import { useEffect, useState } from 'react'
import AlbumItemsSkeleton from '../components/Albums/AlbumItemsSkeleton' 
import AddAlbum from '../components/Album/AddAlbum'
import { baseUrl } from '../utils/constants'

function Albums() {
  const [loading, setLoading] = useState(false)
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(baseUrl+`/albums`)
        const { data } = await res.json()
        setAlbums(data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div>
      <header className="mt-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-700">Albums</h1>
        <div className="flex items-center space-x-2">
          <AddAlbum />
        </div>
      </header>
      <div>
      <div className="cursor-loading mt-6 mb-3 flex rounded-md border px-5 py-3 shadow-sm lg:px-8">
      <div className="flex-1 font-semibold text-sky-600">Name</div>
      <div className="flex-1 text-right font-semibold text-sky-600 lg:text-left">
        Album
      </div>
      <div className="flex-1 text-right font-semibold text-sky-600 lg:text-left">
        Album
      </div>
      <div className="flex-1"></div>
    </div>
    </div>
      {loading ? (
        <AlbumItemsSkeleton />
      ) : (
        <AlbumItems albums={albums} />
      )}
    </div>
  )
}

export default Albums

Albums.getLayout = function getLayout(page) {
  return <Layout meta={{ name: 'Albums' }}>{page}</Layout>
}
