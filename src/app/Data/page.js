import React from 'react';
import { Approachdata } from 'src/components/Data-comp/Approach/page';
import { Detailsdata } from 'src/components/Data-comp/Details/page';
import { Datahero } from 'src/components/Data-comp/Hero/page';
import { Pathdata } from 'src/components/Data-comp/Path/page';
import { Processdata } from 'src/components/Data-comp/Process/page';
import { Footer } from 'src/components/Footer/page';
import { Gap } from 'src/components/Web-comp/Gap/page';
import { Work } from 'src/components/Work/page';


const Data = () => {
  return (
    <div>
      <Datahero/>
      <Gap/>
      <Detailsdata/>
      <Approachdata/>
      <Pathdata/>
      <Processdata/>
      <Work/>
      <Footer/>
    </div>
  );
};

export default Data;
