import React, { useState, useEffect } from 'react';
import { getDocs, addDoc, deleteDoc, collection, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";


function Profile({ isAuth }) {

    const [moduleList, setModuleList] = useState([]);
    const modulesCollectionRef = collection(db, "modules");
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [code, setCode] = useState("");

    const addModules = async () => {
        await addDoc(modulesCollectionRef, {
          name,
          code,
          author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate("/profile");
        alert("Module registered ! refresh page to see changes");
    };

    const deleteModule = async (id) => {
        const moduleDoc = doc(db, "modules", id);
        await deleteDoc(moduleDoc);
    };

    useEffect(() => {
        const getModules = async () => {
          const data = await getDocs(modulesCollectionRef);
          setModuleList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getModules();
    }, []);

  return (
    <div>
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Add a module</h1>
                <div className="inputGp">
                <label> Name:</label>
                <input
                    placeholder="e.g Cloud computing..."
                    onChange={(event) => {
                    setName(event.target.value);
                    }}
                />
                </div>
                <div className="inputGp">
                <label> Code:</label>
                <input
                    placeholder="e.g CLDG2023..."
                    onChange={(event) => {
                    setCode(event.target.value);
                    }}
                />
                </div>
                <button onClick={addModules}> Register Module</button>
            </div>
        </div>     
        <div className="homePage">
        <h1 className="topHeading">Modules Registered Will Appear  Here</h1>
        <p>Modules registered will appear here , note only you and the admin will be able to see this modules</p>
            {moduleList.map((module) => {
                return (    
                <div className="post">
                    {(isAuth && module.author.id == auth.currentUser.uid) && (
                        <div>
                            <div className="postHeader">
                            <div className="title">
                                <h1>Module </h1>
                            </div>
                            <div className="deletePost">
                                {isAuth && module.author.id == auth.currentUser.uid && (
                                <button
                                    onClick={() => {
                                    deleteModule(module.id);
                                    }}
                                >
                                    {" "}
                                    &#128465;
                                </button>
                                )}
                            </div>
                            </div>
                            <div className="postTextContainer">Name : {module.name} </div>
                            <h3>Code : {module.code}</h3>
                        </div>                       
                    )  }                 
                </div>
                );
            })}
        </div>
    </div>
  )
}

export default Profile