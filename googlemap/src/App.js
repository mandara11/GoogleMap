import logo from './logo.svg';
import './App.css';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Lander from './pages/lander/Lander';
import MapContainer from './components/map/googleMap'

function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Lander /> */}
      <MapContainer />
    </div>
  );
}

export default App;
