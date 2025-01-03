import { Request, Response } from "express";
import { Scoreboard } from "./models"
import jwt from 'jsonwebtoken';
import { JwtPayload } from "jsonwebtoken";
import { User } from "@contrib/apps/users/models";
const config = require('@settings/config.ts');

export function sample(req: Request, res: Response, next?: Function) {
    res.status(200).json(
        {
            "message": "Test endpoint worked successfully!"
        }
    );
}

export async function getScoreboard(req: Request, res: Response, next?: Function) {
    let scoreboard = await Scoreboard.find();
    scoreboard.sort((a, b) => b.score - a.score);
    scoreboard = scoreboard.slice(0, 10);
    let leaderboard = [];
    for (let i = 0; i < scoreboard.length; i++) {
        leaderboard.push({
            username: scoreboard[i].user!.username,
            score: scoreboard[i].score,
            played_at: scoreboard[i].played_at
        });
    }
    res.status(200).json(leaderboard);
}

export async function addScore(req: Request, res: Response, next?: Function) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }
    const token = authHeader.split(' ')[1];
    let user;
    try {
        user = jwt.verify(token, config.JWT_SECRET);
    } catch (error) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }
    const score = req.body.score;
    const scoreboard = new Scoreboard();
    scoreboard.score = score;
    scoreboard.played_at = new Date();
    scoreboard.user = user as unknown as User;

    // replace if current > prev
    const prevScoreboard = await Scoreboard.findOne({ where: { user: (user as JwtPayload).id } });
    if (prevScoreboard && prevScoreboard.score < score) {
        prevScoreboard.score = score;
        prevScoreboard.played_at = new Date();
        await prevScoreboard.save();
    }
    res.status(200).json(scoreboard);
}