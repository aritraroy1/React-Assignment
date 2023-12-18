import { useState } from 'react';
import React from 'react';

import Toast from './Toast';

function App() {

  const toastDialogue = React.useRef();
  function handleEnrol() {
    // Todo: Show toast

    setTimeout(() => {
      // Todo: hide toast
    }, 3000);
  }

  return (
    <div id="app">
      <Toast ref={toastDialogue} />
      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
        <button onClick={handleEnrol}>Enrol</button>
      </article>
    </div>
  );
}

export default App;
