import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  console.log(total);
  return (
    <ul className={s.List}>
      <li className={s.Item}>Good: {good}</li>
      <li className={s.Item}>Neutral: {neutral}</li>
      <li className={s.Item}>Bad: {bad}</li>
      <li className={s.Item}>Total: {total}</li>
      <li className={s.Item}>Positive: {positivePercentage}%</li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
