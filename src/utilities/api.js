
let api = {

	getTeamsInfo(){
		let url = "https://api.fantasydata.net/nfl/v2/JSON/Teams?";
		let obj = {
			method: "GET",
			headers: {
				"Ocp-Apim-Subscription-Key": "8569e03b573b48d28794117634068d8f"
			}
		}
		return fetch(url, obj).then((res) => res.json());
	},

	getAllNews(){
		let url = "https://api.fantasydata.net/nfl/v2/JSON/News";
		let obj = {
			method: "GET",
			headers: {
				"Ocp-Apim-Subscription-Key": "8569e03b573b48d28794117634068d8f"
			}
		}
		return fetch(url, obj).then((res) => res.json());
	},

	getTeamNews(team){
		let url = "https://api.fantasydata.net/nfl/v2/JSON/NewsByTeam/"+ team;
		let obj = {
			method: "GET",
			headers: {
				"Ocp-Apim-Subscription-Key": "8569e03b573b48d28794117634068d8f"
			}
		}
		return fetch(url, obj).then((res) => res.json());
	}
};

module.exports = api;

/*
View
key={team.key} to get each tean name abbre.

if (picture ==  Key){
	match url news feed.
}
*/


/*
List of All the Teams:
	- API: https://api.fantasydata.net/nfl/v2/JSON/Teams?*/

/*

Each Teams News:
	- let team = ...
	- Team News: https://api.fantasydata.net/nfl/v2/JSON/NewsByTeam/{team}?


*/
