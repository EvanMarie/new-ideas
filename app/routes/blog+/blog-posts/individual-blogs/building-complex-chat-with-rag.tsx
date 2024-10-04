import { DustinAvatar } from "~/routes/us+/components-data/about-us-data";
import { BlogPost } from "../blogsArray";
import React from "react";

export const AdvancedChatbotWithRag: BlogPost =
  // advanced chatbot
  {
    id: "35",
    date: "2024-04-22",
    title: "Building an Advanced Chat Application with RAG",
    slug: "building-an-advanced-chat-application-with-rag",
    author: "Dustin Carr",
    avatar: DustinAvatar,
    categories: ["Artificial Intelligence", "Apps", "Programming"],
    tags: ["Chatbot", "AI", "Remix", "Langchain"],
    image:
      "https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/blog35.png",
    summary:
      "Enhancing a basic chat application built with Remix by incorporating retrieval-augmented generation (RAG) to respond to user queries based on defined data.",
    paragraphs: [
      <React.Fragment key="building-an-advanced-chat-application-with-rag">
        <h2>
          Building an Advanced Chat Application with Remix and Retrieval
          Augmented Generation (RAG)
        </h2>

        <p>
          This article builds upon our previous article on building a simple
          chat application with remix.
          <a href="/blog/building-a-simple-chat-bot-with-remix">
            Building a simple chat bot with Remix
          </a>
          . In that article, we built a simple Q and A bot that will respond to
          anything the user says based upon the system prompt and the user input
          only.
        </p>

        <p>
          As before, you can find the code for this article at{" "}
          <a href="https://github.com/DarkViolet-ai/remix-simple-chat">
            remix-simple-chat
          </a>
          .
        </p>

        <p>
          For this article, we would like to add a few more features to our chat
          application. First of all, if you are hosting a chat bot, then you
          probably want to have some sort of agreement with the user in place,
          to provide appropriate disclaimers and define the acceptable terms of
          use. Second, what if we want the bot to respond based upon data that
          we define, rather than just winging it based upon its built-in
          parameters? To do this, we implement something called
          retrieval-augmented-generation, or RAG.
        </p>

        <p>
          These additions can be found on the route
          <code>chat/with-terms-and-retrieval</code> in the remix project, and
          they use the loader in
          <code>chat+/loaders/chatLoaderWithTerms.ts</code>, the action in
          <code>chat+/actions/chatActionWithRetrieval.ts</code>, and the chat
          component in
          <code>chat+/components/chatComponentWithTerms</code>.
        </p>

        <h3>Adding a Disclaimer</h3>

        <p>Adding a disclaimer involves four steps:</p>

        <ul>
          <li>
            Add a link to a disclaimer page. In this implementation, we add this
            link just below the chat input box, and next to a check box that the
            user must click to agree to the terms of use.
          </li>
        </ul>

        <pre>
          <code>{`<HStack>
  <IconButton
    type="smallUnstyled"
    icon={boxChecked ? BoxCheckedIcon : BoxUncheckedIcon}
    label="agree to terms"
    onClick={() => toggleCheckBox()}
    tooltipPlacement="topRight"
  />
  I have read and agree to the
  <Flex onClick={() => setModalOpen(true)}>
    terms of use.
  </Flex>
</HStack>`}</code>
        </pre>

        <ul>
          <li>
            Add a modal that will display the terms of use when the user clicks
            on the link.
          </li>
        </ul>

        <pre>
          <code>{`<Modal isOpen={modalOpen} setModalOpen={setModalOpen} onClose={() => setModalOpen(false)}>
  <ChatTermsOfServiceContent onClick={() => setModalOpen(false)} />
</Modal>`}</code>
        </pre>

        <ul>
          <li>Handle checking the terms of use box on the client side.</li>
        </ul>

        <pre>
          <code>{`const toggleCheckBox = () => {
  setBoxChecked(!boxChecked);
  setSearchParams({ acceptTerms: boxChecked ? "false" : "true" });
};`}</code>
        </pre>

        <ul>
          <li>Handle the terms of use on the server side.</li>
        </ul>

        <pre>
          <code>{`const acceptTerms = searchParams.get("acceptTerms");
if (acceptTerms) {
  console.log("accept terms", acceptTerms);
  if (acceptTerms === "true") await setAcceptedTerms(sessionId);
  else await unsetAcceptedTerms(sessionId);
  const response = redirect("/chat/with-terms-and-retrieval");
  return await setSessionIdOnResponse(response, sessionId);
}
const acceptedTerms = await getAcceptedTerms(sessionId);`}</code>
        </pre>

        <h3>Retrieval Augmented Generation</h3>

        <p>
          If you have a lot of data that you want the chat bot to use in order
          to answer questions, you can accomplish this by implementing a
          semantic search with a vector database that will first retrieve the
          most relevant data from your database, and then add that to the
          context for the model to use when answering the user's question.
        </p>

        <p>
          In this example, I have created a lot of data in the form of a json
          file that contains a list of questions and answers. This is entirely
          to define the persona for Dark Violet, our chat bot. You could just as
          easily use data from user manuals for your product, historical data,
          or any other data that you have available that you want the chat bot
          to use to answer questions.
        </p>

        <p>
          The first step is to load the data into the database. In this case, I
          am using pineconeDB. There are many options, but pinecone is a good
          choice that is easy to implement and has a generous free tier. The
          same basic process is used regardless of which database provider that
          you choose.
        </p>

        <p>
          The entire RAG interface is defined in
          <code>app/lib/server-utils/darkVioletRetrieval.ts</code>, shown below
        </p>

        <pre>
          <code>{`import { TogetherAIEmbeddings } from "@langchain/community/embeddings/togetherai";
import { Document } from "@langchain/core/documents";
import { persona01 as dvPersonaBase } from "./dvPersonaBase.json";
import { PineconeStore } from "@langchain/pinecone";
import { pinecone } from "./pineconeDb.server";
type PersonaEntry = { question: string; answer: string };
type Persona = PersonaEntry[];

export const darkVioletRetrieval = async (query: string) => {
  const vectorStore = await initializeDarkVioletRetrieval();
  console.log("running query on vector store");
  const results = await vectorStore.similaritySearchWithScore(query, 5);
  console.log("retrieval results", results);
  return results
    .map(([result, score]) => ({
      question: result.pageContent,
      answer: result.metadata.answer,
      score,
    }))
    .filter((result) => result.score > 0.65);
};

export const initializeDarkVioletRetrieval = async () => {
  const index = pinecone.index("darkviolet");
  const namespace = "persona-base";
  const indexStats = await index.describeIndexStats();
  const namespaces = indexStats.namespaces;
  if (!namespaces || !Object.keys(namespaces).includes(namespace)) {
    const personaDocs = (dvPersonaBase as Persona).map(
      (entry) =>
        new Document({
          pageContent: entry.question,
          metadata: { answer: entry.answer },
        })
    );

    const vectorStore = new PineconeStore(
      new TogetherAIEmbeddings({
        modelName: "WhereIsAI/UAE-Large-V1",
      }),
      {
        pineconeIndex: index,
        namespace,
      }
    );
    const sliceSize = 5;

    for (
      let startIndex = 0;
      startIndex < personaDocs.length;
      startIndex += sliceSize
    ) {
      console.log("creating index slice", startIndex);
      await vectorStore.addDocuments(
        personaDocs.slice(startIndex, startIndex + sliceSize),
        {
          ids: Array.from({ length: sliceSize }, (_, i) => startIndex + i).map(
            (i) => i.toString()
          ),
        }
      );
    }
    return vectorStore;
  }
  return new PineconeStore(
    new TogetherAIEmbeddings({
      modelName: "WhereIsAI/UAE-Large-V1",
    }),
    {
      pineconeIndex: index,
      namespace,
    }
  );
};`}</code>
        </pre>

        <p>
          If you have any questions, or if you want help in your implementation
          -- including security, user management, document preparation, and
          multi-modal implementations -- you are welcome to contact us at{" "}
          <a href="https://darkviolet.ai/home#contact">Dark Violet</a>.
        </p>

        <p>
          If you find this useful, make sure to STAR our repository on
          <a href="https://github.com/DarkViolet-ai/remix-simple-chat">
            {" "}
            GitHub
          </a>
          . Thank You!
        </p>
      </React.Fragment>,
    ],
  };
