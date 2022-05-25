class FollowToggle {
    contructor ($el) {
        this.$el = $(el);
        this.userId = this.$el.data('user-id')
        this.followState = (this.$el.data('inital-follow-state'))
        this.render()
    }

    render () {
        if (this.followState === 'unfollowed') {
            this.$el.prop('disabled', false);
            this.$el.html('Follow!')
        } else if (this.followState === 'followed') {
                this.$el.prop('disabled', false);
                this.$el.html('Unfollow!')
            }
        }

    handleClick(something) {
        let followToggle = this
        something.preventDefault();
        if (this.followState === 'followed') {
            this.followState = 'unfollowing';
            this.render()
        } else if (this.followState = 'unfollowed') {
            this.followState = 'following';
            this.render();
        }

    }

        
}

module.exports = FollowToggle