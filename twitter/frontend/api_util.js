const APIUtil = {
    followUser: id => {
        APIUtil.changeFollowStatus(id, 'POST')
    },

    unfollowUser: id => {
        APIUtil.changeFollowStatus(id, 'DELETE')
    },
  
    }
  
module.exports = APIUtil;