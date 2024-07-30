import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };

  render() {
    const totalFeedbacks = Object.values(this.state).reduce(
      (acc, item) => acc + item,
      0
    );
    const positivePersentage = Math.floor(
      (this.state.good / totalFeedbacks) * 100
    );

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={totalFeedbacks}
          positivePercentage={positivePersentage}
        ></Statistics>
      </div>
    );
  }
}
