import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
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
  em: EntityManager<IDatabaseDriver<Connection>>;
  req: Request & {
    session: Session & Partial<SessionData>;
  };
  res: Response;
  redis: Redis;
};
