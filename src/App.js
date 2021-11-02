import React from 'react';
// import FrequentlyAskedQuestion from './components/faqs_component';
// import LoginForm from './components/login_form';
// import ContactCard from './components/contact_card';
// import WallArt from './components/wall_art';
import {Breadcrumbs, Crumb } from './components/breadcrumbs';
import { createGlobalStyle } from'styled-components';


import './App.css';

function App() {
  return (
    <div className="App">
      {/* <FrequentlyAskedQuestion
      question = "What does “CSS” stand for?"
      answer = "Cool Styling Strategy" />
      <LoginForm
        handleSubmit={(ev) => {
          ev.preventDefault();
          alert("Submitted!");
        }}/>
      <ContactCard
        avatarSrc = "https://pbs.twimg.com/profile_images/931269422563463169/zH85rmMK.jpg"
        name = "Mittens"
        email = "meow@gmail.com"/> */}
      {/* <WallArt
        src = "https://static.wixstatic.com/media/nsplsh_5a71792d78374b35516367~mv2_d_3586_4781_s_4_2.jpg/v1/fill/w_1000,h_1333,al_c,q_90,usm_0.66_1.00_0.01/nsplsh_5a71792d78374b35516367~mv2_d_3586_4781_s_4_2.jpg"
        alt="A hallway with rainbow-coloured lights"
        caption="Photo by Efe Kurnaz"
        width={250}
      /> */}
      <Breadcrumbs>
        <Crumb href="/">Home</Crumb>
        <Crumb href="/living">Living Room</Crumb>
        <Crumb href="/living/couch">Couches</Crumb>
        <Crumb href="/living/couch/sectional">Sectionals</Crumb>
      </Breadcrumbs>

      < GlobalStyles / >
    </div>
  );
}

export default App;

const GlobalStyles = createGlobalStyle `
  body {
    background: pink;
  }
`;