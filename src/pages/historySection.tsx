import React from 'react';
import HistoryPanel from '../HistoryPanel';
const webDesignHistoryEvents = [
  { image:'2007 Diasys d Germany.jpg',year: '2006\'s', description: ' DiaSys Diagnostic Systems GmbH partner in Mongolia since 2006.' , Title:'The beginning' },
  { image:'2007 anhni seminar 3.jpg',year: '2007\'s', description: 'Started with Stardust MC-15 in 2007' , Title:'First ever job' },
  { image:'2011 on anhnii Buren automat analyzer in BGD EMT.jpg',year: '2011\'s', description: 'Disterbuted first ever full automatic analyzer in BGL district hospital', Title:'Javascript'  },
  { image:'2012 Germand ENg surgalt.jpg',year: '2012', description: 'Pursuing more and more valuebles through ENG' , Title:'Javascript' },
  { image:'Picture1.jpg',year: '2021', description: 'Setting up the four molecular biology laboratories in respons to COVID-19' , Title:'During COVID-19 first phase' },
  { image:'Picture3.jpg',year: '2021', description: 'Furthermore, established traveler laboratory to remote providence of mongolia ' , Title:'Traveler laboratory' },
  { image:'2022 on JICA surgalt.jpg',year: '2022', description: 'Collabration with JICA of japan ' , Title:'New opportunities' },
  { image:'2023 on Sekie Diasys surgalt.jpg',year: '2023', description: 'Sekei in Diasys mongolia ' , Title:'Sekei' },
];
const History = () => {
  return (<><div>

    {/* History Panel */}
    <HistoryPanel title="A HISTORY OF DIASYS MONGOLIA" events={webDesignHistoryEvents} />
  </div></>
  );
};

export default History;