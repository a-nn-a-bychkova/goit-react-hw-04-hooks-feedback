import React, { Component } from 'react';
import shortid from 'shortid';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStatistics = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = total => {
    return total === 0 ? 0 : Math.round((this.state.good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackQuantity = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(feedbackQuantity);

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.updateStatistics}
          />
        </Section>
        <Section title="Statistics">
          {feedbackQuantity > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={feedbackQuantity}
              positivePercentage={percentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
