import React, { Component } from 'react';

import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);
    const totalValues = stateValues.reduce((acc, item) => acc + item, 0);
    return totalValues;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const { good } = this.state;

    return Math.round((100 / totalFeedback) * good);
  };

  render = () => {
    const {
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      handleBtn,
      state,
    } = this;

    const totalFeedback = countTotalFeedback();
    const positiveFeedback = countPositiveFeedbackPercentage();
    const { good, neutral, bad } = state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={handleBtn}
          />
        </Section>
        <Section title="Statistic">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  };
}
