import Vue from 'vue'
import Router from 'vue-router'
import TVShow from '@/components/TVShow'
import TVShowList from '@/component/TVShowList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/show:id',
      name: 'TVShow',
      component: TVShow
    },
    {
      path: '/',
      component: TVShowList
    }
  ]
})
