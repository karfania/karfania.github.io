// for experience descriptions
const experienceMap = new Map();
var cignaExperience =
  "<h1>The Cigna Group</h1>" +
  "<h2>Full Stack Engineering Intern | May 2023-Present</h2>" +
  "<ul>" +
  "<li>Responsible for the major upgrade of an internal data management application, migrating from version 3.x.x to 5.x.x with over 500 changes</li>" +
  "<li>Building full-stack application to conduct medical surveys and find parent-disease relations, using Amazon Neptune, Node.js, React, and MongoDB</li>" +
  "<li>Discovering ways to visualize client-facing and internal metadata for the Data Engineering Team, using Tableau and React</li>" +
  "</ul>";
var caisExperience =
  "<h1>USC Center for AI in Society</h1>" +
  "<h2>Undergraduate Research Assistant | August 2022-Present</h2>" +
  "<ul>" +
  "<li>Running training and validation data on the megaSDM R package to simulate and predict 12 ESA-listed species migration patterns as impacted by climate change</li>" +
  "<li>Demonstrated findings at an undergraduate research symposium, highlighting the high risk-level of Appalachian species extinction over the next 80 years</li>" +
  "<li>Adding functionality to the program through increasing valid parameter arguments, improving file output protocols, and deploying the program on our CARC system for large load requests </li>" +
  "</ul>";
var syntiantExperience =
  "<h1>Syntiant Corporation</h1>" +
  "<h2>Engineering Intern | July 2022-September 2022</h2>" +
  "<ul>" +
  "<li>Created a Python-based CLI application with Marshmallow, Boto3, Pandas, Keras, PyMongo, and yt-dlp to scrape video/audio content for voice recognition model training and populate a comprehensive NoSQL database with metadata and S3 pointers</li>" +
  "<li>Demoed the program to senior leadership and the broader engineering team, with feedback as a basis to eventually implement the tool at an enterprise level</li>" +
  "<li>Wrote dependency and CI/CD pipelines, leveraging Jenkins and Gitlab</li>" +
  "</ul>";
var papayaExperience =
  "<h1>Papaya Payments</h1>" +
  "<h2>Web Automation Engineering Intern | October 2021-March 2022</h2>" +
  "<ul>" +
  "<li>Created JS bots with Testim to automate bill-payment transactions between payees and payers</li>" +
  "<li>Additional tweaks and further development done in Selenium</li>" +
  "<li>Worked in an Agile environment with ticketing and project tracking using Jira Software</li>" +
  "</ul>";

experienceMap.set("cigna", cignaExperience);
experienceMap.set("cais", caisExperience);
experienceMap.set("syntiant", syntiantExperience);
experienceMap.set("papaya", papayaExperience);

// displaying experience description
function displayDescription(company, element) {
  var descriptionElement = $("#experience-descriptions");
  descriptionElement.html(experienceMap.get(company));
}

// showing personal project descriptions via on-screen pop-up
function showPopup(company) {

  const popup = $(`#popup-${company}`);
  popup.show();
}

// // hiding personal project descriptions
function hidePopup(company) {
  const popup = $(`#popup-${company}`);
  popup.hide();
}

// jumping mechanism
function divJump(element) {
  element.style.animation = 'jump 0.5s';
  setTimeout(function() {
    element.style.animation = '';
  }, 500);
  console.log("jumped!", element);
}

// smooth scrolling for anchor links
$(document).ready(function () {
  $("a.scroll").on("click", function (event) {
    // getting current url and preventing immediate jump to next
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      // actual scroll implementation
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // updating the url
          window.location.hash = hash;
        }
      );
    }
  });
});

// container flip mechanism
function flipContainer(container) {
  $(container).find('.flipper').toggleClass('flipped');
}
