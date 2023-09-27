import './App.css';
import Router from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div>
      <Router />
    </div>
    </Provider>
  );
}

export default App;
