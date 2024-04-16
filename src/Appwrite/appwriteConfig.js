import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("661d48ac16d8d3cf0741");

export const account = new Account(client);
export const databases = new Databases(client);
// export const query = new Query(client);

export default client;
