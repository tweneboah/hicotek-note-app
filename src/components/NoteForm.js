import React, { useState } from 'react';



const NoteForm = (props) => {

    const [note, setNote] = useState({
        title: '',
        description: ''

    });

    //Keeping track of values in the input and pass this values to the app component


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value //Determine which value to change the value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNote(note)

    }

    return (
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
                                    <input
                                        class="input"
                                        placeholder="Title"
                                        name='title'
                                        type='text'
                                        value={note.title}
                                        onChange={handleInputChange}

                                    />
                                </div>

                                <div class="field">

                                    <div class="control has-padding-top-30">
                                        <textarea
                                            class="textarea "
                                            name='description'
                                            type='text'
                                            placeholder='Description'
                                            value={note.description}
                                            onChange={handleInputChange}
                                        >

                                        </textarea>
                                    </div>
                                    <div className='has-padding-top-20'>
                                        <button ype='submit' onClick={handleSubmit} class="button is-info is-outlined">Add Note</button>
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
    );
}

export default NoteForm;
