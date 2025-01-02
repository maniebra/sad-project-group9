import { Request, Response } from "express";
import { Question } from "./models";

export function sample(req: Request, res: Response, next?: Function) {
    res.status(200).json(
        {
            "message": "Test endpoint worked successfully!"
        }
    );
}

export async function getQuestions(req: Request, res: Response, next?: Function) {
    const questions = await Question.find();
    res.status(200).json(
        {
            "questions": questions
        }
    );
}

export async function getQuestionById(req: Request, res: Response, next?: Function) {
    const question = await Question.findOne({ where: { id: parseInt(req.params.id) } });
    if (question == null) {
        res.status(404).json(
            {
                "message": "Question not found"
            }
        );
        return;
    }
    res.status(200).json(question);
}

export async function createQuestion(req: Request, res: Response, next?: Function) {
    const params = {
        question: req.body.question,
        correct_answer: req.body.correct_answer,
        incorrect_answer: req.body.incorrect_answer
    }

    if (!params.question || !params.correct_answer || !params.incorrect_answer) {
        res.status(400).json(
            {
                "message": "Invalid request body"
            }
        );
        return;
    }

    const question = new Question();
    question.question = params.question;
    question.correct_answer = params.correct_answer;
    question.incorrect_answer = params.incorrect_answer;
    await question.save();

    res.status(200).json(
        {
            "message": "Question created successfully!"
        }
    );
}