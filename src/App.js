import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import theme from './theme';




function App() {

  

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <BrowserRouter>
          <Switch>
            <Route  exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
    
    
  );
}

export default App;
