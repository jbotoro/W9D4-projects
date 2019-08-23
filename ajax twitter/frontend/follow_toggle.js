const APIUtil = require("./util.js");


class FollowToggle {
  constructor (el) {
    this.$el = $(el);
    this.userId = $(el).data('user-id');
    this.followState = $(el).data('initial-follow-state');
    this.render();
    $(el).on("click", (e) => {
      this.handleClick(e);
    });
    
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
      this.$el.prop("disabled", false);
    } else if (this.followState === "unfollowing" || this.followState === "following") {
      this.$el.prop("disabled", true);
    } else {
      this.$el.text("Unfollow!");
      this.$el.prop("disabled", false);
    }
  }

    handleClick (e) {
      
      e.preventDefault();

      if (this.followState === 'unfollowed') {
        this.followState = 'following';
        this.render();
        APIUtil.followUser(this.userId)
          .then( () => {
          this.followState = 'followed';
          this.render();
        });
      }
    else { 
      this.followState = 'unfollowing';
      this.render();
      APIUtil.unfollowUser(this.userId)
      .then( () => {
        this.followState = 'unfollowed';
        this.render();
      });
    }
  }
}


module.exports = FollowToggle;