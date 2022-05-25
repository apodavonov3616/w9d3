class FollowToggle {
    contructor ($el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id')
        this.followState = (this.$el.data('inital-follow-state'))
    }
}

FollowToggle.prototype.render = function () {
    if (this.followState === 'unfollowed') {
        this.$el.prop('disabled', false);
        this.$el.html('Follow!')
    } else if (this.followState === 'followed') {
            this.$el.prop('disabled', false);
            this.$el.html('Unfollow!')
        }
    }

module.exports = FollowToggle