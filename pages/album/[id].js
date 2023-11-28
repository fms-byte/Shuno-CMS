import React from 'react'
import Layout from '../../components/layout'
import AlbumLayout from '../../components/Album/AlbumLayout'
import DeleteAlbum from '../../components/Album/DeleteAlbum'
import UpdateAlbum from '../../components/Album/UpdateAlbum'

 

function Album({ album }) {
  return (
    <Layout meta={{ name: album?.name || 'Album' }}>
      <div>
        <header className="my-3 flex flex-col items-center justify-between rounded-md md:flex-row">
          <h1 className="mb-3 truncate text-xl font-bold text-gray-700">
            <span className="mr-2 text-sm font-medium text-gray-500">
              Album:{' '}
            </span>
            {album?.name}
          </h1>
          <div className="flex items-center space-x-2">
            <UpdateAlbum album={album} />
            <DeleteAlbum
              disabled={
                album?.id === 'rec_ce0bsgt8oiq6e92pa810' ||
                album?.id === 'rec_ce0btqp99gj1h1lgvno0'
              }
              albumId={album?.id}
            />
          </div>
        </header>
        {album ? (
          <AlbumLayout album={album} />
        ) : (
          <div className="w-full text-center text-2xl font-bold text-gray-300">
            No details
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Album

export async function getStaticProps({ params }) {
  try {
    const albums = []
    const data = albums
      .filter({
        id: params.id,
      })
      .getMany()
    return {
      props: { album: data[0] },
    }
  } catch (error) {
    return {
      props: {},
    }
  }
}

export async function getStaticPaths() {
  const albums = []
  return {
    paths: albums.map((item) => ({
      params: { id: item.id },
    })),
    fallback: true,
  }
}
