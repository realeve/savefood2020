import { setStore, now } from '@/utils/lib';
import weixin from '@/utils/WeiXin';

const namespace = 'common';
export default {
  namespace,
  state: {
    logInfo: {
      uid: 0,
      provider: 0,
    },
    hasSubmitted: 0,
    result: {
      title: '提交成功',
      status: 'success',
      message: '感谢您的参与',
    },
    status: 0,
  },
  reducers: {
    setStore,
  },
  effects: {
    *getWxUser(_, { put, call, select }) {
      // 调整用户信息获取
      let user = yield select((state) => state.common.user);
      if (user.openid) {
        return;
      }

      user = yield call(weixin.getWxUserInfo);
      console.log('用户信息载入完毕', user);
      if (!user) {
        return;
      }

      yield put({
        type: 'setStore',
        payload: {
          user,
        },
      });
    },
  },
  subscriptions: {
    async setup({ dispatch, history }) {
      // 不获取个人信息
      // await dispatch({ type: 'getWxUser' });
      await weixin.init(false);
    },
  },
};
