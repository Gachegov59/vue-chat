/*eslint-disable */
import Vue from 'vue'
import Vuex from  'vuex'
import authModule from './AuthModule.js'

Vue.use(Vuex)

export default new Vuex.Store( {
    modules: {


        authModule
    }
})