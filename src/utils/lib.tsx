import React from 'react';
import * as R from 'ramda';
import dayjs from 'dayjs';

export const now = () => dayjs().format('YYYY-MM-DD HH:mm:ss');
export const ymd = () => dayjs().format('YYYYMMDD');
export const ymdate = () => dayjs().format('YYYY年MM月DD日');

interface Store {
  payload: any;
}
export const setStore = (state: any, store: Store) => {
  let { payload } = store;
  if (typeof payload === 'undefined') {
    payload = store;
    // throw new Error('需要更新的数据请设置在payload中');
  }
  let nextState = R.clone(state);
  Object.keys(payload).forEach((key) => {
    let val = payload[key];
    if (R.type(val) === 'Object') {
      nextState[key] = Object.assign({}, nextState[key], val);
    } else {
      nextState[key] = val;
    }
  });
  return nextState;
};
