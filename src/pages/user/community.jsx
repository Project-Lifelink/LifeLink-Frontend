import { useState } from "react";
import {
  Users,
  Send,
  Heart,
  MessageCircle,
  Clock,
  User,
} from "lucide-react";

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
    <div className="flex-1 bg-gray-50 min-h-screen p-8 overflow-scroll h-screen">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <Users className="h-10 w-10 text-red-600" />

          <div>
            <h1 className="text-3xl font-bold">
              Community
            </h1>

            <p className="text-gray-500 mt-1">
              Connect, share experiences, and inspire others to donate blood.
            </p>
          </div>
        </div>
      </div>

      {/* Create Post */}
      <div className="bg-white rounded-3xl p-6 shadow-sm mt-8">
        <h2 className="text-xl font-bold mb-4">
          Share Something
        </h2>

        <form onSubmit={handleSubmit}>
          <textarea
            rows="4"
            placeholder="Write a message for the community..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-2xl p-4 resize-none outline-none focus:ring-2 focus:ring-red-500"
          />

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:cursor-pointer"
            >
              Post Message
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>

      {/* Feed */}
      <div className="mt-8 space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-3xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <User className="text-red-600" />
              </div>

              <div>
                <h3 className="font-bold">
                  {post.user}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock size={14} />
                  {post.time}
                </div>
              </div>
            </div>

            <p className="mt-5 text-gray-700 leading-relaxed">
              {post.text}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}