import { useState } from "react";
import { Send } from "lucide-react";
import Button from "@/components/Animated/Button";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setSending(true);
    setDone(false);
    setError("");

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // 빈 칸 검사
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setSending(false);
      return;
    }

    const data = { name, email, message };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed to send");
      setDone(true);
      form.reset();
    } catch (err) {
      setError("Sorry, sending failed. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input
          name="name"
          type="text"
          placeholder="John Doe"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Message
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Type your message here..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-primary focus:border-primary"
          required
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        className="gap-2 items-center"
        disabled={sending}
      >
        <Send className="w-5 h-5" />
        {sending ? "Sending..." : "Send Message"}
      </Button>
      {done && (
        <div className="mt-4 text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2 text-sm font-medium shadow">
          <span>✅ Message sent! Thank you.</span>
        </div>
      )}
      {error && (
        <div className="mt-4 text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-sm font-medium shadow">
          <span>❗{error}</span>
        </div>
      )}
    </form>
  );
}
