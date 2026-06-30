import { useState, useEffect } from "react";
import {
  Users,
  Send,
  Heart,
  MessageCircle,
  Clock,
  User,
} from "lucide-react";
import Reveal from "../../components/motion/Reveal.jsx";
import AmbientBackground from "../../components/motion/AmbientBackground.jsx";
import { useSelector } from 'react-redux'

export default function Community() {


  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postmessage, setPostmessage] = useState("");

  const token = useSelector((state) => state.auth.token);



  const createpost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/community/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // if JWT auth is used
          },
          body: JSON.stringify({
            message: postmessage
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch hospital data");
      }
      console.log("post created", data);


    } catch (error) {
      console.error(error);
    }

  }
console.log(postmessage)
  async function getdata() {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/community/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // if JWT auth is used
          },
        }
      );

      const data = await response.json();
      setPosts(data)
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch data");
      }
      console.log("data by get request in community", data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);

    }

  }
  useEffect(() => {
    getdata();
  }, [])





  return (
    <div className="relative min-h-screen flex-1 bg-canvas p-6 md:p-8">
      <AmbientBackground />

      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <Reveal className="rounded-4xl border border-line bg-surface p-8 shadow-card">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-brand-gradient-soft text-primary">
              <Users className="h-7 w-7" />
            </span>

            <div>
              <h1 className="font-display text-4xl font-normal text-ink">
                Community
              </h1>

              <p className="mt-1 text-muted">
                Connect, share experiences, and inspire others to donate blood.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Create Post */}
        <Reveal delay={0.08} className="mt-8 rounded-3xl border border-line bg-surface p-6 shadow-soft">
          <h2 className="font-display text-2xl font-normal text-ink">
            Share Something
          </h2>

          <form onSubmit={createpost} className="mt-4">
            <textarea
              rows="4"
              placeholder="Write a message for the community..."
              value={postmessage}
              onChange={(e) => setPostmessage(e.target.value)}
              className="w-full resize-none rounded-2xl border border-line bg-canvas p-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
            />

            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="press inline-flex items-center gap-2 rounded-2xl bg-brand-gradient px-6 py-3 font-semibold text-white shadow-glow hover:cursor-pointer"
              >
                Post Message
                <Send size={18} />
              </button>
            </div>
          </form>
        </Reveal>

        {/* Feed */}
        <div className="mt-8 space-y-6">
          {posts.map((post, i) => (
            <Reveal
              key={post.id}
              delay={i * 0.08}
              className="hover-lift rounded-3xl border border-line bg-surface p-6 shadow-soft hover:border-primary-100 hover:shadow-card"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                  <User className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-semibold text-ink">
                    {post.user_name}
                  </h3>

                  <div className="mt-0.5 flex items-center gap-1.5 text-sm text-muted">
                    <Clock size={14} />
                    {post.created_at}
                  </div>
                </div>
              </div>

              <p className="mt-5 leading-relaxed text-ink-soft">
                {post.message}
              </p>

              <div className="mt-5 flex items-center gap-5 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Heart size={15} /> Support
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MessageCircle size={15} /> Reply
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
