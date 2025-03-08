'use client'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from "react"

export default function PrivacyPolicy() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-gray-500">Effective Date: March 04, 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <p>
              This Privacy Policy ("Policy") explains how StarShape ("Company," "we," "our," or "us") collects, uses, discloses, and protects your personal data when you access our website, mobile applications, and other services (collectively, the "Services"). By using our Services, you consent to this Policy. If you do not agree, please do not use our Services.
            </p>

            <h2 id="definitions" className="text-xl font-semibold mt-8 mb-4">1. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Personal Data:</span> Information that identifies you, like your name, email, phone number, or payment details.</li>
              <li><span className="font-medium">Sensitive Personal Data:</span> Financial details (e.g., bank account numbers or UPI).</li>
              <li><span className="font-medium">Processing:</span> Anything we do with your data, like collecting, storing, using, sharing, or deleting it.</li>
            </ul>

            <h2 id="information-we-collect" className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>We collect info to provide and improve our Services. Here is what and how:</p>

            <h3 className="text-lg font-medium mt-6 mb-3">2.1 Information You Provide</h3>
            <p>We collect Personal Data you share when using our Services, such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Name:</span> To personalize your account or process orders.</li>
              <li><span className="font-medium">Email Address:</span> To send confirmations, updates, or reply to you.</li>
              <li><span className="font-medium">Phone Number:</span> For account verification or support (optional).</li>
              <li><span className="font-medium">Payment Information:</span> Like credit card numbers or UPI IDs, securely processed for purchases.</li>
            </ul>
            <p>You give us this when you sign up, order something, or contact us.</p>

            <h3 className="text-lg font-medium mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p>We use cookies and tools to gather non-personal data about your usage, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">IP Address:</span> To know your general location (e.g., city) and secure our systems.</li>
              <li><span className="font-medium">Browser Type:</span> Like Chrome or Firefox, to make our site work better for you.</li>
              <li><span className="font-medium">Device Information:</span> Such as iPhone model or Android version, to improve app performance.</li>
              <li><span className="font-medium">Usage Patterns:</span> Pages you visit, time spent, or clicks, to tailor our Services to your interests.</li>
            </ul>
            <p>This keeps your experience smooth and helps us fix issues.</p>

            <h3 className="text-lg font-medium mt-6 mb-3">2.3 Sensitive Data</h3>
            <p>We only collect Sensitive Personal Data—like financial info (e.g., bank details)—if you say it is okay. We will explain why we need it (e.g., "to track your fitness progress") and how we will use it first.</p>

            <h2 id="how-we-use" className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Deliver Services:</span> Process orders, manage your account, fix problems, and answer your questions.</li>
              <li><span className="font-medium">Send Updates:</span> With your permission, send emails or texts about promotions, new features, or newsletters. You can opt out anytime.</li>
              <li><span className="font-medium">Improve Things:</span> Study trends (e.g., popular features), track how you use our Services, and make them better.</li>
              <li><span className="font-medium">Stay Legal:</span> Follow laws, enforce our rules, or protect StarShape, you, or others if needed.</li>
            </ul>

            <h2 id="disclosure" className="text-xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p>We share your data only when necessary:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Trusted Partners:</span> With companies like payment processors or hosting services that help us run things. They are bound by contracts to keep your data safe and use it only for us.</li>
              <li><span className="font-medium">Legal Needs:</span> If a court or government asks for it, we will comply.</li>
              <li><span className="font-medium">Business Changes:</span> If we merge with or sell to another company, your data might transfer to them, but they will follow this Policy.</li>
              <li><span className="font-medium">No Selling:</span> We do not sell or trade your Personal Data for profit—ever.</li>
            </ul>

            <h2 id="data-security" className="text-xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p>We protect your data with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Encryption:</span> AES-256 for sensitive data like payment info.</li>
              <li><span className="font-medium">Access Limits:</span> Only authorized staff can see your data, after two-factor authentication.</li>
              <li><span className="font-medium">Regular Checks:</span> We audit our systems quarterly to spot and fix risks.</li>
            </ul>
            <p>If a data breach happens, we will email you and notify regulators within 72 hours of finding out, unless law enforcement delays us. We will inform you what happened and how we are mitigating it.</p>

            <h2 id="data-retention" className="text-xl font-semibold mt-8 mb-4">6. Data Retention</h2>
            <p>We will keep your data only as long as needed:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account info stays while you use our Services.</li>
              <li>Order details are kept for 1 year or till the company exists.</li>
              <li>Inactive accounts are deleted after 2 years.</li>
            </ul>
            <p>You can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>See your data.</li>
              <li>Fix mistakes in it.</li>
              <li>Ask us to delete it (unless laws say we must keep it).</li>
              <li>Say "no" to certain uses.</li>
            </ul>
            <p>Please email us at [contact email] to ask.</p>
            <p>Manage them in your browser settings. Turning them off might limit a few features (e.g., auto-login).</p>

            <h2 id="your-rights" className="text-xl font-semibold mt-8 mb-4">7. Your Rights</h2>
            <p>You control your data. You can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Check It:</span> Ask for a copy of what we have.</li>
              <li><span className="font-medium">Fix It:</span> Update wrong info (e.g., new email).</li>
              <li><span className="font-medium">Limit It:</span> Stop us from using it in a few ways (e.g., no marketing emails).</li>
            </ul>
            <p>Reach us at [contact email] to do any of this.</p>

            <h2 id="international-transfers" className="text-xl font-semibold mt-8 mb-4">8. International Data Transfers</h2>
            <p>If you are outside India and your data leaves the country, we protect it with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Agreements:</span> Contracts with partners (e.g., "standard contractual clauses") to keep it safe.</li>
              <li><span className="font-medium">Checks:</span> We only send it where laws match India's standards (e.g., GDPR zones).</li>
            </ul>
            <p>This keeps your data secure no matter where it goes.</p>

            <h2 id="changes" className="text-xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
            <p>We might tweak this Policy as our Services or laws change:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Big updates (e.g., new data uses) come with an email or site notice.</li>
              <li>Small fixes take effect when posted here, with the "Effective Date" updated.</li>
            </ul>

            <h2 id="cookies" className="text-xl font-semibold mt-8 mb-4">10. Cookies and Similar Technologies</h2>
            <h3 className="text-lg font-medium mt-6 mb-3">10.1 What Are Cookies?</h3>
            <p>Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit our website or use our Services. They help us recognize your device and remember your preferences, making your experience more efficient and personalized.</p>

            <h3 className="text-lg font-medium mt-6 mb-3">10.2 Types of Cookies We Use</h3>
            <p>We use the following types of cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Essential Cookies:</span> These are necessary for the website to function properly. They enable core functionalities like page navigation, secure login, and access to restricted areas. Without these cookies, our Services may not work as intended.</li>
              <li><span className="font-medium">Performance Cookies:</span> These cookies collect information about how you use our Services (e.g., which pages you visit most often). This helps us improve the performance of our website and tailor it to your needs.</li>
              <li><span className="font-medium">Functional Cookies:</span> These cookies allow us to remember your preferences (e.g., language, region) and provide enhanced, personalized features.</li>
              <li><span className="font-medium">Advertising Cookies:</span> These cookies are used to deliver ads that are more relevant to you and your interests. They also help us measure the effectiveness of our advertising campaigns.</li>
              <li><span className="font-medium">Third-Party Cookies:</span> We may allow third-party service providers (e.g., Google Analytics, social media platforms) to place cookies on your device to analyse how you use our Services or to deliver targeted ads.</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">10.3 How to Manage Cookies</h3>
            <p>You can control or delete cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Block all cookies (including essential ones), which may affect the functionality of our Services.</li>
              <li>Delete existing cookies.</li>
              <li>Set your browser to notify you when a cookie is being placed on your device.</li>
            </ul>
            <p>Please note that if you disable or delete cookies, few features of our Services may not work as intended (e.g., auto-login, personalized content).</p>

            <h3 className="text-lg font-medium mt-6 mb-3">10.4 Consent for Cookies</h3>
            <p>When you first visit our website or use our Services, we will ask for your consent to use non-essential cookies (e.g., performance, functional, and advertising cookies). You can withdraw your consent at any time by adjusting your cookie settings in your browser or through our cookie management tool (if available).</p>

            <h3 className="text-lg font-medium mt-6 mb-3">10.5 Changes to Our Cookie Policy</h3>
            <p>We may update our use of cookies from time to time. Any changes will be reflected in this section of the Privacy Policy, and we will notify you of significant changes through our website or via email.</p>

            <h2 id="governing-law" className="text-xl font-semibold mt-8 mb-4">11. Governing Law and Dispute Resolution</h2>
            <p>This Policy follows India's laws, since we are based here. Disputes go to courts in Kerala, India. If you are outside India, we will also respect your local data laws (e.g., GDPR in Europe) and work with you to sort things out fairly. Email us first at [contact email] — we would rather fix it directly.</p>

            <h2 id="severability" className="text-xl font-semibold mt-8 mb-4">12. Severability and Entire Agreement</h2>
            <p>If a court says part of this Policy does not work, the rest still applies. This is the full deal about your data—no side promises, or old rules apply.</p>

            <h2 id="contact-us" className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>Questions? Reach out:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Email:</span> [contact email]</li>
              <li><span className="font-medium">Address:</span> StarShape Pvt. Ltd, Bengaluru, Karnataka, India</li>
            </ul>
          </div>

          <div className="mt-8">
            <hr className="my-6 border-gray-200" />
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} StarShape. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-sm text-blue-600 hover:underline">Terms of Service</a>
                <a href="#" className="text-sm text-blue-600 hover:underline">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  )
}
