const debugMode = true;
const MOCK_SERVER = "http://localhost:3001";
export const SERVER_DOMAIN = debugMode ? MOCK_SERVER : "/";

export const SERVICE_URLS = {
    CHATS : MOCK_SERVER + "/chats",
    CONTACTS : MOCK_SERVER + "/contacts"
}