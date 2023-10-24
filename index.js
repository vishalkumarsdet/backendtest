require('dotenv').config()
const express = require('express')

//import Express  from "express"

const app = express()
const port = 4000

const githubData = {
    "login": "vishalkumarsdet",
    "id": 6288582,
    "node_id": "MDQ6VXNlcjYyODg1ODI=",
    "avatar_url": "https://avatars.githubusercontent.com/u/6288582?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/vishalkumarsdet",
    "html_url": "https://github.com/vishalkumarsdet",
    "followers_url": "https://api.github.com/users/vishalkumarsdet/followers",
    "following_url": "https://api.github.com/users/vishalkumarsdet/following{/other_user}",
    "gists_url": "https://api.github.com/users/vishalkumarsdet/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vishalkumarsdet/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vishalkumarsdet/subscriptions",
    "organizations_url": "https://api.github.com/users/vishalkumarsdet/orgs",
    "repos_url": "https://api.github.com/users/vishalkumarsdet/repos",
    "events_url": "https://api.github.com/users/vishalkumarsdet/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vishalkumarsdet/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Vishal Kumar",
    "company": "Aristocrat",
    "blog": "https://flutterappworld.com/",
    "location": "Bangalore",
    "email": null,
    "hireable": null,
    "bio": "Working as SEDT at Aristocrat Technologies. ",
    "twitter_username": null,
    "public_repos": 24,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2013-12-30T19:03:13Z",
    "updated_at": "2023-09-09T08:35:45Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Flutter App World')
})

app.get('/login', (req, res) => {

    res.send('<h1>Please login to website!</h2>')
})

app.get('/youtube', (req, res) => {
        res.send('<h2>Backend code using express</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})