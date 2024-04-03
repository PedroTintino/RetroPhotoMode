import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import axios from "axios";

function CreateUser() {
  const baseUrl = 'http://localhost:3337'
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      name: '',
      email: '',
      repeatEmail: '',
      password: ''
    },
    validationSchema: yup.object({
      name: yup.string().required('Required field!'),
      email: yup.string().email('Wrong format!').required('Required Field!'),
      repeatEmail: yup.string()
      .email('Wrong format!')
      .oneOf([yup.ref('email'), null], 'Email fields do not match!')
      .required('Required field!')
    }),
    onSubmit: async (values) => {
      try{
        const response = await axios.post(`${baseUrl}/user/create`, values);

        if(response.status === 200){
          navigate('/')
        }
      }catch(error){
        alert('Email já em uso!')
      } 
    },
  });
  return (
    <form className="flex flex-col justify-center p-6 rounded text-black" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        className="rounded p-3 mb-5"
        placeholder="Username"
      /> 
             {formik.touched.name && formik.errors.name ? (
          <div className="text-purple-300">{formik.errors.name}</div>
        ) : null}
      
      <input
        type="email"
        name="email"
        className="rounded p-3 mb-5"
        placeholder="Type your email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
             {formik.touched.email && formik.errors.email ? (
          <div className="text-purple-300">{formik.errors.email}</div>
        ) : null}
      <input
        type="email"
        name="repeatEmail"
        className="rounded p-3 mb-5"
        placeholder="Type your email again"
        value={formik.values.repeatEmail}
        onChange={formik.handleChange}
      />
              {formik.touched.repeatEmail && formik.errors.repeatEmail ? (
          <div className="text-purple-300">{formik.errors.repeatEmail}</div>
        ) : null}
      <input
        type="password"
        name="password"
        className="rounded p-3 mb-5"
        placeholder="Type your password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
             {formik.touched.password && formik.errors.password ? (
          <div className="text-purple-300">{formik.errors.password}</div>
        ) : null}
      <button className="rounded p-3 text-white bg-purple-800 font-semibold hover:bg-purple-700" type="submit">
        Create
      </button>
      <a className="text-purple-500 text-center"><Link to='/'>or return home</Link></a>
    </form>
  );
}
export default CreateUser;

