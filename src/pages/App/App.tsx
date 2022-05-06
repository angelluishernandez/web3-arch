import Layout from "../../components/Layout/Layout";
import AppProvider from "../../context/AppContext";

import RouterConfig from "../../routes/Routes";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <Layout>
        <RouterConfig />
      </Layout>
    </AppProvider>
  );
}

export default App;
