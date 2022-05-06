import Layout from "../../components/Layout/Layout";
import AppProvider from "../../context/AppContext";

import RouterConfig from "../../routes/Routes";

import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import "./App.scss";

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
