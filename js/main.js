const slackLink = document.querySelector(".link");

function sendSlackGAEvent(event) {
  ga("send", "event", {
    eventCategory: "Slack Link",
    eventAction: "click",
    eventLabel: event.target.href
  });
}

slackLink.addEventListener("click", sendSlackGAEvent);