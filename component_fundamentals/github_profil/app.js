let GetGitResponseComponent = {
    template: '#get-git-response-template',
    props: {
        //'username': {type: String, default: 'Seymi'},
    },
    data() {
        return {
            username: {type: String, default: 'Seymi'},
            github_api: 'http://api.github.com/users/',
            response: ''
        }
    },
    methods: {
        async getGitProfile(usr) {
            github_api = 'http://api.github.com/users/';
            const gitProfileResponse = await axios.get(github_api +  usr).then(resp => {
                this.setResponse(resp.data);
            });
            return gitProfileResponse;
        },
        setResponse(response) {
            console.log(response);
            this.$emit('gitProfileResponse');
        }
    }
}


/*
let github_api = 'http://api.github.com/users/';
let user = 'Seymi';

async function gitProfileResponse(user) {
    await axios.get(github_api +  user).then(resp => {
    console.log(resp.data);
})
}
*/


let GithubProfileComponent = {
    template: '#github-profile-template',
    props: {
        //'avatar': {type: Image},
        //'username': {type: String},
        //'register_date': { type: Date },
        'bio': {type: String},
        'number_friends': {type: Number},
    },
    data() {
        return {
            username: {type: String, default: 'Seymi'},
            //gitResponse: this.fetchGitProfile('Seymi')
        }
    },
    methods: {
        async fetchGitProfile(usr) {
            github_api = 'http://api.github.com/users/';
            console.log('api: ', github_api + usr );

            // const gitProfileResponse = await axios.get(github_api +  usr).then(resp => {
            //     //console.log(resp.data);
            // });
            // return gitProfileResponse;
        }
    }
}

// gitRequest = new getGitResponseComponent;
// response = gitRequest.getGitProfile('seymi');
// console.log(response);

const app = Vue.createApp({
    components: {
        GithubProfile: GithubProfileComponent,
        GetGitResponse: GetGitResponseComponent,
    },

})



.mount('#app')
