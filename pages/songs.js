import Layout from '../components/layout'
import SongItems from '../components/Songs/SongItems'
import { useEffect, useState } from 'react'
import SongItemsSkeleton from '../components/Songs/SongItemsSkeleton' 
import AddSong from '../components/Song/AddSong'

function Songs() {
  const [loading, setLoading] = useState(false)
  const [songs, setSongs] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/songs/getSongs`)
        const { data } = await res.json()
        setSongs(data)
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
        <h1 className="text-2xl font-bold text-gray-700">Songs</h1>
        <div className="flex items-center space-x-2">
          <AddSong />
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
        <SongItemsSkeleton />
      ) : (
        <SongItems songs={songs} />
      )}
    </div>
  )
}

export default Songs

Songs.getLayout = function getLayout(page) {
  return <Layout meta={{ name: 'Songs' }}>{page}</Layout>
}
