import React from 'react';
import styles from './led.less';
import Comment from './Comment';
import classnames from 'classnames';

export default () => {
  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.sloganWrapper}>
          <div className={classnames(styles.text, styles.border)}>光盘行动</div>
          <div className={styles.text} style={{ marginTop: 140 }}>
            从我做起
          </div>
        </div>
      </div>
      <Comment />
      <div className={styles.right}>
        <div className={styles.sloganWrapper}>
          <div className={classnames(styles.text, styles.border)}>厉行节约</div>
          <div className={styles.text} style={{ marginTop: 140 }}>
            制止浪费
          </div>
        </div>
      </div>
    </div>
  );
};
