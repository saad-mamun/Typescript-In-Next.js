"use client";

import { FormEvent, useRef, useState } from "react";

type formData = {
  name: string;
  email: string;
  password: string;
};
const From = () => {
  const [submittedData, setSubmittedData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });

  // 1.Generate function
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  // 21.compiling
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameVal = name.current!.value;
    const emailVal = email.current!.value;
    const passwordVal = password.current!.value;

    setSubmittedData({name: nameVal, email: emailVal, password: passwordVal})

  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[300px]">
        <input
          type="text"
          placeholder="Enter your name"
          ref={name}
          className="outline-none border-2 px-4 py-1 rounded-lg"
        />
        <input
          type="email"
          placeholder="Enter your email"
          ref={email}
          className="outline-none border-2 px-4 py-1 rounded-lg"
        />
        <input
          type="password"
          placeholder="Enter your password"
          ref={password}
          className="outline-none border-2 px-4 py-1 rounded-lg"
        />
        <button
          type="submit"
          className="outline-none bg-black text-white font-bold tracking-wide border-2 px-4 py-1 rounded-lg"
        >
          Submit
        </button>

        <section>
          <h1>Name: {submittedData.name}</h1>
          <h1>Email: {submittedData.email}</h1>
          <h1>Password: {submittedData.password}</h1>
        </section>
      </form>
    </div>
  );
};

export default From;
