//! ASYNCHRONOUS JAVASCRIPT ========================

/* 
?Asynchronous Javascript is one in which some lines of code take time to run. 
?These tasks are run in the background while the Javascript engine keeps executing other lines of code. 
?When the result of the asynchronous tasks gets available, it is then used in the program.
*/

//? Data Fetching and concept of API
//? API = Application Programming Interface

const fetchUser = (username, callback) => {
  console.log([`Now we have the  user`]);
  setTimeout(() => {
    username = username + ` Sen`;
    callback({ username });
  }, 2000);
};

const fetchUserPhotos = (username, callback) => {
  console.log([`Now we have the photos for : ${username}`]);
  setTimeout(() => {
    callback([`photo1`, `photo2`]);
  }, 2000);
};

const fetchPhotoDetail = (photo, callback) => {
    console.log([`Now we have the photo details for:  ${photo}`]);
  setTimeout(() => {
    callback(`This is the photo details`);
  }, 2000);
}

//! The infamous Callback Hell
//! Never do this
fetchUser(`Priyadeep`, (user) => {
  //console.log(`Your name is : ${user.username}`);
  fetchUserPhotos(user.username, (userPhotos) => {
    //console.log(`Photos are: ${userPhotos}`);
    fetchPhotoDetail(userPhotos[0], (details) => {
        //console.log(`Your photo details are: ${details}`)
        fetchPhotoDetail(userPhotos[0], (details) => {
            fetchPhotoDetail(userPhotos[0], (details) => {
                fetchPhotoDetail(userPhotos[0], (details) => {
                    fetchPhotoDetail(userPhotos[0], (details) => {
                        fetchPhotoDetail(userPhotos[0], (details) => {
                            fetchPhotoDetail(userPhotos[0], (details) => {
                                //................
                                //! THIS IS FUCKING
                                //! CALLBACK HELL!!!
                                //! F*@K
                            })
                        })
                    })
                })
            })
        })
    })
  });
});
