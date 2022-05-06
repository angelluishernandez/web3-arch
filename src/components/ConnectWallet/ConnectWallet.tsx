import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import SimpleButton from "../SimpleButton/SimpleButton";
import { Box } from "@mui/system";

export default function ConnectWallet() {
  const injectedConnector = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  });
  const { chainId, account, activate, active, library } =
    useWeb3React<Web3Provider>();
  const onClick = () => {
    activate(injectedConnector);
  };

  useEffect(() => {
    console.log(chainId, account, active);
  });

  return (
    <Box
      sx={{
        marginTop: "1em",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "2em",
      }}
    >
      <Typography>ChainId: {chainId}</Typography>
      <Typography>Account: {account}</Typography>
      {active ? (
        <Typography>✅ </Typography>
      ) : (
        <SimpleButton
          onClickCallback={onClick}
          buttonText="Connect"
          variant="outlined"
        />
      )}
    </Box>
  );
}
