//?PROMISE's ===========================
/*
const fetchUser = (username) => {
  return new Promise((resolve) => {
    console.log(`We have User`);
    setTimeout(() => {
      resolve({ username });
    });
  });
};

const fetchUserPhotos = (username) => {
  return new Promise((resolve) => {
    console.log(`We have photos : `);
    setTimeout(() => {
      resolve([`photo1`, `photo2`]);
    }, 2000);
  });
};

const fetchPhotoDetail = (photo) => {
  return new Promise((resolve) => {
    console.log([`Now we have the photo details for:  ${photo}`]);
    setTimeout(() => {
      resolve(`This is the photo details`);
    }, 2000);
  });
};
*/

/*
fetchUser(`Michael`)
  .then((user) => fetchUserPhotos(user.username))
  .then((photos) => fetchPhotoDetail(photos[0]))
  .then((details) => console.log(`Details are: ${details}`))

  */
//? Async and Await next One! Please Help me!!

//! Async function returns Promises!

//! Await and Async go hand in hand

/*
const displayData = async () => {
  const user = await fetchUser(`Priyadeep`)
  const photos = await fetchUserPhotos(user)
  const details = await fetchPhotoDetail(photos[0])

  console.log(details)
}

displayData()
*/

//! PROMISE API'S

//? 1 : Promise.all()
//takes array of promises as an input(iterable data)

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`P1 Success!`);
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`P2 Success!`);
    //reject(`P2 Failed!`);
  }, 3000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve(`P3 Success!`);
    reject('P3 Failed!')
  }, 6000);
});

Promise.all([p1, p2, p3]).then((res) => console.log(res))
  .catch((err) => console.log(`ERROR! ${err}`))

  
