class Github {
    
    constructor(){
        this.client_id = 'Iv1.56d849949fb2944b',
        this.client_secret = '5d140340d4971eefc4e4cdd08c2a3943de2e2076';
    }

    // get user info
    async getUser(user){

       const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
       const profile = await profileResponse.json();

       return {
          profile
       }
    } 
}

