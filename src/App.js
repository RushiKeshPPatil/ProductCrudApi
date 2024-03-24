import logo from './logo.svg';
import './App.css';
import DisplayData from './components/DisplayData';
import UpdateProduct from './components/Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Insert from './components/Insert';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<DisplayData />} />
            <Route path="update" element={<UpdateProduct />} />
            <Route path="/save" element={<Insert />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
