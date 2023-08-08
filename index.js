// for experience descriptions
const experienceMap = new Map();
var cignaExperience =
  "<h1>The Cigna Group</h1>" +
  "<h2>Full Stack Engineering Intern | May 2023-Present</h2>" +
  "<ul>" +
  "<li>Authoring data workflows in Apache Airflow, developing DAGs in a docker-compose environment to automate script execution through a variety of polling, scheduled, and instance-driven operators.</li>" +
  "<li>Back-end lead of 4, developing a cloud-native microservice with AWS API Gateway, Lambda functions with Node.js, and AWS Neptune to poll S3 buckets for file updates, transform FHIR-formatted JSON objects to Gremlin CSV files, and push transformed data to Neptune for database population.</li>" +
  "<li>Contributing to React front-end logic for form creation and client-server communication, with the bulk of logic written in TypeScript. </li>" +
  "</ul>";
var caisExperience =
  "<h1>USC Center for AI in Society</h1>" +
  "<h2>Undergraduate Research Assistant | August 2022-Present</h2>" +
  "<ul>" +
  "<li>Running training and validation data on the megaSDM R package to simulate and predict 12 ESA-listed species migration patterns as impacted by climate change</li>" +
  "<li>Demonstrated findings at an undergraduate research symposium, highlighting the high risk-level of Appalachian species extinction over the next 80 years</li>" +
  "<li>Adding functionality to the program through increasing valid parameter arguments, improving file output protocols, and deploying the program on our High Performance Computing cluster for large load requests </li>" +
  "</ul>";
var syntiantExperience =
  "<h1>Syntiant Corporation</h1>" +
  "<h2>Engineering Intern | July 2022-September 2022</h2>" +
  "<ul>" +
  "<li>Created a Python-based CLI application with Marshmallow, Boto3, Pandas, Keras, PyMongo, and yt-dlp to scrape video/audio content for voice recognition model training and populate a comprehensive NoSQL database with metadata and S3 pointers</li>" +
  "<li>Demoed the program to senior leadership and the broader engineering team, with feedback as a basis to eventually implement the tool at an enterprise level</li>" +
  "<li>Wrote dependency and CI/CD pipelines in Jenkins, leveraging Git hooks for automated build and test processes</li>" +
  "</ul>";
var papayaExperience =
  "<h1>Papaya Payments</h1>" +
  "<h2>Web Automation Engineering Intern | October 2021-March 2022</h2>" +
  "<ul>" +
  "<li>Created JS bots with Testim to automate bill-payment transactions between payees and payers, enabling secure transactions from simple photos of bills</li>" +
  "<li>Additional tweaks and further development done in Selenium, ultimately resulting in a 12% decrease in manual labor hours due to the automation of 30 client websites</li>" +
  "<li>Worked in an Agile environment with ticketing and project tracking using Jira Software, attending daily standups and participating in code reviews, backlog refinement, and sprint planning</li>" +
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
  /* console.log("jumped!", element); */
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
