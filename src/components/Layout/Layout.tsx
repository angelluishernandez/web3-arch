import { Container } from "@mui/material";
import React from "react";
import { ChildrenProps } from "../../types/types";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }: ChildrenProps) {
  return (
    <React.Fragment>
      <Navbar />
      <Container sx={{ margin: "20px 0" }}>{children}</Container>
      <Footer />
    </React.Fragment>
  );
}
