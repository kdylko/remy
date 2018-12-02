import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class PrivacyPolicyContent extends React.PureComponent {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  render() {
    const { onClose } = this.props;

    return (
      <React.Fragment>
        <div className="privacy-policy-content">
          <div className="block">
            <div className="text">
              <b>Effective date: September 24, 2018</b><br />
            </div>

            <div className="text">
              Remy Robotics ("us", "we", or "our") operates the remyrobotics.com website (the "Service").
            </div>

            <div className="text">
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </div>

            <div className="text">
              We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from remyrobotics.com
            </div>
          </div>

          <div className="block">
            <div className="title">
              Information Collection And Use
            </div>

            <div className="text">
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </div>
          </div>

          <div className="block">
            <div className="title">
              Types of Data Collected
            </div>

            <div className="text-column">
              <div className="text">
                <b>Personal Data</b><br />
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:

                <br />
                <br />
                <div className="text">
                  <span className="dash">Email address</span><br />
                  <span className="dash">Cookies and Usage Data</span>
                </div>
              </div>

              <div className="text">
                <b>Usage Data</b><br />
                We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </div>
            </div>
          </div>

          <div className="block">
            <div className="title">
              Tracking & Cookies Data
            </div>

            <div className="text">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.
            </div>

            <div className="text">
              Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
            </div>

            <div className="text">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </div>

            <div className="text">
              Examples of Cookies we use:
            </div>

            <div className="text dash">
              <b>
                Session Cookies.
              </b>
              &nbsp;
              We use Session Cookies to operate our Service.
            </div>

            <div className="text dash">
              <b>
                Preference Cookies.
              </b>
              &nbsp;
              We use Preference Cookies to remember your preferences and various settings.
            </div>

            <div className="text dash">
              <b>
                Security Cookies.
              </b>
              &nbsp;
              We use Security Cookies for security purposes.
            </div>
          </div>

          <div className="block">
            <div className="title">
              Use of Data
            </div>

            <div className="text dash">
              Remy Robotics uses the collected data for various purposes:
            </div>

            <div className="text dash">
              To provide and maintain the Service
            </div>

            <div className="text dash">
              To notify you about changes to our Service
            </div>

            <div className="text dash">
              To allow you to participate in interactive features of our Service when you choose to do so
            </div>

            <div className="text dash">
              To provide customer care and support
            </div>

            <div className="text dash">
              To provide analysis or valuable information so that we can improve the Service
            </div>

            <div className="text dash">
              To monitor the usage of the Service
            </div>

            <div className="text dash">
              To detect, prevent and address technical issues
            </div>
          </div>

          <div className="block">
            <div className="title">
              Transfer Of Data
            </div>

            <div className="text">
              Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
            </div>

            <div className="text">
              If you are located outside Spain and choose to provide information to us, please note that we transfer the data, including Personal Data, to Spain and process it there.
            </div>

            <div className="text">
              Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
            </div>

            <div className="text">
              Remy Robotics will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
            </div>
          </div>

          <div className="block">
            <div className="title">
              Disclosure Of Data
            </div>

            <div className="text-column">
              <div className="text">
                <b>Legal Requirements</b><br />
                Remy Robotics may disclose your Personal Data in the good faith belief that such action is necessary to:

                <div className="dash">To comply with a legal obligation</div>
                <div className="dash">To protect and defend the rights or property of Remy Robotics</div>
                <div className="dash">To prevent or investigate possible wrongdoing in connection with the Service</div>
                <div className="dash">To protect the personal safety of users of the Service or the public</div>
                <div className="dash">To protect against legal liability</div>
              </div>

              <div className="text">
                <b>Service Providers</b><br />
                We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
                These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </div>

              <div className="text">
                <b>Security Of Data</b><br />
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </div>

              <div className="text">
                <b>Links To Other Sites</b><br />
                Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
              </div>

              <div className="text">
                <b>Children's Privacy</b><br />
                Our Service does not address anyone under the age of 18 ("Children").
                We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
              </div>

              <div className="text">
                <b>Changes To This Privacy Policy</b><br />
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </div>
            </div>
          </div>
        </div>

        <div
          className="back-landing-button flex-both-centered"
          onClick={onClose}
        >
          Back
        </div>
      </React.Fragment>
    );
  }
}

export default PrivacyPolicyContent;
