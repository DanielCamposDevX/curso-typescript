import { Request, Response , NextFunction } from "express";

export default function validateSchema(schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false });

        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            res.status(422).send(errors);
        }
        else {
            next()
        }
    }
}