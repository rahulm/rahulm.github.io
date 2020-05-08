var experienceList = [
  {
    "image" : {
      "src" : "resources/images/instabase_icon.svg",
      "alt" : "Instabase"
      },
    "line1" : "Instabase",
    "line2" : "Software Engineering Intern",
    "line3" : "January 2020 - March 2020",
    "textarea" : `Developed and deployed multiple features to the Instabase platform for customer use.`,
    "links" : [
      "https://about.instabase.com/"
    ]
  },
  {
    "image" : {
      "src" : "resources/images/flogo_RGB_HEX-1024.png",
      "alt" : "Facebook"
      },
    "line1" : "Facebook",
    "line2" : "Software Engineering Intern",
    "line3" : "June 2018 - September 2018",
    "textarea" : `- Backend development on storage/databases team for Messenger Infrastructure.
- Developed internal tool for recovery of content in disaster scenarios.`
  },
  {
    "image" : {
      "src" : "resources/images/builducla.png",
      "alt" : "BuildUCLA Collections Lab"
      },
    "line1" : "BuildUCLA Collections Lab",
    "line2" : "Student Researcher",
    "line3" : "January 2018 - June 2018",
    "textarea" : `- Trained models and developed computer vision pipeline to detect annotations/marginalia, of interest to researchers, in digital copies of old books and manuscripts.
- Performed preprocessing and sampling on dataset of digitized books from the UCLA library.
- Implemented Convolutional Neural Networks (CNNs) in PyTorch to perform object recognition and detection tasks on books.`,
    "links" : [
      "https://github.com/collectionslab/Omniscribe"
    ]
  },
  {
    "image" : {
      "src" : "resources/images/google_logo.png",
      "alt" : "Google"
      },
    "line1" : "Google",
    "line2" : "Software Engineering Intern",
    "line3" : "June 2017 - September 2017",
    "textarea" : `- Analyzed Android Instant App memory footprints and visibility, among other
factors, to determine causes of instant app crashes in low memory situations.
- Implemented instant app process management system in Java to gracefully
manage life cycles of Android Instant Apps and ensure reliably smooth user
experience.`
  },
  {
    "image" : {
      "src" : "resources/images/ucla_health.png",
      "alt" : "UCLA Health"
      },
    "line1" : "SARP Lab - UCLA Health",
    "line2" : "Undergrad CS Researcher",
    "line3" : "April 2016 - September 2016",
    "textarea" : `- Use of smart devices in allowing physicians to remotely monitor patient health and activity, primarily in the geriatric population.
- Trained machine learning algorithms (using scikit-learn in Python) to predict positions and activities of patients from raw sensor data, improving precision and recall on poorly performing activities by nearly 2.5 fold.`,
    "links" : [
      "http://risksciences.ucla.edu/smart-health/",
      "http://risksciences.ucla.edu/current-projects/2016/8/8/sarp-sensing-at-risk-populations"
    ]
  },
  {
    "image" : {
      "src" : "resources/images/playfull.png",
      "alt" : "PlayFull"
      },
    "line1" : "PlayFull",
    "line2" : "Lead Android Developer",
    "line3" : "October 2014 - September 2015",
    "textarea" : `- Worked with local startup (~6 members) as lead Android developer building a service to reward users playing games on the PlayFull application with discounts at restaurants.
- Fully redesigned and developed new version of PlayFull Android application from ground up.
- Built a Snake game variant within the PlayFull Android application.
- Developed in-app features increasing Android installs from less than 100 to over 500.
- Member of the PlayFull LA Hacks 2015 Sponsor Team, providing major catering for all hackers participating.`,
    "links" : [
      "https://playfull.com"
    ]
  }
];

var projectList = [
  {
    "image" : {
      "src" : "resources/images/style_transfer_circle.png",
      "alt" : "Style Transfer Animation Example"
      },
    "line1" : "Style Transfer",
    "line2" : "TensorFlow 2.0",
    "line3" : "October 2019",
    "textarea" :
    `- Basic neural style transfer implementation in Python using TensorFlow 2.0 and Keras.
    - Applies the style of a style image to a chosen content image by continuing backpropagation to the neural network input (synthesized image).
    - Optimizes a custom loss function from Gatys et al, along with a total variation loss to decrease local noise.
    - Command line support for vgg16 and vgg19 networks, and loss weight configuration.
    - Inspiration taken from <i>A Neural Algorithm of Style</i> by Gatys et al.`,
    "links" : [
      "https://github.com/rahulm/style-transfer"
    ]
  },
  {
    "image" : {
      "src" : "resources/images/deep_learning.svg",
      "alt" : "Deep Learning"
      },
    "line1" : "Analysis of VAEs for Reconstructive and Generative Tasks",
    "line2" : "ECE232AS Final Project",
    "line3" : "March 2019",
    "textarea" : `- Development (in PyTorch) and comparison of Autoencoders (AEs) and Variational Autoencoders (VAEs) as generative models on the MNIST and Eigenfaces datasets.`,
    "links" : [
      "https://github.com/rahulm/ee239as-project"
    ]
  },
  {
    "image" : {
      "src" : "resources/images/stereo_camera_512x512.png",
      "alt" : "Stereo Camera"
      },
    "line1" : "FPGA Depth Perception",
    "line2" : "CS 152B Final Project",
    "line3" : "October 2017 - December 2017",
    "textarea" : `- Custom final project designed and developed during UCLA's CS 152B course.
- As an initial project in basic computer vision, experimented with depth perception on Field Programmable Gate Array (FPGA) with stereo camera peripheral.
- Performed basic depth perception with low resolution and low quality camera input on limited hardware from FPGA.
- Optimized Sum of Absolute Differences (SAD) algorithm to run on FPGA.

Credit also goes to my two partners:
- Jeff Au-Yeung
- Naing Min`,
    "links" : [
      "https://github.com/rahulm/depth-perception-fpga"
    ]
  },
  {
    "image" : {
      "src" : "resources/images/location-512.png",
      "alt" : "Location Pin"
      },
    "line1" : "Indoor Positioning through Machine Learning on WiFi Fingerprints",
    "line2" : "Research Paper - IPIN 2017",
    "line3" : "February 2017 - September 2017",
    "textarea" : `- Trained machine learning algorithm on ambient WiFi RSSI values to achieve F-measures approaching and far above 0.9 in university and home environments.
- Integrated model into Android application for live training and prediction.
- Paper written with two partners accepted into Indoor Positioning and Indoor Navigation (IPIN) 2017 conference in WIP division.`,
    "links" : [
      "https://github.com/arjun372/Indoor-WiFi-Localizer",
      "http://www.ipin2017.org/ipinpapers/224/224.pdf"
    ]
  },
  {
    "image" : {
      "src" : "resources/images/knock-200x200.png",
      "alt" : "Door Knock"
      },
    "line1" : "Android Knock Unlock",
    "line2" : "EE3 Final Project",
    "line3" : "April 2016 - June 2016",
    "textarea" : `- Developed a door unlocking system triggered by a secret knock code set by the user.
- Gained experience in basic circuit design (breadboard-based) and interfacing of microcontrollers with peripherals (such as buttons and motors).
- Use of Arduino 101 to store and detect the knock sequence from on-board accelerometer input, and to control the entire system.`,
    "links" : [
      "https://youtu.be/mg_SPeKW2Tc"
    ]
  },
  {
    "image" : {
      "src" : "resources/images/porfavor_logo.png",
      "alt" : "PorFavor"
      },
    "line1" : "PorFavor",
    "line2" : "LAHacks 2016 Project",
    "line3" : "April 2016",
    "textarea" : `- Developed an app/service to connect people in need of favors with those in the general public who can help them.
- Manages transactions for favor requests and bids among all parties involved.
- Basic use of Ionic framework, in addition to a back end infrastructure, to simultaneously build apps for multiple platforms.`,
    "links" : [
      "http://devpost.com/software/porfavor"
    ]
  },
  {
    "image" : {
      "src" : "resources/images/hacktech_2016-600x600.png",
      "alt" : "Hacktech 2016"
      },
    "line1" : "PoliSense",
    "line2" : "Hacktech (Caltech Hackathon) 2016 Project",
    "line3" : "February 2016",
    "textarea" : `- Project completed and submitted for the 2016 Hacktech competition (Caltech Hackathon).
- Created a web app to gauge and compare the public sentiment (from Twitter) to the political candidates of the 2016 U.S. Presidential Race, and visualize how those feelings have changed over time due to debates, news stories, etc.
- Utilized Microsoft Azure services (cloud storage, web hosting, machine learning server).
- Learned basic front-end development using Node.js and multiple libraries using the npm (node.js package manager).`,
    "links" : [
      "https://github.com/andrew-kennedy/hacktech-2016",
      "http://devpost.com/software/hacktech-2016"
    ]
  },
  {
    "image" : {
      "src" : "resources/images/UCLADining_app_icon_high_res.png",
      "alt" : "UCLA Dining App"
      },
    "line1" : "UCLA Dining App",
    "line2" : "Android Application",
    "line3" : "August 2015",
    "textarea" : `I developed a simple and easy to use Android app that solved a problem I encountered every day; I wanted a better and faster way to access UCLA dining menus. So, I created a library that parsed one of the UCLA dining menu websites and created an Android app that displayed dining information in a clean and responsive UI.`
  },
  {
    "image" : {
      "src" : "resources/images/googlePlayIcon-Amaze.png",
      "alt" : "amaze"
      },
    "line1" : "amaze",
    "line2" : "Android Game",
    "line3" : "July 2014 - August 2014",
    "textarea" : `- Learned Android development and basic game design principles using the libGDX game engine.
- Designed and developed a simple new game from scratch, publishing a complete game on Google Play.`
  }
];

var dataDict = {
  "experience" : experienceList,
  "projects" : projectList,
}
