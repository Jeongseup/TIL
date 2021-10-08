const didJWT = require('did-jwt')
const signer = didJWT.ES256KSigner('278a5de700e29faae8e40e366ec5012b5ec63d36ec77e8a2417154cc1d25383f')

let jwt = await didJWT.createJWT(
  { aud: 'did:ethr:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74', exp: 1957463421, name: 'uPort Developer' },
  { issuer: 'did:ethr:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74', signer },
  { alg: 'ES256K' }
)

console.log(jwt)

//pass the jwt from step 1
let decoded = didJWT.decodeJWT(jwt)
console.log(decoded)
