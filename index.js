import Express from 'express'

const app = Express()

app.use(Express.static('dist'))

const PORT = process.env.PORT || 3000;

// const github = {
//     "login": "garvitvarshney-16",
//     "id": 72983386,
//     "node_id": "MDQ6VXNlcjcyOTgzMzg2",
//     "avatar_url": "https://avatars.githubusercontent.com/u/72983386?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/garvitvarshney-16",
//     "html_url": "https://github.com/garvitvarshney-16",
//     "followers_url": "https://api.github.com/users/garvitvarshney-16/followers",
//     "following_url": "https://api.github.com/users/garvitvarshney-16/following{/other_user}",
//     "gists_url": "https://api.github.com/users/garvitvarshney-16/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/garvitvarshney-16/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/garvitvarshney-16/subscriptions",
//     "organizations_url": "https://api.github.com/users/garvitvarshney-16/orgs",
//     "repos_url": "https://api.github.com/users/garvitvarshney-16/repos",
//     "events_url": "https://api.github.com/users/garvitvarshney-16/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/garvitvarshney-16/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": null,
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 8,
//     "public_gists": 0,
//     "followers": 1,
//     "following": 4,
//     "created_at": "2020-10-16T13:56:46Z",
//     "updated_at": "2023-11-26T18:27:35Z"
// }


// app.get('/', (req, res) => {
//     res.send('Hello Garv!')
// })

// app.get('/name', (req, res) => {
//     res.send('Garvit Varshney')
// })

// app.get('/login', (req, res) => {
//     res.send('<h1>Please login at our Website</h1>')
// })

// app.get('/github', (req, res) => {
//     res.send(github)
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'this is a joke',
        },
        {
            id: 2,
            title: 'A joke',
            content: 'this is a joke',
        },
        {
            id: 3,
            title: 'A joke',
            content: 'this is a joke',
        },
        {
            id: 4,
            title: 'A joke',
            content: 'this is a joke',
        },
        {
            id: 5,
            title: 'A joke',
            content: 'this is a joke',
        },
        {
            id: 6,
            title: 'A joke',
            content: 'this is a joke',
        },
    ]
    res.send(jokes)
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})