import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './themes/schema.json';
import { GlobalStyles } from './themes/globalStyles';
function App() {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Welcome Home</h1>
      <button
        onClick={() => {
          if (theme.name === 'light') {
            setTheme(themes.dark);
          } else {
            setTheme(themes.light);
          }
        }}>
        Theme
      </button>
    </ThemeProvider>
  );
}

export default App;
