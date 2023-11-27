import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../common/Button'
import Input from '../common/Input'
import { MultipleSelect, OptionWithCheckbox } from '../common/MultipleSelect'
import FormSection from './Section'
import MediaUpload from './MediaUpload'
import ThumbnailUpload from './ThumbnailUpload'

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
            name="album"
            label="Name of the Album"
            placeholder="My favourite album..."
            type="text"
            error={errors.album ? errors.album.message : false}
            register={register('album', {
              required: {
                value: true,
                message: 'You must add the name of your song.',
              },
            })}
          />
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
                message: 'You must select an artist.',
              },
            })}
          >
            <OptionWithCheckbox value="">Select Artist</OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-1">Primary Artist 1</OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-2">Primary Artist 2</OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-3">Primary Artist 3</OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-4">Primary Artist 4</OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-5">Primary Artist 5</OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-6">Primary Artist 6</OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-7">Primary Artist 7</OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-8">Primary Artist 8</OptionWithCheckbox>
            <OptionWithCheckbox value="primary-artist-9">Primary Artist 9</OptionWithCheckbox>
          </MultipleSelect>

          <MultipleSelect
            name="featuredArtists"
            label="Featured Artists (one or more)"
            error={errors.featuredArtists ? errors.featuredArtists.message : false}
            multiple
            register={register('featuredArtists', {
              required: {
                value: true,
                message: 'You must select an artist.',
              },
            })}
          >
            <OptionWithCheckbox value="">Select Artist</OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-1">Featured Artists 1</OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-2">Featured Artists 2</OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-3">Featured Artists 3</OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-4">Featured Artists 4</OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-5">Featured Artists 5</OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-6">Featured Artists 6</OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-7">Featured Artists 7</OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-8">Featured Artists 8</OptionWithCheckbox>
            <OptionWithCheckbox value="fearured-artist-9">Featured Artists 9</OptionWithCheckbox>
          </MultipleSelect>

          <Input
            name="description"
            label="Description (optional)"
            placeholder="Warm and cozy. Beautiful and elegant..."
            type="textarea"
            error={errors.description ? errors.description.message : false}
            register={register('description')}
          />
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
