import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { Formik, Field, Form, ErrorMessage, FormikErrors } from 'formik'

import { ITask } from '@/types/types'
import { useAppDispatch, useAppSelector } from '@/hooks/redux.hooks'
import { addTask, updateTask } from '@/store/todosSlice'

enum ButtonTypes {
  ADD = 'Add',
  SAVE = 'Save',
}

interface FormValues {
  text: string
}

export const TodoInput = () => {
  const [isEdit, setIsEdit] = useState(false)
  const { curEditingTaskDescr } = useAppSelector((state) => state.todos)
  const [formValue, setFormValue] = useState({ text: '' })

  const initialValue: FormValues = { text: '' }
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (curEditingTaskDescr) {
      setIsEdit(true)
      setFormValue({ text: curEditingTaskDescr })
    } else {
      setIsEdit(false)
      setFormValue({ text: curEditingTaskDescr })
    }
  }, [curEditingTaskDescr])

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
    <>
      <Formik
        initialValues={formValue.text ? formValue : initialValue}
        enableReinitialize
        validate={validate}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false)
          if (!isEdit) {
            dispatch(
              addTask({ id: uuid(), text: values.text, completed: false }),
            )
            setIsEdit(false)
          } else {
            dispatch(updateTask(values.text))
            setIsEdit(false)
          }
          actions.resetForm()
        }}
      >
        <Form className="inputBar" style={{ display: 'flex' }}>
          <Field
            className="inputTask"
            type="text"
            id="text"
            name="text"
            placeholder="Add a task..."
          />
          <div style={{ color: 'red' }}>
            <ErrorMessage name="text" component="div" />
          </div>
          <button type="submit">
            {isEdit ? ButtonTypes.SAVE : ButtonTypes.ADD}
          </button>
        </Form>
      </Formik>
    </>
  )
}
