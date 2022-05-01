import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map(option => {
        return (
          <Button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        );
      })}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
