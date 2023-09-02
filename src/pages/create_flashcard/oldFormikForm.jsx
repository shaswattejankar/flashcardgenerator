import React , {useState, useRef} from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { MdOutlineUploadFile } from "react-icons/md";
import FormikTermRows from './FormikTermRows';
import { TbEdit, TbTrash } from "react-icons/tb"

export const oldFormikForm = () => {
  // const [ termId, increment_termID ] = useState(0);
  // const [ termImg, setTermImg ] = useState('');
  const [ groupImg, setGroupImg ] = useState('');

  ///////
  const inputGroupFile = useRef(null);
  // const inputTermFile = useRef(null);

  const handlegroupchange = (e) => {
    const src = e.target.files[0];
    setGroupImg(URL.createObjectURL(src));
  }

  // const handleTermChange = (e) => {
  //   const src = e.target.files[0];
  //   setTermImg(URL.createObjectURL(src));

  // }
  ///
  
  // To disable the term component for the first time
  const [setD,changeSetD] = useState('s');
  const changeDisable =( e )=>{
    if(e.target.value){
      changeSetD('');
    }else{
      changeSetD('s');
    }
  }

  //$$$$$ State for keeping track of row id's
  const [rows, setRows] = useState([{id:1,term:'',definition:'',img:''}])

  ////
  const parentRemoveRow = (target_id) => {
    setRows( ()=>{
      return rows
        .filter( every_row => every_row.id!==target_id )
    });
    
  }

  //$$$$$

  ///
  // const focusTermInputRef = useRef([]);
  // function focusOnTermInput(id){
  //   const elem = document.getElementById(id);
  //   elem.focus();
  // }

  // To add Term Def and Image onClick
  const addTermDef = () => {
    //  increment_termID( prev_termId =>
    //   prev_termId+1
    // );
    
    //let x = termId+1
    // This shows 0. because apparently it increments/updates a state ASYNCHRONOUSLY
    //console.log(termId); this shows 0 on first click in console
    // if we really want to print the updated value we will use useEffect()
    // but our issue is not printing it but using it. how do we do it?
    // since it IS being updated just not rendered let's cheat by using line 43:let x = termId+1
    
    setRows( [...rows,{id:rows.length+1,term:'',definition:'',img:''}] );
    
  }

   return (
    <>
     <Formik
       initialValues={{ groupName: '', description: '' }}
       validationSchema={Yup.object().shape({
         groupName: Yup.string()
           .max(15, "Must be 15 characters or less")
           .required("*Required"),
         description: Yup.string()
           .max(150, "Must be 20 characters or less")
           .required("*Required"),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
        }}

     >
            <Form className="row d-flex flex-column">
            {/* START */}
    
                {/* Here is our first container */}
                <div className="row d-flex mt-3 shadow-sm outer-box1">
                <div className="row d-flex flex-row justify-content-left align-items-center box1">
                    {/* Create Group */}
                    <div className="row align-items-center">
                    <div className="col col-7 col-sm-6 form-group one">
                        <label htmlFor="groupName">Create Group*</label> <br />
                        <Field 
                          name="groupName" 
                          className='border-style cg-input' 
                          type="text"
                          onKeyUp = {changeDisable}
                        />
                        <ErrorMessage name="groupName" />
                    </div>
                    <div className="col col-5 col-sm-6 form-button">
                        
                      { groupImg? 
                        <><img alt='norender' src ={groupImg} className='group-img'/></>
                        :
                        <button
                          type='button'
                          onClick={()=> {inputGroupFile.current.click()}}
                          className="btn cg-ib btn-rounded"
                          htmlFor='groupFile'
                          component='span'
                          >
                            <MdOutlineUploadFile   style={{ fontSize: "23px", color: "blue" }}  />
                            <b>Upload Image</b>
                            <input type='file' id='groupFile' ref={inputGroupFile} onChange={handlegroupchange} style={{display: 'none'}}/>
                          </button>
                      }
                    </div>
                    </div>
                    
                    {/* Add Description */}
                    <div className="row d-flex flex-row justify-content-left mb-2">
                        <div className="form-group desc">
                            <label htmlFor="description">Add description</label>
                            <br />
                            <Field
                            name="description"
                            as="textarea"
                            className='text-area border-style'
                            placeholder="Describe the roles, resposibilities, skills required and help understand the group better."
                            />
                            <ErrorMessage name="description" />
                        </div>
                    </div>
                </div>
                </div>
    
    
                {/* Here is our second container */}
                <div className="row d-flex mt-3 shadow-sm outer-box2" >
                  <div className="row d-flex flex-column justify-content-center align-items-center box2" >
                    {/* For rendering rows */}
                  
                    {rows.map( (each_object) => {
                      return(
                      <>
                        <FormikTermRows row_obj={each_object} mySetD={setD} childRemoveRow={parentRemoveRow} />    
                      </>
                      )
                      
                      // return(
                      //   <div className='row gy-3 d-flex flex-row justify-content-evenly term-box'   >
                      
                      //     <div className='col col-5 col-sm-5 d-flex flex-row'>
                      //       <div className='col col-2 term-index'>
                      //         {each_object.id+1}
                      //       </div>
                      //       {/* For entering TERMS */}
                      //       <div className='col col-10' >
                            
                      //             <label htmlFor={each_object.id+1}  className='termLabel'>Enter Term*</label><br/>
                      //             <Field 
                      //               name={`term[${each_object.id}.name]`}
                      //               type='text' 
                      //               className='termInput t-input border-style'
                      //               disabled={setD}
                      //             />
                                  
                      //             <ErrorMessage name='term'/>
                                
                      //       </div>
                      //     </div>
                          
                      //     {/* For entering Definitions and images */}
                      //     <div className='col col-7 col-sm-7 d-flex flex-row '>
                      //       <div className='col col-8'>
                      //       <label htmlFor={each_object.id+1} className='termLabel'>Enter Definiton*</label><br/>
                      //       <Field 
                      //         name={`definition[${each_object.id}.name]`}
                      //         type='text' 
                      //         className='termInput d-input border-style'
                      //         disabled={setD}
                      //       />
                      //       <ErrorMessage name='Definition'/>
                      //       </div>
                            
                      //       <div className='col col-4 '>
                      //         {termImg?
                      //           <> 
                                  
                      //             <div>
                      //             <img alt="can't" src={termImg} className='term-imgs'/>
                      //               <div className='edit-btns-div'>
                      //                 <button
                      //                   type='button'
                      //                   className='btn btn-outline-secondary edit-btns'
    
                      //                 >
                      //                     <TbTrash style={{fontSize:'20px'}}/>
                      //                 </button>
                      //                 <button
                      //                   type='button'
                      //                   className='btn btn-outline-primary edit-btns'
                      //                   onClick={() => focusOnTermInput(each_object.id)}
                      //                 >
                      //                     <TbEdit style={{fontSize:'20px'}}/>
                      //                 </button>
                      //               </div>
                      //             </div>
                      //           </>
                      //           :
                      //           <button
                      //             type='button'
                      //             className="btn btn-outline-primary light ti-btn" 
                      //             onClick={()=>{inputTermFile.current.click()}}
                      //             htmlFor='termFile'
                      //             disabled={setD}
                                
                      //           > 
                      //             Select Image
                      //             <input 
                      //               type='file' 
                      //               id='termFile' 
                      //               ref={inputTermFile} 
                      //               onChange={ handleTermChange } 
                      //               style={{display: 'none'}}
                      //             />
                      //           </button> 
                      //         }
                      //       </div>
                      //     </div>
                      //   </div>
                      // )
                     }) }
                  
                    {/* + Add More Button : for Term-Definition-Image rows */}
                    <div className="row d-flex">
                      <button
                        type='button'
                        className='row d-flex btn text-primary addmore-btn'
                        onClick={addTermDef}
                        // disabled={setD}
                      >
                          + Add More
                      </button>
                    </div>
                  </div>
                </div>
    
                {/* <button type="submit">Submit</button> */}
                {/* Here is our third container or Button */}
                <div className="row d-flex flex-row justify-content-center">
                    <button type="submit" className="btn btn-danger my-3 btn-2">Create</button>
                </div>
    
            {/* END */}
            </Form>
       
        
     </Formik>


     </>
   );
 };

//  export default FormikForm;