let GetGitResponseComponent = {
    template: '#get-git-response-template',
    props: {

    },
    data() {
        return {
            usernameInput: { type: String, required: true, default: 'Seymi' },
            response: ''
        }
    },
    methods: {
        async getGitProfile(usr) {
            github_api = 'http://api.github.com/users/';
            const gitProfileResponse = await axios.get(github_api +  usr);
            this.setResponse(gitProfileResponse.data);
            return gitProfileResponse;
        },
        setResponse(response) {
            console.log(response);
            this.response = response;
            this.$emit('gitprofileresponse', response);
        }
    }
}


let GithubProfileComponent = {
    components: {GetGitResponse: GetGitResponseComponent },
    template: '#github-profile-template',
    props: {
        //'avatar_url': {type: String},
        //'username': {type: String},
        //'register_date': { type: Date },
        'bio': {type: String},
        'number_friends': {type: Number},
    },
    data() {
        return {
            username: '',
            gitProfileResponse: '',
            avatar_url: '',
        }
    },
    methods: {
        setProfileFromResponse(response) {
            console.log('I got a message from the emmiter');
            this.gitProfileResponse = response;
            this.avatar_url = response.avatar_url;
            this.username = response.login;
            console.log(response.avatar_url);
        }
    },
    emits: ['gitprofileresponse']
}


const app = Vue.createApp({
    components: {
        GithubProfile: GithubProfileComponent,
        GetGitResponse: GetGitResponseComponent,
     },
     /*
     data() {
        return {
            'username': {type: String, default: 'Seymi'},
            'response': ''
        }
    },
    */

})



.mount('#app')
