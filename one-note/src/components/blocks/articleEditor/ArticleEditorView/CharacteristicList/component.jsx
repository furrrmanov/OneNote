import React from 'react'

import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { makeStyles } from '@material-ui/styles'

import { checkingArrayForUniquenessElements } from '@/utils/dataMappers'

import {
  CharacteristicContainer,
  IconButton,
  Input,
  ButtonContainer,
  Error,
} from './styles'

const useStyles = makeStyles((theme) => {
  return {
    characteristic: {
      width: '300px',
    },
    value: {
      width: '150px',
      marginLeft: '20px',
    },
  }
})

export default function CharacteristicList(props) {
  const { characteristic, onHandleSave, isLoading, changed } = props
  const initialFormState = {
    characteristicList: characteristic,
  }
  const classes = useStyles()
  const required = (value) => (value ? undefined : 'Required')

  const onSubmit = (value) => {
    onHandleSave(value)
  }

  const handleInputValidate = (value, list) => {
    let errors = ''
    if (!value) {
      errors = 'Required'
    }
    if (checkingArrayForUniquenessElements(value, list)) {
      errors = 'Not a unique name'
    }

    return errors
  }

  return (
    <Form
      onSubmit={onSubmit}
      mutators={{
        ...arrayMutators,
      }}
      initialValues={initialFormState}
      render={({
        handleSubmit,
        form: {
          mutators: { push },
        },
        pristine,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <FieldArray name="characteristicList">
              {({ fields }) =>
                fields.map((name, index) => {
                  return (
                    <CharacteristicContainer key={name}>
                      <Field
                        validate={(value, list) =>
                          handleInputValidate(value, list)
                        }
                        disabled={isLoading}
                        name={`${name}.characteristic`}>
                        {({ input, meta }) => (
                          <div className={classes.characteristic}>
                            <Input
                              {...input}
                              autoComplete="off"
                              type="text"
                              placeholder="characteristic"
                            />
                            {meta.error && meta.touched && (
                              <Error>{meta.error}</Error>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field
                        validate={required}
                        disabled={isLoading}
                        name={`${name}.value`}>
                        {({ input, meta }) => (
                          <div className={classes.value}>
                            <Input
                              {...input}
                              type="text"
                              placeholder="value"
                              autoComplete="off"
                            />
                            {meta.error && meta.touched && (
                              <Error>{meta.error}</Error>
                            )}
                          </div>
                        )}
                      </Field>
                      <IconButton
                        disabled={isLoading}
                        color="primary"
                        onClick={() => fields.remove(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </CharacteristicContainer>
                  )
                })
              }
            </FieldArray>

            <div className="buttons">
              <ButtonContainer>
                <IconButton
                  disabled={isLoading}
                  color="primary"
                  onClick={() => push('characteristicList', undefined)}>
                  <AddCircleOutlineIcon fontSize="large" />
                </IconButton>
                <IconButton
                  color="primary"
                  type="submit"
                  disabled={!changed && pristine}>
                  <SaveIcon fontSize="large" />
                </IconButton>
              </ButtonContainer>
            </div>
          </form>
        )
      }}
    />
  )
}
