import {
  HelpCircle,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  AlertCircle,
  Send,
} from "lucide-react";
import { Link } from 'react-router-dom'
import Reveal from '../../../components/motion/Reveal.jsx'
import AmbientBackground from '../../../components/motion/AmbientBackground.jsx'



export default function HelpSupport() {
  return (
    <div className="relative flex-1 max-h-screen overflow-scroll scrollbar-none bg-canvas">
      <AmbientBackground />

      <div className="relative p-6 md:p-8">
        {/* Header */}
        <Reveal className="rounded-4xl border border-line bg-surface p-8 shadow-card">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-3xl bg-primary-50 text-primary">
              <HelpCircle className="h-7 w-7" />
            </span>

            <div>
              <h1 className="font-display text-4xl text-ink">Help &amp; Support</h1>
              <p className="mt-1 text-muted">
                Need assistance? We're here to help.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Support Options */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Reveal as="div" delay={0} className="hover-lift rounded-3xl border border-line bg-surface p-6 shadow-soft hover:border-primary-100 hover:shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary">
              <Mail className="h-6 w-6" />
            </span>

            <h2 className="mt-4 text-lg font-semibold text-ink">
              Email Support
            </h2>

            <p className="mt-2 text-muted">
              Reach us via email for account or donation related issues.
            </p>

            <p className="mt-4 font-semibold text-ink-soft">
              support@lifelink.com
            </p>
          </Reveal>

          <Reveal as="div" delay={0.08} className="hover-lift rounded-3xl border border-line bg-surface p-6 shadow-soft hover:border-primary-100 hover:shadow-card">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-success-soft text-success">
              <Phone className="h-6 w-6" />
            </span>

            <h2 className="mt-4 text-lg font-semibold text-ink">
              Call Support
            </h2>

            <p className="mt-2 text-muted">
              Available Monday to Saturday from 9 AM to 6 PM.
            </p>

            <p className="mt-4 font-semibold text-ink-soft">
              +91 98765 43210
            </p>
          </Reveal>

         
        </div>

        {/* FAQ Section */}
        <Reveal className="mt-8 rounded-4xl border border-line bg-surface p-8 shadow-card">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-50 text-primary">
              <FileText size={18} />
            </span>
            <h2 className="font-display text-2xl text-ink">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-line bg-canvas p-5">
              <h3 className="font-semibold text-ink">
                How can I update my donor profile?
              </h3>

              <p className="mt-1 text-muted">
                Visit the Profile section and edit your personal information.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-canvas p-5">
              <h3 className="font-semibold text-ink">
                How do I respond to a blood request?
              </h3>

              <p className="mt-1 text-muted">
                Open Active Requests and click on the donate button for the request.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-canvas p-5">
              <h3 className="font-semibold text-ink">
                How can I report an issue?
              </h3>

              <p className="mt-1 text-muted">
                Use the support form below or contact our support team directly.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Contact Form */}
        <Reveal className="mt-8 rounded-4xl border border-line bg-surface p-8 shadow-card">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-50 text-primary">
              <AlertCircle size={18} />
            </span>
            <h2 className="font-display text-2xl text-ink">
              Report an Issue
            </h2>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-2xl border border-line bg-canvas p-3 text-ink-soft outline-none transition-colors placeholder:text-faint focus:border-primary-200 focus:ring-2 focus:ring-primary-100"
            />

            <textarea
              rows="6"
              placeholder="Describe your issue..."
              className="w-full rounded-2xl border border-line bg-canvas p-3 text-ink-soft outline-none transition-colors placeholder:text-faint focus:border-primary-200 focus:ring-2 focus:ring-primary-100"
            />

            <button
              type="submit"
              className="press flex items-center gap-2 rounded-2xl bg-brand-gradient px-6 py-3 font-medium text-white shadow-glow hover:cursor-pointer"
            >
              Submit Report
              <Send size={18} />
            </button>
          </form>
          <div className="mt-10 flex flex-wrap justify-center gap-6">

            <button onClick={(e) => handledelteaccount} className="press rounded-2xl border border-danger/20 bg-danger-soft px-5 py-2.5 font-medium text-danger hover:cursor-pointer hover:bg-danger hover:text-white">
              {/* <Send size = {18} /> */}
              Delete Account
            </button>
            <button onClick={(e) => handleupdateaccount} className="press rounded-2xl bg-brand-gradient px-5 py-2.5 font-medium text-white shadow-glow hover:cursor-pointer">
              Update Account
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
