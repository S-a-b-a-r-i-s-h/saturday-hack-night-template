"use client"
import { initializeApp } from "firebase/app"
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
const firebaseapiKey = process.env.NEXT_PUBLIC_API_FIREBASE || 'Your firebase API'
const firebaseConfig = {
  apiKey: firebaseapiKey,
  authDomain: "fundhive-c1f14.firebaseapp.com",
  projectId: "fundhive-c1f14",
  storageBucket: "fundhive-c1f14.appspot.com",
  messagingSenderId: "728149815012",
  appId: "1:728149815012:web:ac8442e27d6f1b63e9c6f1",
  measurementId: "G-CK1BCZHVJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, 'organizations')


export default function Home() {
    const [organizations, setOrganizations] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from Firestore
    getDocs(colRef)
      .then((snapshot) => {
        let values: any[] = [];
        snapshot.docs.forEach((doc) => {
          values.push({ ...doc.data(), id: doc.id });
        });
        setOrganizations(values); // Set the fetched data to state
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
  return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center my-4">
            Featured Organizations
          </h1>
          {organizations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organizations.map((org) => (
                <div key={org.id} className="border p-4 rounded shadow-md">
                  <h2 className="text-xl font-semibold">{org.companyname}</h2>
                  <p><strong>Contact Info:</strong> {org.contactInfo}</p>
                  <p><strong>Website:</strong> {org.website}</p>
                  <p><strong>Mission Goals:</strong> {org.missionGoals}</p>
                  <p><strong>Description:</strong> {org.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">Loading organizations...</p>
          )}
        </div>
    );
}