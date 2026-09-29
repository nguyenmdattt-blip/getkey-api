const crypto = require("crypto");

module.exports = (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  const key =
    "KEY-" +
    crypto.randomBytes(8).toString("hex").toUpperCase();

  const expiresAt = Date.now() + 24 * 60 * 60 * 1000;

  res.status(200).json({
    success: true,
    key: key,
    expiresAt: new Date(expiresAt).toISOString()
  });
};
