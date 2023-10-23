import './App.css';

const sampleData = [
  { name: 'Place 1', rating: 4.7, latitude: 40.7128, longitude: -74.0060 },
  { name: 'Place 2', rating: 4.7, latitude: 34.0522, longitude: -118.2437 },
  { name: 'Place 3', rating: 4.7, latitude: 51.5074, longitude: -0.1278 },

];

function App() {
  return (
    <div className="App">
      <form>
        <div className="input-container">
          <div className="input-group">
            <label>Latitude:</label>
            <input type="text" name="latitude" />
          </div>
          <div className="input-group">
            <label>Longitude:</label>
            <input type="text" name="longitude" />
          </div>
          <div className="input-group">
            <label>Radius:</label>
            <input type="text" name="radius" />
          </div>
          <div className="input-group">
            <button type="submit">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
