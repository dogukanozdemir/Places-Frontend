import './App.css';
import {ContentContainer} from './components/ContentContainer/ContentContainer'
import {InputContainer} from './components/InputContainer/InputContainer'
//import {MapContainer} from './components/MapContainer/MapContainer'


function App() {
  return (
    <div className="App">
      <InputContainer/>
      <ContentContainer/>
    </div>
  );
}

export default App;
