export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Last updated:</strong> March 15, 2024
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                request our services, or contact us. This may include:
              </p>
              <ul>
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Financial information necessary for providing advisory services</li>
                <li>Investment preferences and risk tolerance</li>
                <li>Communication records and correspondence</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our financial advisory services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy:
              </p>
              <ul>
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                These measures include:
              </p>
              <ul>
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection</li>
              </ul>

              <h2>5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide our services, 
                comply with legal obligations, resolve disputes, and enforce our agreements. 
                The retention period may vary depending on the type of information and the purpose for which it was collected.
              </p>

              <h2>6. Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
                <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
              </ul>

              <h2>7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect and track information 
                about your use of our website and services. You can control cookies through your 
                browser settings, but disabling cookies may affect the functionality of our services.
              </p>

              <h2>8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for 
                the privacy practices or content of these third-party sites. We encourage you to 
                review the privacy policies of any third-party sites you visit.
              </p>

              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly 
                collect personal information from children under 18. If we become aware that we have 
                collected personal information from a child under 18, we will take steps to delete such information.
              </p>

              <h2>10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country 
                of residence. We ensure that such transfers comply with applicable data protection laws 
                and implement appropriate safeguards.
              </p>

              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new Privacy Policy on our website and updating the "Last updated" 
                date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>

              <h2>12. Regulatory Compliance</h2>
              <p>
                As a financial advisory firm, we comply with applicable financial regulations including:
              </p>
              <ul>
                <li>Securities and Exchange Board of India (SEBI) regulations</li>
                <li>Reserve Bank of India (RBI) guidelines</li>
                <li>Information Technology Act, 2000</li>
                <li>Other applicable financial and data protection laws</li>
              </ul>

              <h2>13. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <p><strong>Money & Me Financial Services</strong></p>
                <p>Email: privacy@moneyandme.com</p>
                <p>Phone: +91-9876543210</p>
                <p>Address: 123 Financial District, Mumbai, Maharashtra 400001</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Data Protection Officer</h3>
                <p className="text-blue-800">
                  For specific data protection inquiries, you can contact our Data Protection Officer at 
                  <a href="mailto:dpo@moneyandme.com" className="underline ml-1">dpo@moneyandme.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
