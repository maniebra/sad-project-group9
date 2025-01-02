import { Request, Response } from "express";
const express = require("express");
const controller = require("./controller");

const router = express.Router();

/**
 * @swagger
 * /chatgame/test:
 *   post:
 *     tags: [chatgame]
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
router.get("/get-all-questions", controller.getQuestions);
router.get("/get-question-by-id/:id", controller.getQuestionById);
router.post("/create-question", controller.createQuestion);

module.exports = router;