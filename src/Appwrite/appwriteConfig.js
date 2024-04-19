import { Client, Account, Databases } from "appwrite";

const endpoint =
  process.env.REACT_APP_ENV === "development"
    ? "http://localhost:3000/v1"
    : "https://spiffy-elf-00c4f1.netlify.app/v1";

const client = new Client();

client.setEndpoint(endpoint).setProject("661d48ac16d8d3cf0741");

export const account = new Account(client);
export const databases = new Databases(client);

export default client;
