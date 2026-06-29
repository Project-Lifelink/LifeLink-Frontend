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



export default function HelpSupport() {
  return (
    <div className="flex-1 bg-gray-50 max-h-screen overflow-scroll scrollbar-none p-8">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <HelpCircle className="h-10 w-10 text-red-600" />

          <div>
            <h1 className="text-3xl font-bold">Help & Support</h1>
            <p className="text-gray-500 mt-1">
              Need assistance? We're here to help.
            </p>
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <Mail className="text-red-600 h-8 w-8" />

          <h2 className="font-bold text-xl mt-4">
            Email Support
          </h2>

          <p className="text-gray-500 mt-2">
            Reach us via email for account or donation related issues.
          </p>

          <p className="font-semibold mt-4">
            support@lifelink.com
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <Phone className="text-green-600 h-8 w-8" />

          <h2 className="font-bold text-xl mt-4">
            Call Support
          </h2>

          <p className="text-gray-500 mt-2">
            Available Monday to Saturday from 9 AM to 6 PM.
          </p>

          <p className="font-semibold mt-4">
            +91 98765 43210
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <MessageSquare className="text-blue-600 h-8 w-8" />

          <h2 className="font-bold text-xl mt-4">
            Live Chat
          </h2>

          <p className="text-gray-500 mt-2">
            Chat instantly with our support team.
          </p>
          <div className="mt-5">


            <Link to="../community" className="bg-blue-600 text-white px-4 py-2 rounded-xl">
              Start Chat
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-3xl p-8 shadow-sm mt-8">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="text-red-600" />
          <h2 className="text-2xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">
              How can I update my donor profile?
            </h3>

            <p className="text-gray-500 mt-1">
              Visit the Profile section and edit your personal information.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              How do I respond to a blood request?
            </h3>

            <p className="text-gray-500 mt-1">
              Open Active Requests and click on the donate button for the request.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              How can I report an issue?
            </h3>

            <p className="text-gray-500 mt-1">
              Use the support form below or contact our support team directly.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-3xl p-8 shadow-sm mt-8">
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle className="text-red-600" />
          <h2 className="text-2xl font-bold">
            Report an Issue
          </h2>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Subject"
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-500"
          />

          <textarea
            rows="6"
            placeholder="Describe your issue..."
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:cursor-pointer"
          >
            Submit Report
            <Send size={18} />
          </button>
        </form>
        <div className="flex gap-10 justify-center">

          <button onClick={(e) => handledelteaccount} className="px-5 py-2 bg-red-600 mt-10 text-white shadow-xl rounded-xl hover:cursor-pointer hover:bg-red-800 transition">
            {/* <Send size = {18} /> */}
            Delete Account
          </button>
          <button onClick={(e) => handleupdateaccount} className="px-5 py-2 bg-red-600 mt-10 text-white shadow-xl rounded-xl hover:cursor-pointer hover:bg-red-800 transition">
            Update Account
          </button>
        </div>
      </div>
    </div>
  );
}