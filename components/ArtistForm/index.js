import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../common/Button'
import Input from '../common/Input'
import Select from '../common/Select'
import { MultipleSelect, OptionWithCheckbox } from '../common/MultipleSelect'
import Checkbox from '../common/Checkbox'
import RadioSelect from '../common/RadioSelect'

import FormSection from '../common/Section'

import axios from 'axios'
import { baseUrl } from '../../utils/constants'

const ArtistForm = ({ type, defaultValues, onFormSubmit, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm() 
  
  const [artists , setArtists] = useState([]);

  useEffect(() => {
    axios.get(baseUrl+'/artists').then((res) => {
      console.log(res.data)
      setArtists(res.data.data)
    })
  
    if (defaultValues) {
      setValue('name', defaultValues.name) 
      setValue('primaryImage', defaultValues.primaryImage)
      setValue('bio', defaultValues.bio)
      setValue('creatorType', defaultValues.creatorType)
      setValue('genres', defaultValues.genres)
      setValue('fb', defaultValues.fb)
      setValue('twitter', defaultValues.twitter)
      setValue('wiki', defaultValues.wiki)
      setValue('dob', defaultValues.dob)
      setValue('dominantLanguage', defaultValues.dominantLanguage)
      setValue('isBand', defaultValues.isBand)
      setValue('bandMembers', defaultValues.bandMembers)
    }
  }, [defaultValues, setValue])

  

  const onSubmit = handleSubmit(async (data) => {
    console.log(data)
    alert('hello')
    await onFormSubmit(data)
    reset()
  })

  return (
    <div {...props} className="flex flex-col space-y-6">
      <form>
        <FormSection defaultOpen={true} title={'Artist Information'}>

        <Select
            name="creatorType"
            label="Creator Type"
            error={errors.creatorType ? errors.creatorType.message : false}
            register={register('creatorType', {
              required: {
                value: true,
                message: 'You must select the creator Type',
              },
            })}
          >
            <option value="MUSIC">MUSIC</option>
            <option value="AUDIOBOOK">AUDIOBOOK</option>
            <option value="PODCAST">PODCAST</option>
            <option value="POEM">POEM</option>
          </Select>




          <Input
            name="name"
            label="Name of the Artist"
            placeholder="Artcell..."
            type="text"
            error={errors.name ? errors.name.message : false}
            register={register('name', {
              required: {
                value: true,
                message: 'You must add the name of your artist.',
              },
            })}
          />

          <Input
            name="primaryImage"
            label="Image URL"
            placeholder="Image URL..."
            type="text"
            error={errors.primaryImage ? errors.primaryImage.message : false}
            register={register('primaryImage', {
              required: {
                value: true,
                message: 'You must add the primaryImage of your artist.',
              },
            })}
          />
 

          <Input
            name="bio"
            label="Bio"
            placeholder="About the artist..."
            type="textarea"
            error={errors.bio ? errors.bio.message : false}
            register={register('bio')}
          />
           

          <MultipleSelect
            name="genres"
            multiple={true}
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
        </FormSection>
      </form>
      <FormSection title={'More Info'}>
      <Input
            name="fb"
            label="Facebook Link (optional)"
            placeholder="Facebook Link"
            type="textarea"
            error={errors.fb ? errors.fb.message : false}
            register={register('fb')}
          />
 <Input
            name="dob"
            label="Birth Year"
            placeholder="2001"
            type="text"
            error={errors.dob ? errors.dob.message : false}
            register={register('dob')}
          /> 
<Input
            name="twitter"
            label="twitter (optional)"
            placeholder="twitter Link"
            type="textarea"
            error={errors.twitter ? errors.twitter.message : false}
            register={register('twitter')}
          />
           
        <Input
            name="wiki"
            label="details link (optional)"
            placeholder="wiki Link"
            type="textarea"
            error={errors.wiki ? errors.wiki.message : false}
            register={register('wiki')}
          />


          <select
            name="dominantLanguage"
            label="Language"
            error={errors.dominantLanguage ? errors.dominantLanguage.message : false}
            
          >
            <option value="">Select Language</option>
            <option value="bangla">Bangla</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>

           
         
      </FormSection>
      <FormSection title={'Band Information'}>
          <RadioSelect
              className="w-full md:w-1/2"
              name="isBand"
              label="Is a Band?"
              register={register('isBand')}
              error={
                errors.isBand ? errors.isBand.message : false
              }
            />
            
            {
             watch('isBand') === "true" ? (

<> <MultipleSelect
              name="bandMembers"
              label="Select Band Members..."
            >
             {
                artists?.map((artist) => (
                  <OptionWithCheckbox key={artist.id} value={artist.id}>
                    {artist.name}
                  </OptionWithCheckbox>
                ))
             }
            </MultipleSelect></>
              ) : null
            }

            {/* if isBand then select Band Members */}
           
      </FormSection>

      <Button type="button" onClick={onSubmit} className="w-full">
        {type ? `${type} Artist` : 'Submit'}
      </Button>
    </div>
  )
}

export default ArtistForm
