import React, { useState } from 'react'
import  { db, storage, timestamp } from '../../Firebase/firebase';

function NewsBox() {
    const [desc, setDesc] = useState('');
    const [tittle, setTittle] = useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);

        }
        
    };
    const handleUpload = () => {
        
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
         
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                console.log('snapshot')
                //progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);

            },
            (error) => {
                //error function
                console.log(error);
                alert(error.message);
           },
            () => {
                //complete function 
                
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        // post image insinde db 
                        db.collection("posts").add({
                            timestamp: timestamp,
                            desc:  desc,
                            tittle: tittle,
                            imageUrl: url,
                             
                        })
                        
                        setProgress(0);
                        setDesc('');
                        setTittle('')
                        setImage(null);
                          
                    });
            }
        );    
         
    };
    
 
    return (
        <div className="newbox" >
            <div className="head ">
                <form>
                    <input
                        type="file"
                        onChange={handleChange}
                    />
                    <input
                         font-size= "18pt " height= "20px" width="180px "
                        type="text"
                        value={tittle}
                        onChange={event => setTittle(event.target.value)}
                        placeholder="Tittle " 
                    />
                    <input
                      font-size= "18pt" height= "40px" width="280px"
                        type="text"
                        value={desc}
                        onChange={event => setDesc(event.target.value)}
                        placeholder=" description " 
                    />
                </form>
                <button border= "1px solid lightgrey" border-radius="25px"
                    type="submit"
                    onClick ={handleUpload}
                > post</button>
                <progress  
                className= "imageupload_progress"
                    value={progress}
                    max="100"
                />
            </div>
        </div>
    )
}

export default NewsBox
