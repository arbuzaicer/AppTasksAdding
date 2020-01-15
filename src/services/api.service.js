class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl;
    }

    async createPost(postBody) {
        try{
            const request = new Request(this.url+'/posts.json', {
                method: 'post',
                body: JSON.stringify(postBody)
            });

            const response = await fetch(request);
            return await response.json();
        }
        catch(error) {
            console.log(error)
        }
    }

    async getPosts() {
        try{
            const request = new Request(this.url+'/posts.json');
            const response = await fetch(request);
            return await response.json();
        }
        catch(error) {
            console.log(error)
        }
    }
}

export const sendPost = new ApiService('https://taskaddapplication.firebaseio.com');