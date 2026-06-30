import { useState } from "react";
import {
  Users,
  Send,
  Heart,
  MessageCircle,
  Clock,
  User,
} from "lucide-react";
import Reveal from "../../../components/motion/Reveal.jsx";
import AmbientBackground from "../../../components/motion/AmbientBackground.jsx";

export default function Community() {
  const [message, setMessage] = useState("");

  const posts = [
    {
      id: 1,
      user: "Rahul Sharma",
      text: "Just completed my 5th blood donation today. Happy to help save lives!",
      time: "2 hours ago",
    },
    {
      id: 2,
      user: "Priya Singh",
      text: "Thank you to all donors who helped my cousin during surgery.",
      time: "5 hours ago",
    },
    {
      id: 3,
      user: "Amit Verma",
      text: "Looking forward to my next eligible donation date.",
      time: "1 day ago",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    console.log(message);

    setMessage("");
  };

  return (
    <div className="relative flex-1 min-h-screen overflow-scroll h-screen bg-canvas">
      <AmbientBackground />

      <div className="relative mx-auto w-full max-w-3xl p-6 md:p-8">
        {/* Header */}
        <Reveal className="rounded-4xl border border-line bg-surface p-8 shadow-card">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-3xl bg-primary-50 text-primary">
              <Users className="h-7 w-7" />
            </span>

            <div>
              <h1 className="font-display text-4xl text-ink">
                Community
              </h1>

              <p className="mt-1 text-muted">
                Connect, share experiences, and inspire others to donate blood.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Create Post */}
        <Reveal delay={0.08} className="mt-8 rounded-4xl border border-line bg-surface p-6 shadow-card md:p-8">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-ink">
            <Heart size={18} className="text-primary" />
            Share Something
          </h2>

          <form onSubmit={handleSubmit}>
            <textarea
              rows="4"
              placeholder="Write a message for the community..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none rounded-2xl border border-line bg-canvas p-4 text-ink-soft outline-none transition-colors placeholder:text-faint focus:border-primary-200 focus:ring-2 focus:ring-primary-100"
            />

            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="press flex items-center gap-2 rounded-2xl bg-brand-gradient px-6 py-3 font-medium text-white shadow-glow hover:cursor-pointer"
              >
                Post Message
                <Send size={18} />
              </button>
            </div>
          </form>
        </Reveal>

        {/* Feed */}
        <div className="mt-8 space-y-6">
          {posts.map((post, index) => (
            <Reveal
              as="div"
              key={post.id}
              delay={index * 0.08}
              className="hover-lift rounded-3xl border border-line bg-surface p-6 shadow-soft hover:border-primary-100 hover:shadow-card"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary-50">
                  <User className="text-primary" />
                </div>

                <div>
                  <h3 className="font-semibold text-ink">
                    {post.user}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Clock size={14} />
                    {post.time}
                  </div>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-ink-soft">
                {post.text}
              </p>

              <div className="mt-5 flex items-center gap-6 text-sm text-muted">
                <span className="flex items-center gap-1.5">
                  <Heart size={16} />
                  Support
                </span>
                <span className="flex items-center gap-1.5">
                  <MessageCircle size={16} />
                  Reply
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
