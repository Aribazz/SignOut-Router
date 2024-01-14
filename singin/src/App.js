import { Route,  Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
function App() {
  return (
    <>
    <Routes>
      <Route index element= {  <SignIn />} />
      <Route path='signin' element= {  <SignOut />} />
  </Routes>
  </>
  );
}

export default App;
