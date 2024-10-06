import { portalChatAction } from "~/actions/portalChatAction";
import { portalChatLoader } from "~/loaders/portalChatLoader";
import type { ChatLoaderData } from "~/loaders/portalChatLoader";

export type { ChatLoaderData };
export { portalChatLoader as loader, portalChatAction as action };
