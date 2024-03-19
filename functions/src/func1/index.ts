import * as functions from "firebase-functions/v1";
import {func1} from "./func1";

export const func1Api = functions.https.onRequest(func1);
