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

/**
 * @swagger
 * /scoreboard/get:
 *   get:
 *     tags: [scoreboard]
 *     summary: Get scoreboard data
 *     responses:
 *       200:
 *         description: Successfully retrieved scoreboard data
 *       500:
 *         description: Server error
 * 
 * /scoreboard/add:
 *   post:
 *     tags: [scoreboard] 
 *     summary: Add new score to scoreboard
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               score:
 *                 type: number
 *                 description: Player's score
 *               playerName:
 *                 type: string
 *                 description: Name of the player
 *     responses:
 *       200:
 *         description: Score successfully added
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Server error
 */

router.get("/get", controller.getScoreboard);

/**
 * @swagger
 * /scoreboard/add:
 *   post:
 *     tags: [scoreboard]
 *     summary: Add new score to scoreboard
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               score:
 *                 type: number
 *                 description: Player's score
 *               playerName:
 *                 type: string
 *                 description: Name of the player
 *     responses:
 *       200:
 *         description: Score successfully added
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Server error
 */

router.post("/add", controller.addScore);

module.exports = router;