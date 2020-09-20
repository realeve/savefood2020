import React from 'react';
import styles from './comment.less';
import 'animate.css';
import classnames from 'classnames';

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
  </div>
);

export default () => {
  const comments = [
    {
      comment: '这里滚动显示用户评论,户评论',
      img:
        'http://thirdwx.qlogo.cn/mmopen/vi_32/WnbsIzp30vkf8OVicicMHv0JZSy70NWsBmD6TfLflm1UM0jiceLJExd7BtjldmY6BxDC9f9pqTkpe8ic46icBw3X00g/132',
      nickname: '宾不厌诈',
      id: 0,
    },
    {
      comment: '敬畏粮食 尊重劳动',
      img:
        'http://wx.qlogo.cn/mmhead/Q3auHgzwzM7RSAYiaxiaC1lOZYicWic9YZKEFJ2TKEfh3pFJibLvf7IxdLQ/0',
      nickname: '宋丽',
      id: 1,
    },
    {
      comment: '敬畏粮食 尊重劳动',
      img:
        'http://wx.qlogo.cn/mmhead/Q3auHgzwzM7RSAYiaxiaC1lOZYicWic9YZKEFJ2TKEfh3pFJibLvf7IxdLQ/0',
      nickname: '宋丽',
      id: 2,
    },
    {
      comment: '敬畏粮食 尊重劳动',
      img:
        'http://wx.qlogo.cn/mmhead/Q3auHgzwzM7RSAYiaxiaC1lOZYicWic9YZKEFJ2TKEfh3pFJibLvf7IxdLQ/0',
      nickname: '宋丽',
      id: 3,
    },
    {
      comment: '敬畏粮食 尊重劳动',
      img:
        'http://wx.qlogo.cn/mmhead/Q3auHgzwzM7RSAYiaxiaC1lOZYicWic9YZKEFJ2TKEfh3pFJibLvf7IxdLQ/0',
      nickname: '宋丽',
      id: 4,
    },
    {
      comment: '敬畏粮食 尊重劳动',
      img:
        'http://wx.qlogo.cn/mmhead/Q3auHgzwzM7RSAYiaxiaC1lOZYicWic9YZKEFJ2TKEfh3pFJibLvf7IxdLQ/0',
      nickname: '宋丽',
      id: 5,
    },
    {
      comment: '敬畏粮食 尊重劳动',
      img:
        'http://wx.qlogo.cn/mmhead/Q3auHgzwzM7RSAYiaxiaC1lOZYicWic9YZKEFJ2TKEfh3pFJibLvf7IxdLQ/0',
      nickname: '宋丽',
      id: 6,
    },
  ];
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        {comments.map((item, idx) => (
          <CommentItem data={item} idx={idx % 2} key={item.id} />
        ))}
      </div>
      <div className={styles.footer}>
          成都印钞有限公司
      </div>
    </div>
  );
};
