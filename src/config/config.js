const config = {
    apiEndpoint: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    tableId: String(import.meta.env.VITE_APPWRITE_TABLE_ID),
    storageId: String(import.meta.env.VITE_APPWRITE_STORAGE_ID)
}

export default config;