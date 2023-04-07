import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './themes/schema.json';
import { GlobalStyles } from './themes/globalStyles';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
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
        Theme Button
      </button>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
