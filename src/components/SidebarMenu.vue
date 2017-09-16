<template>
  <div>
    <ul class="sidebar-menu">
      <!--<li class="header">Main</li>-->

      <li v-if="item.path == null &&item.children == null " class="header" @click="toggleMenu" v-model="itemList"
          v-for="item in itemList">
        {{item.name}}
      </li>
      <li v-else-if="typeof item.children === 'object'" class="treeview" @click="toggleMenu">
        <a href="#">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-left fa-fw pull-right"></i>
          </span>
        </a>
        <ul class="treeview-menu">
          <li v-for="subItem in item.children">
            <router-link :to='subItem.path'>
              <i class="fa fa-file-word-o"></i>{{subItem.name}}
            </router-link>
          </li>
        </ul>

      </li>
      <li v-else @click="toggleMenu" class="pageLink">
        <router-link :to='item.path'><i :class="item.icon"></i>
          <span class="page">{{item.name}}</span>
        </router-link>
      </li>

      <!--<li class="header">LOGS</li>-->
      <!--<li class="pageLink" v-on:click="toggleMenu">-->
      <!--<router-link to="/access"><i class="fa fa-book"></i>-->
      <!--<span class="page">Access</span>-->
      <!--</router-link>-->
      <!--</li>-->
      <!--<li class="pageLink" v-on:click="toggleMenu">-->
      <!--<router-link to="/server"><i class="fa fa-hdd-o"></i>-->
      <!--<span class="page">Server</span>-->
      <!--</router-link>-->
      <!--</li>-->
      <!--<li class="pageLink" v-on:click="toggleMenu">-->
      <!--<router-link to="/repos"><i class="fa fa-heart"></i>-->
      <!--<span class="page">Repos</span>-->
      <!--<small class="label pull-right bg-green">AJAX</small>-->
      <!--</router-link>-->
      <!--</li>-->

      <!--<li class="header">PAGES</li>-->
      <!--<li class="pageLink" v-on:click="toggleMenu">-->
      <!--<router-link to="/login">-->
      <!--<i class="fa fa-circle-o text-yellow"></i>-->
      <!--<span class="page"> Login</span>-->
      <!--</router-link>-->
      <!--</li>-->
      <!--<li class="pageLink" v-on:click="toggleMenu">-->
      <!--<router-link to="/404"><i class="fa fa-circle-o text-red"></i>-->
      <!--<span class="page"> 404</span>-->
      <!--</router-link>-->
      <!--</li>-->
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'SidebarName',
    data () {
      return {
        itemList: [{
          name: 'Main'
        }, {
          name: 'Home',
          path: '/home',
          icon: 'fa fa-home'
        }, {
          name: 'CRM',
          icon: 'fa fa-bar-chart',
          path: '',
          children: [{
            name: 'Query',
            path: '/queryBuilder'
          }, {
            name: 'placeHolder1',
            path: '/placeHolder1'
          }, {
            name: 'placeHolder2',
            path: '/placeHolder2'
          }]
        }, {
          name: 'Profile'
        }, {
          name: 'Task',
          path: '/task',
          icon: 'fa fa-tasks'
        }, {
          name: 'Settings',
          path: '/settings',
          icon: 'fa fa-cog'
        }, {
          name: 'LOGS'
        }]
      }
    },
    methods: {
      toggleMenu (event) {
        // remove active from li
        let active = document.querySelector('li.pageLink.active')
        if (active) {
          active.classList.remove('active')
        }
        // window.$('li.pageLink.active').removeClass('active')
        // Add it to the item that was clicked
        event.toElement.parentElement.className = 'pageLink active'
      }
    }
  }
</script>
<style>
  /* override default */
  .sidebar-menu > li > a {
    padding: 12px 15px 12px 15px;
  }

  .sidebar-menu li.active > a > .fa-angle-left, .sidebar-menu li.active > a > .pull-right-container > .fa-angle-left {
    animation-name: rotate;
    animation-duration: .2s;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-90deg);
    }
  }
</style>
