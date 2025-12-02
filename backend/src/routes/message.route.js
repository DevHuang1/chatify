import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("Sending messages");
});
router.get("/receive", (req, res) => {
  res.send("Receiving messages");
});

export default router;
