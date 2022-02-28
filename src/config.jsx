import Marvel from "./marvel";

export const marvelObj = new Marvel({
    apiDomain: 'http://gateway.marvel.com/v1',
    publicKey: '05cf2e41cf2fd3f9cc420aeb0437815c',
    privateKey: 'aad6b47f3124d600c17faf35a05652339c5e0452',
    apiModule: 'characters'
});



export default {
    appName: 'Marvel Characters POC',
}
