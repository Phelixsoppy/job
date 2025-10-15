// Firebase configuration loaded from environment variables with fallbacks
export const firebaseConfig = {
    apiKey: import.meta.env?.VITE_FIREBASE_API_KEY || "AIzaSyAYHio6SetFma9hGBlvFJhpAF23Z8TfX_A",
    authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN || "streget-11d56.firebaseapp.com",
    projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID || "streget-11d56",
    storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET || "streget-11d56.firebasestorage.app",
    messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID || "781486885331",
    appId: import.meta.env?.VITE_FIREBASE_APP_ID || "1:781486885331:web:75d16a5f5ad34ada138726"
};