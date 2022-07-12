import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { Formik, ErrorMessage, FormikErrors } from 'formik'
import { observer } from 'mobx-react-lite'

import todoStore from '@/store/todo'

import { FormValues, ButtonTypes } from './types'

import {
  ToolBar,
  StyledForm,
  StyledInputItem,
  StyledField,
  Error,
} from './styles'

export const TodoInput = observer(() => {
  const [isEdit, setIsEdit] = useState(false)
  const [formValue, setFormValue] = useState({ text: '' })

  const initialValue: FormValues = { text: '' }

  useEffect(() => {
    if (todoStore.curEditingTaskDescr) {
      setIsEdit(true)
      setFormValue({ text: todoStore.curEditingTaskDescr })
    } else {
      setIsEdit(false)
      setFormValue({ text: todoStore.curEditingTaskDescr })
    }
  }, [todoStore.curEditingTaskDescr])

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {}

    if (!values.text) {
      errors.text = 'Required!'
    } else if (values.text.length < 4) {
      errors.text = 'Min length 4 symbols'
    }
    return errors
  }

  return (
    <ToolBar>
      <Formik
        initialValues={formValue.text ? formValue : initialValue}
        enableReinitialize
        validate={validate}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false)
          if (!isEdit) {
            todoStore.addTodo({
              id: uuid(),
              text: values.text,
              completed: false,
            })
            setIsEdit(false)
          } else {
            console.log('updateTask')
            todoStore.updateTask(values.text)
            setIsEdit(false)
          }
          actions.resetForm()
        }}
      >
        <StyledForm className="inputBar" style={{ display: 'flex' }}>
          <StyledInputItem>
            <StyledField
              type="search"
              id="text"
              name="text"
              placeholder="Add a task..."
            />
            <ErrorMessage name="text" component={Error} />
          </StyledInputItem>
          <button type="submit">
            {isEdit ? ButtonTypes.SAVE : ButtonTypes.ADD}
          </button>
        </StyledForm>
      </Formik>
    </ToolBar>
  )
})
