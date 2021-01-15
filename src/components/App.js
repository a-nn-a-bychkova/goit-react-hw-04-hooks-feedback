import React, { useState, useMemo } from 'react';
import shortid from 'shortid';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const updateStatistics = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = total => {
    return total === 0 ? 0 : Math.round((good * 100) / total);
  };
  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage(total);
  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={updateStatistics}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
export default App;
