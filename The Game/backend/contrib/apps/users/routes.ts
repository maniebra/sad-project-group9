import { Request, Response } from "express";
const express = require("express");
const controller = require("./controller");

const router = express.Router();

/**
 * @swagger
 * /users/register:
 *   post:
 *     tags: [users]
 *     summary: User registration endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user
 *               password:
 *                 type: string
 *                 description: The password of the user
 *               confirm_password:
 *                  type: string
 *                  description: The confirmation password of the user
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: A bad request response
 */

router.post("/register", controller.register);

/**
 * @swagger
 * /users/auth:
 *   post:
 *     summary: User authentication endpoint
 *     tags: [users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The username of the user
 *               password:
 *                 type: string
 *                 description: The password of the user
 *     responses:
 *       200:
 *         description: A successful response
 *       400:
 *         description: A bad request response
 */

router.post("/auth", controller.authenticate);

/**
 * @swagger
 * /users/verify-token:
 *   get:
 *     summary: Verify token endpoint
 *     tags: [users]
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get("/verify-token", controller.verifyToken);

/**
 * @swagger
 * /users/logout:
 *   get:
 *     summary: Logout endpoint
 *     tags: [users]
 *     responses:
 *       200:
 *         description: A successful response
 */
router.get("/logout", controller.logout);

module.exports = router;