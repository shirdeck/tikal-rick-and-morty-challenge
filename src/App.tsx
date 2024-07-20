import React from "react";

import { AppProvider } from "./context/AppContext";

import GlobalStyles from "./GlobalStyles";
import {
  Container,
  Title,
  Background,
} from "./App.styles";

import MainContent from "./components/MainContent/MainContent";


const App: React.FC = () => {
  return (
    <AppProvider>
      <GlobalStyles />
      <Background>
        <Title>Rick and Morty Task</Title>
        <Container>
          <MainContent />
        </Container>
      </Background>
    </AppProvider>
  );
};

export default App;
