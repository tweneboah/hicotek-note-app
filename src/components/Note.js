import React from 'react';
const Notes = (props) => {
    return (
        <tr>
            <td><h1>{props.title}</h1></td>
            <td>{props.description}</td>
            <td><button onClick={() => props.deleteNote(props.id)} class="button is-danger">Delete</button></td>
            <div class="buttons">


            </div>
        </tr>
    );
}

export default Notes;
