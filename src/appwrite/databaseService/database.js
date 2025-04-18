import { Client, Databases, ID, Query } from "appwrite";
import config from "../../config/config";

class DatabaseService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(config.apiEndpoint)
            .setProject(config.projectId);

        this.databases = new Databases(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId, caption, category }) {
        try {
            const newPost = await this.databases.createDocument(
                config.databaseId,
                config.tableId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                    caption,
                    category
                }
            );

            if (newPost) {
                return newPost;
            }

        } catch (error) {
            console.log("Appwrite Service :: database :: createPost :: error: ", error);
            throw error;
        }
    }

    async updatePost(postId, { title, content, featuredImage, status, caption, category }) {
        try {
            const post = await this.databases.updateDocument(
                config.databaseId,
                config.tableId,
                postId,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    caption,
                    category
                }
            );

            if (post) {
                return post;
            }

        } catch (error) {
            console.log("Appwrite Service :: database :: updatePost :: error: ", error);
            throw error;
        }
    }

    async deletePost(postId) {
        try {
            await this.databases.deleteDocument(
                config.databaseId,
                config.tableId,
                postId
            );

            return true;
        } catch (error) {
            console.log("Appwrite Service :: database :: deletePost :: error: ", error);
            return false;
        }
    }

    async getPost(postId) {
        try {
            const post = await this.databases.getDocument(
                config.databaseId,
                config.tableId,
                postId
            );

            if (post) {
                return post;
            }
        }
        catch (error) {
            console.log("Appwrite Service :: database :: getPost :: error: ", error);
            throw error;
        }
    }

    async getPosts(qeuries = [Query.equal('status', "active")]) {
        try {
            const posts = await this.databases.listDocuments(
                config.databaseId,
                config.tableId,
                qeuries
            );

            if (posts) {
                return posts;
            }
        } catch (error) {
            console.log("Appwrite Service :: database :: getPosts :: error: ", error);
            throw error;
        }
    }
}

const databaseService = new DatabaseService();

export default databaseService;