/* --Example publication-- (Use <br> if a string gets too long) 
var tags1 = "Russell Therezien McIntee";
var authors1 = "Dr. Zachary Russell, Dr. Mattheu Therezien, Dr. Tomas McIntee <br> Dr. Doctor Doctor, Dr. Doctor Doctor";
var url1 = "https://www.google.com/";
var imgUrl1 = "https://www.google.com/picture.jpg" -- Images must be 800 x 495 px, can be a URL or local;
var shortTitle1 = "Inverse Design Tool";
var title1 = "Inverse Design Tool for<br>Ion Optical Devices using the<br>Adjoint Variable Method";
*/

//Publication One
var tags1 = "Russell Therezien McIntee";
var authors1 = "EL Principe, JJ Hagen, BW Kempshall, KE Scammon, Z Russell,<br>M Therezien, T McIntee, S DiDona, A Stevens";
var url1 = "https://www.cambridge.org/core/journals/microscopy-and-microanalysis/article/turnkey-compressed-sensing-system-for-electron-microscopy/586F541A4D87D0EAE2C7353E3A99BBCD";
var imgUrl1 = "./images/work/1.jpg";
var shortTitle1 = "Turn-Key Compressed Sensing System";
var title1 = "Turn-Key Compressed Sensing System for Electron Microscopy";

//Publication two
var tags2 = "Russell Therezien McIntee";
var authors2 = "Tomas J McIntee, Mathieu Therezien, Zachary E Russell";
var url2 = "https://www.cambridge.org/core/journals/microscopy-and-microanalysis/article/development-of-a-flexible-ensemble-classification-system-for-microscopy/AC3901CFCD31EDF80CBB40D74F83DC5D";
var imgUrl2 = "./images/work/1.jpg";
var shortTitle2 = "Flexible Ensemble Classification System";
var title2 = "Development of a Flexible Ensemble Classification System for Microscopy";

//Publication three
var tags3 = "Russell Therezien McIntee";
var authors3 = "Zachary E Russell, Mathieu Therezien, Tomas J McIntee,<br>Shane T DiDona, Jeffrey J Haggen, Edward L Principe";
var url3 = "https://www.cambridge.org/core/journals/microscopy-and-microanalysis/article/fast-automatic-point-spread-function-deconvolution-using-edge-detection/83E217E9A99561D3A87F8419FBF8926C";
var imgUrl3 = "./images/work/1.jpg";
var shortTitle3 = "Fast Automatic Point Spread Function Deconvolution";
var title3 = "Fast Automatic Point Spread Function Deconvolution Using Edge Detection";

//Publication four
var tags4 = "Russell Therezien McIntee";
var authors4 = "Mathieu Therezien, Tomas J McIntee, Zachary E Russell";
var url4 = "https://www.cambridge.org/core/journals/microscopy-and-microanalysis/article/software-package-for-efficient-creation-of-training-data-for-machine-learning-classifiers-from-micrographs/EF5243E104DC0B33242C582545368CC7";
var imgUrl4 = "./images/work/1.jpg";
var shortTitle4 = "Efficient Creation of Training Data for Machine Learning Classifiers";
var title4 = "Software Package for Efficient Creation of Training Data for Machine Learning Classifiers from Micrographs";

//Publication five
var tags5 = "Russell";
var authors5 = "Zach Russell, Michael Gehm, Jeffrey T Glass, Shane Di Dona,<br> Evan Chen, Charles Parker, Jason Amsden, David Brady";
var url5 = "https://patents.google.com/patent/US11081331B2/en";
var imgUrl5 = "./images/work/5.jpg";
var shortTitle5 = "Segmented electrodes and associated methods";
var title5 = "Mass spectrometers having segmented electrodes and associated methods";

//Publication six
var tags6 = "Russell";
var authors6 = "Shane DiDona, Zachary Russell, Jason Amsden, Charles Parker,<br> Jeffrey Glass, Michael Gehm";
var url6 = "https://sciencedirect.com/science/article/abs/pii/S138738062030066X";
var imgUrl6 = "./images/work/6.jpg";
var shortTitle6 = "Novel sector mass spectrograph design";
var title6 = "A novel sector mass spectrograph design for<br>high-order coded aperture Mass Spectrometry with stigmatic aberration correction";

//Publication seven
var tags7 = "McIntee";
var authors7 = "Tomas J McIntee, Donald G Saari";
var url7 = "https://www.sciencedirect.com/science/article/abs/pii/S016548961730029X";
var imgUrl7 = "./images/work/7.jpg";
var shortTitle7 = "Voting outcomes with generalized IAC probabilities";
var title7 = "Likelihood of voting outcomes with generalized IAC probabilities";

//Publication eight
var tags8 = "Therezien";
var authors8 = "Benjamin P Espinasse, Nicholas K Geitner, Ariette Schierz,<br>Mathieu Therezien, Curtis J Richardson, Gregory V Lowry,<br>Lee Ferguson, Mark R Wiesner";
var url8 = "https://pubs.acs.org/doi/abs/10.1021/acs.est.7b06142";
var imgUrl8 = "./images/work/8.jpg";
var shortTitle8 = "Engineered Nanoparticles in a Complex Aquatic Ecosystem";
var title8 = "Comparative Persistence of Engineered Nanoparticles in a Complex Aquatic Ecosystem";

//Publication nine
var tags9 = "Russell";
var authors9 = "David MW Landry, William Kim, Jason J Amsden, Shane T Di Dona,<br>Heeju Choi, Lori Haley, Zachary E Russell, Charles B Parker,<br>Jeffrey T Glass, Michael E Gehm";
var url9 = "https://link.springer.com/article/10.1007/s13361-017-1827-4";
var imgUrl9 = "./images/work/9.jpg";
var shortTitle9 = "Effects of Magnetic and Electric Field Uniformity on Coded Aperture Imaging Quality";
var title9 = "Effects of Magnetic and Electric Field Uniformity on Coded Aperture Imaging Quality in a Cycloidal Mass Analyzer";

const publications = document.getElementById('thework');

publications.innerHTML = 
'<!-- Begin Item 1 -->' +
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-box no-padding mix ' + tags1 + '" data-my-order="3">' +
    '<!-- Publication Cover -->' +
'<div class="portfolio-image-holder"><img src="' + imgUrl1 + '" alt="1" class="img-responsive portfolio-image"></div>' +
'<span class="portfolio-badge badge">' + authors1 + '</span>' +
    '<!-- Hover Info -->' +
'<span class="portfolio-hover">' +
    '<span>' + 
        '<!-- Item Publication -->' +
        '<a href="' + url1 + '" target="_blank">' +
            '<span class="portfolio-links"><span class="ion-ios-arrow-right portfolio-links-icons"></span></span>' +
        '</a>' +
        '<!-- Cover Title -->' +
        '<a href="' + imgUrl1 + '" class="zoom" title="' + shortTitle1 + '">' +
            '<span class="portfolio-links"><span class="ion-arrow-expand portfolio-links-icons"></span></span>' + 
        '</a>' +
        '<!-- Publication Title -->' +
        '<span class="project-title no-margin-bottom mt10">' + title1 + '</span>' +
    '</span>' +
'</span>' +
'</div><!-- /.column -->' +
'<!-- End Item 1 -->' +
'<!-- Begin Item 2 -->' +
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-box no-padding mix ' + tags2 + '" data-my-order="3">' +
    '<!-- Publication Cover -->' +
'<div class="portfolio-image-holder"><img src="' + imgUrl2 + '" alt="1" class="img-responsive portfolio-image"></div>' +
'<span class="portfolio-badge badge">' + authors2 + '</span>' +
    '<!-- Hover Info -->' +
'<span class="portfolio-hover">' +
    '<span>' + 
        '<!-- Item Publication -->' +
        '<a href="' + url2 + '" target="_blank">' +
            '<span class="portfolio-links"><span class="ion-ios-arrow-right portfolio-links-icons"></span></span>' +
        '</a>' +
        '<!-- Cover Title -->' +
        '<a href="' + imgUrl2 + '" class="zoom" title="' + shortTitle2 + '">' +
            '<span class="portfolio-links"><span class="ion-arrow-expand portfolio-links-icons"></span></span>' + 
        '</a>' +
        '<!-- Publication Title -->' +
        '<span class="project-title no-margin-bottom mt10">' + title2 + '</span>' +
    '</span>' +
'</span>' +
'</div><!-- /.column -->' +
'<!-- End Item 2 -->' +
'<!-- Begin Item 3 -->' +
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-box no-padding mix ' + tags3 + '" data-my-order="3">' +
    '<!-- Publication Cover -->' +
'<div class="portfolio-image-holder"><img src="' + imgUrl3 + '" alt="1" class="img-responsive portfolio-image"></div>' +
'<span class="portfolio-badge badge">' + authors3 + '</span>' +
    '<!-- Hover Info -->' +
'<span class="portfolio-hover">' +
    '<span>' + 
        '<!-- Item Publication -->' +
        '<a href="' + url3 + '" target="_blank">' +
            '<span class="portfolio-links"><span class="ion-ios-arrow-right portfolio-links-icons"></span></span>' +
        '</a>' +
        '<!-- Cover Title -->' +
        '<a href="' + imgUrl3 + '" class="zoom" title="' + shortTitle3 + '">' +
            '<span class="portfolio-links"><span class="ion-arrow-expand portfolio-links-icons"></span></span>' + 
        '</a>' +
        '<!-- Publication Title -->' +
        '<span class="project-title no-margin-bottom mt10">' + title3 + '</span>' +
    '</span>' +
'</span>' +
'</div><!-- /.column -->' +
'<!-- End Item 3 -->' +
'<!-- Begin Item 4 -->' +
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-box no-padding mix ' + tags4 + '" data-my-order="3">' +
    '<!-- Publication Cover -->' +
'<div class="portfolio-image-holder"><img src="' + imgUrl4 + '" alt="1" class="img-responsive portfolio-image"></div>' +
'<span class="portfolio-badge badge">' + authors4 + '</span>' +
    '<!-- Hover Info -->' +
'<span class="portfolio-hover">' +
    '<span>' + 
        '<!-- Item Publication -->' +
        '<a href="' + url4 + '" target="_blank">' +
            '<span class="portfolio-links"><span class="ion-ios-arrow-right portfolio-links-icons"></span></span>' +
        '</a>' +
        '<!-- Cover Title -->' +
        '<a href="' + imgUrl4 + '" class="zoom" title="' + shortTitle4 + '">' +
            '<span class="portfolio-links"><span class="ion-arrow-expand portfolio-links-icons"></span></span>' + 
        '</a>' +
        '<!-- Publication Title -->' +
        '<span class="project-title no-margin-bottom mt10">' + title4 + '</span>' +
    '</span>' +
'</span>' +
'</div><!-- /.column -->' +
'<!-- End Item 4 -->' +
'<!-- Begin Item 5 -->' +
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-box no-padding mix ' + tags5 + '" data-my-order="3">' +
    '<!-- Publication Cover -->' +
'<div class="portfolio-image-holder"><img src="' + imgUrl5 + '" alt="1" class="img-responsive portfolio-image"></div>' +
'<span class="portfolio-badge badge">' + authors5 + '</span>' +
    '<!-- Hover Info -->' +
'<span class="portfolio-hover">' +
    '<span>' + 
        '<!-- Item Publication -->' +
        '<a href="' + url5 + '" target="_blank">' +
            '<span class="portfolio-links"><span class="ion-ios-arrow-right portfolio-links-icons"></span></span>' +
        '</a>' +
        '<!-- Cover Title -->' +
        '<a href="' + imgUrl5 + '" class="zoom" title="' + shortTitle5 + '">' +
            '<span class="portfolio-links"><span class="ion-arrow-expand portfolio-links-icons"></span></span>' + 
        '</a>' +
        '<!-- Publication Title -->' +
        '<span class="project-title no-margin-bottom mt10">' + title5 + '</span>' +
    '</span>' +
'</span>' +
'</div><!-- /.column -->' +
'<!-- End Item 5 -->' +
'<!-- Begin Item 6 -->' +
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-box no-padding mix ' + tags6 + '" data-my-order="3">' +
    '<!-- Publication Cover -->' +
'<div class="portfolio-image-holder"><img src="' + imgUrl6 + '" alt="1" class="img-responsive portfolio-image"></div>' +
'<span class="portfolio-badge badge">' + authors6 + '</span>' +
    '<!-- Hover Info -->' +
'<span class="portfolio-hover">' +
    '<span>' + 
        '<!-- Item Publication -->' +
        '<a href="' + url6 + '" target="_blank">' +
            '<span class="portfolio-links"><span class="ion-ios-arrow-right portfolio-links-icons"></span></span>' +
        '</a>' +
        '<!-- Cover Title -->' +
        '<a href="' + imgUrl6 + '" class="zoom" title="' + shortTitle6 + '">' +
            '<span class="portfolio-links"><span class="ion-arrow-expand portfolio-links-icons"></span></span>' + 
        '</a>' +
        '<!-- Publication Title -->' +
        '<span class="project-title no-margin-bottom mt10">' + title6 + '</span>' +
    '</span>' +
'</span>' +
'</div><!-- /.column -->' +
'<!-- End Item 6 -->' +
'<!-- Begin Item 7 -->' +
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-box no-padding mix ' + tags7 + '" data-my-order="3">' +
    '<!-- Publication Cover -->' +
'<div class="portfolio-image-holder"><img src="' + imgUrl7 + '" alt="1" class="img-responsive portfolio-image"></div>' +
'<span class="portfolio-badge badge">' + authors7 + '</span>' +
    '<!-- Hover Info -->' +
'<span class="portfolio-hover">' +
    '<span>' + 
        '<!-- Item Publication -->' +
        '<a href="' + url7 + '" target="_blank">' +
            '<span class="portfolio-links"><span class="ion-ios-arrow-right portfolio-links-icons"></span></span>' +
        '</a>' +
        '<!-- Cover Title -->' +
        '<a href="' + imgUrl7 + '" class="zoom" title="' + shortTitle7 + '">' +
            '<span class="portfolio-links"><span class="ion-arrow-expand portfolio-links-icons"></span></span>' + 
        '</a>' +
        '<!-- Publication Title -->' +
        '<span class="project-title no-margin-bottom mt10">' + title7 + '</span>' +
    '</span>' +
'</span>' +
'</div><!-- /.column -->' +
'<!-- End Item 7 -->' +
'<!-- Begin Item 8 -->' +
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-box no-padding mix ' + tags8 + '" data-my-order="3">' +
    '<!-- Publication Cover -->' +
'<div class="portfolio-image-holder"><img src="' + imgUrl8 + '" alt="1" class="img-responsive portfolio-image"></div>' +
'<span class="portfolio-badge badge">' + authors8 + '</span>' +
    '<!-- Hover Info -->' +
'<span class="portfolio-hover">' +
    '<span>' + 
        '<!-- Item Publication -->' +
        '<a href="' + url8 + '" target="_blank">' +
            '<span class="portfolio-links"><span class="ion-ios-arrow-right portfolio-links-icons"></span></span>' +
        '</a>' +
        '<!-- Cover Title -->' +
        '<a href="' + imgUrl8 + '" class="zoom" title="' + shortTitle8 + '">' +
            '<span class="portfolio-links"><span class="ion-arrow-expand portfolio-links-icons"></span></span>' + 
        '</a>' +
        '<!-- Publication Title -->' +
        '<span class="project-title no-margin-bottom mt10">' + title8 + '</span>' +
    '</span>' +
'</span>' +
'</div><!-- /.column -->' +
'<!-- End Item 8 -->' +
'<!-- Begin Item 9 -->' +
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-box no-padding mix ' + tags9 + '" data-my-order="3">' +
    '<!-- Publication Cover -->' +
'<div class="portfolio-image-holder"><img src="' + imgUrl9 + '" alt="1" class="img-responsive portfolio-image"></div>' +
'<span class="portfolio-badge badge">' + authors9 + '</span>' +
    '<!-- Hover Info -->' +
'<span class="portfolio-hover">' +
    '<span>' + 
        '<!-- Item Publication -->' +
        '<a href="' + url9 + '" target="_blank">' +
            '<span class="portfolio-links"><span class="ion-ios-arrow-right portfolio-links-icons"></span></span>' +
        '</a>' +
        '<!-- Cover Title -->' +
        '<a href="' + imgUrl9 + '" class="zoom" title="' + shortTitle9 + '">' +
            '<span class="portfolio-links"><span class="ion-arrow-expand portfolio-links-icons"></span></span>' + 
        '</a>' +
        '<!-- Publication Title -->' +
        '<span class="project-title no-margin-bottom mt10">' + title9 + '</span>' +
    '</span>' +
'</span>' +
'</div><!-- /.column -->' +
'<!-- End Item 9 -->';
