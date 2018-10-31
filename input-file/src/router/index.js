import Vue from 'vue'
import Router from 'vue-router'
import FormInputFile from '@/components/FormInputFile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FormInputFile',
      component: FormInputFile
    }
  ]
})
