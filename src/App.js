import './App.css';
import Main from './main/Main';
import store from './Store/index';
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Main />
      </Provider>
    </div>
  );
}

export default App;
