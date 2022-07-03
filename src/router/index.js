import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import AboutView from '../views/AboutView.vue'
import KonsulView from '../views/KonsulView.vue'
import ProdukView from '../views/ProdukView.vue'
import DetailProduk from '../views/DetailProduk.vue'
import KeranjangView from '../views/KeranjangView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import CheckoutPengiriman from '../views/CheckoutPengiriman.vue'
import CheckoutPembayaran from '../views/CheckoutPembayaran.vue'
import CheckoutSukses from '../views/CheckoutSukses.vue'
import PesananSaya from '../views/PesananSaya.vue'
import AkunSaya from '../views/AkunSaya.vue'
import DashboardView from '../views/DashboardView.vue'
import DashboardProduk from '../views/DashboardProduk.vue'
import DashboardProdukEdit from '../views/DashboardProdukEdit.vue'
import LoginView from '../views/LoginView.vue'
import RegistrasiView from '../views/RegistrasiView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dokter Komputer Online Store',
    component: HomeView
  },
  {
    path: '/produk',
    name: 'Produk - Dokter Komputer',
    component: ProdukView
  },
  {
    path: '/service',
    name: 'Service - Dokter Komputer',
    component: ServiceView
  },
  {
    path: '/konsul',
    name: 'Konsul - Dokter Komputer',
    component: KonsulView
  },
  {
    path: '/about',
    name: 'About - Dokter Komputer',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/detail-produk/:id',
    name: 'Detail Produk All - Dokter Komputer',
    component: DetailProduk
  },
  {
    path: '/keranjang',
    name: 'Keranjang - Dokter Komputer',
    component: KeranjangView
  },
  {
    path: '/checkout',
    name: 'Checkout - Dokter Komputer',
    component: CheckoutView
  },
  {
    path: '/checkout-pengiriman',
    name: 'Checkout Pengiriman - Dokter Komputer',
    component: CheckoutPengiriman
  },
  {
    path: '/checkout-pembayaran',
    name: 'Checkout Pembayaran - Dokter Komputer',
    component: CheckoutPembayaran
  },
  {
    path: '/checkout-sukses',
    name: 'Checkout Sukses - Dokter Komputer',
    component: CheckoutSukses
  },
  {
    path: '/akun',
    name: 'Akun Saya - Dokter Komputer',
    component: AkunSaya
  },
  {
    path: '/akun/pesanan/:id',
    name: 'Pesanan - Dokter Komputer',
    component: PesananSaya
  },
  {
    path: '/dashboard',
    name: 'Dashboard - Dokter Komputer',
    component: DashboardView
  },
  {
    path: '/dashboard/produk',
    name: 'Dashboard Produk - Dokter Komputer',
    component: DashboardProduk
  },
  {
    path: '/dashboard/create',
    name: 'Tambah Produk - Dokter Komputer',
    component: DashboardProdukEdit
  },
  {
    path: '/dashboard/produk/:id/edit',
    name: 'Edit Produk - Dokter Komputer',
    component: DashboardProdukEdit
  },
  {
    path: '/login',
    name: 'Login - Dokter Komputer',
    component: LoginView
  },
  {
    path: '/registrasi',
    name: 'Registrasi - Dokter Komputer',
    component: RegistrasiView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
export default router
