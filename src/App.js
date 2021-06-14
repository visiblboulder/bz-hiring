import './App.css';
import Movies from './components/movies'

function App() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Movies view='list'/>
    </div>
  );
}

export default App;
