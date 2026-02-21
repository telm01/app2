import React from 'react';
import HistoryPanel from '../HistoryPanel';
const webDesignHistoryEvents = [
  { image:'2007 Diasys d Germany.jpg',
    year: '2006\'s', description: ' Since 2006, DiaSys Diagnostic Systems GmbH has been a valued partner in Mongolia. In that same year, DiaSys Mongolia was officially founded, marking the beginning of a long-term commitment to advancing laboratory diagnostics in the country. The picture shows our director participating in an official meeting, reflecting our ongoing collaboration and leadership in the field.',
     Title:'The beginning'
     },
  { image:'2007 anhni seminar 3.jpg',
    year: '2007\'s', description: 'In 2007, a major milestone was achieved at the First National Hospital with the establishment of Mongolia’s first laboratory doctor and laboratory technician. That same year, our MC15 semi-automatic biochemistry analyzer was introduced to the public, helping launch modern laboratory diagnostics in Mongolia. The picture captures the moment of our first seminar, where we shared knowledge and expertise with healthcare professionals, setting the stage for our ongoing commitment to education and support in the medical community.',
     Title:'First ever job' 
    },

  { image:'2011-on-anhnii-Buren-automat-analyzer-in-BGD-EMT.jpg',
    year: '2011\'s', 
    description: 'In 2011, another major advancement was achieved with the installation of our first fully automatic biochemistry analyzer, the Respons® 920, further strengthening automated laboratory diagnostics in Mongolia.',
    Title:'Expanding reach'  
  },

  { image:'2012 Germand ENg surgalt.jpg',
    year: '2012', 
    description: 'In 2012, our company strengthened its expertise by sending our specialists to Germany for advanced technical training, reinforcing our commitment to international standards and continuous professional development.',
    Title:'Expanding expertise'
     },

     {image:'ech-urs.jpg',
      year: '2013', 
      description: 'In 2013, we proudly supported the First National Children’s Hospital of Mongolia by installing and distributing life-saving medical equipment, including incubators, ventilators, anesthesia machines, infant warmers, and many other essential devices helping provide safer care and a healthier future for children of mongolia' ,
       Title:'Supporting children' },

  { image:'Picture1.jpg',
    year: '2017',
     description: 'In 2017, we expanded into the field of sports physical therapy by supporting the national sports teams with advanced rehabilitation solutions. We distributed 8 types of physical therapy systems and more than 16 therapy machines, including the BTL-5000 Combi and Dynatron Solaris Plus, helping athletes recover faster and perform at their best.' ,
      Title:'Sports' },

  { image:'room1.jpg',
    year: '2018',
     description: "In 2018, we built an X-ray shielding room using innovative new materials for the State Special Services General Hospital of Mongolia (Төрийн тусгай албан хаагчийн нэгдсэн эмнэлэг), enhancing radiation safety and modernizing medical facilities.",
      Title:'Expanding reach'
     },

  { image:'Picture3.jpg',year: '2021', 
    description: 'In 2021, we launched a mobile molecular biology laboratory to bring advanced COVID-19 testing to remote provinces of Mongolia, ensuring timely detection and care for communities across the country.' , Title:'Traveler laboratory' },
   { 
        image:'UNFPA_logo.svg',
    year: '2021',
     description: 'In 2021, we partnered with UNFPA Mongolia to support the country’s COVID-19 response. We distributed RT-PCR and COVID-19 nucleic acid detection and extraction kits, along with over 19 types of laboratory equipment. We established fully equipped molecular biology laboratories at the Second National Hospital, the National Center for Maternal and Child Health, Umnugobi Provincial Hospital, and Zam-Uud Provincial Health Center. In addition, we created a mobile molecular biology laboratory to bring COVID-19 testing capabilities to remote provinces, ensuring timely detection and care across Mongolia.' ,
      Title:'During COVID-19 ' 
    },
       { 
        image:'award.jpg',
    year: '2021',
     description: 'In 2021, we were honored with an award for being one of Mongolia’s best taxpayers, recognizing our commitment to corporate responsibility and contributing to the nation’s development.' ,
      Title:'During COVID-19 ' 
    },
     
   
  { image:'2023 on Sekie Diasys surgalt.jpg',
    year: '2023', 
    description: 'In 2023, we received a special permit to import and supply medicines, marking a new chapter in expanding our healthcare services and bringing essential medical products directly to Mongolia.'  , 
    Title:'New opportunity'
   },
];
const History = () => {
  return (<><div className="Compass"><p>About Us/Our story</p></div>

   <div> {/* History Panel */}
    <HistoryPanel title="A HISTORY OF DIASYS MONGOLIA" events={webDesignHistoryEvents} />
  </div></>
  );
};

export default History;