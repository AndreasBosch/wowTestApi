const api_address = "https://eu.api.battle.net/wow/"
const api_key = "&apikey=uasp8kueb9dcrhz287va798dweznfhtj"
const locale = "?locale=en_US"

let content = document.querySelector('#content')
fetch(api_address + "character/" + "Dentarg/" + "Saktoth" + locale + api_key)
    .then(response => {
        // console.log(response.json())
        return response.json()
    }).then(json => {
        console.log(json)

        let name = document.createElement('h2');
        name.textContent = json.name;
        content.appendChild(name)

        let realm = document.createElement('p');
        realm.textContent = json.realm;
        content.appendChild(realm)

        let thumbnail = document.createElement('img');
        thumbnail.setAttribute('src', json.thumbnail);
        content.appendChild(thumbnail)
    })
