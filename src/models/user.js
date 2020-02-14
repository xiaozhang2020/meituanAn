import Axios from 'axios';
import { getCode } from '../../utils/code';

const DefaultUser = {
  isLogin: false,
};

// api
function getListData(phone) {
  return Axios({
    method: 'get',
    params: {
      code: getCode(6),
      phone,
    },
    url: '/server/user/phone',
  });
}

export default {
  namespace: 'user',
  state: DefaultUser,
  effects: {
    *getCode(action, { call, put }) {
      const res = yield call(getListData(action.value));
      console.log(res);
      yield put({ type: 'getYanCode', payload: res.data });
    },
  }, //异步操作
  reducers: {
    getYanCode(state, action) {
      const newState = JSON.parse(JSON.stringify(state));
      console.log(action);
      return newState;
    },
  }, //更新状态
};