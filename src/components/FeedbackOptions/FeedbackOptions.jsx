import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(key => (
        <button
          className={css.button}
          key={key}
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
