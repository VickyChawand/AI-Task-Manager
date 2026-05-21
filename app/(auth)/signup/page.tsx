"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@/services/auth";
import { auth } from "@/utils/firebase";

import Form from "@/components/Login_Signup_Components/RightHandComponent/Form";
import Info from "@/components/Login_Signup_Components/LeftHandComponent/Info";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setLoading(true);
    setError("");

    try {
      // 🔐 Firebase signup
      const userCredential = await signup(name, email, password);

      const user = auth.currentUser;

      // 🔗 Save user to backend (MongoDB)
      await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: user?.uid,
          name,
          email,
        }),
      });

      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="flex items-center justify-center min-h-screen bg-zinc-50">
    //   <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md">
    //     <h2 className="text-2xl font-semibold mb-4 text-center">
    //       Create Account
    //     </h2>

    //     {error && (
    //       <p className="text-red-500 text-sm mb-2">{error}</p>
    //     )}

    //     <input
    //       type="text"
    //       placeholder="Name"
    //       className="w-full mb-3 p-2 border rounded"
    //       value={name}
    //       onChange={(e) => setName(e.target.value)}
    //     />

    //     <input
    //       type="email"
    //       placeholder="Email"
    //       className="w-full mb-3 p-2 border rounded"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />

    //     <input
    //       type="password"
    //       placeholder="Password"
    //       className="w-full mb-4 p-2 border rounded"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />

    //     <button
    //       onClick={handleSignup}
    //       disabled={loading}
    //       className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
    //     >
    //       {loading ? "Creating..." : "Sign Up"}
    //     </button>

    //     <p className="text-sm mt-4 text-center">
    //       Already have an account?{" "}
    //       <span
    //         onClick={() => router.push("/login")}
    //         className="text-blue-600 cursor-pointer"
    //       >
    //         Login
    //       </span>
    //     </p>
    //   </div>
    // </div>

    <div className="w-full flex items-center justify-around min-h-screen p-25 gap-4 bg-[#F2EFFF] dark:bg-[#0B0E0F] 
    relative
    before:content-['']
    before:absolute
    before:w-90 before:h-90
    before:bg-[#4f46e50d]
    before:rounded-full
    before:shadow-[0px_0px_14px_13px_#4f46e50d]
    before:right-0
    before:top-[10%]
    before:-z-[100]
    dark:before:bg-[#C3C0FF]/10

    after:content-['']
    after:absolute
    after:w-90 after:h-90
    after:bg-[#4f46e50d]
    after:rounded-full
    after:shadow-[0px_0px_14px_13px_#4f46e50d]
    after:left-0
    after:bottom-[10%]
    after:-z-[100]
    dark:after:bg-[#C3C0FF]/10
    ">
        <Info
            title="Design your"
            subtitle="perfect flow"
            description="Step into an intelligent, breathing canvas designed to organize your thoughts and tasks with effortless Ai integration."
            insight="You're most productive between 9 AM and 11 AM."
        />
        <Form 
            type="Signup"
            title="Create Account"
            subTitle="Begin your journey to a calmer productivity"
            buttonLabel="Create Account"
            optionalTitle="Already have an account?"
            optionalButtonTitle="Log in"
        />
    </div>
  );
}