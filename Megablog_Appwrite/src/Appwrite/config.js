import conf from "../conf/conf.js";
import {
    Client,
    ID,
    Databases,
    Storage,
    Query
} from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteurl)
            .setProject(conf.appWrite_projectID);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // CREATE POST
    async createPost({
        title,slug,content,featuredImage,status,userId,ownerName
    }) {
        try {
            console.log("USER ID:", userId);
            console.log("OWNER NAME:", ownerName);

            return await this.databases.createDocument(
                conf.appWrite_Database_ID,
                conf.appWrite_collection_ID,
                slug,
                {
                    title,content,featuredImage,status,userId,ownerName
                }
            );

        } catch (error) {
            console.log(
                "Appwrite service :: createPost :: error",
                error
            );

            return false;
        }
    }
    // UPDATE POST

    async updatePost(
        slug,
        {
            title,content,featuredImage,status
        }
    ) {
        try {
            return await this.databases.updateDocument(
                conf.appWrite_Database_ID,
                conf.appWrite_collection_ID,
                slug,
                {
                    title,content,featuredImage,status
                }
            );

        } catch (error) {
            console.log(
                "Appwrite service :: updatePost :: error",
                error
            );

            return false;
        }
    }
    // DELETE POST

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appWrite_Database_ID,
                conf.appWrite_collection_ID,
                slug
            );

            return true;

        } catch (error) {
            console.log(
                "Appwrite service :: deletePost :: error",
                error
            );

            return false;
        }
    }

    // GET SINGLE POST
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appWrite_Database_ID,
                conf.appWrite_collection_ID,
                slug
            );

        } catch (error) {
            console.log(
                "Appwrite service :: getPost :: error",
                error
            );

            return false;
        }
    }

    // GET ALL POSTS
    async getPosts(
        queries = [Query.equal("status", "active")]
    ) {
        try {
            return await this.databases.listDocuments(
                conf.appWrite_Database_ID,
                conf.appWrite_collection_ID,
                queries
            );

        } catch (error) {
            console.log(
                "Appwrite service :: getPosts :: error",
                error
            );

            return false;
        }
    }

    // UPLOAD FILE

    async uploadFile(file) {
        try {
            const response =
                await this.bucket.createFile(
                    conf.appWritebucket_ID,
                    ID.unique(),
                    file
                );

            console.log(
                "FILE UPLOADED:",
                response
            );

            return response;

        } catch (error) {
            console.log(
                "Appwrite service :: uploadFile :: error",
                error
            );

            return false;
        }
    }
    // DELETE FILE

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appWritebucket_ID,
                fileId
            );

            return true;

        } catch (error) {
            console.log(
                "Appwrite service :: deleteFile :: error",
                error
            );

            return false;
        }
    }
    
    // GET FILE VIEW
    getFileView(fileId) {
        return this.bucket.getFileView(
            conf.appWritebucket_ID,
            fileId
        );
    }
}

const service = new Service();

export default service;