import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getFromLocalStorage } from './data/localstorage.helpers';
import store from './state/store';
import theme from './themes/main-theme';

/** material ui components */
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

/** components */
import HomePage from './pages/HomePage/HomePage';
import CatchPokemonPage from './pages/CatchPokemonPage/CatchPokemonPage';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';
import NavBar from './components/navBar/NavBar';
import useStyles from './App.styles';

function App() {
  const classes = useStyles();
  return (
    <main className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Provider store={store}>
            <NavBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/catch" component={CatchPokemonPage} />
              <Route path="/details/:id" component={PokemonDetails} />
            </Switch>
          </Provider>
        </Router>
      </ThemeProvider>
    </main>
  );
}

export default App;
