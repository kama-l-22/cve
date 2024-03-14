import './App.scss';
import Header from './components/header';
import Individualpage from './components/individualpage';
import Userlist from './components/userlist';
import Userpage from './components/userpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userlist/>}/>
          <Route path="/userpage" element={<Individualpage />} />
          <Route path="/cvelist" element={<Userpage />} />
          <Route path="*" element={<>404-notfound</>} />
  
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
