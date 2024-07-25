import { uploadPhoto, createUser } from "./utils";

const uploadedPhoto = uploadPhoto();
const createdUser = createUser();

export default function handleProfileSignup() {
  Promise.all([uploadedPhoto, createdUser])
    .then(([photo, user]) => {
      console.log(user.firstName + " " + user.lastName);
    })
    .catch((error) => {
      console.log("Signup system offline");
    });
}
