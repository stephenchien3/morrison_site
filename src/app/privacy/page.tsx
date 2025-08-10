"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-[#fdfaf6] text-[#3a2c1a] font-serif">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <div className="max-w-3xl space-y-6 text-base leading-relaxed">
        <p>
          At Morrison, your privacy is very important to us. This Privacy Policy
          explains how we collect, use, and protect your information when you use
          our writing app.
        </p>

        <h2 className="text-2xl font-semibold mt-4">Information We Collect</h2>
        <p>
          We collect only the information necessary to provide and improve the app
          experience. This may include:
        </p>
        <ul className="list-disc list-inside">
          <li>Your usage data such as word counts and writing habits</li>
          <li>Device information like model and OS version</li>
          <li>Crash reports and analytics data to improve app stability</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4">How We Use Your Data</h2>
        <p>The information collected is used solely to:</p>
        <ul className="list-disc list-inside">
          <li>Enhance your writing experience</li>
          <li>Provide personalized habit tracking and insights</li>
          <li>Fix bugs and improve app performance</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-4">Data Security</h2>
        <p>
          We take reasonable measures to protect your data, but no method of
          transmission or storage is 100% secure. Please use the app responsibly.
        </p>

        <h2 className="text-2xl font-semibold mt-4">Third-Party Services</h2>
        <p>
          We use trusted third-party services to operate and improve the app,
          including <strong>Firebase Analytics by Google</strong>, which helps us
          understand how users interact with the app to enhance your experience.
          Firebase Analytics collects data such as device information, usage
          statistics, and user events.
        </p>
        <p>
          Firebase’s privacy practices are governed by{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b7355] underline"
          >
            Google’s Privacy Policy
          </a>
          .
        </p>
        <p>
          We do not sell or share your personal information with other third parties.
        </p>

        <h2 className="text-2xl font-semibold mt-4">Your Rights</h2>
        <p>
          You may request access to your data or ask for deletion by contacting us at{" "}
          <a
            href="mailto:morrisonapp1001@gmail.com"
            className="text-[#8b7355] underline"
          >
            morrisonapp1001@gmail.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-4">Changes to This Policy</h2>
        <p>
          We may update this policy occasionally. We encourage you to review it
          periodically for any changes.
        </p>
      </div>
    </div>
  );
}
