import React from 'react'
import { Formik } from 'formik'
import { TextField, Button } from '@material-ui/core'
//
function App() {
  return (
    <>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true)
          console.log(data)
          setSubmitting(false)
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </>
  )
}
export default App
