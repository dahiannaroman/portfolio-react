import React from "react";
import { Routes,Route } from 'react-router-dom';
import { Header } from "./components/Layouts/Header/Header";
import { Container } from "./components/Container/Container";
import { Home } from "./components/Pages/Home/Home";
import { Skills } from "./components/Pages/Skills/Skills";
import { SocialSkills } from "./components/Pages/SocialSkills/SocialSkills";
import { Studies } from "./components/Pages/Studies/Studies";
import { Experience } from "./components/Pages/Experience/Experience";
import { Footer } from "./components/Layouts/Footer/Footer";
import "/src/index.css"; 

export const App = () => {
  return (
    <>
    <Header/>
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/SocialSkills' element={<SocialSkills />} />
        <Route path='/Studies' element={<Studies />} />
        <Route path='/Experience' element={<Experience />} />
      </Routes>
    </Container>
    
    <Footer/>
    </>
    
  )
}

