"use client";
import Alert from "@/components/Alert";
import NavBar from "@/components/Navbar";
import { useState } from "react";

export default function page() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState("invisible");
  const [num, setNum] = useState(0);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!email || !message || !subject || !email.includes("@")) {
      setNum(1);
      setVisible("");
      setTimeout(() => {
        setVisible("invisible");
        setNum(0);
      }, 5000); // Set the timeout duration (in milliseconds)
      return;
    }
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      });
      const data = await response.json();
      if (data.status == 200) {
        setVisible("");
        setTimeout(() => {
          setVisible("invisible");
        }, 3000); // Set the timeout duration (in milliseconds)
      }
    } catch (error) {
      console.error(error);
    }
    setEmail("");
    setSubject("");
    setMessage("");
  };
  return (
    <main className="flex flex-col h-screen space-y-40 font-sans">
      <div className="fixed top-0 h-1/5 w-full">
        <NavBar />
      </div>
      <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Want to Reach Me? Send a message on linkedin or fill out the form
            below!
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="focus:text-black shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="someone@example.com"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="focus:text-black block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Reason for Email"
                name="subject"
                value={subject}
                onChange={handleSubjectChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="focus:text-black block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a message..."
                name="message"
                value={message}
                onChange={handleMessageChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="py-3 px-5 bg-dark-blueish text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-dark-dark-blueish dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
      <div className={`flex justify-end fixed bottom-0 w-full px-4 ${visible}`}>
        <Alert colorNum={num} messageNum={num} />
      </div>
    </main>
  );
}
