import React from "react";
import { BlogPost } from "../blogsArray";
import { DustinAvatar } from "~/routes/us+/components-data/about-us-data";

export const SimplifyWithRedis: BlogPost =
  // Simplify your Data Management
  {
    id: "21",
    date: "2024-04-10",
    title: "Simplify your Data Management - With Redis",
    slug: "simplify-your-data-management-with-redis",
    author: "Dustin W. Carr",
    avatar: DustinAvatar,
    tags: ["redis", "database", "data management"],
    categories: ["Programming"],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog20.png",
    summary:
      "Delve into the advantages of using Redis as a primary data store, emphasizing its simplicity and flexibility which empower developers to tailor database interactions specifically for their applications.",
    paragraphs: [
      <React.Fragment key="simplify-your-data-management-with-redis">
        <p>
          The reasons to use Redis as your primary data store are plentiful, and
          that is discussed in detail by many other articles on the web, such as{" "}
          <a
            target="_blank"
            href="https://redis.io/blog/redis-cache-vs-redis-primary-database-in-90-seconds/"
          >
            this one
          </a>
          . However, one of the most compelling reasons to use Redis is its
          simplicity and flexibility. What this enables is for you to truly get
          to know your data, so that you can understand just what it is that you
          need from your data store. What you may find is that the indexes and
          queries that SQL brings only amount to a few extra lines of code. The
          process of writing that code feels powerful, because there are no
          hidden interactions, and SQL is replaced with an extremely simple
          database interface that specializes in YOUR needs for YOUR app, not
          the general needs of every db programmer in the world.
        </p>
        <p>
          In this article, I will walk you through the process of writing a
          simple data interface for Redis, and how to use it to build a simple
          chat application.
        </p>
        <p>
          This is not an introduction to redis, or to typescript, or zod. Though
          it is a basic implementation that uses all of these. Just ask Chat for
          clarification on any of these topics. The important part is how to get
          applications written once you have these pieces in place.
        </p>
        <h2>The Data Interface</h2>
        <p>
          Any database definition requires a schema. In this case, we will use
          zod to define the schema. Zod is a typescript library that allows you
          to define schemas for your data. This is useful for many reasons, but
          in this case, it allows us to define the shape of our data, and to
          validate that the data we are storing is correct.
        </p>
        <p>Let's demonstrate this with a simple user schema:</p>
        <pre>
          <code>
            {`import { z } from "zod";

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

export const createUserSchema = z.object({
  id: z.string().default(() => uuidv4()),
  name: z.string(),
  email: z.string(),
  password: z.string().optional(),
  created: z.string().default(() => new Date().toISOString()),
  updated: z.string().default(() => new Date().toISOString()),
  lastLogin: z.string().default(() => new Date().toISOString()),
  imageId: z.string().optional(),
  imageUrl: z.string().optional(),
  role: z.nativeEnum(Role).default(Role.USER),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type User = z.infer<typeof createUserSchema>;`}
          </code>
        </pre>
        <p>
          This schema defines a user object, with a few fields. The{" "}
          <code>createUserSchema</code> is the schema that we will use to
          validate the data that we are storing. The{" "}
          <code>CreateUserInput</code> type is the type that we will use to
          create new users. The <code>User</code> type is the type that we will
          use to read users from the database.
        </p>
        <p>
          The ease with which we can generate complex inferred types with zod is
          one of the benefits of this entire approach. In fact, often developers
          have to write two schemas, one for the database definition and one for
          the application. With zod, we can write one schema and use it for
          both.
        </p>
        <p>
          Also with zod we can introduce transforms and defaults that provide a
          great deal of extensibility. We use this to automatically set the
          timestamps, as well as provide default values for the role and id
          fields.
        </p>
        <pre>
          <code>
            {`export const updateUserSchema = createUserSchema
  .omit({ id: true })
  .partial()
  .extend({
    id: z.string(),
    updated: z.string().default(() => new Date().toISOString()),
  });

export type UpdateUserInput = z.infer<typeof updateUserSchema>;`}
          </code>
        </pre>
        <p>
          To create a database of users, we will be using io-redis, a redis
          client for node. We will also be using the redis hash data structure
          to store our users. The hash data structure is a key-value store,
          where the key is a string, and the value is a map of strings to
          strings.
        </p>
        <pre>
          <code>
            {`import Redis from "ioredis";
import { remember } from "@epic-web/remember";

export const redis = remember("redis", () => {
  return new Redis(process.env.REDIS_URL as string, { family: 6 });
});`}
          </code>
        </pre>
        <p>
          Now that we have a redis client, we can create a data interface for
          our users. We will create a new file, <code>user.ts</code>, and add
          the following code:
        </p>
        <pre>
          <code>
            {`import { redis } from "./redis";
import {
  createUserSchema,
  CreateUserInput,
  User,
  updateUserSchema,
  UpdateUserInput,
} from "./schema";

const userKey = (userId: string) => \`user:\${userId}\`;
const userIdKey = (userString: string) => \`userId:\${userString}\`;

export async function createUser(
  userInfo: CreateUserInput
): Promise<UserInfo | null> {
  const nameExists = await db.exists(userIdKey(userInfo.name));
  if (nameExists) return null;
  const emailExists = await db.exists(userIdKey(userInfo.email));
  if (emailExists) return null;
  const _userInfo = createUserSchema.parse(userInfo);
  const userId = _userInfo.id;
  await db.hset(userKey(userId), _userInfo);
  await db.set(userIdKey(userInfo.name), userId);
  await db.set(userIdKey(userInfo.email), userId);
  const user = await getUser(userId);
  return user;
}`}
          </code>
        </pre>
        <p>
          This function creates a new user in the database. It first checks if
          the user already exists by checking if the name and email are already
          in use. If the user does not exist, it creates a new user with the
          provided information.
        </p>
        <pre>
          <code>
            {`export async function getUser(userId: string): Promise<UserInfo | null> {
  const userInfo = (await db.hgetall(userKey(userId))) as UserInfo | null;
  delete userInfo?.password;
  return userInfo;
}`}
          </code>
        </pre>
        <p>
          Our <code>getUser</code> function is similarly simple. And we can also
          easily get the user by name or email:
        </p>
        <pre>
          <code>
            {`export async function getUserByName(name: string): Promise<User | null> {
  const userId = await db.get(userIdKey(name));
  if (!userId) return null;
  return getUser(userId);
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const userId = await db.get(userIdKey(email));
  if (!userId) return null;
  return getUser(userId);
}`}
          </code>
        </pre>
        <p>
          We can also update the user, though this requires a little more
          bookkeeping:
        </p>
        <pre>
          <code>
            {`export async function updateUser(
  userInfo: UpdateUserInput
): Promise<UpdateUserOutput> {
  const updateUserInfo = updateUserSchema.parse(userInfo);
  const userId = updateUserInfo.id;
  const existingUser = await getUser(userId);
  if (!existingUser) return { data: null, error: "user not found" };
  if (userInfo.name && userInfo.name !== existingUser.name) {
    if (await db.exists(userIdKey(userInfo.name)))
      return { data: null, error: "username or email already in use

" };
  }
  if (userInfo.email && userInfo.email !== existingUser.email) {
    if (await db.exists(userIdKey(userInfo.email)))
      return { data: null, error: "username or email already in use" };
  }
  if (userInfo.name) {
    db.del(userIdKey(existingUser.name));
    db.set(userIdKey(userInfo.name), userId);
  }
  if (userInfo.email) {
    db.del(userIdKey(existingUser.email));
    db.set(userIdKey(userInfo.email), userId);
  }
  await db.hset(userKey(userId), updateUserInfo);
  return { data: await getUser(userId), error: null };
}`}
          </code>
        </pre>
        <h2>Next Part: The Chat Application</h2>
        <a href="/blog/simplify-your-data-management-with-redis-2">
          🔗 Go to the blog for part 2
        </a>
      </React.Fragment>,
    ],
  };
