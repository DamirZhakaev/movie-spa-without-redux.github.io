
/**
 * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
 * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
 */
/*
var disqus_config = function () {
  this.page.url = PAGE_URL;  // Замените PAGE_URL на URL вашей страницы
  this.page.identifier = PAGE_IDENTIFIER; // Замените PAGE_IDENTIFIER на уникальный идентификатор вашей страницы
};
*/
// (function() {
//     // НЕ РЕДАКТИРУЙТЕ КОД НИЖЕ ЭТОЙ ЛИНИИ
  
//     var d = document, s = d.createElement('script');
  
//     // Замените "shortname" на имя вашего форума Disqus
//     var shortname = 'movie-app00';
  
//     s.src = 'https://' + shortname + '.disqus.com/embed.js';
//     s.setAttribute('data-timestamp', +new Date());
//     (d.head || d.body).appendChild(s);
//   })();
  

import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const DisqusComments = () => {
  const disqusShortname = 'your-shortname'; // Replace with your shortname
  const disqusConfig = {
    url: 'https://example.com/path-to-your-page', // Replace with your page URL
    identifier: 'unique-identifier', // Replace with a unique identifier for the page
    title: 'Page Title', // Replace with the title of your page
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
