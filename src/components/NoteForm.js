import React, { useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from "formik";
import { TextareaAutosize } from "@material-ui/core";
import * as Yup from 'yup'

const NoteForm = (props) => {


    return (
        <Formik
            initialValues={{ title: '', description: '' }}
            validationSchema={Yup.object({
                title: Yup.string()
                    .min(5)
                    .required('5 or more characters required'),
                description: Yup.string()
                    .required('Desription must be more than 10 words')
                    .min(8)
            })}

            onSubmit={(values, { handleSubmit }) => {
                props.addNote(values)
                console.log(values)
            }}
        >
            <Form>
                <div >

                    <div class="columns">

                        <div class="column">

                            <div class="columns is-mobile">

                                <div class="column">
                                    <p class="bd-notification is-danger"></p>
                                </div>

                                <div class="column is-half">
                                    <div class="field">

                                        <div class="control ">
                                            <div style={{ color: 'red' }}>
                                                <ErrorMessage name='title' />
                                            </div>
                                            <Field placeholder="Title" class="input" name='title' type='text' />
                                        </div>

                                        <div class="field">

                                            <div class="control has-padding-top-30">
                                                <div style={{ color: 'red' }}>
                                                    <ErrorMessage name='description' />
                                                </div>
                                                <Field placeholder="Description"
                                                    as={TextareaAutosize} class="textarea" name='description' type='text' />

                                            </div>
                                            <div className='has-padding-top-20'>
                                                <button type='submit' class="button is-info is-outlined">Add Note</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <p class="bd-notification is-danger"></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
}

export default NoteForm;
