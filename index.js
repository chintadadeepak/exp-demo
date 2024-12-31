const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;

const githubData = {
  login: "chintadadeepak",
  id: 107951190,
  node_id: "U_kgDOBm80Vg",
  avatar_url: "https://avatars.githubusercontent.com/u/107951190?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/chintadadeepak",
  html_url: "https://github.com/chintadadeepak",
  followers_url: "https://api.github.com/users/chintadadeepak/followers",
  following_url:
    "https://api.github.com/users/chintadadeepak/following{/other_user}",
  gists_url: "https://api.github.com/users/chintadadeepak/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/chintadadeepak/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/chintadadeepak/subscriptions",
  organizations_url: "https://api.github.com/users/chintadadeepak/orgs",
  repos_url: "https://api.github.com/users/chintadadeepak/repos",
  events_url: "https://api.github.com/users/chintadadeepak/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/chintadadeepak/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "CHINTADA DEEPAK",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 34,
  public_gists: 0,
  followers: 7,
  following: 1,
  created_at: "2022-06-21T18:13:29Z",
  updated_at: "2024-12-20T11:51:41Z",
};

app.listen(PORT, () => {
  console.log(`<h3>Server Started at PORT : ${PORT}</h3>`);
});

app.get("/data", (req, res) => {
  res.send(githubData);
});
