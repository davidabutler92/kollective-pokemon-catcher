import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

/** styles */

/** material ui components */
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

/** components */
import HomePage from './pages/HomePage/HomePage';
import CatchPokemonPage from './pages/CatchPokemonPage/CatchPokemonPage';

function App() {
  return (
    <main>
      <CssBaseline />
      <ThemeProvider>
        <Router>
          <Provider>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/catchPokemon" component={CatchPokemonPage} />
            </Switch>
          </Provider>
        </Router>
      </ThemeProvider>
    </main>
  );
}

export default App;
