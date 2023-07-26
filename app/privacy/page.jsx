import Link from "next/link";
export const metadata = {
  title: "Privacy Policy - Showwand",
  description:
    "Showwand is a browser extension that helps you manage your Showwcase threads and posts and many more.",
};
const PrivacyPage = () => {
  return (
    <>
      <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Privacy Policy</h1>

      <p className="mb-4">
        At Showwand, we take your privacy and data security seriously. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our browser extension.
      </p>

      <h2 className="text-2xl font-bold mb-4">Information Collection</h2>
      <p className="mb-4">
        Showwand does not collect any personal information. When you enter your Showwcase API key and username, this information is securely stored locally on your device and is not transmitted to our servers or any third-party services.
      </p>

      <h2 className="text-2xl font-bold mb-4">Data Security</h2>
      <p className="mb-4">
        We prioritize the security of your Showwcase API key and username. We employ industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. Your credentials are securely stored within your local environment and are not accessible to anyone else using Showwand.
      </p>

      <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
      <p className="mb-4">
        Showwand does not share your personal information with any third-party services. Your credentials are only used to facilitate the integration of Showwand with the Showwcase platform.
      </p>

      <h2 className="text-2xl font-bold mb-4">Changes to this Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be reflected on this page, and we encourage you to review this Privacy Policy periodically for any updates.
      </p>

      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns regarding our Privacy Policy or the handling of your personal information, please contact us at <Link className="text-blue-600" href="mailto:alnoman.dhoni@gmail.com">alnoman.dhoni@gmail.com</Link>.
      </p>
    </div>
    </>
  );
};

export default PrivacyPage;
