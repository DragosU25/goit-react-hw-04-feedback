import React, { Component } from 'react';
import { FeedbackOptions, Statistics, Section, Notification } from './FeedBack';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    this.handleStatisticsChange = this.handleStatisticsChange.bind(this);
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage.bind(this);
  }

  handleStatisticsChange(option) {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleStatisticsChange}
          />
        </Section>
        <Section title="Statistics">
          {good === 0 && neutral === 0 && bad === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
