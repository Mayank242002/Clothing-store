import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD2YdtqqrWVdELpvS_GaozwVM9n4POmNpU',
  authDomain: 'clothing-db-f3676.firebaseapp.com',
  projectId: 'clothing-db-f3676',
  storageBucket: 'clothing-db-f3676.appspot.com',
  messagingSenderId: '1019786461156',
  appId: '1:1019786461156:web:b921c4be41b00fb44491f1',
  measurementId: 'G-PKLQZXH57R',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);


  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const craetedAt = new Date();

    try {
      await userRef.set({ displayName, email, craetedAt, ...additionalData });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


firebase.initializeApp(config);

export const addCollectionAndDocuments= async (collectionKey, objectsToAdd)=>{
  const collectionRef=firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch=firestore.batch();
  objectsToAdd.forEach(obj =>{
    const newDocRef=collectionRef.doc();
    batch.set(newDocRef,obj);

  });

  return await batch.commit();

};

 export const  convertCollectionsSnapshotToMap=(collections)=>{
  const transformedCollection= collections.docs.map(doc=>{
    const { title, items}=doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  },{});
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const SignInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export default firebase;
