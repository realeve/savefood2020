import React, { useState } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import ReactFullpage from '@fullpage/react-fullpage';
import classnames from 'classnames';
import 'animate.css';

const slogans = [
  ['珍惜粮食', '粒粒不易', '不倒不弃'],
  ['按需点餐', '点菜点少', '不够再添'],
  ['按需取餐', '自主择食', '推广分餐'],
  ['剩菜打包', '打包带走', '人走桌清'],
  ['拒绝铺张', '理性消费', '不讲排场'],
  ['健康饮食', '注意膳食', '拒绝暴食'],
  ['餐餐光盘', '敬畏粮食', '尊重劳动'],
  ['绝不浪费', '浪费可耻', '节约为荣'],
  ['说到做到', '光盘行动', '从我做起'],
];

const OFFSET_PAGES = 3;

const Fullpage = () => {
  const [page, setPage] = useState(0);

  return (
    <>
      <ReactFullpage
        licenseKey="YOUR_KEY_HERE"
        scrollingSpeed={500}
        onLeave={(origin, destination) => {
          setPage(destination.index);
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className={classnames(styles.page, 'section')}>
                <img src="./img/01.jpg" alt="封面" />
                <div
                  style={{
                    width: 150,
                    height: 26,
                    position: 'absolute',
                    bottom: 36,
                    left: 'calc(50% - 75px)',
                    color: '#fff',
                    fontSize: 12,
                    textAlign: 'center',
                  }}
                >
                  成都印钞有限公司
                </div>
              </div>
              <div className={classnames(styles.page, 'section')}>
                <img src="./img/02.jpg" alt="倡议书" />
              </div>
              <div className={classnames(styles.page, 'section')}>
                <img src="./img/01.jpg" alt="封面" />
                <div className={styles.page3_text}>
                  <p
                    className={classnames(styles.slogan, {
                      'animate__animated animate__fadeInLeft': page === 2,
                    })}
                  >
                    <span>厉行节约</span>
                    <span style={{ marginLeft: 15 }}>制止浪费</span>
                  </p>
                  <p
                    className={classnames(styles.slogan, {
                      'animate__animated animate__fadeInRight': page === 2,
                    })}
                  >
                    <span>光盘行动</span>
                    <span style={{ marginLeft: 15 }}>从我做起</span>
                  </p>
                </div>
              </div>
              {slogans.map((item, i) => (
                <div className={classnames(styles.page, 'section')} key={'page' + i}>
                  <img src="./img/main.jpg" alt="slogan" />
                  <div
                    className={classnames(styles.vslogan, {
                      'animate__animated animate__fadeInLeft': page === i + OFFSET_PAGES,
                    })}
                  >
                    <div className={styles.text}>{item[1]}</div>
                    <div className={styles.text} style={{ marginTop: 58 }}>
                      {item[2]}
                    </div>
                  </div>

                  <div
                    className={classnames(styles.slogan_title, {
                      'animate__animated animate__fadeInRight': page === i + OFFSET_PAGES,
                    })}
                  >
                    我承诺
                  </div>

                  <div
                    className={classnames(styles.hslogan, {
                      'animate__animated animate__fadeInRight': page === i + OFFSET_PAGES,
                    })}
                  >
                    {item[0]}
                  </div>
                </div>
              ))}
              <div className={classnames(styles.page, 'section')}>
                <img src="./img/01.jpg" alt="封面" />
                <div className={styles.page3_text}>
                  <div
                    className={classnames(styles.slogan, styles.cbpc, {
                      'animate__animated animate__fadeInLeft': page === 2,
                    })}
                  >
                    我是成钞人
                  </div>
                  <div
                    className={classnames(styles.slogan, {
                      'animate__animated animate__fadeInRight': page === 2,
                    })}
                    style={{ paddingTop: 15 }}
                  >
                    我承诺
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      <img
        src="./img/arrow.gif"
        style={{
          width: 28,
          height: 26,
          position: 'fixed',
          bottom: 20,
          left: 'calc(50% - 14px)',
        }}
      />
    </>
  );
};

export default connect(({ common }: any) => ({ ...common }))(Fullpage);
