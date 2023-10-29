let GithubProfileComponent = {
    template: '#github-profile-template',
    props: {
        //formatedDate: String
    },
    data() {
        return {
            username: { type: String, required: true, default: 'Seymi' },
            response: '',
            formatedDate: '',
            error: false
        }
    },
    async created(){
        const response = await axios.get(`https://api.github.com/users/seymi`);
        this.setResponse(response.data);
        this.setFormatedDate(response.data.created_at);
    },
    methods: {
        async getGitProfile(usr) {
            let errorStatus = false;
            github_api = 'http://api.github.com/users/';
            const gitProfileResponse = await axios.get(github_api +  usr)
                .catch(function (error) {
                    errorStatus = true;
                    console.log('404');
                })
            ;
            this.error = errorStatus;
            if (errorStatus===false) {
                this.setResponse(gitProfileResponse.data);
                this.setFormatedDate(gitProfileResponse.data.created_at);
            }
            return gitProfileResponse;
        },
        setResponse(response) {
            console.log(response);
            this.response = response;
        },
        setFormatedDate(json_date) {
            console.log(json_date);
            convertedDate = new Date(json_date);
            //this.formatedDate = convertedDate.getDate() + "/" + convertedDate.getMonth() + "/" + convertedDate.getFullYear();
            this.formatedDate = convertedDate.getFullYear();
            //return new Date(json_date).getFullYear();
        }
    }
}

const app = Vue.createApp({
    components: {
        GithubProfile: GithubProfileComponent,
    },
    methods: {
    }

})

.mount('#app')
