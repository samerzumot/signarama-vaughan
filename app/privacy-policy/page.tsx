import { SectionHeading } from "../components/SectionHeading";
import { createMetadata } from "../lib/metadata";

export const metadata = createMetadata({
    title: "Privacy Policy | GTA Sign Company",
    description: "Privacy Policy for our custom sign fabrication and installation services.",
    path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
    return (
        <main>
            <section className="bg-surface-cream border-b border-surface-light pt-36 pb-16">
                <div className="container-content text-center">
                    <h1 className="font-display text-display-lg text-text-primary mb-4">Privacy Policy</h1>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-content max-w-narrow prose prose-lg prose-headings:font-display prose-headings:font-normal prose-a:text-brand-red hover:prose-a:text-brand-red-dark">
                    <p>
                        At Signarama Vaughan (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we respect your privacy and are committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website (the &quot;Website&quot;) and our practices for collecting, using, maintaining, protecting, and disclosing that policy.
                    </p>

                    <h2>Information We Collect</h2>
                    <p>
                        We collect several types of information from and about users of our Website, including:
                    </p>
                    <ul>
                        <li><strong>Personal Information:</strong> such as name, postal address, e-mail address, and telephone number that you provide to us when you fill out forms on our Website, such as when requesting a quote.</li>
                        <li><strong>Usage Details:</strong> information about your internet connection, the equipment you use to access our Website, and usage details collected through cookies and other tracking technologies.</li>
                    </ul>

                    <h2>How We Use Your Information</h2>
                    <p>
                        We use information that we collect about you or that you provide to us:
                    </p>
                    <ul>
                        <li>To present our Website and its contents to you.</li>
                        <li>To provide you with information, products, or services that you request from us.</li>
                        <li>To fulfill any other purpose for which you provide it.</li>
                        <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
                        <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                    </ul>

                    <h2>Disclosure of Your Information</h2>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties. We may disclose aggregated information about our users without restriction.
                    </p>

                    <h2>Changes to Our Privacy Policy</h2>
                    <p>
                        It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users&apos; personal information, we will notify you through a notice on the Website home page.
                    </p>

                    <h2>Contact Information</h2>
                    <p>
                        To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                        <br />
                        <strong>7250 Keele St, Unit 286, Vaughan, ON L4K 1Z8, Canada</strong>
                        <br />
                        <strong>(905) 597-8635</strong>
                    </p>
                </div>
            </section>
        </main>
    );
}
