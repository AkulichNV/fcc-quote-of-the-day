function getQuote() {
  $.getJSON('https://api.forismatic.com/api/1.0/', 'method=getQuote&format=jsonp&lang=en&jsonp=?', (text) => {
    $('#quoteDay').html(`<p><strong>${text.quoteText}</strong><br>` + `- ${text.quoteAuthor} -` + '</p>');
  });
};

$(()=> {
  getQuote();
});

$('#newQuote').click(() => {
  getQuote();
});