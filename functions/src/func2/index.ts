import * as functions from "firebase-functions/v1";
import {func2} from "./func2";

export const func2Api = functions.https.onRequest(func2);
