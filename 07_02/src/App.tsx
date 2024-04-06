import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { routes } from './helpers/routes';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: palevioletred;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  min-height: 100vh; 
`;

const MainContainer = styled.div`
  border: 2px solid white;
  border-radius: 20px;
  padding: 10px;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: cornflowerblue;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <MainContainer>
          <Navbar />
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </MainContainer>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;

