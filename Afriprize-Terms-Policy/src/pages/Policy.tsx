import MainNavbar from "../components/MainNavbar";
import { Link } from "react-router-dom";

function Policy() {
  return (
    <>
      <MainNavbar>
        <h1>PRIVACY POLICY</h1>
      </MainNavbar>
      <div className="TextContainer">
        <h1>PRIVACY POLICY OF AFRIPRIZE</h1>
        <h3>1. Introduction:</h3>
        <p>
          Welcome to AfriPrize. We are committed to protecting your personal
          information and your right to privacy. This Privacy Policy applies to
          all information collected through our website, mobile applications,
          and any related services (collectively referred to as "Services").
        </p>
        <h3>2. Information We Collect:</h3>
        <p>
          We may collect personal information that you voluntarily provide to us
          when you express an interest in obtaining information about us or our
          products and services, when you participate in activities on our
          Services, or otherwise when you contact us. The personal information
          we collect may include: name, email address, phone number, address,
          and other information you provide to us.
        </p>
        <h3>3. Use of Your Information:</h3>
        <p>
          Pursuant to the company’s resolve to serve our users beneficially, we
          use the information we collect or receive to do the following:
        </p>
        <p>
          <ol type="a">
            <li>
              To facilitate the creation of and secure your account on our
              platform;
            </li>
            <li>To identify you as a user in our system;</li>
            <li>To improve our Services;</li>
            <li>To fulfill and manage your orders;</li>
            <li>To send marketing and promotional communications;</li>
            <li>To respond to legal requests and prevent harm;</li>
            <li>
              For other legal business purposes, such as data analysis,
              identifying usage trends, and to evaluate and improve our
              Services.
            </li>
          </ol>
        </p>
        <h3>4. Sharing Your Information:</h3>
        <p>
          It is understood that to serve you better, we may share your
          information with our third parties/privies that perform services for
          us or on our behalf, including payment processing, data analysis,
          email delivery, hosting services, customer service, and marketing
          assistance.
        </p>
        <h3>5. Cookies and Other Tracking Technologies:</h3>
        <p>
          We may use cookies and similar tracking technologies to collect and
          store your information.
        </p>
        <h3>6. Security of Your Information:</h3>
        <p>
          We have implemented appropriate technical and organizational security
          measures designed to protect the security of any personal information
          we process.
        </p>
        <h3>7. Your Privacy Rights:</h3>
        <p>
          You may review, change, or terminate your account at any time. If you
          are a resident in a region with laws governing data collection and use
          that may differ from applicable law, you may have rights under those
          laws.
        </p>
        <h3>8. Policy for Children:</h3>
        <p>
          We do not knowingly solicit data from or market to children under the
          age of 18. It is the responsibility of Parents and/or guardians of
          minors who may use our services to supervise the use of this site by
          their wards.
        </p>
        <h3>9. Updates to This Policy:</h3>
        <p>
          Unless stated otherwise, our current Privacy Policy applies to all
          information that we have about you and your Account. We may update
          this privacy policy from time to time. The updated version will be
          indicated by an updated "Revised" date and the updated version will be
          effective as soon as it is accessible, as continued use of the
          Services will be considered as your acceptance thereof. Such updates
          will not impact your Account registration details unless required to
          the contrary by law. It is the responsibility of each customer to
          regularly check the General Terms and Conditions and Privacy Policy
          for updates.
        </p>
        <h3>10. Force Majeure:</h3>
        <p>
          AfriPrize shall take no responsibility whatsoever for events beyond
          its control inclusive of, but not limited to, acts of god or natural
          disasters and including power cuts and strikes.
        </p>
        <h3>11. Governing Law: </h3>
        <p>The laws of Nigeria shall govern this Privacy Policy.</p>
        <h3>12. Effective Date:</h3>
        <p>This Privacy Policy is effective from </p>
        <h3>13. Contact Us:</h3>
        <p>
          If you have any enquiries or comments about this policy, you may
          contact our Data Protection Officer via_________________ (attach
          contact details)
        </p>
        <p className="Greetings">AfriPrize</p>
        <p>Ipent 7 Estate Abuja</p>

        <Link to={"/"} style={{ alignSelf: "flex-start" }}>
          Back to Terms and Conditions
        </Link>
      </div>
    </>
  );
}

export default Policy;
