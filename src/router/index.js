import Vue from 'vue'
import Router from 'vue-router'
import EmpAdd from '@/components/EmpAdd'
import EmpList from '@/components/EmpList'
import EmpUpdate from '@/components/EmpUpdate'
import EmpUpload from '@/components/EmpUpload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EmpAdd',
      component: EmpAdd
    },
		{
		  path: '/EmpList',
		  name: 'EmpList',
		  component: EmpList
		},
		{
		  path: '/EmpUpdate',
		  name: 'EmpUpdate',
		  component: EmpUpdate
		},
		{
			path:'/EmpUpload',
			name:'EmpUpload',
			component:EmpUpload
		}
  ]
})
