export class MainService {

    get(url = '', data = {}) {    
        return fetch(url, { 
            cache: 'no-cache',                 
            headers: {
                'Content-Type': 'application/json',                
            }
        })
        .then(response => response.json());
    }
    post(url = '', data = {}) {    
        return fetch(url, {
            method: 'POST',
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',                
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client            
            body: JSON.stringify(data),
        })
        .then(response => response.json());
    }

    delete(url = '', data = {}) {    
        return fetch(url, {
            method: 'DELETE',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',                
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json());
    }
}

export let mainService = new MainService();