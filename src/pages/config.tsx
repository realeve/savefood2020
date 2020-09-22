import React, { useState, useEffect } from 'react';
import styles from './config.less';
import 'animate.css';
import classnames from 'classnames';
import { useInterval } from 'react-use';
import * as db from '@/utils/db';
import { Button, Toast, Modal } from 'antd-mobile';
import * as R from 'ramda';

const CommentItem = ({ data = {}, idx = 0, onDelete }) => {
  return (
    <div
      className={classnames(styles.comment, 'animate__animated', {
        animate__fadeInRight: idx == 1,
        animate__fadeInLeft: idx == 0,
      })}
    >
      <div className={styles.comment}>
        {data.comment} —— {data.nickname}
      </div>
      <Button
        size="small"
        style={{ marginLeft: 10 }}
        onClick={() => {
          Modal.alert('删除留言', '确定删除本条留言?', [
            { text: '取消', onPress: () => console.log('cancel') },
            {
              text: '确定',
              onPress: () => {
                db.delCbpcSavefood2020(data.id).then((success) => {
                  if (!success) {
                    Toast.fail('删除失败');
                    return;
                  }
                  Toast.success('删除成功');
                  onDelete && onDelete();
                });
              },
            },
          ]);
        }}
      >
        删除
      </Button>
    </div>
  );
};

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
    if (res.rows === 0) {
      return;
    }

    let nextComment = [...comment, ...res.data];
    setComment(nextComment);

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
        [styles.mobile]: true,
      })}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {comment.map((item, idx) => (
            <CommentItem
              data={item}
              idx={idx % 2}
              key={item.id}
              onDelete={() => {
                let nextComment = R.reject((c) => c.id == item.id)(comment);
                setComment(nextComment);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
