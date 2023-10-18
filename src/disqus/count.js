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
(function() {
    // НЕ РЕДАКТИРУЙТЕ КОД НИЖЕ ЭТОЙ ЛИНИИ
  
    var d = document, s = d.createElement('script');
  
    // Замените "shortname" на имя вашего форума Disqus
    var shortname = 'movie-app00';
  
    s.src = 'https://' + shortname + '.disqus.com/count.js';
    s.async = true;
    (d.head || d.body).appendChild(s);
  })();
  