import React from 'react';
import styles from './comment.less';

export default ()=>{
    return <div className={styles.wrap}>
        <div className={styles.content}>
            这里滚动显示用户评论
        </div>
    </div>
}