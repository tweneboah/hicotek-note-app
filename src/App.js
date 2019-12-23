import React, { useState } from 'react';
import './App.css';
import NoteForm from "./components/NoteForm";
import Note from "./components/Note";
import Header from "./components/Header";
import 'bulma/css/bulma.css'
import 'bulma-helpers/css/bulma-helpers.min.css'
import Section from "./components/Section";
import Footer from "./components/Footer";
function App() {

  const [notes, setNote] = useState([]);


  //GET THE DATA FROM THE FORM
  const addNote = (note) => {
    setNote((prev) => {
      return [...prev, note]
    })
  };

  const deleteNote = (id) => {
    console.log('delete')
    setNote((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id
      })
    })
  }


  return (
    <div>
      <Header />
      <Section />
      <NoteForm addNote={addNote} />

      <div class="table-container">
        <table class="table table is-fullwidth table is-hoverable has-margin-left-10 has-margin-top-20 ">
          <thead>
            <tr>
              <th className='has-background-primary has-text-white'><abbr title="Played">Title </abbr></th>
              <th className='has-background-primary has-text-white'><abbr title="Won"> <p>Description</p></abbr></th>
              <th className='has-background-primary has-text-white'><abbr title="Drawn">Delete </abbr></th>
            </tr>
          </thead>

          <tbody>
            {notes.map((note, index) => {
              return <Note title={note.title} description={note.description}
                deleteNote={deleteNote}
                id={index}

                key={index}
              />
            })}

          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default App;
