import PropTypes from 'prop-types';
import { FeedbackList } from './FeedbackOptions.styled';

const options = ['good', 'neutral', 'bad'];

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
