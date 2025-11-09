import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userloading, setUserLoading] = useState(true);

  // Register a new user
  const createUser = async (email, password) => {
    setUserLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("User created successfully!");
      return userCredential;
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered!");
      } else {
        toast.error("Failed to create user!");
      }
      console.error("Error creating user:", error);
      console.error("Error creating user:", error);
    } finally {
      setUserLoading(false);
    }
  };

  // Login a user with email and password
  const loginUser = async (email, password) => {
    setUserLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success("User Logging successfully!");
      return userCredential;
    } catch (error) {
      toast.error(error.message || "Failed to login!");
      console.error("Error logging in:", error);
    } finally {
      setUserLoading(false);
    }
  };

  // Logout user
  const logOutUser = async () => {
    try {
      setUserLoading(true);
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setUserLoading(false);
    }
  };

  useEffect(() => {
    setUserLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setUserLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    userloading,
    setUserLoading,
    createUser,
    loginUser,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
