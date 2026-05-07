import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-2">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-800">contact@mediumclone.com</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📍</div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-800">San Francisco, CA</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌐</div>
              <h3 className="font-semibold mb-2">Social</h3>
              <p className="text-gray-800">@mediumclone</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
