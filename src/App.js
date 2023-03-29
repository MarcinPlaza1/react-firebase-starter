import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/homepage/homepage";
import NotFound from "./pages/404/404";
import GlobalStyle from "./assets/styles/global.styles";

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route element={<NotFound />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
