const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$(document).ready(function () {
  $('button.follow-toggle').each((idx, button) =>  
    new FollowToggle(button));

  $('nav.users-search').each((idx, nav) =>
   new UsersSearch(nav));
}); 

