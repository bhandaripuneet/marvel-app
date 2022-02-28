import axios from "axios";
import { MD5 } from "crypto-js";


function Marvel({ apiDomain, publicKey, privateKey, apiModule = 'characters' }) {
    this.apiDomain = apiDomain;
    this.publicKey = publicKey;
    this.privateKey = privateKey;
    this.apiModule = apiModule;
    this.ts = new Date();

    this.params = new URLSearchParams({
        apikey: this.publicKey,
        ts: this.ts,
        hash: MD5(String(this.ts) + this.privateKey + this.publicKey),
    });

    Marvel.prototype.get = function(apiModule = this.apiModule, additionalPrams) {
        
        let url = this.apiDomain  + '/public/' + apiModule

        var fullUrl = url + '?' + this.params.toString() + additionalPrams

        return axios.get(fullUrl);
    }



    function get() {
        // let url = this.apiDomain  + '/public/' + lower(this.apiModule)

        // var fullUrl = url + '?' + params.toString()

        // return axios.get(fullUrl);
    }

}
export default Marvel;