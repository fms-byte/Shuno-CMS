import React from 'react'
import { getXataClient } from '../../utils/xata'
import Layout from '../../components/layout'
import ArtistLayout from '../../components/Artist/ArtistLayout'
import DeleteArtist from '../../components/Artist/DeleteArtist'
import UpdateArtist from '../../components/Artist/UpdateArtist'

 

function Artist({ artist }) {
  return (
    <Layout meta={{ name: artist?.name || 'Artist' }}>
      <div>
        <header className="my-3 flex flex-col items-center justify-between rounded-md md:flex-row">
          <h1 className="mb-3 truncate text-xl font-bold text-gray-700">
            <span className="mr-2 text-sm font-medium text-gray-500">
              Artist:{' '}
            </span>
            {artist?.name}
          </h1>
          <div className="flex items-center space-x-2">
            <UpdateArtist artist={artist} />
            <DeleteArtist
              disabled={
                artist?.id === 'rec_ce0bsgt8oiq6e92pa810' ||
                artist?.id === 'rec_ce0btqp99gj1h1lgvno0'
              }
              artistId={artist?.id}
            />
          </div>
        </header>
        {artist ? (
          <ArtistLayout artist={artist} />
        ) : (
          <div className="w-full text-center text-2xl font-bold text-gray-300">
            No details
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Artist

export async function getStaticProps({ params }) {
  try {
    const artists = []
    const data = artists
      .filter({
        id: params.id,
      })
      .getMany()
    return {
      props: { artist: data[0] },
    }
  } catch (error) {
    return {
      props: {},
    }
  }
}

export async function getStaticPaths() {
  const artists = []
  return {
    paths: artists.map((item) => ({
      params: { id: item.id },
    })),
    fallback: true,
  }
}
