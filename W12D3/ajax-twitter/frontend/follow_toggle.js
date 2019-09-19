class FollowToggle {
  constructor(el) {
    this.button = $(el);
    this.userid = this.button.data("user-id");
    this.initialfollowstate = this.button.data("initial-follow-state");
    this.render();
    this.button.on("click", this.handleClick.bind(this));
  }

  handleClick(e) {
    e.preventDefault();
    
    if (this.initialfollowstate === false) {
        this.initialfollowstate = true;
        this.render();
    } else {
      this.initialfollowstate = false;
      this.render();
    }
  }

  $.ajax({
    method: "POST",
    url: "/users/:id/follow",
    datatype: "JSON",
    data: this.initialfollowstate,
    success(data) { 
      console.log("modified follow attribute!");
    },
    error(){ 
      console.log("error occurred :(");
    }
  }); 

  render() {
    if (this.initialfollowstate === false) {
      $(this.button).text("Follow");
    } else {
      $(this.button).text("Unfollow");
    }
  }

}


module.exports = FollowToggle;