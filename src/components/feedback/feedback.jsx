import React from 'react';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGoodFeedback = () => {
    this.setState(({ good }) => ({
      good: good + 1,
    }));
  };

  addNeutralFeedback = () => {
    this.setState(({ neutral }) => ({
      neutral: neutral + 1,
    }));
  };

  addBadFeedback = () => {
    this.setState(({ bad }) => ({
      bad: bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, stateValue) => acc + stateValue,
      0
    );
  };
  countPositiveFeedbackPercentage = total => {
    if (total > 0) {
      return Math.round((this.state.good / total) * 100);
    } else {
      return 0;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const PositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage(total);

    return (
      <div>
        <h1>Please leave feedback</h1>

        <div>
          <button type="button" onClick={this.addGoodFeedback}>
            Good
          </button>
          <button type="button" onClick={this.addNeutralFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.addBadFeedback}>
            Bad
          </button>
        </div>

        <h2>Statistics</h2>

        <ul>
          <li>
            Good : <span>{good}</span>
          </li>
          <li>
            Neutral : <span>{neutral}</span>
          </li>
          <li>
            Bad : <span>{bad}</span>
          </li>
          <li>
            Total : <span>{total}</span>
          </li>
          <li>
            Positive feedback : <span>{PositiveFeedbackPercentage}</span>
          </li>
        </ul>
      </div>
    );
  }
}
