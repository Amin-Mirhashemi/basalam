import basket from "../components/basket/basket.vue";
import address from "../components/address/address.vue";
import payment from "../components/payment/payment.vue";

export const routes = [
    {path: '/', component: basket },
    {path: '/address', component: address},
    {path: '/payment', component: payment}
]