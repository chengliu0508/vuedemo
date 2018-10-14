import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messagesEn from './en'
import messagesCn from './cn'

Vue.use(VueI18n)

const messages = {
  cn: {
    message: messagesCn
  },
  en: {
    message: messagesEn
  }
}

const i18n = new VueI18n({
  locale: 'cn', // set locale
  messages
})

export default i18n
