import Cookie from 'js-cookie'

const { locale, locales } = window.config

const state = {
  locale: Cookie.get('locale') || locale,
  locales: locales
}

const getters = {
  locale: state => state.locale,
  locales: state => state.locales
}

const mutations = {
  setLocale( state, { locale }) {
    state.locale = locale
  }
}

const actions = {
  setLocale ({ commit }, locale) {
    commit('setLocale', { locale })

    Cookie.set('locale', locale, { expires: 365 })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
