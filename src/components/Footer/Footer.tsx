import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>This is the toolbar</Toolbar>
      </AppBar>
    </Box>
  );
}
