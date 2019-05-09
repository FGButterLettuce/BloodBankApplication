let functions = require('firebase-functions');
let admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);



exports.createUser = functions.firestore
    .document('inventoryalerts/{inventory}')
    .onCreate(async (snap, context) => {
        // Get an object representing the document
        // e.g. {'name': 'Marie', 'age': 66}
        const newValue = snap.data();
        // access a particular field as you would any JS property
        const required = newValue.blood;
        const requiredloc = newValue.hname
        var msg = `This is a broadcast sent donors with '${required}' blood, please report to hospital '${requiredloc}' ASAP`;
        users = await loadUsers();
        let tokens = [];
        for (let user of users) {
            if (user.bloodgroup === required)
                tokens.push(user.token);
        }
        let payload = {
            notification: {
                title: 'EMERGENCY BLOOD DONATION REQUIRED',
                body: msg,
                sound: 'default',
                badge: '1'
            }
        };
        return admin.messaging().sendToDevice(tokens, payload);
        // perform desired operations ...
    });


function loadUsers() {
    var userlist = []
    var db = admin.firestore();
    var users = db.collection('users');
    users.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                userlist.push(doc.data());
            });
            console.log(userlist);
            return userlist;
        })
        .catch(err => {
            console.log('Error getting documents', err);
            return [];
        });
}