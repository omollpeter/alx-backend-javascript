import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(user.firstName + " " + user.lastName);
    })
    .catch((error) => {
      console.log("Signup system offline");
    });
}
