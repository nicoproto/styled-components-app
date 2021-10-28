import React from 'react';
import FrequentlyAskedQuestion from './components/faqs_component';

import './App.css';

function App() {
  return (
    <div className="App">
      <FrequentlyAskedQuestion
      question = "What does “CSS” stand for?"
      answer = "Cool Styling Strategy" />
    </div>
  );
}

export default App;