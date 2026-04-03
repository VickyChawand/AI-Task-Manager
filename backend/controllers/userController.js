const User = require("./models/User");

exports.createUser = async (req, res) => {
  try {
    const { uid, name, email } = req.body;

    let user = await User.findOne({ uid });

    if (user) {
      return res.json(user);
    }

    user = await User.create({ uid, name, email });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};