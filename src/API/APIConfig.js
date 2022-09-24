import React from 'react';

let port = "30010";
if (window.location.protocol === 'https:') {
    port = "30011";
}

let baseURI = window.location.protocol.concat("//").concat(window.location.hostname).concat(":").concat(port).concat("/");
if (window?.location?.hostname == 'localhost') {
    baseURI = 'http://128.199.204.146:8787/';
}
//let baseURI = 'http://128.199.204.146:8787/';
// let baseURI = 'http://66.181.166.126:30010';

const baseConfig = {
    baseurl: baseURI
}

export { baseConfig };