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

/**
*   @database: { 微信开发 }
*   @desc:     { 查询用户最新评论 } 
	以下参数在建立过程中与系统保留字段冲突，已自动替换:
	@id:_id. 参数说明：api 索引序号
    */
export const getCbpcSavefood2020: (_id: string) => Promise<IAxiosState> = (_id = '0') =>
  axios({
    url: '/348/386020db2a.json',
    params: {
      _id,
    },
  });
