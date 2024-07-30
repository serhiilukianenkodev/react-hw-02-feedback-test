export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <h2>Statistics</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>

    {total !== 0 && (
      <div>
        <p>Total: {total}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
      </div>
    )}
  </div>
);
