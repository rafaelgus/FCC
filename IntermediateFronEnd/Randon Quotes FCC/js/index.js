$(document).ready(function() {

  var quote,
    author;

  function getNewQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(res) {
        console.log(res);
        quote = res.quoteText;
        author = res.quoteAuthor;

        $('#quote').text('Quote:  ' +  quote);

        if (author) {
          $('#author').text('Author: ' + author);
        } else {
          $('#author').text('Author: Unknown');
        }

      }
    });

  }

  getNewQuote();
$('.getNewQuote').on('click', function(event) {
    event.preventDefault();
    getNewQuote();
  })

  $('.tweetNewQuote').on('click', function(event) {
    event.preventDefault();

    if (quote.length > 100) {
      quote = quote.substr(0, 100).match(/(.+)\s/)[1] + "...";
    }

    quote = "\"" + quote + '"';

    window.open("https://twitter.com/intent/tweet?text=" + quote + " &hashtags=favorite");
  })
  $('.githubPage').on('click', function(event) {
    event.preventDefault();

    window.open("https://github.com/rafaelgus/FCC/tree/master/IntermediateFronEnd/Randon%20Quotes%20FCC");
  })

})