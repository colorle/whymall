import Vue from 'vue';

import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters'

// 1. 使用插件
Vue.use(Vuex);

const state = {
  cartList:[]
}

// 2. 创建Store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})


// 3. 挂载Vue实例上
export default store;