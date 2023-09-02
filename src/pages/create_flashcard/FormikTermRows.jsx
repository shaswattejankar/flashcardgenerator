import React,{useState, useRef} from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { TbEdit, TbTrash } from "react-icons/tb"

const FormikTermRows = ( {row_obj , mySetD, childRemoveRow} ) => {

  // set image src
  const [ termImg, setTermImg ] = useState([{img:''}]); 
  const inputTermFile = useRef(null);
  const handleTermChange = (e) => {
    const src = e.target.files[0];
    const img_blob = URL.createObjectURL(src);
    setTermImg(img_blob);
  }

  //DELETE BUTTON FUNC
  const deleteRow = (target_id) =>{
    childRemoveRow(target_id);
//     setRows( ()=>{
//         return rows.filter( every_row => every_row.id!==target_id )
//   })
  }

  //const focusTermInputRef = useRef([]);
  function focusOnTermInput(id){
    const elem = document.getElementById(id);
    elem.focus();
  }
  /////

  return (
    <>
    <Formik
        initialValues={{ term : '', definition : ''}}
        validationSchema={ Yup.object().shape({
            term : Yup.string()
                .required("*required"),
            definition : Yup.string()
                .required("*required"),
        })}
        onSubmit={(values,{setSubmitting})=>{
            setTimeout((()=>{
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            },400));
        }}
    >
      {/* No Form tag but we still can make a form/input fields. WOW! */}
     {/* <Form> */}
        <div className='row gy-3 d-flex flex-row justify-content-evenly term-box'   >
                      
            <div className='col col-5 col-sm-5 d-flex flex-row'>
                <div className='col col-2 term-index'>
                    {row_obj.id}
                </div>
                {/* For entering TERMS */}
                <div className='col col-10'>
                        <label htmlFor={row_obj.id}  className='termLabel'>Enter Term*</label><br/>
                        <Field 
                        name='term'
                        type='text' 
                        className='termInput t-input border-style'
                        id = {row_obj.id}
                        disabled={mySetD}
                        />
                        <ErrorMessage name='term'/>
                </div>
            </div>
            
            {/* For entering Definitions and images */}
            <div className='col col-7 col-sm-7 d-flex flex-row '>
                <div className='col col-8'>
                <label htmlFor={row_obj.id} className='termLabel'>Enter Definiton*</label><br/>
                <Field 
                    name='definition'
                    type='text' 
                    className='termInput d-input border-style'
                    disabled={mySetD}
                />
                <ErrorMessage name='Definition'/>
                </div>
                <div className='col col-4 '>
                    {termImg?
                    <> 
                        <img alt="can't" src={termImg} className='term-imgs'/>
                        <div className='edit-btns-div'>
                            {/* DELETE BUTTON */}
                            <button
                            type='button'
                            className='btn btn-outline-secondary edit-btns'
                            onClick={()=>{deleteRow(row_obj.id)}}
                            >
                                <TbTrash style={{fontSize:'20px'}}/>
                            </button>
                            {/* EDIT BUTTON */}
                            <button
                            type='button'
                            className='btn btn-outline-primary edit-btns'
                            onClick={() => focusOnTermInput(row_obj.id)}
                            >
                                <TbEdit style={{fontSize:'20px'}}/>
                            </button>
                        </div>
                    </>
                    :
                    <button
                        type='button'
                        className="btn btn-outline-primary light ti-btn" 
                        onClick={()=>{inputTermFile.current.click()}}
                        htmlFor='termFile'
                        disabled={mySetD}
                    
                    > 
                        Select Image
                        <input 
                        type='file' 
                        id='termFile' 
                        ref={inputTermFile} 
                        onChange={ handleTermChange } 
                        style={{display: 'none'}}
                        />
                    </button> 
                    }
                </div>
            </div>
        
        </div>
     {/* </Form> */}
  </Formik>
  </>
  )
}

export default FormikTermRows