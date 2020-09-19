import React from 'react';
import styles from './led.less';
import Comment from './Comment';

export default () => {
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.sloganWrapper}>
          <div className={styles.text}>光盘行动</div>
          <div className={styles.text} style={{ marginTop: 140 }}>
            从我做起
          </div>
        </div>
      </div>
      <Comment />
      <div className={styles.right}>
        <div className={styles.sloganWrapper}>
          <div className={styles.text}>厉行节约</div>
          <div className={styles.text} style={{ marginTop: 140 }}>
            制止浪费
          </div>
        </div>
      </div>
    </div>
  );
};
