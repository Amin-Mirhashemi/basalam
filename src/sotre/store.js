import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import addresses from '../data/addresses.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        vendors: null,
        addresses,
        chosenAddress: 1
    },
    getters:{
        getvendors(state) {
            return state.vendors
        },
        getaddress(state) {
            return state.addresses
        },
        getChosenAddress(state) {
            return state.chosenAddress
        }
    },
    mutations:{
        change(state,{ id, x}){
            for(let vendor of state.vendors.vendors){
                for(let pro of vendor.items){
                    if(pro.id == id){
                        if(pro.quantity + x >= 0) pro.quantity += x
                    }
                }
            }
        },
        delete(state, id){
            for(let vendor of state.vendors.vendors){
                for(let pro of vendor.items){
                    if(pro.id == id){
                        let index = vendor.items.indexOf(pro)
                        vendor.items.splice(index, 1)
                    }
                }
                if(vendor.items.length == 0){
                    let index = state.vendors.vendors.indexOf(vendor)
                    state.vendors.vendors.splice(index, 1)
                }
            }
        },
        changeAddress(state, id){
            state.chosenAddress = id
        },
        getData(state, data) {
            state.vendors = data
        }
    },
    actions:{
        change(context,{ id, x}){
            context.commit('change',{ id, x })
        },
        delete(context, id){
            context.commit('delete',id)
        },
        changeAddress(context, id){
            context.commit('changeAddress', id)
        },
        async getData(context) {
            try {
                let data = await axios.get('https://mini-cart.iran.liara.run/v1/cart')
                context.commit('getData', data.data)
            } catch {
                context.commit('getData', null)
            }
        },
    }
})