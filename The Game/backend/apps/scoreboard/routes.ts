import { Request, Response } from "express";
const express = require("express");
const controller = require("./controller");

const router = express.Router();

/**
 * @swagger
 * /scoreboard/test:
 *   post:
 *     tags: [scoreboard]
 *     summary: User registration endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               param1:
 *                 type: string
 *                 description: 1st param
 *               param2:
 *                 type: string
 *                 description: 2nd param
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: A bad request response
 */
router.get("/test", controller.sample);
router.get("/get", controller.getScoreboard);
router.post("/add", controller.addScore);

module.exports = router;