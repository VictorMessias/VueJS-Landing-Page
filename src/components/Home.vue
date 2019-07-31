<template>
  <div class="container">
    <div class="row">
      <header class="col-12"><a href=""><i class="fas fa-chevron-left"></i> Read more articles</a> <time >September 20th, 2050</time></header>
    </div>

    <div class="row">
      <div class="col-12 banner">
        <h5 class="my-4">Microsoft Office Versions Comparation</h5>
        <img class="img-fluid" src="@/assets/img/banner.png" />
      </div>
    </div>

    <div class="row mb-3">
      <nav class="col-12">
        <ul class="menu">
          <li v-for="(item, index) in menu" :key="index"><a href="javascript:void(0);" :class="{'active': item.show}" @click="activeMenu(index)">{{ item.label }}</a></li>
        </ul>
      </nav>
    </div>


    <div class="row" >
  <transition name="slide-fade" v-for="(item, index) in menu" :key="index" mode="out-in">

      <div class="col-12" v-if="item.show">

      <ul class="submenu nav" role="tablist">
        <li v-for="(item, index) in subMenu" :key="index">
          <a href="javascript:void(0);" @click="activeSubMenu(index)" :class="{'active': item.show}">{{ item.label}}</a>
        </li>

      </ul>

          <transition name="slide-fade" v-for="(item, index) in subMenu" :key="index" mode="out-in">
            <div class="col-7 box-detail" v-if="item.show" >

              <h5 class="col-12 col-md-8 my-3">Microsoft Office 2019 {{ item.label }}</h5>

                <div class="col-12 body mt-2" >

                  <div class="row">
                    <div class="col-12 col-md-8">
                    <div class="softwares">
                      Software includes:
                      <ul>
                        <li><img class="img-fluid" src="@/assets/img/word-icon.png" /></li>
                        <li><img class="img-fluid" src="@/assets/img/excel-icon.png" /></li>
                        <li><img class="img-fluid" src="@/assets/img/powerpoint-icon.jpg" /></li>
                      </ul>
                    </div>

                  <div class="price">
                    <span>$ <span class="bellow">{{ item.price }}</span> 99 <span class="old-price">{{ item.old_price }}</span></span>
                  </div>

                  <button>Shop now</button>

                    </div>

                    <div class="d-none d-md-block col-md-4 mt-3">
                        <img :src="item.background" class="img-fluid" />
                      </div>

                  </div>

                </div>

            </div>
          </transition>
      </div>
  </transition>
        </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      menu: [
        {
          show: true,
          label: 'Office 2019'
        },
        {
          show: false,
          label: 'Office 2016'
        },
        {
          show: false,
          label: 'Office 2013'
        },
        {
          show: false,
          label: 'Office 2010'
        },
        {
          show: false,
          label: 'Office 365'
        }
      ],
      subMenu: [
        {
          show: true,
          label: 'Standart',
          background: 'https://file-cdn.urcdkeys.com/product/20190115144308_scdk.jpg',
          old_price: '$ 258.98',
          price: 199
        },
        {
          show: false,
          label: 'Home & Student',
          background: 'https://file-cdn.urcdkeys.com/product/20190115144308_scdk.jpg',
          old_price: '$ 258.98',
          price: 199
        },
        {
          show: false,
          label: 'Home & Business',
          background: 'https://file-cdn.urcdkeys.com/product/20190115144308_scdk.jpg',
          old_price: '$ 258.98',
          price: 199
        },
        {
          show: false,
          label: 'Professional',
          background: 'https://file-cdn.urcdkeys.com/product/20190115144308_scdk.jpg',
          old_price: '$ 258.98',
          price: 199
        },
        {
          show: false,
          label: 'Professional Plus',
          background: 'https://file-cdn.urcdkeys.com/product/20190115144308_scdk.jpg',
          old_price: '$ 258.98',
          price: 199
        }
      ]
    }
  },
  methods:{
    activeMenu(index){
      this.menu.forEach(element => {
        element.show = false;
      });

      this.menu[index].show = true;
    
    },
    activeSubMenu(index){
      this.subMenu.forEach(element => {
        element.show = false;
      });

      this.subMenu[index].show = true;
      
      
    }
  }
}
</script>


