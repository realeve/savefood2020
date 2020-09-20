import React from 'react';
import styles from './comment.less';

const CommentItem = ({ comment = '' }) => (
  <div className={styles.item}>
    <div className={styles.title}>我承诺</div>
    <div className={styles.comment}>{comment}</div>
  </div>
);

export default () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <CommentItem comment="这里滚动显示用户评论,这里滚动显示用,户评论" />
        <CommentItem comment="敬畏粮食 尊重劳动" />
        <CommentItem comment="敬畏粮食 尊重劳动" />
        <CommentItem comment="敬畏粮食 尊重劳动" />
        <CommentItem comment="敬畏粮食 尊重劳动" />
        <CommentItem comment="敬畏粮食 尊重劳动" />
        <CommentItem comment="敬畏粮食 尊重劳动" /> 
      </div>
    </div>
  );
};
