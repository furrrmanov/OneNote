import React from 'react'

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

import {
  CharacteristicContainer,
  IconButton,
  Input,
  ButtonContainer,
} from './styles'

export default function CharacteristicListItem(props) {
  const { characteristic, onHandleSave } = props
  const initialFormState = { characteristicList: characteristic }

  const onSubmit = (value) => {
    onHandleSave(value)
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
          mutators: { push, pop },
        },
        pristine,
        submitting,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <FieldArray name="characteristicList">
              {({ fields }) =>
                fields.map((name, index) => {
                  return (
                    <CharacteristicContainer key={name}>
                      <Input
                        autoComplete="off"
                        name={`${name}.characteristic`}
                        component="input"
                        placeholder="characteristic"
                      />
                      <Input
                        autoComplete="off"
                        name={`${name}.value`}
                        component="input"
                        placeholder="value"
                      />
                      <IconButton
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
                  color="primary"
                  onClick={() => push('characteristicList', undefined)}>
                  <AddCircleOutlineIcon fontSize="large" />
                </IconButton>
                <IconButton color="primary" type="submit">
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
