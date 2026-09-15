import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appWriteurl)
        .setProject(conf.appWrite_projectID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // Create Post
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appWrite_Database_ID,
                conf.appWrite_collection_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }


    // Update Post
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appWrite_Database_ID,
                conf.appWrite_collection_ID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWrite_Database_ID,
                conf.appWrite_collection_ID,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appWrite_Database_ID,
                conf.appWrite_collection_ID,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appWrite_Database_ID,
                conf.appWrite_collection_ID,
                queries,
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // Upload File
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appWritebucket_ID,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    // Delete File
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appWritebucket_ID,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    // Get File Preview
        getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWritebucket_ID,
            fileId
        )
    }
}

const service = new Service();

export default service;