import React, { useState, useEffect } from 'react';
import styles from './comment.less';
import 'animate.css';
import classnames from 'classnames';
import { useInterval } from 'react-use';
import * as db from '@/utils/db';

const CommentItem = ({ data = {}, idx = 0 }) => (
  <div
    className={classnames(styles.item, 'animate__animated', {
      animate__fadeInRight: idx == 1,
      animate__fadeInLeft: idx == 0,
    })}
  >
    <div className={styles.title}>
      <div className={styles.header}>
        <img src={data.img} alt="" />
      </div>
      <span>我承诺</span>
    </div>
    <div className={styles.comment}>{data.comment}</div>
    <div className={styles.user}>———— {data.nickname}</div>
  </div>
);

const isPC = window.innerHeight / window.innerWidth < 1.2;

const COMMENT_SIZE = isPC ? 120 : 114;

export default () => {
  let [comment, setComment] = useState([]);

  // 当前第几项评论
  const [activeItem, setActiveItem] = useState(0);

  const [endNum, setEndNum] = useState(1);

  useInterval(
    () => {
      setActiveItem(activeItem + 1);
    },
    endNum > activeItem ? 2000 : null,
  );

  const handleComments = (res) => {
    let nextComment = [];
    if (res.rows === 0) {
      // 随机选择一项
      let id = comment[comment.length - 1].id;
      let idx = Math.floor(Math.random() * comment.length);
      nextComment = [...comment, { ...comment[idx], id }];
      setComment(nextComment);
    } else {
      nextComment = [...comment, ...res.data];
      setComment(nextComment);
    }

    let end = nextComment.length <= 6 ? 0 : nextComment.length - 6; 
    setEndNum(end);
  };

  const refresh = () => {
    let maxId = comment.length === 0 ? 0 : comment[comment.length - 1].id;
    db.getCbpcSavefood2020(maxId).then(handleComments);
  };

  useEffect(refresh, []);

  // 每5秒更新一次
  useInterval(refresh, 5000);

  return (
    <div
      className={classnames('section', styles.wrap, {
        [styles.mobile]: !isPC,
      })}
    >
      <div className={styles.container}>
        <div
          className={styles.content}
          style={{ transform: `translateY(-${COMMENT_SIZE * activeItem}px)` }}
        >
          {comment.map((item, idx) => (
            <CommentItem data={item} idx={idx % 2} key={idx} />
          ))}
        </div>
      </div>
      {isPC && <div className={styles.footer}>成都印钞有限公司</div>}
    </div>
  );
};
