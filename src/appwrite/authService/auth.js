import { Client, Account, ID } from "appwrite";
import config from "../../config/config";

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setProject(config.projectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name, username }) {
        try {
            const newUser = await this.account.create(ID.unique(), email, password, name, username);

            if (newUser) {
                return this.login({ email, password });
            } else {
                return newUser;
            }
        } catch (error) {
            console.log("Appwrite Service :: auth :: createAccount :: error: ", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);

            if (session) {
                return session;
            }
        } catch (error) {
            console.log("Appwrite Service :: auth :: login :: error: ", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const currentSession = await this.account.get();

            if (currentSession) {
                return currentSession;
            } else {
                return false;
            }
        } catch (error) {
            console.log("Appwrite Service :: auth :: getCurrentUser :: error: ", error);
            throw error;
        }
    }

    async logout() {
        try {
            const deleteSessions = await this.account.deleteSessions();

            if (deleteSessions) {
                return true;
            }
        } catch (error) {
            console.log("Appwrite Service :: auth :: logout :: error: ", error);
            return false;
        }
    }

}

const authService = new AuthService();

export default authService;