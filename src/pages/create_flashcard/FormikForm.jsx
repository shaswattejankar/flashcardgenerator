import React, { useState, useRef } from "react";
import {
  Formik,
  Form,
  useField,
  Field,
  FieldArray,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import { MdOutlineUploadFile } from "react-icons/md";
import { TbEdit, TbTrash } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { cardAdded } from "../../features/cardSlice";

const theSchema = Yup.object().shape({
  groupName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("*Required"),
  groupDesc: Yup.string()
    .max(150, "Must be 150 characters or less")
    .required("*Required"),
  termList: Yup.array().of(
    Yup.object().shape({
      termName: Yup.string()
        .required("required")
        .max(20, "Must be 20 characters or less"),
      termDef: Yup.string()
        .required("required")
        .max(120, "Too Long! must be less than 500 characters"),
    })
  ),
});

const Term = ({ index, handleRemove, handleFileChange, mySetD }) => {
  const [termImage] = useField(`termList[${index}].termImage`);
  const [showImage] = useField(`termList[${index}].showImage`);
  const inputTermFile = useRef(null);

  function focusOnTermInput(id) {
    const elem = document.getElementById(id);
    elem.focus();
  }

  return (
    <div className="row gy-3 gx-sm-5 d-flex flex-xs-column flex-sm-column flex-md-row justify-content-evenly term-box">
      <div className="col col-xs-5 col-md-5 d-flex flex-row">
        <div className="col col-2 term-index">{index + 1}</div>
        <div className="col col-10 ">
          <label htmlFor={`termList[${index}].termName`} className="termLabel">
            Enter Term*
          </label>
          <br />
          <Field
            name={`termList[${index}].termName`}
            type="text"
            className="termInput t-input border-style"
            id={index}
            disabled={mySetD}
            placeholder="Enter term name"
          />
          <ErrorMessage name={`termList[${index}].termName`} />
        </div>
      </div>
      <div className="col col-12 col-xs-5 col-md-6 d-flex flex-column flex-sm-column flex-md-row def-img">
        <div className="col col-5 col-sm-11 col-md-8 def">
          <label htmlFor={`termList[${index}].termDef`} className="termLabel">
            Enter Definiton*
          </label>
          <br />
          <Field
            name={`termList[${index}].termDef`}
            type="text"
            className="termInput d-input border-style defInput"
            disabled={mySetD}
            placeholder="Enter definition"
          />
          <ErrorMessage name={`termList[${index}].termDef`} />
        </div>
        <div className="col col-7 col-sm-5 col-md-4 justify-content-sm-center btn-img">
          {/* <div className="row d-flex flex-row justify-content-around"> */}
            {showImage.value ? (
              <>
                <div className="col col-9 col-xs-9">
                  <img
                    src={termImage.value}
                    alt="nahi"
                    className="term-imgs"
                    onClick={() => {
                      inputTermFile.current.click();
                    }}
                  />
                  <input
                    name={`termList[${index}].termImage`}
                    type="file"
                    id="termFile"
                    ref={inputTermFile}
                    onChange={({ target }) =>
                      handleFileChange(index, target.files[0])
                    }
                    style={{ display: "none" }}
                  />
                </div>
                <div className="col col-2 col-xs-3 edit-btn-div">
                  <button
                    type="button"
                    className="btn btn-outline-primary edit-btn"
                    onClick={() => focusOnTermInput(index)}
                  >
                    <TbEdit style={{ fontSize: "20px" }} />
                  </button>
                </div>
              </>
            ) : (
              <button
                type="button"
                className="btn btn-outline-primary light ti-btn"
                onClick={() => {
                  inputTermFile.current.click();
                }}
                htmlFor="termFile"
                disabled={mySetD}
              >
                Select Image
                <input
                  name={`termList[${index}].termImage`}
                  type="file"
                  id="termFile"
                  ref={inputTermFile}
                  onChange={({ target }) =>
                    handleFileChange(index, target.files[0])
                  }
                  style={{ display: "none" }}
                />
              </button>
            )}
          {/* </div> */}
        </div>
      </div>
      <div className="col col-xs-2 col-md-1 d-flex justify-content-center justify-content-xs-center justify-content-sm-center delete-div">
        {index > 0 && (
          <button
            type="button"
            className="btn btn-outline-secondary delete-btn"
            onClick={() => handleRemove(index)}
          >
            <TbTrash style={{ fontSize: "20px" }} />
          </button>
        )}
      </div>
    </div>
  );
};

export const FormikForm = () => {
  const [setD, changeSetD] = useState("s");
  const [groupImg, setGroupImg] = useState("");
  const dispatch = useDispatch();

  const changeDisable = (e) => {
    if (e.target.value) {
      changeSetD("");
    } else {
      changeSetD("s");
    }
  };

  const inputGroupFile = useRef(null);
  const handlegroupchange = (e) => {
    const uri = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(uri);
    reader.onload = function () {
      console.log(reader.result);
      setGroupImg(reader.result);
    };
    reader.onerror = function (error) {
      console.log("!ERR: Couldn't find the object $", error);
    };
  };

  return (
    <>
      <Formik
        initialValues={{
          groupName: "",
          groupDesc: "",
          groupImage: "",
          termList: [
            {
              id: 0,
              termName: "",
              termDef: "",
              termImage: "",
              showImage: false,
            },
          ],
        }}
        validationSchema={theSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          values.groupImage = groupImg;
          setTimeout(() => {
            console.log("submitted");
            // alert(JSON.stringify(values, null, 2));
          }, 400);
          if (values) {
            dispatch(
              cardAdded({
                id: nanoid(),
                flash: JSON.stringify(values),
              })
            );
          }
          setSubmitting(false);
          resetForm();
          setGroupImg("");
        }}
      >
        <div className="row d-flex flex-column">
          <Form>
            <div className="container mt-5 shadow-sm outer-box1">
              <div className="row d-flex flex-row justify-content-left align-items-center box1">
                <div className="row align-items-center">
                  <div className="col col-sm-6  col-7 form-group one">
                    <label htmlFor="groupName">Create Group*</label> <br />
                    <Field
                      name="groupName"
                      className="border-style cg-input"
                      type="text"
                      onKeyUp={changeDisable}
                      placeholder="Enter group name"
                    />
                    <ErrorMessage name="groupName" />
                  </div>
                  <div className="col col-sm-6 col-5 form-button">
                    {groupImg ? (
                      <>
                        <img
                          alt="norender"
                          src={groupImg}
                          className="group-img"
                          onClick={() => {
                            inputGroupFile.current.click();
                          }}
                          id="image-for-group"
                        />
                        <input
                          type="file"
                          id="groupFile"
                          ref={inputGroupFile}
                          onChange={handlegroupchange}
                          style={{ display: "none" }}
                        />
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          inputGroupFile.current.click();
                        }}
                        className="btn cg-ib btn-rounded"
                        htmlFor="groupFile"
                        component="span"
                      >
                        <MdOutlineUploadFile
                          style={{ fontSize: "23px", color: "blue" }}
                        />
                        <b>Upload Image</b>
                        <input
                          type="file"
                          id="groupFile"
                          ref={inputGroupFile}
                          onChange={handlegroupchange}
                          style={{ display: "none" }}
                        />
                      </button>
                    )}
                  </div>
                </div>
                <div className="row d-flex flex-row justify-content-left mb-2">
                  <div className="form-group desc">
                    <label htmlFor="groupDesc">Add description</label>
                    <br />
                    <Field
                      name="groupDesc"
                      as="textarea"
                      className="text-area border-style"
                      placeholder="Describe the roles, resposibilities, skills required and help understand the group better."
                    />{" "}
                    <br />
                    <ErrorMessage name="groupDesc" />
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-5 shadow-sm outer-box2">
              <div className="row d-flex flex-column justify-content-center align-items-center box2 disabled">
                <FieldArray name="termList">
                  {({ form: { values }, ...fieldArrayHelpers }) => {
                    const addOnClick = () => {
                      fieldArrayHelpers.push({
                        id: values.termList.length,
                        termName: "",
                        termDef: "",
                        termImage: "",
                        showImage: false,
                      });
                    };
                    const removeOnClick = (index) => {
                      fieldArrayHelpers.remove(index);
                    };
                    const handleFileChange = (index, uri) => {
                      var reader = new FileReader();
                      reader.readAsDataURL(uri);
                      reader.onload = function () {
                        fieldArrayHelpers.replace(index, {
                          ...values.termList[index],
                          termImage: reader.result,
                          showImage: true,
                        });
                      };
                      reader.onerror = function (error) {
                        console.log("Error: ", error);
                      };
                    };
                    return (
                      <>
                        <div>
                          {values.termList.map((data, index) => (
                            <Term
                              key={data.id}
                              index={index}
                              handleRemove={removeOnClick}
                              handleFileChange={handleFileChange}
                              mySetD={setD}
                            ></Term>
                          ))}
                        </div>
                        <div className="row d-flex">
                          <button
                            type="button"
                            className="row d-flex btn text-primary addmore-btn"
                            onClick={addOnClick}
                            disabled={setD}
                          >
                            + Add More
                          </button>
                        </div>
                      </>
                    );
                  }}
                </FieldArray>
              </div>
            </div>
            <div className="row mt-4 d-flex flex-row justify-content-center">
              <button type="submit" className="btn btn-danger my-3 btn-2">
                Create
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
};
