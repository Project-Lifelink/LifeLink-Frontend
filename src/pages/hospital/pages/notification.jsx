import{ React ,useState,useEffect }from 'react'
import { Bell } from 'lucide-react'
import Reveal from '../../../components/motion/Reveal.jsx'
import AmbientBackground from '../../../components/motion/AmbientBackground.jsx'

const Notifications = () => {
  const [notifications,setNotifications] = useState([]);
  const [loading,setLoading] = useState(false);
  const token = localStorage.getItem("token");
  console.log(token)

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
                await console.log(response.text())
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
      <div id='notifications' className="relative min-h-screen flex flex-col justify-center bg-canvas">
        <AmbientBackground />

        <div className="relative mx-auto w-full max-w-2xl px-6 py-12">
          <Reveal className="mb-10 text-center">
            <h1 className="font-display text-4xl text-ink">Notifications</h1>
            <p className="mt-2 text-muted">Stay updated on your latest activity</p>
          </Reveal>

          <div className="flex flex-col gap-3">
            {notifications.map((item, index) => (
              <Reveal
                as="div"
                key={index}
                delay={index * 0.08}
                className="hover-lift flex items-center gap-4 rounded-3xl border border-line bg-surface px-5 py-4 shadow-soft hover:border-primary-100 hover:shadow-card"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-primary-50 text-primary">
                  <Bell size={20} />
                </span>
                <p className="text-ink-soft">{item.value}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Notifications
