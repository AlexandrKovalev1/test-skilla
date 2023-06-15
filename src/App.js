import { Route, Routes } from 'react-router-dom';
import './fonts/sfProDisplay/stylesheet.css';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import CallsContainer from './components/Calls/Calls.container';



function App() {

  return (
    <div className="app_wrapper">
      <Header />
      <NavbarContainer />

      <main className='content_wrapper'>
        <Routes>

          <Route path='/calls?/?'
            element={<CallsContainer />}>
          </Route>

        </Routes>
      </main>
    </div>
  );

}

export default App;
