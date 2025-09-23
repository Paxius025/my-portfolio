import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import Alert from "@mui/material/Alert";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const templeteParams = {
        name: name,
        email: email,
        message: message,
        title: title,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templeteParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTitle("");
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="rounded-lg p-8 bg-gradient-to-r from-slate-100 to-white dark:from-slate-800 dark:to-slate-800 border">
        <div className="md:flex md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              contact me via email or follow me on social media.
            </p>

            <div className="mt-4 flex gap-4">
              <a
                href="https://github.com/Paxius025"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded border"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/pantong-sanonok-41b152308/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded border"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-xl">
            <div className="grid sm:grid-cols-2 gap-3">
              <input
                className="border rounded px-3 py-2 bg-white dark:bg-slate-900"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="border rounded px-3 py-2 bg-white dark:bg-slate-900"
                placeholder="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <textarea
              className="mt-3 border rounded px-3 py-2 w-full bg-white dark:bg-slate-900"
              placeholder="message"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              rows={1}
              required
            />
            <textarea
              className="mt-3 border rounded px-3 py-2 w-full bg-white dark:bg-slate-900"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            />
            <div className="mt-3 flex items-center gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-4 py-2 bg-indigo-600 text-white rounded"
              >
                {status === "sending" ? "Sending..." : "Send"}
              </button>
              {status === "success" && (
                <Alert severity="success">
                  The Email was sent successfully!
                </Alert>
              )}
              {status === "error" && (
                <Alert severity="error">
                  There was an error sending the Email.
                </Alert>
              )}
              {status === "sending" && (
                <Alert severity="info">Sending...</Alert>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
