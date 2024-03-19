import {Request, Response} from "firebase-functions/v1";

export const func1 = async (req: Request, res: Response) => {
  res.send("func1");
};
