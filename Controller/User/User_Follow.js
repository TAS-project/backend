const User = require("../../models/User");
const User_Follow = require("../../models/User_Follow");

// follow user
exports.follow = async (req, res, next) => {
	try {
		FollowThisUser = await User.findOne({
			where: { Username: req.body.FollowUsername },
		});

		let already_followed = await User_Follow.findOne({
			where: { UserID: req.person.ID, FollowedUserID: FollowThisUser.ID },
		});
		if (!already_followed && req.person.ID !== FollowThisUser.ID) {
			let follow_user = new User_Follow({
				UserID: req.person.ID,
				FollowedUserID: FollowThisUser.ID,
			});
			await follow_user.save();
			res.status(200).send({ Response: req.body.FollowUsername + " Followed" });
		} else {
			res.status(400).send({ Response: "Error" });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};

// unfollow user
exports.unfollow = async (req, res, next) => {
	try {
		UnfollowThisUser = await User.findOne({
			where: { Username: req.body.UnfollowUsername },
		});
		let UnfollowedUser = await User_Follow.destroy({
			where: { UserID: req.person.ID, FollowedUserID: UnfollowThisUser.ID },
		});
		if (UnfollowedUser) {
			res
				.status(200)
				.send({ Response: req.body.UnfollowUsername + " Unfollowed" });
		} else {
			res.status(400).send({ Response: "Error" });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
