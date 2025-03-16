
import Banner from '@/components/layout/Banner';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="bg-background min-h-screen">
      <Banner 
        title="Privacy Policy" 
        subtitle="Last updated: June 1, 2023" 
      />
      
      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardContent className="prose prose-sm sm:prose-base lg:prose-lg max-w-none pt-6">
            <h2>1. Introduction</h2>
            <p>
              CineWave ("we," "our," or "us") respects your privacy and is committed to protecting 
              your personal data. This privacy policy will inform you about how we look after your 
              personal data when you visit our website and tell you about your privacy rights and 
              how the law protects you.
            </p>
            
            <h2>2. The Data We Collect About You</h2>
            <p>
              Personal data, or personal information, means any information about an individual from 
              which that person can be identified. We may collect, use, store and transfer different 
              kinds of personal data about you including:
            </p>
            <ul>
              <li>Identity Data: includes first name, last name, username</li>
              <li>Contact Data: includes email address and telephone numbers</li>
              <li>Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform</li>
              <li>Usage Data: includes information about how you use our website and services</li>
            </ul>
            
            <h2>3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you</li>
              <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests</li>
              <li>Where we need to comply with a legal or regulatory obligation</li>
            </ul>
            
            <h2>4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from 
              being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. 
              In addition, we limit access to your personal data to those employees, agents, contractors, 
              and other third parties who have a business need to know.
            </p>
            
            <h2>5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes 
              we collected it for, including for the purposes of satisfying any legal, accounting, 
              or reporting requirements.
            </p>
            
            <h2>6. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:
            </p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
            
            <h2>7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our Service 
              and hold certain information. Cookies are files with a small amount of data which may 
              include an anonymous unique identifier.
            </p>
            
            <h2>8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "last updated" date 
              at the top of this Privacy Policy.
            </p>
            
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>By email: admin@cinedroid.com</li>
              <li>By phone: +1 (555) 123-4567</li>
              <li>By mail: 123 Movie Street, Cinema City, 10001</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
