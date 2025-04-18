import { Client, Storage, ID } from "appwrite";
import config from "../../config/config";

class StorageService {
    client = new Client();
    storage;

    constructor() {
        this.client
            .setEndpoint(config.apiEndpoint)
            .setProject(config.projectId);

        this.storage = new Storage(this.client);
    }

    async uploadFile(file) {
        try {
            const newFile = await this.storage.createFile(
                config.storageId,
                ID.unique(),
                file
            );

            if (newFile) {
                return newFile;
            } else {
                return false;
            }
        } catch (error) {
            console.log("Appwrite Service :: storage :: uploadFile :: error: ", error);
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            const file = this.storage.deleteFile(
                config.storageId,
                fileId
            );

            if (file) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log("Appwrite Service :: storage :: deleteFile :: error: ", error);
            throw error;
        }
    }

    getFile(fileId) {
            const file = this.storage.getFileView(
                config.storageId,
                fileId
            );

            return file;
    }

}

const storageService = new StorageService();

export default storageService;