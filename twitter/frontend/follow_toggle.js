class FollowToggle {
    contructor (el) {
        this.el = $(el);
        this.userId = this.el.data('user-id')
        this.followState = (this.el.data('inital-follow-state'))
    }
}

module.exports = FollowToggle