import { Provider } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import SearchMovies from './pages/SearchMovie';
import store from './redux/store';
import 'react-notifications/lib/notifications.css';
import "tailwindcss/tailwind.css";
import "react-placeholder/lib/reactPlaceholder.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SearchMovies />
      </Provider>
      <NotificationContainer />
    </div>
  );
}

export default App;
