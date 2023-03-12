import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions'
import { Section } from './Section/Section';
import {Statistics} from "./Statistics/Statistics"
import { GlobalStyles } from "./GlobalSyles.styled"
import {Container} from "./Container.styled"



export class App extends Component {
  state = {
    good:0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  handleIncrement = option => {
    this.setState({[option]: this.state[option] + 1});
  }
  
 countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }
  
  render() {
    const { good, neutral, bad } = this.state;
    const optionKeys = Object.keys(this.state)

    return (<Container>
      <GlobalStyles/>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionKeys}
          onLeaveFeedback={this.handleIncrement}
        />
      </Section>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}></Statistics>
      </Section>
</Container>
    );
  }
}
