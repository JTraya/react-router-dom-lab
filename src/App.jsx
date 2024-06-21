// src/App.jsx

import { useState } from 'react';
import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
import {Route, Routes} from 'react-router-dom'

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  function addBox(formData){

    formData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, formData])

  }


  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<h1>Post Office</h1>} />
      <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>} />
      <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>} />
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>} />
    </Routes>
    </>
  )
}

export default App;
