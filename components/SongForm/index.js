import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../common/Button'
import Input from '../common/Input'
import Select from '../common/Select'
import { MultipleSelect, OptionWithCheckbox } from '../common/MultipleSelect'
import Checkbox from '../common/Checkbox'
import RadioSelect from '../common/RadioSelect'

import FormSection from '../common/Section'
import MediaUpload from '../common/MediaUpload'
import ThumbnailUpload from '../common/ThumbnailUpload'

const SongForm = ({ type, defaultValues, onFormSubmit, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm()

  useEffect(() => {
    if (defaultValues) {
      setValue('name', defaultValues.name)
      setValue('description', defaultValues.description)
      setValue('price', defaultValues.price)
      setValue('stock', defaultValues.stock)
      setValue('thumbnail', defaultValues.thumbnail)
      setValue('media', defaultValues.media)
    }
  }, [defaultValues, setValue])

  const onSubmit = handleSubmit(async (data) => {
    await onFormSubmit(data)
    reset()
  })

  return (
    <div {...props} className="flex flex-col space-y-6">
      <form>
        <FormSection defaultOpen={true} title={'Song Information'}>
          <Input
            name="name"
            label="Name of the Song"
            placeholder="My beautiful song..."
            type="text"
            error={errors.name ? errors.name.message : false}
            register={register('name', {
              required: {
                value: true,
                message: 'You must add the name of your song.',
              },
            })}
          />
          <Input
            name="description"
            label="Description (optional)"
            placeholder="Warm and cozy. Beautiful and elegant..."
            type="textarea"
            error={errors.description ? errors.description.message : false}
            register={register('description')}
          />
          <Select
            name="album"
            label="Name of the Album"
            error={errors.album ? errors.album.message : false}
            register={register('album', {
              required: {
                value: true,
                message: 'You must add the name of your song.',
              },
            })}
          >
            <option value="">Select Album</option>
            <option value="album-1">Album 1</option>
            <option value="album-2">Album 2</option>
            <option value="album-3">Album 3</option>
          </Select>

          <Input
            name="year"
            label="Publish Year (optional)"
            placeholder="Publish year of the song..."
            type="text"
            error={errors.year ? errors.year.message : false}
            register={register('year')}
          />
          <Input
            name="duration"
            label="Duration of the song"
            placeholder="Duration of the song..."
            type="number"
            error={errors.duration ? errors.duration.message : false}
            register={register('duration', {
              required: {
                value: true,
                message: 'You must add the duartion of your song.',
              },
            })}
          />
          <Input
            name="label"
            label="Label (optional)"
            placeholder="Enter label of the song..."
            type="text"
            error={errors.label ? errors.label.message : false}
            register={register('label')}
          />

          <MultipleSelect
            name="primaryArtist"
            label="Primary Artist (one or more)"
            error={errors.primaryArtist ? errors.primaryArtist.message : false}
            multiple
            register={register('primaryArtist', {
              required: {
                value: true,
                message: 'You must select Primary artist.',
              },
            })}
          >
            <OptionWithCheckbox value="">Select Artist</OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-1">
              Primary Artist 1
            </OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-2">
              Primary Artist 2
            </OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-3">
              Primary Artist 3
            </OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-4">
              Primary Artist 4
            </OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-5">
              Primary Artist 5
            </OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-6">
              Primary Artist 6
            </OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-7">
              Primary Artist 7
            </OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-8">
              Primary Artist 8
            </OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-9">
              Primary Artist 9
            </OptionWithCheckbox>
          </MultipleSelect>

          <MultipleSelect
            name="featuredArtists"
            label="Featured Artists (one or more) (optional)"
            error={
              errors.featuredArtists ? errors.featuredArtists.message : false
            }
            multiple
            register={register('featuredArtists')}
          >
            <OptionWithCheckbox value="">Select Artist</OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-1">
              Featured Artists 1
            </OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-2">
              Featured Artists 2
            </OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-3">
              Featured Artists 3
            </OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-4">
              Featured Artists 4
            </OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-5">
              Featured Artists 5
            </OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-6">
              Featured Artists 6
            </OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-7">
              Featured Artists 7
            </OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-8">
              Featured Artists 8
            </OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-9">
              Featured Artists 9
            </OptionWithCheckbox>
          </MultipleSelect>

          <Select
            name="language"
            label="Language"
            error={errors.language ? errors.language.message : false}
            register={register('language', {
              required: {
                value: true,
                message: 'You must add the name of your song.',
              },
            })}
          >
            <option value="">Select Language</option>
            <option value="bangla">Bangla</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </Select>

          <RadioSelect
            name="hasLyrics"
            label="Has Lyrics ?"
            register={register('hasLyrics')}
            error={errors.hasLyrics ? errors.hasLyrics.message : false}
          />

          <Input
            name="url"
            label="URL of the song"
            placeholder="Example: https://www.youtube.com/watch?v=..."
            type="text"
            error={errors.url ? errors.url.message : false}
            register={register('url', {
              required: {
                value: true,
                message: 'You must add the URL of your song.',
              },
            })}
          />

          <Input
            name="copyright"
            label="Copy Right (optional)"
            placeholder="Enter copy right of the song..."
            type="text"
            error={errors.copyright ? errors.copyright.message : false}
            register={register('copyright')}
          />

          <Select
            name="contentType"
            label="Select Content Type"
            error={errors.contentType ? errors.contentType.message : false}
            register={register('contentType', {
              required: {
                value: true,
                message: 'You must select content type of the song.',
              },
            })}
          >
            <option value="MUSIC">MUSIC</option>
            <option value="AUDIOBOOK">AUDIOBOOK</option>
            <option value="PODCAST">PODCAST</option>
            <option value="POEM">POEM</option>
          </Select>

          <Input
            name="downloadUrls"
            label="Download URL of the song (optional)"
            placeholder="Use comma to separate multiple URLs..."
            type="text"
            error={errors.downloadUrls ? errors.downloadUrls.message : false}
            register={register('downloadUrls')}
          />

          <Input
            name="origin"
            label="Origin"
            placeholder="Origin of the song..."
            type="text"
            error={errors.origin ? errors.origin.message : false}
            register={register('origin', {
              required: {
                value: true,
                message: 'You must add the origin of your song.',
              },
            })}
          />

          <Input
            name="lyricsSnippet"
            label="Lyrics Snippet"
            placeholder="Lyrics snippet of the song..."
            type="text"
            error={errors.lyricsSnippet ? errors.lyricsSnippet.message : false}
            register={register('lyricsSnippet')}
          />

          <Input
            name="encryptedMediaUrl"
            label="Encrypted Media URL"
            placeholder="Encrypted media URL of the song..."
            type="text"
            error={
              errors.encryptedMediaUrl
                ? errors.encryptedMediaUrl.message
                : false
            }
            register={register('encryptedMediaUrl')}
          />

          <Input
            name="encryptedMediaPath"
            label="Encrypted Media Path"
            placeholder="Encrypted media path of the song..."
            type="text"
            error={
              errors.encryptedMediaPath
                ? errors.encryptedMediaPath.message
                : false
            }
            register={register('encryptedMediaPath')}
          />

          <Input
            name="mediaPreviewUrl"
            label="Media Preview URL"
            placeholder="Media preview URL of the song..."
            type="text"
            error={
              errors.mediaPreviewUrl ? errors.mediaPreviewUrl.message : false
            }
            register={register('mediaPreviewUrl')}
          />

          <Input
            name="permaUrl"
            label="Perma URL"
            placeholder="Perma URL of the song..."
            type="text"
            error={errors.permaUrl ? errors.permaUrl.message : false}
            register={register('permaUrl')}
          />

          <Input
            name="albumUrl"
            label="Album URL"
            placeholder="Album URL of the song..."
            type="text"
            error={errors.albumUrl ? errors.albumUrl.message : false}
            register={register('albumUrl')}
          />
          <div className="flex flex-col items-center justify-center md:flex-row md:space-x-2">
            <RadioSelect
              className="w-full border-b border-gray-300 md:w-1/2 md:border-b-0 md:border-r-2"
              name="kbps320"
              label="Kbps320?"
              register={register('kbps320')}
              error={errors.kbps320 ? errors.kbps320.message : false}
            />

            <RadioSelect
              className="w-full md:w-1/2"
              name="isDolbyContent"
              label="Is Dolby Content?"
              register={register('isDolbyContent')}
              error={
                errors.isDolbyContent ? errors.isDolbyContent.message : false
              }
            />
          </div>

        

          <Input
            name="labelUrl"
            label="Label Url (optional)"
            placeholder="Label URL of the song..."
            type="text"
            error={errors.labelUrl ? errors.labelUrl.message : false}
            register={register('labelUrl')}
          />

<MultipleSelect
            name="genres"
            label="Select Genre of the artist..."
            error={errors.genres ? errors.genres.message : false}
            register={register('genres', {
              required: {
                value: true,
                message: 'You must select genre of the artist.',
              },
            })}
          >
              <option value="pop">Pop</option>
              <option value="rock">Rock</option>
              <option value="hiphop">Hip Hop</option>
              <option value="rnb">RnB</option>
              <option value="jazz">Jazz</option>
              <option value="country">Country</option>
              <option value="classical">Classical</option>
              <option value="metal">Metal</option>
              <option value="blues">Blues</option>
              <option value="folk">Folk</option>
              <option value="reggae">Reggae</option>
              <option value="punk">Punk</option>
              <option value="electronic">Electronic</option>
              <option value="dance">Dance</option>
              <option value="house">House</option>
              <option value="trance">Trance</option>
              <option value="techno">Techno</option>
              <option value="dubstep">Dubstep</option>
              <option value="drumnbass">Drum Bass</option>
              <option value="ambient">Ambient</option>
              <option value="chill">Chill</option>
              <option value="lounge">Lounge</option>
              <option value="trap">Trap</option>
              <option value="indie">Indie</option>
              <option value="alternative">Alternative</option>
              <option value="grunge">Grunge</option>
              <option value="psychedelic">Psychedelic</option>
              <option value="experimental">Experimental</option>
              <option value="funk">Funk</option>
              <option value="soul">Soul</option>
              <option value="disco">Disco</option>
              <option value="gospel">Gospel</option>
              <option value="christian">Christian</option>
              <option value="instrumental">Instrumental</option>
              <option value="soundtrack">Soundtrack</option>
              <option value="kpop">Kpop</option>
              <option value="jpop">Jpop</option>
              <option value="anime">Anime</option>
              <option value="game">Game</option>
              <option value="other">Other</option>
              <option value="adhunik-bangla">Adhunik</option>
              <option value="rabindra-sangeet">Rabindra</option>
              <option value="nazrul-geeti">Nazrul Geeti</option>
              <option value="bangla-folk">Bangla Folk</option>
              <option value="bangla-rock">Bangla Rock</option>
              <option value="bangla-pop">Bangla Pop</option>
              <option value="bangla-hip-hop">Bangla HipHop</option>
              <option value="bangla-classical">Bangla Classical</option>
              <option value="bangla-baul">Bangla Baul</option>
              <option value="bangla-bhawaiya">Bangla Bhawaiya</option>
              <option value="bangla-jari">Bangla Jari</option>
              <option value="bangla-sari">Bangla Sari</option>
              <option value="bangla-lalon">Bangla Lalon</option>
              <option value="bangla-adhunik">Bangla Adhunik</option>
              <option value="bangla-modern">Bangla Modern</option>
              <option value="bangla-fusion">Bangla Fusion</option>
              <option value="bangla-band">Bangla Band</option>
          </MultipleSelect>

          <div className="flex flex-col items-center md:flex-row md:space-x-2">
            <Input
              className=""
              name="price"
              label="Price"
              placeholder="36.5"
              type="number"
              multiline
              error={errors.price ? errors.price.message : false}
              register={register('price', {
                required: {
                  value: true,
                  message: 'You must add the price of your song.',
                },
                setValueAs: (v) => parseFloat(v),
              })}
            />
            <Input
              className=""
              name="stock"
              label="Stock"
              placeholder="1000"
              type="number"
              multiline
              error={errors.stock ? errors.stock.message : false}
              register={register('stock', {
                required: {
                  value: true,
                  message: 'You must add the price of your song.',
                },
                setValueAs: (v) => parseInt(v),
              })}
            />
          </div>
        </FormSection>
      </form>
      <FormSection title={'Thumbnail Upload'}>
        <ThumbnailUpload
          defaultValue={defaultValues?.thumbnail}
          setValue={setValue}
        />
      </FormSection>
      <FormSection title={'Media Upload'}>
        <MediaUpload defaultValues={defaultValues?.media} setValue={setValue} />
      </FormSection>

      <Button type="button" onClick={onSubmit} className="w-full">
        {type ? `${type} Song` : 'Submit'}
      </Button>
    </div>
  )
}

export default SongForm
