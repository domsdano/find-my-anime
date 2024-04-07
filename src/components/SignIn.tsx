import { auth, provider } from "../firebase"; // Adjust the path as necessary
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";

function SignIn({ user }: any) {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        console.log(result);
      })
      .catch((error) => {
        // Handle Errors here.
        console.error(error);
      });
  };

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signed out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }

  function Login() {
    return (
      <div tabIndex={0} role="button" className="btn">
        {/* <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            // src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            src="../public/icons/user.svg"
          />
        </div> */}
        <button className="btn text-base" onClick={signInWithGoogle}>
          Log in
        </button>
      </div>
    );
  }

  function SignedIn() {
    return (
      <div className="dropdown dropdown-end">
        <div className="flex gap-2">
          {/* <p className="self-center text-base">{user.displayName}</p> */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
            </div>
          </div>
        </div>

        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li className="pb-2">
            <h2 className="text-xl">Hi {user.displayName}!</h2>
          </li>

          <li>
            <a onClick={handleSignOut}>Logout</a>
          </li>
        </ul>
      </div>
    );
  }

  if (user) {
    console.log("naay userrrrrrrrrrrrrrrrrrrr");

    return SignedIn();
  } else {
    console.log("walay userrrrrrrrrrrrrrrrrrrr");
    return Login();
  }

  // return (
  //   <div className="container rounded gx-0 gy-0">
  //     <div className="row g-2 flex-wrap rounded bg-black p-4">
  //       <h4 className="col flex-wrap align-self-center m-0 p-0">
  //         {" "}
  //         Sign in to Add Animes to your Library
  //       </h4>

  //       <button
  //         className="col-sm-4 flex-wrap btn btn-outline-primary"
  //         onClick={signInWithGoogle}
  //       >
  //         Sign In
  //       </button>
  //     </div>
  //   </div>
  // );
}

export default SignIn;
