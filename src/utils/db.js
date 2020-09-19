import { axios, _commonData } from './axios';

/**
*   @database: { 微信开发 }
*   @desc:     { 202004优惠券购物登录 } 
  const { deptname, username, cardno } = params;
*/
// export const getCbpcCouponUsers = params =>
//   axios({
//     url: '/298/1fa33bd1a7.json',
//     params,
//   });

/**
 *   @database: { 微信开发 }
 *   @desc:     { 清除个人已选数据 }
 */
export const delCbpcCouponGoods = uid =>
  axios({
    url: '/301/606f58b07d.json',
    params: {
      uid,
    },
  });

/**
*   @database: { 微信开发 }
*   @desc:     { 更新用户信息 } 
    const { remark, actual, uid } = params;
*/
export const setCbpcCouponUsers = async (params, values) => {
  let {
    data: [{ affected_rows }],
  } = await axios({
    url: '/300/a346be7341.json',
    params,
  });
  if (affected_rows == 0) {
    return {
      title: '提交失败',
      message: '请稍后再试',
      status: 'fail',
    };
  }
  // 清空上次数据
  await delCbpcCouponGoods(params.uid);
  return addCbpcCouponGoods(values);
};

/**
*   @database: { 微信开发 }
*   @desc:     { 202004优惠券购物登记商品 } 
  const { name, spec, price, quantity, uid } = params;
*/
export const addCbpcCouponGoods = values =>
  axios({
    method: 'post',
    data: {
      values,
      id: 299,
      nonce: '1f32eeea35',
    },
  });
/**
*   @database: { 微信开发 }
*   @desc:     { 优惠券个人信息 } 
    const { username, deptname, cardno } = params;
*/
export const getCbpcCouponUsers = params =>
  axios({
    url: '/302/7384d07baa.json',
    params,
  });

/**
 *   @database: { 微信开发 }
 *   @desc:     { 202004优惠券采购汇总清单 }
 */
export const getCbpcCouponGoods = () =>
  axios({
    url: '/303/dd9d43dbc4.json',
  });

/**
 *   @database: { 微信开发 }
 *   @desc:     { 202004优惠券采购总额 }
 */
export const getCbpcCouponTotalAmount = () =>
  axios({
    url: '/304/a9782bc103.json',
  });

/**
 *   @database: { 微信开发 }
 *   @desc:     { 未选取人员名单 }
 */
export const getCbpcCouponUsersUnchoose = () =>
  axios({
    url: '/308/670e9db74d.array',
  });

/**
 *   @database: { 微信开发 }
 *   @desc:     { 用户已选择信息查询 }
 */
export const getCbpcEmployees = card =>
  axios({
    url: '/314/01fd19f5ac.json',
    params: {
      card,
    },
  });

/**
 *   @database: { 微信开发 }
 *   @desc:     { 用户已选择信息 }
 */
export const getCbpcCouponUsersLog = card =>
  axios({
    url: '/315/1893b3e100.json',
    params: {
      card,
    },
  });

/**
 *   @database: { 微信开发 }
 *   @desc:     { 领取商品 }
 */
export const setCbpcCouponUsersReceive = (uid, proxy) =>
  axios({
    url: '/316/323fd13db3.json',
    params: {
      uid,
      proxy,
    },
  });

/**
 *   @database: { 微信开发 }
 *   @desc:     { 领用数汇总 }
 */
export const getCbpcCouponUsersCount = () =>
  axios({
    url: '/317/5f3b29f37e.json',
  });

/**
 *   @database: { 微信开发 }
 *   @desc:     { 未领取人员名单 }
 */
export const getCbpcCouponUsersNotChoose = () =>
  axios({
    url: '/318/b5675cdc76.array',
  });
