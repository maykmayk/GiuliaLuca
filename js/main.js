//Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyDmRtRFgS1n-CAXnXFPnMuCCEf7YzvCsuY",
    authDomain: "giulia-luca-32517.firebaseapp.com",
    projectId: "giulia-luca-32517",
    storageBucket: "giulia-luca-32517.appspot.com",
    messagingSenderId: "787662572599",
    appId: "1:787662572599:web:ac573ee1200f5061c383b2",
    measurementId: "G-MEWLGZVDD8"
};
  
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
const db = firestore.collection("fomData");
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    let formValue = document.getElementById("fileInput").value;

    firestore
        .collection("fomData")
        .get()
        .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            const fn = doc.data().msg;
            if (formValue === fn) {
                console.log("Already Exists");
            }
            });
        });
    db.doc()
        .set({
            msg: formValue,
        })
        .then(() => { })
        .catch((error) => {
            console.log(error);
        });

    //alert
    alert("Grazie per la proposta!");

    //clear form after submission
    function clearForm() {
        document.getElementById("myForm").reset();
    }
    clearForm()
});