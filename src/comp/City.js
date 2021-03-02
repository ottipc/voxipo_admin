import React from 'react';
import styles from '../assets/styles';

import Icon from './Icon';

const City = () => {
  return (
    <div style={styles.city}>
      <div style={styles.cityText}>
        <Icon name="marker" /> Berlin
      </div>
    </div>
  );
};

export default City;
