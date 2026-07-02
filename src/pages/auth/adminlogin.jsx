import {
  Eye,
  EyeOff,
  User,
  Lock,
  Heart,
  ShieldCheck,
  Users,
  Quote,
  Building2,
  ArrowRight,
} from "lucide-react";
import Navbar from '../../components/layout/navbar.jsx'
import { useState } from 'react'
import AmbientBackground from '../../components/motion/AmbientBackground.jsx'
import BloodDropLoader from '../../components/motion/BloodDropLoader.jsx'
import { useNavigate } from 'react-router-dom'

export default function Adminlogin() {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


//   const loginuser = async () => {



//     try {
//       setLoading(true);
//       const response = await fetch(
//         `${import.meta.env.VITE_API_URL}/api/v1/hospitals/login/`,

//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email,
//             password
//           }),
//         }
//       );

//       const data = await response.json();
//       console.log(data)

//       if (!response.ok) {
//         setLoading(false)
//         throw new Error(data.message || "Something went wrong");

//       }
//       else {
//         localStorage.setItem("token", data.access_token);
//         localStorage.setItem("id", data.hospital.hospital_id)
//         navigate("/hospital")
//       }


//       try {

//         dispatch(
//           loginSuccess({
//             user: data.user,
//             token: data.access_token,
//             role: "hospital",
//           })
//         );
//       } catch (error) {
//         console.log("error occured in redux from dipatch function ", error);
//       }

//       return data;
//     } catch (error) {
//       console.error("Error:", error.message);
//       alert("login failed", error.message)
//       setLoading(false);
//       throw error;
//     }
//   };




  function handleSubmit(e) {
    e.preventDefault();
    // loginuser();
    console.log("login from submitted")
    alert("there is no admin account available till now")

  }

  return (
    <div className="relative min-h-screen scrollbar-none overflow-hidden">
      <AmbientBackground />
      <Navbar />
      {loading ? (
        <div className="fixed inset-x-0 top-24 z-50 flex justify-center">
          <p className="glass flex items-center gap-3 rounded-full border border-line px-6 py-2 text-sm font-semibold text-ink shadow-card">
            <BloodDropLoader size={10} />
            Logging you in…
          </p>
        </div>
      ) : ""}

      <div className="flex items-center justify-center px-4 py-10 md:px-8">
        <div className=" overflow-hidden rounded-4xl bg-surface shadow-card flex">

          {/* Right Side — form */}
          <div className="flex items-center justify-center  p-8 md:p-12">
            <div className="w-full max-w-md">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-gradient text-white shadow-glow">
                  <Building2 size={28} />
                </div>
                <h1 className="mt-6 font-display text-4xl font-normal text-ink">Welcome to LifeLink</h1>
                <p className="mt-2 text-muted">
                  Login to your{" "}
                  <span className="font-semibold text-primary">Admin</span> account
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Admin Username</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      type="text"
                      placeholder="Enter admin username"
                      onChange={(e) => { setEmail(e.target.value) }}
                      className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-4 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink-soft">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      onChange={(e) => { setPassword(e.target.value) }}
                      className="w-full rounded-2xl border border-line bg-canvas py-3 pl-11 pr-11 text-sm text-ink transition-colors placeholder:text-faint focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary-50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-faint transition-colors hover:text-ink-soft"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <button
                  disabled={loading}
                  type="Submit"
                  className="press flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gradient py-3.5 font-semibold text-white shadow-glow disabled:opacity-70"
                >
                  {loading ? <BloodDropLoader size={9} className="text-white" /> : null}
                  {loading ? "Logging in…" : "Login"}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </button>
                
              </form>
              <button className = "px-5 py-2 bg-red-500 text-white m-5 rounded-2xl" onClick = {(e) => navigate("/admin")}>Go to Main Admin Page</button>
            </div> 
          </div>

        </div>
      </div>
    </div>
  );
}
