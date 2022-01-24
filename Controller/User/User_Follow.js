const User = require("../../models/User");
const User_Follow = require("../../models/User_Follow");

// follow toggle
exports.toggle = async (req, res, next) => {
	try {
		const Follower = req.person;
		const Followed = await User.findOne({
			where: { Username: req.body.Username },
		});
		if (Follower.ID !== Followed.ID) {
			let already_followed = await User_Follow.findOne({
				where: { UserID: Follower.ID, FollowedUserID: Followed.ID },
			});
			var result = null;
			//delete row
			if (already_followed) {
				const tmp = await User_Follow.destroy({
					where: { UserID: Follower.ID, FollowedUserID: Followed.ID },
				});
				result = false;
			}
			//follow
			else {
				const tmp = new User_Follow({
					UserID: Follower.ID,
					FollowedUserID: Followed.ID,
				});
				await tmp.save();
				result = true;
			}

			res.status(200).send({
				Response: "Done",
				User_ID: Followed.ID,
				Username: Followed.Username,
				Following_State: result,
			});
		} else {
			res.status(400).send({ Response: "Error" });
		}
	} catch (e) {
		res.status(400).send({ Response: "Error" });
		console.log(e);
	}
};
