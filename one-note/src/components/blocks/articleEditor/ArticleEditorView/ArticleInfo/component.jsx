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
import CharacteristicListItem from '@/components/blocks/articleEditor/ArticleEditorView/CharacteristicListItem'

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
  const catalog = activeEntity(
    useSelector((state) => state.entities[entityName.id]),
    query.id
  )
  const article = activeArticle(catalog, query.subId)

  useEffect(() => {
    setArticleName(article.name)
    setDescription(article.description)
    setCharacteristic(article.characteristicList)
    setImage(article.imgList || [])
  }, [
    article.name,
    article.description,
    article.characteristicList,
    article.imgList,
  ])

  const handleChangeNameInput = ({ target }) => {
    setArticleName(target.value)
  }

  const handleChangeDescriptionInput = ({ target }) => {
    setDescription(target.value)
  }

  const onChangeUploadButton = async ({ target }) => {
    setIsLoading(true)
    await uploadFileToFirebaseStorage(target.files[0]).then((data) => {
      setImage((prev) => [...prev, data])
    })
    setIsLoading(false)
  }

  const handleDeleteImage = (img) => {
    setImage((prev) => prev.filter((item) => item.imgUrl !== img.imgUrl))
    deleteItemFromFirebaseStorage(img.imgName)
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
  }

  return (
    <Wrapper className={query.subId === null ? classes.hide : classes.show}>
      {isLoading ? <CircularProgress /> : null}
      <Title>
        <TextField
          autoComplete="off"
          id="standard-basic"
          placeholder="Article name"
          value={articleName || ''}
          onChange={handleChangeNameInput}
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
            <Button variant="contained" component="span">
              Upload image
            </Button>
          </label>
        </UploadForm>
      </SwiperContainer>
      <SubTitle>Description</SubTitle>
      <div className={classes.textArea}>
        <TextareaAutosize
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
          <CharacteristicListItem
            characteristic={characteristic}
            onHandleSave={onHandleSave}
          />
        ) : null}
      </CharacteristicWrapper>
    </Wrapper>
  )
}
