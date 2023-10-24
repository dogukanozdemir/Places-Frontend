import "./App.css";
import { ContentContainer } from "./components/ContentContainer/ContentContainer";
import { InputContainer } from "./components/InputContainer/InputContainer";
import { useState } from 'react'; // Import useState

function App() {
  const [placesData, setPlacesData] = useState([]); // Store the response data

  const handleSearchClick = (formData) => {
    const latitude = parseFloat(formData.latitude);
    const longitude = parseFloat(formData.longitude);
    const radius = parseInt(formData.radius, 10);

    const apiUrl = `http://places-app-env.eba-ehp3dpww.eu-central-1.elasticbeanstalk.com/api/nearby-locations?latitude=${latitude}&longitude=${longitude}&radius=${radius}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPlacesData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="App">
      <InputContainer onSearch={handleSearchClick} />
      <ContentContainer placesData={placesData} /> 
    </div>
  );
}

export default App;
