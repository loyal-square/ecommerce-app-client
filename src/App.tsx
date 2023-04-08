import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './themes/schema.json';
import { GlobalStyles } from './themes/globalStyles';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import { getImageFromS3, uploadToS3 } from './helpers/awsSdkHepers';
function App() {
  const [theme, setTheme] = useState(themes.light);
  const [file, setFile] = useState<File | undefined>();
  const [image, setImage] = useState();
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
      <input
        type="file"
        onChange={(evt) => {
          setFile(evt.target.files?.[0]);
        }}
      />
      <button
        onClick={() => {
          uploadToS3(file as File);
        }}>
        Upload Image
      </button>
      <button onClick={async () => setImage(await getImageFromS3())}>Get Image</button>
      <img src={image} alt="" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
