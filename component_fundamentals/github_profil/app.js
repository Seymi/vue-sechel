let GithubProfileComponent = {
    template: '#github-profile-template',
    props: {

    },
    data() {
        return {
            username: { type: String, required: true, default: 'Seymi' },
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
        }
    }
}

const app = Vue.createApp({
    components: {
        GithubProfile: GithubProfileComponent,
     },
})

.mount('#app')
