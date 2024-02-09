import React from 'react';
import styles from './styles.module.css';
import { children } from './types/dummies';
export * from './components';

interface Props {}

const ExampleComponent: React.FC<Props> = ({ }) => {
  return <div className={styles.test}>Example Component: {children}</div>;
};

export default ExampleComponent;
