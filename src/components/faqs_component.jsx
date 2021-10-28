import styled from 'styled-components';
import "./Faq.css";

function FrequentlyAskedQuestion({
  question,
  answer,
}) {
  return (
    <Faq>
      <FaqSummary>{question}</FaqSummary>
      <FaqAnswer>{answer}</FaqAnswer>
    </Faq>
  );
}

const Faq = styled.details`
  font-size: 1rem;
  color: hsl(0deg 0% 25%);
  margin: 32px;
  border: 2px solid;
  border-radius: 4px;
`;

const FaqSummary = styled.summary`
  cursor: pointer;
  padding: 12px 16px;
  outline-offset: 5px;
`;

const FaqAnswer = styled.div`
  background: hsl(0deg 0% 92.5%);
  border-radius: 0 0 4px 4px;
  padding: 12px 17px;
  font-style: italic;
`;

export default FrequentlyAskedQuestion;