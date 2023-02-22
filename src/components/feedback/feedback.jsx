import React from 'react';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  addGoodFeedback = () => {
    this.setState(({ good }) => {
      return {
        good: good + 1,
      };
    });
    this.totalFeedback();
  };

  addNeutralFeedback = () => {
    this.setState(({ neutral }) => {
      return {
        neutral: neutral + 1,
      };
    });
    this.totalFeedback();
  };

  addBadFeedback = () => {
    this.setState(({ bad }) => {
      return {
        bad: bad + 1,
      };
    });
    this.totalFeedback();
  };

  totalFeedback = () => {
    this.setState(({ good, neutral, bad }) => {
      return {
        total: good + neutral + bad,
      };
    });
  };

  render() {
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
            Good : <span>{this.state.good}</span>
          </li>
          <li>
            Neutral : <span>{this.state.neutral}</span>
          </li>
          <li>
            Bad : <span>{this.state.bad}</span>
          </li>
          <li>
            Total : <span>{this.state.total}</span>
          </li>
          <li>
            Total : <span>{this.state.positiveFeedback}</span>
          </li>
        </ul>
      </div>
    );
  }
}
