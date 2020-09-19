import { axios, _commonData } from './axios';

export interface IAxiosState {
  title: string;
  rows: number;
  data: ({ [key: string]: any } | [])[];
  header: string[];
  ip: string;
  date: string[];
  source: string;
  time: string;
  serverTime: string;
  hash: string;
  [key: string]: any;
}

/**
 *   @database: { 微信开发 }
 *   @desc:     { 光盘行动添加用户留言 }
 */
export const addCbpcSavefood2020 = (params: {
  nickname: string;
  headimgurl: string;
  province: string;
  city: string;
  country: string;
  openid: string;
  comment: string;
}) =>
  axios({
    url: '/347/eb0c46af56.json',
    params,
  }).then((res) => res.rows > 0 && res.data[0].affected_rows > 0);
