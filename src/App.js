
import './App.css';
import { Route,Switch } from 'react-router-dom'
import Home from './pages/Home';
import AddNotes from './pages/AddNotes';
import MainNavigationBar from './Utilities/MainNavigationBar';
import EditForm from './components/EditForm';

function App() {
  return (
    <div>
      <MainNavigationBar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/addnotes'>
          <AddNotes />
        </Route>
        <Route path='/editnotes/:unique'>
          <EditForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
