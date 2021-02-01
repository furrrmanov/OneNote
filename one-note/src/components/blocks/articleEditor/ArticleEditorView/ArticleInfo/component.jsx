import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/styles'

import CircularProgress from '@/components/controls/Spinner'
import {
  uploadFileToFirebaseStorage,
  deleteItemFromFirebaseStorage,
} from '@/utils/firebase'
import { updateNote } from '@/actions'
import { activeArticle, activeEntity } from '@/utils/dataMappers'
import SwiperImages from '@/components/blocks/Swiper'
import CharacteristicList from '@/components/blocks/articleEditor/ArticleEditorView/CharacteristicList'

import {
  Wrapper,
  Title,
  SwiperContainer,
  Input,
  UploadForm,
  Button,
  TextareaAutosize,
  SubTitle,
  CharacteristicWrapper,
  TextField,
  Reminder,
} from './styles'

const useStyles = makeStyles((theme) => ({
  textArea: {
    minHeight: '80px',
    paddingBottom: '10px',
  },
  hide: {
    opacity: 0,
    transition: 'opacity .2s linear',
  },
  show: {
    opacity: 1,
    transition: 'opacity .2s linear',
  },
  required: {
    color: '#ff0000',
  },
}))

export default function ArticleInfo(props) {
  const { query, entityName, subEntityName } = props
  const dispatch = useDispatch()
  const classes = useStyles()
  const [articleName, setArticleName] = useState('')
  const [description, setDescription] = useState('')
  const [characteristic, setCharacteristic] = useState([])
  const [image, setImage] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [changed, setChanged] = useState(false)
  const catalog = activeEntity(
    useSelector((state) => state.entities[entityName.id]),
    query.id
  )
  const article = activeArticle(catalog, query.subId)

  useEffect(() => {
    setArticleName(article.name)
    setDescription(article.description)
    setCharacteristic(
      article.characteristicList
        ? article.characteristicList
        : [{ characteristic: '', value: '' }]
    )
    setImage(article.imgList || [])
  }, [
    article.name,
    article.description,
    article.characteristicList,
    article.imgList,
  ])

  const handleChangeNameInput = ({ target }) => {
    setArticleName(target.value)
    setChanged(true)
  }

  const handleChangeDescriptionInput = ({ target }) => {
    setDescription(target.value)
    setChanged(true)
  }

  const onChangeUploadButton = async ({ target }) => {
    setIsLoading(true)
    await uploadFileToFirebaseStorage(target.files[0]).then((data) => {
      setImage((prev) => [...prev, data])
    })
    setIsLoading(false)
    setChanged(true)
  }

  const handleDeleteImage = (img) => {
    setImage((prev) => prev.filter((item) => item.imgUrl !== img.imgUrl))
    deleteItemFromFirebaseStorage(img.imgName)
    setChanged(true)
  }

  const onHandleSave = (value) => {
    const changedArticle = {
      ...article,
      name: articleName,
      characteristicList: value.characteristicList,
      description: description,
      imgList: image,
    }

    dispatch(
      updateNote({
        item: changedArticle,
        root: entityName.id,
        name: subEntityName.id,
      })
    )

    setChanged(false)
  }

  return (
    <Wrapper className={query.subId === null ? classes.hide : classes.show}>
      {isLoading ? <CircularProgress /> : null}
      {changed ? <Reminder>Save changes !</Reminder> : null}
      <Title>
        <TextField
          autoComplete="off"
          id="standard-basic"
          placeholder="Article name"
          value={articleName || ''}
          onChange={handleChangeNameInput}
          disabled={isLoading}
          error={!articleName}
          required
          helperText={
            !articleName ? (
              <span className={classes.required}>required</span>
            ) : null
          }
        />
      </Title>
      <SwiperContainer>
        <SwiperImages image={image} handleDeleteImage={handleDeleteImage} />
        <UploadForm enctype="multipart/form-data" method="post">
          <Input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={onChangeUploadButton}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span" disabled={isLoading}>
              Upload image
            </Button>
          </label>
        </UploadForm>
      </SwiperContainer>
      <SubTitle>Description</SubTitle>
      <div className={classes.textArea}>
        <TextareaAutosize
          disabled={isLoading}
          aria-label="minimum height"
          rowsMin={3}
          rowsMax={5}
          placeholder="Description"
          value={description || ''}
          onChange={handleChangeDescriptionInput}
        />
      </div>
      <CharacteristicWrapper>
        <SubTitle>Characteristic</SubTitle>
        {characteristic ? (
          <CharacteristicList
            characteristic={characteristic}
            onHandleSave={onHandleSave}
            isLoading={isLoading}
            changed={changed}
          />
        ) : null}
      </CharacteristicWrapper>
    </Wrapper>
  )
}
