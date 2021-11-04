import { RedisStore } from "connect-redis";
import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";

declare module "express-session" {
  interface Session {
    userId: number;
  }
}

export type MyContext = {
  req: Request & {
    session: Session & Partial<SessionData>;
  };
  res: Response;
  redis: Redis;
};
