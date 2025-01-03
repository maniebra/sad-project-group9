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

/**
 * @swagger
 * /chatgame/get-all-questions:
 *   get:
 *     tags: [chatgame]
 *     summary: Get all available questions
 *     responses:
 *       200:
 *         description: Successfully retrieved questions
 *       500:
 *         description: Server error
 * 
 * /chatgame/get-question-by-id/{id}:
 *   get:
 *     tags: [chatgame]
 *     summary: Get a specific question by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Question ID
 *     responses:
 *       200:
 *         description: Successfully retrieved question
 *       404:
 *         description: Question not found
 *       500:
 *         description: Server error
 * 
 * /chatgame/create-question:
 *   post:
 *     tags: [chatgame]
 *     summary: Create a new question
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 description: The question text
 *               correct_answer:
 *                 type: string
 *                 description: The correct answer
 *               incorrect_answer:
 *                 type: string
 *                 description: Incorrect answer
 *     responses:
 *       200:
 *         description: Question successfully created
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Server error
 */

router.get("/get-all-questions", controller.getQuestions);
router.get("/get-question-by-id/:id", controller.getQuestionById);
router.post("/create-question", controller.createQuestion);

module.exports = router;