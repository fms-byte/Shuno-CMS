import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section = ({ title, children, ...props }) => (
  <section className="mb-3 rounded-md border px-3 py-4" {...props}>
    <h3 className="mb-3 text-xl font-semibold text-gray-500">{title}</h3>
    {children}
  </section>
)

const ArtistLayout = ({ artist }) => {
  return (
    <div className="mt-6 flex flex-col gap-4 overflow-auto md:flex-row">
      <div>
        <p className="mb-2 pl-3">Artist Id: {artist.id}</p>
        <Section title={'Name'}>
          <p className="text-2xl">{artist.name}</p>
        </Section>
         
        <Section title={'Genres'}>
          {
            artist.genres?.map((genre, idx) => (
              <p className="text-md max-w-md" key={idx}>{genre}</p>
            ))
          }
        </Section>
        <Section title={'Info'}>
          <p className="text-md max-w-md">Bio: {artist.bio}</p>
          <p className="text-xs">Born Year: {artist.dob}</p>
        </Section>
        <Section title={'Follower'}>
          <p className="text-xs">{artist.followerCount}</p>
          </Section>
        <Section title={'Social'}>
          <p className="text-md max-w-md"> Facebook:  {artist.fb} </p>
          <p className="text-md max-w-md"> Twitter:  {artist.twitter} </p>
        </Section>
        
      </div>
      <div>
        <div className="mb-2 h-6"></div>
        <Section title={'Photo'}>
          {artist.primaryImage ? (
             <img
             height={281}
             width={281}
             className=" max-h-[281px] max-w-[281px] rounded"
             src={artist.primaryImage}
             alt={artist.name}
           />
          ) : (
            <p className="h-[100px] w-[400px] text-center font-bold text-gray-300">
              No Image
            </p>
          )}
        </Section>
        <Section title={'Songs'}>
          {artist.songs?.length ? (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {
                artist.songs?.map((song, idx) => (
                  <div key={idx} className="mb-2">
                    <Link href={`/song/${song.id}`}>
                      <a className="flex items-center space-x-2">
                        <div className="flex-shrink-0 w-10 h-10">
                          <Image
                            src={song.primaryImage}
                            alt={song.name}
                            width={40}
                            height={40}
                            className="rounded-md"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-md">{song.name}</p> 
                        </div>
                      </a>
                    </Link>
                  </div>
                ))

              }
           
            </div>
          ) : (
            <p className="h-[100px] w-[400px] text-center font-bold text-gray-300">
              No Songs
            </p>
          )}
        </Section>
      </div>
    </div>
  )
}

export default ArtistLayout
