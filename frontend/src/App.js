import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Logs from "./pages/Logs";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/logs" element={<Logs />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
