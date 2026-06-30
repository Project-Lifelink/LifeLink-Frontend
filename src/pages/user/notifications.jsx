import { React,useState,useEffect } from 'react'
import { Bell } from 'lucide-react'
import Reveal from '../../components/motion/Reveal.jsx'
import AmbientBackground from '../../components/motion/AmbientBackground.jsx'

const Notifications = () => {
  const [notifications,setNotifications] = useState([]);
  const [loading,setLoading] = useState(false);
  const token = localStorage.getItem("token")

      useEffect(() => {

        const fetchActiveRequests = async () => {
          setLoading(true)
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/v1/notifications/`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch requests");
                }

                const data = await response.json();

                // if backend is sending array formate directly
                setNotifications(data);
                console.log(data);



            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchActiveRequests();
    }, []);


  return (
    <>
      <div id='notifications' className="relative min-h-screen bg-canvas px-4 py-12 md:px-8">
        <AmbientBackground />

        <div className="relative mx-auto max-w-2xl">
          <Reveal className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-primary-50 text-primary shadow-soft">
              <Bell className="h-6 w-6" />
            </span>
            <h1 className="mt-5 font-display text-4xl font-normal text-ink md:text-5xl">
              Notifications
            </h1>
            <p className="mt-2 text-muted">
              Stay up to date with your latest activity.
            </p>
          </Reveal>
          <div className = "flex justify-center">

{(loading)?"loading....":""}
          </div>
          <div className="mt-10 flex flex-col gap-3">
            {notifications.map((item, index) => (
              <Reveal
                key={index}
                delay={index * 0.08}
                className="hover-lift flex items-center gap-4 rounded-3xl border border-line bg-surface px-5 py-4 shadow-soft hover:border-primary-100 hover:shadow-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                  <Bell className="h-5 w-5" />
                </span>
                <p className="text-ink-soft">
                  {item.value}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Notifications
