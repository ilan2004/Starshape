import React from 'react';
import { Footer } from 'src/components/Footer/page';
import { MobApproach } from 'src/components/Mobile-comp/Approach/page';
import { DetailsMobile } from 'src/components/Mobile-comp/Details/page';
import { Mobilephero } from 'src/components/Mobile-comp/Hero/page';
import { Gap } from 'src/components/Web-comp/Gap/page';
import { Work } from 'src/components/Work/page';



const Mobile = () => {
  return (
    <div>
      <Mobilephero/>
      <Gap/>
      
      <DetailsMobile/>
      <MobApproach/>
      <Work/>
      <Footer/>
    </div>
  );
};

export default Mobile;
