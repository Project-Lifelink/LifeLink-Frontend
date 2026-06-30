import React from "react";
import {
    Search,
    Droplets,
    ShieldCheck,
    Bell,
    Heart,
    Users,
    MapPin,
    MoreHorizontal,
} from "lucide-react";
import feature from '../../assets/images/features.png'
import Reveal from '../../components/motion/Reveal.jsx'
import CountUp from '../../components/motion/CountUp.jsx'

const Features = () => {
    const features = [
        { icon: <Search size={24} />, title: "Find Donors Near You", desc: "Search and connect with verified blood donors in your area instantly." },
        { icon: <Droplets size={24} />, title: "Request Blood", desc: "Send blood requests quickly and get help when you need it most." },
        { icon: <ShieldCheck size={24} />, title: "Verified & Trusted", desc: "All donors are verified for your safety and peace of mind." },
    ];

    const stats = [
        { icon: <Users size={22} />, value: "10+", title: "Active Donors", desc: "Generous people ready to save lives." },
        { icon: <Droplets size={22} />, value: "0", title: "Blood Requests", desc: "Requests fulfilled successfully." },
        { icon: <ShieldCheck size={22} />, value: "100%", title: "Verified Users", desc: "Ensuring a safe and trusted community." },
        { icon: <Bell size={22} />, value: "24/7", title: "Support", desc: "We're here to help you anytime." },
        { icon: <Heart size={22} />, value: "Countless", title: "Lives Saved", desc: "Because of people like you." },
    ];

    const floatBadges = [
        { Icon: Users, pos: "top-10 left-10", delay: "0s" },
        { Icon: ShieldCheck, pos: "top-10 right-10", delay: "-2.5s" },
        { Icon: MapPin, pos: "bottom-10 left-10", delay: "-5s" },
        { Icon: MoreHorizontal, pos: "bottom-10 right-10", delay: "-7.5s" },
    ];

    return (
        <section className="bg-canvas px-5 py-24 md:px-8 md:py-32" id="features">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <Reveal className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        Features
                    </span>
                    <h2 className="mt-4 font-display text-5xl font-normal leading-tight tracking-tight text-ink md:text-6xl">
                        Powerful features,{" "}
                        <span className="text-gradient-brand italic">stronger connections</span>
                    </h2>
                    <p className="mt-5 text-lg text-muted">
                        LifeLink is packed with thoughtful features to make blood donation
                        and requests fast, easy, and reliable for everyone.
                    </p>
                </Reveal>

                {/* Main Section */}
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Cards */}
                    <div className="space-y-4">
                        {features.map((item, index) => (
                            <Reveal
                                key={index}
                                delay={index * 0.1}
                                className="group hover-lift flex items-start gap-5 rounded-3xl border border-line bg-surface p-6 shadow-soft hover:border-primary-100 hover:shadow-card"
                            >
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                                    <p className="mt-1.5 leading-relaxed text-muted">{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Image with floating badges */}
                    <Reveal direction="left" className="relative hidden items-center justify-center md:flex">
                        <div className="relative overflow-hidden rounded-full border border-line bg-brand-gradient-soft p-3">
                            <img src={feature} alt="LifeLink features" className="h-96 w-96 rounded-full object-cover" />
                        </div>

                        {floatBadges.map(({ Icon, pos, delay }, i) => (
                            <div
                                key={i}
                                style={{ animationDelay: delay }}
                                className={`animate-float glass absolute ${pos} flex h-16 w-16 items-center justify-center rounded-2xl border border-line/80 text-primary shadow-card`}
                            >
                                <Icon size={28} />
                            </div>
                        ))}
                    </Reveal>
                </div>

                {/* Stats */}
                <Reveal className="mt-20 grid grid-cols-2 gap-8 rounded-4xl border border-line bg-surface p-8 md:p-10 lg:grid-cols-5">
                    {stats.map((item, index) => (
                        <Reveal as="div" key={index} delay={index * 0.08}>
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary">
                                {item.icon}
                            </div>
                            <CountUp value={item.value} className="mt-4 block font-display text-4xl text-ink" />
                            <p className="mt-1 font-semibold text-ink">{item.title}</p>
                            <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>
                        </Reveal>
                    ))}
                </Reveal>
            </div>
        </section>
    );
};

export default Features;
