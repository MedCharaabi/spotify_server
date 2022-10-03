

var client_id = '55ca72ab441c46f8bbc17d1f4168cc1a'; // Your client id
var client_secret = '300faaf36dbb44aa9d624ac6c9b53690'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri


const test = (new Buffer.from(client_id + ':' + client_secret).toString('base64'));

console.log(test);