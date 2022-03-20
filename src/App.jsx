import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AddToken from './Pages/AddToken';
import EditToken from './Pages/EditToken';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="addtoken" element={<AddToken />} />
      <Route path="edittoken" element={<EditToken />} />
    </Routes>
  );
}

export default App;
