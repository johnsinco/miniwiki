
// fire event when the reader gets to end of article
// $(window).scroll(function() {
//    if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
//        $(window).unbind('scroll');
//        $.post( 'track', { event: "article_finished" } );
//    }
// });
//
// $(window).ready(function() {
//   $.post( 'track', { event: "article_loaded" } );
// });
//
$.ajaxSetup({
  timeout: 30000
});

// ahoy tracking  - https://github.com/ankane/ahoy.js
ahoy.configure({
  urlPrefix: "",
  visitsUrl: "/track/visits",
  eventsUrl: "/track/events",
  cookieDomain: null,
  page: null,
  platform: "Web",
  useBeacon: false,
  startOnReady: true,
  trackVisits: true
});

ahoy.trackAll();

$(window).on("beforeunload", function(e) {
  ahoy.track("leave_page", {"page": window.location.href});

})

// track informative clicks
// $('#informative').click(function() {
//   $.post( 'track', { event: "informative_clicked" } );
// });
