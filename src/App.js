import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';

/** material ui components */
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

/** components */
import HomePage from './pages/HomePage/HomePage';
import CatchPokemonPage from './pages/CatchPokemonPage/CatchPokemonPage';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <main>
      <CssBaseline />
      <Router>
        <Provider store={store}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/catch" component={CatchPokemonPage} />
          </Switch>
        </Provider>
      </Router>
    </main>
  );
}

export default App;
