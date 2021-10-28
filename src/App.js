import React from 'react';
import FrequentlyAskedQuestion from './components/faqs_component';
import LoginForm from './components/login_form';
import ContactCard from './components/contact_card';


import './App.css';

function App() {
  return (
    <div className="App">
      <FrequentlyAskedQuestion
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
        email = "meow@gmail.com"/>
    </div>
  );
}

export default App;