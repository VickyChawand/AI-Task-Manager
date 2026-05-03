"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth";
import { auth } from "@/utils/firebase";
import Form from "@/components/Login_Signup_Components/RightHandComponent/Form";
import Info from "@/components/Login_Signup_Components/LeftHandComponent/Info";


export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      // 🔐 Firebase login
      await login(email, password);

      const user = auth.currentUser;

      // 🔗 Optional: sync user with backend
      await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid: user?.uid,
          name: user?.displayName || "User",
          email: user?.email,
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
    <div className="w-full 
    flex 
    items-center 
    justify-evenly 
    p-10
    md:px-25 
    min-h-screen 
    gap-4 
    bg-[#f3f5fa]
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

    after:content-['']
    after:absolute
    after:w-90 after:h-90
    after:bg-[#4f46e50d]
    after:rounded-full
    after:shadow-[0px_0px_14px_13px_#4f46e50d]
    after:left-0
    after:bottom-[10%]
    after:-z-[100]

    dark:bg-[#0B0E0F]
    ">
        {/* <div className="
    content-[''] 
    absolute 
    w-50 
    h-50 
    bg-[#4f46e50d] 
    top-0 
    left-0"/> */}
        <Info
            title="Focus on what matters,"
            subtitle="AI handles the rest"
            description="Experience a task manager that understands your workflow. Step into your intelligent canvas and reclaim your cognitive space."
            insight="You're 20% more productive in the mornings. Scheduling Deep Work."
        />
        <Form 
            type="Login"
            title="Welcome Back"
            subTitle="Sign in to your sanctuary"
            buttonLabel="Login to Dashboard"
            optionalTitle="Don't have an account?"
            optionalButtonTitle="Sign up for free"
        />

    </div>
  );
}