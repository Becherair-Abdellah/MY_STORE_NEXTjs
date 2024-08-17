// import * as sdk from 'node-appwrite'
import config from "@/lib/appwrite-exports";
// import { Account,Client } from 'appwrite';
import { Client, Account, Databases, Storage } from "node-appwrite";

const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(config.ENDPOINT)
    .setProject(config.NEXT_PUBLIC_PROJECT_ID)
    .setKey(config.NEXT_PUBLIC_API_KEY);
    return {
        get account(){
            return new Account(client);
        },
        get database(){
            return new Databases(client)
        },
        get storage(){
            return new Storage(client)
        }
    }
};

// create session
const createSessionClient = async (request) => {
    const client = new Client()
      .setEndpoint(config.ENDPOINT)
      .setProject(config.NEXT_PUBLIC_PROJECT_ID)

      const session = request.cookies.get('session')
      if(session){
                client.setSession(session.value);
      }

      return {
          get account(){
              return new Account(client);
          }
      }
  };
export {createAdminClient,createSessionClient}