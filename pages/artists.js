import Layout from '../components/layout'
import ArtistItems from '../components/Artists/ArtistItems'
import { useEffect, useState } from 'react'
import ArtistItemsSkeleton from '../components/Artists/ArtistItemsSkeleton' 
import AddArtist from '../components/Artist/AddArtist'
import { baseUrl } from '../utils/constants'

function Artists() {
  const [loading, setLoading] = useState(false)
  const [artists, setArtists] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(baseUrl+`/artists`)
        const { data } = await res.json()
        setArtists(data)
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
        <h1 className="text-2xl font-bold text-gray-700">Artists</h1>
        <div className="flex items-center space-x-2">
          <AddArtist />
        </div>
      </header>
      <div>
      <div className="cursor-loading mt-6 mb-3 flex rounded-md border px-5 py-3 shadow-sm lg:px-8">
      <div className="flex-1 font-semibold text-sky-600">Name</div>
      <div className="flex-1 text-right font-semibold text-sky-600 lg:text-left">
        Artist
      </div>
      <div className="flex-1 text-right font-semibold text-sky-600 lg:text-left">
        Album
      </div>
      <div className="flex-1"></div>
    </div>
    </div>
      {loading ? (
        <ArtistItemsSkeleton />
      ) : (
        <ArtistItems artists={artists} />
      )}
    </div>
  )
}

export default Artists

Artists.getLayout = function getLayout(page) {
  return <Layout meta={{ name: 'Artists' }}>{page}</Layout>
}
