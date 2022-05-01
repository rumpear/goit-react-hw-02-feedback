import React, { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';
import styled from 'styled-components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = type => {
    console.log(type);
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    let { good } = this.state;

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
            options={['good', 'neutral', 'bad']}
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

const Container = styled.div`
  padding: 40px;
  width: 400px;
  margin: 100px auto;
  background-color: rgba(151, 151, 151, 0.1);
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.322) 0px 2px 8px 0px;
`;