const admin = require('firebase-admin');
const serviceAccount = require('../../ServiceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "{https://{serviceAccount.project_id}.firebaseio.com"
});

const db = admin.firestore();

export default db;

