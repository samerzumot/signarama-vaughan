import { SectionHeading } from "../components/SectionHeading";
import { createMetadata } from "../lib/metadata";

export const metadata = createMetadata({
    title: "Terms of Service | GTA Sign Company",
    description: "Terms of Service for our custom sign fabrication and installation services.",
    path: "/terms-of-service",
});

export default function TermsOfServicePage() {
    return (
        <main>
            <section className="bg-surface-cream border-b border-surface-light pt-36 pb-16">
                <div className="container-content text-center">
                    <h1 className="font-display text-display-lg text-text-primary mb-4">Terms of Service</h1>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container-content max-w-narrow prose prose-lg prose-headings:font-display prose-headings:font-normal prose-a:text-brand-red hover:prose-a:text-brand-red-dark">
                    <p>
                        These Terms of Service (&quot;Terms&quot;) govern your use of the Signarama Vaughan website (&quot;Website&quot;) and any services provided by us. By accessing or using our Website and services, you agree to be bound by these Terms.
                    </p>

                    <h2>1. User Agreement</h2>
                    <p>
                        By accessing the Website, you represent and warrant that you are at least the age of majority in your jurisdiction. You agree to use the Website only for lawful purposes and in accordance with these Terms.
                    </p>

                    <h2>2. Services and Quotes</h2>
                    <p>
                        Any quotes or estimates provided through our Website or in response to inquiries are strictly preliminary and subject to final review of the project specifications. All orders and projects are subject to our separate formal contract agreements. We reserve the right to refuse service to anyone for any reason at any time.
                    </p>

                    <h2>3. Intellectual Property</h2>
                    <p>
                        The content, features, and functionality of the Website, including but not limited to all text, graphics, logos, images, and software, are the exclusive property of Signarama Vaughan or our licensors and are protected by intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or publicly perform any of the content without our prior written consent.
                    </p>

                    <h2>4. Limitation of Liability</h2>
                    <p>
                        In no event shall Signarama Vaughan, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Website.
                    </p>

                    <h2>5. Third-Party Links</h2>
                    <p>
                        Our Website may contain links to third-party web sites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
                    </p>

                    <h2>6. Changes to Terms</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page. Your continued use of the Website after any such changes constitutes your acceptance of the new Terms.
                    </p>

                    <h2>7. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at:
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
