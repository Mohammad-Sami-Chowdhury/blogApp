const auth = require("../../middleware/auth");

router.get("/dashboard", auth, (req, res) => {
  res.json({ message: "Dashboard data" });
});