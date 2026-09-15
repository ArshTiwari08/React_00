const conf = {
    appWriteurl : String(import.meta.env.VITE_APPWRITE_URL),
    appWrite_projectID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWrite_Database_ID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWrite_collection_ID : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appWritebucket_ID : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}


export default conf;