import React from 'react';
import useIsMobile from '@/hooks/useIsMobile';
import Homepage from './home';
import HomepageMobile from './homemobile';

const HomepageWrapper = () => {
  const isMobile = useIsMobile();

  // Prevent premature rendering during hydration
  if (isMobile === null) return null;

  return isMobile ? <HomepageMobile /> : <Homepage />;
};

export default HomepageWrapper;
