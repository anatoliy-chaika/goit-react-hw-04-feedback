import { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { GlobalStyles } from './GlobalSyles.styled';
import { Container } from './Container.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = option => {
    switch (option) {
      case 'good':
        setGood(pervState => pervState + 1);
        break;
      case 'neutral':
        setNeutral(pervState => pervState + 1);
        break;
      case 'bad':
        setBad(pervState => pervState + 1);
        break;
      default:
        console.log('Error with switch');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <GlobalStyles />
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        ></Statistics>
      </Section>
    </Container>
  );
}

// export class App extends Component {
//   state = {
//     good:0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }

//   handleIncrement = option => {
//     this.setState({[option]: this.state[option] + 1});
//   }

//  countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const optionKeys = Object.keys(this.state)

//     return (<Container>
//       <GlobalStyles/>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           options={optionKeys}
//           onLeaveFeedback={this.handleIncrement}
//         />
//       </Section>
//       <Section title="Statistics">
//         <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}></Statistics>
//       </Section>
// </Container>
//     );
//   }
// }
