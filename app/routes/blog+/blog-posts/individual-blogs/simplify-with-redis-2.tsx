import { DustinAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";

export const SimplifyWithRedis2: BlogPost =
  // Simplify your Data Management 2
  {
    id: "22",
    date: "2024-04-11",
    title: "Simplify your Data Management - With Redis",
    slug: "simplify-your-data-management-with-redis-2",
    author: "Dustin W. Carr",
    avatar: DustinAvatar,
    categories: ["Programming"],
    tags: ["redis", "database", "data management"],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog21.png",
    summary:
      "Explore building a simple chat application database using Redis and TypeScript, setting up user and chat functionalities, focusing on creating, updating, and retrieving data.",
    paragraphs: [
      <React.Fragment key="simplify-your-data-management-with-redis-2">
        <h2>The Chat Application</h2>
        <p>
          In the previous article, we discussed how to create a simple data
          interface for Redis. In this article, we will build on this approach
          to create the database for a simple chat application.
        </p>
        <p>
          We want a database that will enable us to build a minimum viable
          product (MVP) for a chatbot roleplay application. This means that we
          need to be able to create users, create chats with an AI bot, and send
          and receive messages. We will also need to be able to retrieve users,
          chats, and messages. We are only thinking about the database right
          now, not the front end or the logic of the application.
        </p>
        <p>
          So let's start as we did for the users. Each chat will have two keys,
          one for the list of chat messages, and another for the chat metadata.
        </p>
        <pre>
          <code>
            {`import { z } from "zod";

export const chatKey = (chatId: string) => \`chat:\${chatId}\`;
export const chatMetaKey = (chatId: string) => \`chat-meta:\${chatId}\`;
const userChatsKey = (userId: string) => \`user-chats:\${userId}\`;

export const latestChatsKey = "latest-chats";

export const chatMetaCreateSchema = z.object({
  chatId: z.string().default(() => uuidv4()),
  userId: z.string(),
  title: z.string().default(\`chat created at \${new Date().toISOString()}\`),
  isPrivate: z
    .string()
    .regex(/^(true|false)$/)
    .default("false"),
  createdAt: z.string().default(() => new Date().toISOString()),
  lastActive: z.string().default(() => new Date().toISOString()),
});

export type CreateChatMetaInput = z.input<typeof chatMetaCreateSchema>;`}
          </code>
        </pre>
        <pre>
          <code>
            {`export const chatMetaUpdateSchema = z.object({
  chatId: z.string(),
  userId: z.string().optional(),
  title: z.string().optional(),
  isPrivate: z
    .string()
    .regex(/^(true|false)$/)
    .optional(),
  createdAt: z.string().optional(),
  lastActive: z.string().default(() => new Date().toISOString()),
});

export type UpdateChatMetaInput = z.input<typeof chatMetaUpdateSchema>;`}
          </code>
        </pre>
        <p>
          And then we can define the API for this data. When we create, we want
          to have an index for the latest chats, and for the user chats.
        </p>
        <p>
          We also want to be able to update the chat metadata, and manage the
          user's chats. In SQL we might define a foreign key relation between
          the user and the chat, but in Redis, we take care of that with a
          simple list of chat ids. Note that all of the functions we are writing
          would be required regardless of the database we are using. The only
          difference is that we have to write the indexing actions ourselves,
          which amounts to one line of code per index per function in this case.
        </p>
        <pre>
          <code>
            {`import {
  chatKey,
  chatMetaKey,
  latestChatsKey,
  CreateChatMetaInput,
  UpdateChatMetaInput,
  chatMetaCreateSchema,
  chatMetaUpdateSchema,
} from "./chat-schema";

import { userExists } from "./user";

export const createChatMeta = async (input: CreateChatMetaInput) => {
  const chatMeta = chatMetaCreateSchema.parse(input);
  const chatId = chatMeta.chatId;
  const chat = chatKey(chatId);

  await db.hmset(chatMetaKey(chatId), chatMetaCreateSchema.parse(input));
  await db.lpush(latestChatsKey, chatId);
  await db.zadd(userChatsKey(chatMeta.userId), Date.now(), chatId);
  return chatId;
};`}
          </code>
        </pre>
        <pre>
          <code>
            {`export const updateChatMeta = async (input: UpdateChatMetaInput) => {
  const chatMeta = chatMetaUpdateSchema.parse(input);
  const chatId = chatMeta.chatId;
  const chat = chatKey(chatId);

  await db.hmset(chatMetaKey(chatId), chatMeta);
  return chatId;
};`}
          </code>
        </pre>
        <pre>
          <code>
            {`export async function removeUserChat(
  userId: string,
  chatId: string
): Promise<boolean> {
  if (await userExists(userId)) {
    await db.zrem(userChatsKey(userId), chatId);
    return true;
  } else {
    return false;
  }
}`}
          </code>
        </pre>
        <pre>
          <code>
            {`export async function getUserChats(userId: string): Promise<ChatMeta[]> {
  if (await userExists(userId)) {
    const chatIds = await db.zrange(userChatsKey(userId), 0, -1);
    const chatMetas = (
      await Promise.all(chatIds.map((id) => getChatMeta(id)))
    ).filter((meta) => meta !== null) as ChatMeta[];
    return chatMetas;
  } else {
    return [];
  }
}`}
          </code>
        </pre>
        <p>
          Note that our user chats are stored as a sorted set, with the chatId
          as the key, and the last active time as the score. This allows us to
          easily retrieve the user's chats in order of last activity. We also
          have a list of the latest chats, which is a simple list of chatIds.
          This allows us to easily retrieve the latest chats in order of
          creation. And since it is a set, updating the score automatically
          overwrites the old entry if it exists.
        </p>
        <p>
          Chats can be implemented as a list of messages, where each message is
          a stringified JSON object. These chats will use the same Id as the
          chatMeta, so there is no additional indexing required. We do, however,
          want to first define a schema and type for our chat messages.
        </p>
        <pre>
          <code>
            {`export enum ChatMessageType {
  AI = "AI",
  USER = "USER",
}

export const chatMessageSchema = z.object({
  chatId: z.string(),
  userId: z.string(),
  message: z.string(),
  type: z.nativeEnum(ChatMessageType),
  createdAt: z.string().default(() => new Date().toISOString()),
});

export type ChatMessage = z.infer<typeof chatMessageSchema>;`}
          </code>
        </pre>
        <pre>
          <code>
            {`// place this in your chat.ts file

export async function addChatMessage(
  chatId: string,
  message: ChatMessage
): Promise<boolean> {
  const chat = chatKey(chatId);
  await db.rpush(chat, JSON.stringify(chatMessageSchema.parse(message)));
  await db.zadd(userChatsKey(message.userId), Date.now(), chatId);
  return true;
}

export async function getChatMessages(chatId: string): Promise<ChatMessage[]> {
  const chat = chatKey(chatId);
  const messages = await db.lrange(chat, 0, -1);
  return messages.map((message) => JSON.parse(message)) as ChatMessage[];
}`}
          </code>
        </pre>
        <p>
          And that's it! We now have a simple chat application database. We can
          create users, chats, and messages, and retrieve them. We can also
          update the chat metadata, and manage the user's chats. This is a
          simple example, but it should give you a good idea of how to build a
          database in Redis. Admittedly this pattern doesn't extend to
          exceedingly complex data structures, but it is a good starting point
          for most applications.
        </p>
        <p>
          We have made use of many of the basic Redis data structures, such as
          hashes, lists, and sorted sets. We have also made use of the zod
          library to define schemas and types for our data.
        </p>
        <p>
          The great part about this is that nothing is hidden by an ORM, yet we
          have full type safety and validation. And it is super fast and
          reliable. You can use a cloud redis provider, such as Upstash, to host
          the database in the same region as your application, with multiple
          read replicas, and automatic backups. This is a great way to build a
          simple, reliable, and scalable application.
        </p>
      </React.Fragment>,
    ],
  };
