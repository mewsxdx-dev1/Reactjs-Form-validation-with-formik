import React from 'react'
import '../component/loginpage.css'
import { Field, Form  } from 'formik'

export default function Loginopage({errors,touched,isValid}) {
  
    
  return (
    <div className='outerdiv'>
        <Form>
          <div className="formdiv">
        <div className="form-group">
        <label className='col-form-label'>Username :</label>
        <Field type="text" className={
            touched.username
              ? `form-control ${errors.username ? "invalid" : "valid"}`
              : `form-control`
          } name='username'/>
          
        {touched.username && errors.username && (
          <small className="text-danger">{errors.username}</small>
        )}
        </div>
        <div className="form-group">
        <label className='col-form-label'>Email :</label>
        <Field type="text" className={
            touched.email
              ? `form-control ${errors.email ? "invalid" : "valid"}`
              : `form-control`
          } name='email'/>
      {touched.email && errors.email && (
          <small className="text-danger">{errors.email}</small>
        )}
        </div>
        <div className="form-group">
        <label className='col-form-label'>Password :</label>
        <Field type="text" className={
            touched.email
              ? `form-control ${errors.password ? "invalid" : "valid"}`
              : `form-control`
          } name='password'/>
      {touched.password && errors.password && (
          <small className="text-danger">{errors.password}</small>
        )}
        </div>
        <button type="submit" className='btn btn-primary m-3'>Submit</button>
        </div>
        </Form>

    </div>
  )
}
