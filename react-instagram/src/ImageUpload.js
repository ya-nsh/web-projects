import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { storage, db } from './firebase';
import firebase from 'firebase';

export default function ImageUpload({ username }) {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
        alert(error.message);
      },
      () => {
        //   completed upload
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            db.collection('posts').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username
            });
            setProgress(0);
            setCaption('');
            setImage(null);
          });
      }
    );
  };

  return (
    <div>
      <progress value={progress} max="100" />
      <input
        type="text"
        placeholder="Enter the caption "
        value={caption}
        onChange={e => setCaption(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}
