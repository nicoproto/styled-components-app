import React from 'react';
import FrequentlyAskedQuestion from './components/faqs_component';
import LoginForm from './components/login_form';

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
    </div>
  );
}

export default App;