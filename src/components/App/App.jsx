import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';
import {
  ContainerApp,
  Container,
  Title,
  SiCoffeescript,
} from 'components/App/App.styled';

// import { SiCoffeescript } from 'react-icons/si';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    switch (e.target.textContent) {
      case 'good':
        this.setState(({ good }) => ({
          good: good + 1,
        }));
        break;

      case 'neutral':
        this.setState(({ neutral }) => ({
          neutral: neutral + 1,
        }));
        break;

      case 'bad':
        this.setState(({ bad }) => ({
          bad: bad + 1,
        }));
        break;
      default:
        break;
    }
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = totalFeedback => {
    if (totalFeedback > 0) {
      return Math.round((this.state.good / totalFeedback) * 100);
    } else {
      return 0;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <ContainerApp>
        <img
          src="https://phonoteka.org/uploads/posts/2022-01/thumbs/1642968425_1-phonoteka-org-p-kartinki-dlya-fotoshopa-fon-1.jpg"
          alt="pics"
          width="100%"
        />
        <Container>
          <Title>
            <SiCoffeescript />
            Cafe Espresso
          </Title>
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.handleClick}
            />
          </Section>

          <Section title={'Statistics'}>
            {this.countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                totalFeedback={this.countTotalFeedback()}
                FeedbackPercentage={this.countPositiveFeedbackPercentage(
                  this.countTotalFeedback()
                )}
              />
            ) : (
              <Notification massage={'There is no feedback'} />
            )}
          </Section>
        </Container>
      </ContainerApp>
    );
  }
}
