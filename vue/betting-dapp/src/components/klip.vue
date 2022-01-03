<template>
    <div>
        <h1>
            Klip Login
        </h1>

        <br />

        <button @click="auth">
            klip sdk prepare
        </button>

        <br />

        <div>요청 키 : {{ requestKey }}</div>

        <br />

        <div>qrcode URL : {{ url }}</div>

        <br />

        <div>
            <button @click="getUserInfo">
                카카오톡으로 klip Login
            </button>
        </div>

        <br />

        <div>
            <qrcode-vue :value="url" :size="200"></qrcode-vue>
        </div>
    </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
import Caver from 'caver-js'
import axios from 'axios'
import { prepare, getResult } from 'klip-sdk'
export default {
    name: '',
    components: { QrcodeVue },
    data() {
        return {
            requestKey: null,
            url: ''
        }
    },
    computed: {},
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        async api(url, method, data) {
            return (
                await axios({
                    method: method,
                    url: url,
                    data: data
                }).catch(e => {
                    console.log(e)
                })
            ).data
        },
        async auth() {
            const bappName = 'my app'
            const successLink = 'myApp://home'
            const failLink = 'myApp://about'

            const res = await prepare.auth({ bappName, successLink, failLink })

            console.log('res is ', res)

            if (res.err) {
                // res err
                console.log(res.err)
            } else if (res.request_key) {
                const requestKey = res.request_key
                console.log(requestKey)

                this.requestKey = requestKey
                this.url =
                    'https://klipwallet.com/?target=/a2a?request_key=' +
                    requestKey
            }
        },
        async getUserInfo() {
            const res = await getResult(this.requestKey)
            console.log(res)


            내주소를 받아옴


            if (res.status === 'completed') {
                const caver = new Caver('https://localhost:8080/') => web3 => 메타마스크 프로바이더.. // 
                console.log(res.result)

                const userAddress = res.result.klaytn_address

                const userBalance = await caver.klay.getBalance(userAddress)
                const convertedUserBalance = caver.utils.convertFromPeb(
                    userBalance,
                    'KLAY'
                )

                this.userAddress = userAddress
                this.userBalance = convertedUserBalance
            }
        }
    }
}
</script>
