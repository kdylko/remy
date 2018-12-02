import React from 'react';

import Header from '~components/Header';
import PrivacyPolicyContent from '~components/PrivacyPolicyContent';
import Footer from '~components/Footer';

export default ({
  onClose,
  height,
  width,
  screen,
}) => (
  <div>
    <Header
      height={height}
      width={width}
      screen={screen}
      onClosePrivacyPolicy={onClose}
    />
    <PrivacyPolicyContent onClose={onClose} />
    <Footer />
  </div>
);
