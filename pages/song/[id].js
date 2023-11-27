import React from 'react'
import { getXataClient } from '../../utils/xata'
import Layout from '../../components/layout'
import SongLayout from '../../components/Song/SongLayout'
import DeleteSong from '../../components/Song/DeleteSong'
import UpdateSong from '../../components/Song/UpdateSong'

 

function Song({ song }) {
  return (
    <Layout meta={{ name: song?.name || 'Song' }}>
      <div>
        <header className="my-3 flex flex-col items-center justify-between rounded-md md:flex-row">
          <h1 className="mb-3 truncate text-xl font-bold text-gray-700">
            <span className="mr-2 text-sm font-medium text-gray-500">
              Song:{' '}
            </span>
            {song?.name}
          </h1>
          <div className="flex items-center space-x-2">
            <UpdateSong song={song} />
            <DeleteSong
              disabled={
                song?.id === 'rec_ce0bsgt8oiq6e92pa810' ||
                song?.id === 'rec_ce0btqp99gj1h1lgvno0'
              }
              songId={song?.id}
            />
          </div>
        </header>
        {song ? (
          <SongLayout song={song} />
        ) : (
          <div className="w-full text-center text-2xl font-bold text-gray-300">
            No details
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Song

export async function getStaticProps({ params }) {
  try {
    const songs = []
    const data = songs
      .filter({
        id: params.id,
      })
      .getMany()
    return {
      props: { song: data[0] },
    }
  } catch (error) {
    return {
      props: {},
    }
  }
}

export async function getStaticPaths() {
  const songs = []
  return {
    paths: songs.map((item) => ({
      params: { id: item.id },
    })),
    fallback: true,
  }
}
