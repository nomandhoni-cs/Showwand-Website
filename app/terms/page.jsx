import Link from "next/link";
export const metadata = {
  title: "Terms and Conditions - Showwand",
  description:
    "Terms and Conditions for Showwand, a browser extension that helps you manage your Showwcase threads and posts and many more.",
  keywords:
    "Showwand, Showwand Terms and Conditions, Showwand Terms, Showwand Conditions",
};
const TermsPage = () => {
  return (
    <>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Terms &amp; Conditions</h1>
      <p className="mb-4">
        Please read these Terms and Conditions carefully before using the Showwand extension.
      </p>

      <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By installing and using the Showwand extension, you agree to be bound by these Terms and Conditions and any
        future updates or modifications. If you do not agree with any part of these terms, please refrain from using the extension.
      </p>

      <h2 className="text-2xl font-bold mb-2">2. Use of Showwand</h2>
      <p className="mb-4">
        Showwand is a browser extension designed to enhance your Showwcase experience. You may use the extension for personal use,
        including sharing content, posting threads, and accessing recent posts. However, any commercial use of Showwand
        requires prior written permission from the developers.
      </p>

      <h2 className="text-2xl font-bold mb-2">3. Intellectual Property</h2>
      <p className="mb-4">
        The Showwand extension and all associated intellectual property rights belong to the developers. You may not
        reproduce, modify, or distribute the extension without explicit permission. Showwand is provided as is, and the
        developers make no warranties regarding its functionality or compatibility.
      </p>

      <h2 className="text-2xl font-bold mb-2">4. Disclaimer of Liability</h2>
      <p className="mb-4">
        The developers of Showwand shall not be held liable for any damages or losses arising from the use of the extension.
        Use the extension at your own risk and exercise caution when interacting with Showwcase platforms. The developers do
        not endorse or guarantee the accuracy, reliability, or legality of any content posted using Showwand.
      </p>

      <h2 className="text-2xl font-bold mb-2">5. Modification and Termination</h2>
      <p className="mb-4">
        The developers reserve the right to modify or terminate the Showwand extension at any time without notice. They may
        also update these Terms and Conditions periodically. Continued use of the extension after any changes implies
        acceptance of the updated terms.
      </p>

      <h2 className="text-2xl font-bold mb-2">6. Governing Law</h2>
      <p className="mb-4">
        These Terms and Conditions are governed by and construed in accordance with the laws of your jurisdiction. Any legal
        disputes arising from the use of the Showwand extension shall be subject to the exclusive jurisdiction of the courts
        in your jurisdiction.
      </p>

      <p className="mb-4">
        If you have any questions or concerns about these Terms and Conditions, please contact us at <Link className="text-blue-600" href="mailto:alnoman.dhoni@gmail.com">alnoman.dhoni@gmail.com</Link>.
      </p>
    </div>
    </>
  );
};

export default TermsPage;
