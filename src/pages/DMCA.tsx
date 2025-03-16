
import Banner from '@/components/layout/Banner';
import { Card, CardContent } from '@/components/ui/card';

const DMCA = () => {
  return (
    <div className="bg-background min-h-screen">
      <Banner 
        title="DMCA Notice & Takedown Policy" 
        subtitle="Last updated: June 1, 2023" 
      />
      
      <div className="container mx-auto px-4 py-12">
        <Card>
          <CardContent className="prose prose-sm sm:prose-base lg:prose-lg max-w-none pt-6">
            <h2>DMCA Notice & Takedown Policy</h2>
            <p>
              CineWave respects the intellectual property rights of others and expects its users 
              to do the same. In accordance with the Digital Millennium Copyright Act of 1998, 
              the text of which may be found on the U.S. Copyright Office website at 
              http://www.copyright.gov/legislation/dmca.pdf, CineWave will respond expeditiously 
              to claims of copyright infringement committed using the CineWave service and/or 
              the CineWave website.
            </p>
            
            <h2>Notification of Claimed Copyright Infringement</h2>
            <p>
              If you believe that your copyrighted work has been copied in a way that constitutes 
              copyright infringement and is accessible via the Service, please notify CineWave's 
              copyright agent as set forth in the Digital Millennium Copyright Act of 1998 (DMCA). 
              For your complaint to be valid under the DMCA, you must provide the following 
              information when providing notice of the claimed copyright infringement:
            </p>
            
            <ul>
              <li>A physical or electronic signature of a person authorized to act on behalf of the copyright owner</li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing or to be the subject of the infringing activity and that is to be removed</li>
              <li>Information reasonably sufficient to permit the service provider to contact the complaining party, such as an address, telephone number, and, if available, an electronic mail address</li>
              <li>A statement that the complaining party "in good faith believes that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or law"</li>
              <li>A statement that the "information in the notification is accurate", and "under penalty of perjury, the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed"</li>
            </ul>
            
            <h2>Counter Notification</h2>
            <p>
              If you believe that your material has been removed by mistake or misidentification, 
              please provide CineWave with a written counter notification containing the following 
              information:
            </p>
            
            <ul>
              <li>Your physical or electronic signature</li>
              <li>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access to it was disabled</li>
              <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification</li>
              <li>Your name, address, telephone number, and email address</li>
              <li>A statement that you consent to the jurisdiction of the federal court in [Your Jurisdiction]</li>
              <li>A statement that you will accept service of process from the person who provided notification of the alleged infringement</li>
            </ul>
            
            <h2>Filing a DMCA Notice</h2>
            <p>
              To file a DMCA notice, please send the required information to:
            </p>
            
            <div className="not-prose bg-muted p-4 rounded-lg mt-4 mb-6">
              <p className="font-medium">DMCA Agent</p>
              <p>CineWave Legal Department</p>
              <p>123 Movie Street</p>
              <p>Cinema City, 10001</p>
              <p>Email: dmca@cinedroid.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            
            <p>
              Please note that under Section 512(f) of the DMCA, any person who knowingly materially 
              misrepresents that material or activity is infringing may be subject to liability for 
              damages. Don't make false claims!
            </p>
            
            <h2>Repeat Infringers</h2>
            <p>
              It is our policy in appropriate circumstances to disable and/or terminate the accounts 
              of users who are repeat infringers.
            </p>
            
            <h2>Modifications to Policy</h2>
            <p>
              CineWave reserves the right to modify this policy at any time by posting a new version 
              on this website. The modified version will become effective on the date it is posted.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DMCA;
