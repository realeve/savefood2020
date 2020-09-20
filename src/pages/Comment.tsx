import React, { useState, useEffect } from 'react';
import styles from './comment.less';
import 'animate.css';
import classnames from 'classnames';
import { useInterval, useBoolean } from 'react-use';
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

const COMMENT_SIZE = 120;

export default () => {
  let [comment, setComment] = useState([]);
  let [maxId, setMaxId] = useState('0');

  // 当前第几项评论
  const [activeItem, setActiveItem] = useState(0);

  const [isRunning, toggleIsRunning] = useBoolean(true);

  const [endNum, setEndNum] = useState(1);

  useInterval(
    () => {
      setActiveItem(activeItem + 1);
      if (activeItem === endNum) {
        toggleIsRunning();
      }
    },
    isRunning ? 3000 : null,
  );

  useEffect(() => {
    db.getCbpcSavefood2020(maxId).then((res) => {
      if (res.rows === 0) {
        return;
      }

      let lastItem = res.data[res.rows - 1];
      setMaxId(lastItem.id);

      let nextComment = [...comment, ...res.data];
      setComment(nextComment);

      if (nextComment.length <= 6) {
        setEndNum(0);
      } else {
        setEndNum(nextComment.length - 7);
      }
    });
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div
          className={styles.content}
          style={{ transform: `translateY(-${COMMENT_SIZE * activeItem}px)` }}
        >
          {comment.map((item, idx) => (
            <CommentItem data={item} idx={idx % 2} key={item.id} />
          ))}
        </div>
      </div>
      <div className={styles.footer}>成都印钞有限公司</div>
    </div>
  );
};
