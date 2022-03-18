import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import AddToken from './Pages/AddToken';
import EditToken from './Pages/EditToken';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addtoken" element={<AddToken />} />
        <Route path="edittoken" element={<EditToken />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
