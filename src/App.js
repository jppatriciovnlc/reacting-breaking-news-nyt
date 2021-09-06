import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import theme from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
