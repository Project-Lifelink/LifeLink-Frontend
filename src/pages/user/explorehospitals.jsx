import React from 'react'
import { Building2, MapPin, ArrowRight } from 'lucide-react'
import Reveal from '../../components/motion/Reveal.jsx'

const ExploreHospitals = () => {
    const hospitals = [
        {
            id: 1,
            name: "hospital1",
            description: "description"
        },
        {
            id: 2,
            name: "hospital2",
            description: "description"
        },
        {
            id: 3,
            name: "hospital3",
            description: "description"
        }
    ]
    return (
        <div id='explorehospitals' className="min-h-screen bg-canvas px-6 py-12 md:px-8 md:py-16">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <Reveal className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium text-muted shadow-soft">
                        <Building2 className="h-4 w-4 text-primary" />
                        Partner Network
                    </span>
                    <h1 className="mt-5 font-display text-4xl font-normal text-ink md:text-5xl">
                        Explore <span className="text-gradient-brand italic">Hospitals</span>
                    </h1>
                    <p className="mx-auto mt-3 max-w-md text-muted">
                        Discover trusted hospitals in our network ready to support every
                        donation and request.
                    </p>
                </Reveal>

                {/* Cards grid */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {hospitals.map((item, index) => (
                        <Reveal
                            key={index}
                            delay={index * 0.08}
                            className="hover-lift group flex h-full flex-col rounded-3xl border border-line bg-surface p-7 shadow-soft hover:border-primary-100 hover:shadow-card"
                        >
                            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient-soft text-primary">
                                <Building2 className="h-7 w-7" />
                            </span>

                            <h2 className="mt-5 font-display text-2xl font-normal text-ink">
                                {item.name}
                            </h2>

                            <div className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                                <MapPin className="h-4 w-4 text-faint" />
                                Verified partner
                            </div>

                            <p className="mt-4 leading-relaxed text-muted">
                                {item.description}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                                View details
                                <ArrowRight className="h-4 w-4" />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExploreHospitals
