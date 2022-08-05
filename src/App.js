
import './App.css';
import { Formik } from 'formik';
import Loginopage from './component/Loginopage';
import * as  Yup from 'yup';

function App() {

  const ErrorSchema = Yup.object().shape({
    username: Yup.string().required("This field should not be empty").min(8,'short min 8 character').max(16,'strong'),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .matches(
        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
        "Number only"
      )
      .required("Required")
  })
  return (
    <div className="container-fluid pt-5 " style={{height:'100vh'}}>
      <div className='row justify-content-center pb-4 ' >
        <div className='col-5 pb-2 ' style={{borderRadius:'20px',alignContent:'center',marginTop:'20vh',backgroundColor:'white',opacity:'0.8',width:'30rem',border:'2px solid black'}}>
     <Formik 
     initialValues={{
      username:"",
      password:"",
      email:""
     }}
     onSubmit={(e)=>{console.log(e)}}
     validationSchema={ErrorSchema}
     component={Loginopage}/>
     </div>
    </div>
    </div>
  );
}

export default App;
