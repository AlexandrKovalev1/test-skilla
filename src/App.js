import { Route, Routes } from 'react-router-dom';
import './fonts/sfProDisplay/stylesheet.css';
import './App.css';
import Calls from './components/Calls/Calls';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';



function App() {

  return (
    <div className="app_wrapper">
      <Header />
      <NavbarContainer />

      <main className='content_wrapper'>
        <Routes>

          <Route path='/calls?/?'
            element={<Calls />}>
          </Route>

        </Routes>
      </main>
    </div>
  );

}

export default App;
