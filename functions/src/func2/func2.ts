import {Request, Response} from "firebase-functions/v1";

export const func2 = async (req: Request, res: Response) => {
  res.send("func22222");
};
