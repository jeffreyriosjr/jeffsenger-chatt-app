
const Signup = () => {



const axios = require('axios');
const data = {
	"username": "bob_baker",
	"secret": "secret-123-jBj02",
	"email": "b_baker@mail.com",
	"first_name": "Bob",
	"last_name": "Baker",
	"custom_json": {"fav_game": "Candy Crush", "high_score": 2002}
};

const config = {
	method: 'post',
	url: 'https://api.chatengine.io/users/',
	headers: {
		'PRIVATE-KEY': '{{private_key}}'
	},
	data : data
};

axios(config)
.then(function (response) {
	console.log(JSON.stringify(response.data));
})
.catch(function (error) {
	console.log(error);
});
};