import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'
import AllAuthors from './components/AllAuthors';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EdithAuthor';
import Error from './components/Error'

function App() {
  return (
    <div className="App">

      <Router>
        <AllAuthors path="/"></AllAuthors>
        <AddAuthor path="/new"></AddAuthor>
        <Error path="/error"></Error>
        <EditAuthor path="/edit/:id"></EditAuthor>
      </Router>

    </div>
  );
}

export default App;
