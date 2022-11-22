/* --Example profile-- 
var photo1 = "member0.png"; -- Name of photo in team folder
var name1 = "Dr. Doctor Doctor";
var position1 = "Software Engineer";
var bio1 = "Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.";
*/

//Employee One
var photo1 = "member1.png";
var name1 = "Dr. Zachary Russell";
var position1 = "Director of Research";
var bio1 = "Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.";

//Employee Two
var photo2 = "member2.png";
var name2 = "Dr. Mathieu Therezien";
var position2 = "Research Scientist";
var bio2 = "Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.";

//Employee Three
var photo3 = "member3.png";
var name3 = "Dr. Tomas McIntee";
var position3 = "Mathematician";
var bio3 = "Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.";

const employees = document.getElementById('employees');

employees.innerHTML = 
'<!-- Begin Item 1 Face --> ' + 
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">' +
    '<div class="services-box leftReveal">' +
        '<img src="images/team/' + photo1 + '" style="margin:0px 60px">' +
        '<!-- Item 1 Title -->' +
        '<h3 class="service-name">'+ name1 +'</h3>' +
        '<!-- Item 1 Subtitle -->' +
        '<h4 class="service-name">'+ position1 +'</h4>' +
        '<!-- Item 1 Face Description -->' +
        '<p class="text-small">'+ bio1 +'</p>' +
        '<button type="button" class="btn btn-default mt10" data-toggle="modal" data-target="#item1-services">Read More</button>' +
    '</div>' +
'</div><!-- /.column -->' +
'<!-- End Item 1 Face -->' +
'<!-- Begin Item 1 Modal -->' +
'<div class="modal fade" id="item1-services" tabindex="-1" role="dialog">' +
    '<div class="modal-dialog">' +
        '<div class="modal-content">' + 
        '<!-- Modal 1 Header -->' +
            '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="ion-ios-close-empty"></span>' +
                '</button>' +
                '<img src="images/team/'+ photo1 +'">' +
            '<!-- Modal 1 Title -->' +
                '<h4 class="service-title">'+ name1 +'</h4>' +
            '</div>' +
        '<!-- Modal 1 Body -->' +
            '<div class="modal-body">' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Why us</h5>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Focusing</h5>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Professionals</h5>' +
                '<p class="no-margin-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' +
            '</div>' +
        '</div><!-- /.modal-content -->' +
    '</div><!-- /.modal-dialog -->' +
'</div><!-- /.modal -->' +
'<!-- End Item 1 Modal -->' +
'<!-- Begin Item 2 Face -->' +
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30-xs">' +
    '<div class="services-box topReveal">' +
        '<!--<span class="services-badge badge">New</span>-->' +
        '<img src="images/team/'+ photo2 +'" style="width:176px;height:176px;margin:0px 60px">' +
        '<!-- Item 2 Title -->' +
        '<h3 class="service-name">'+ name2 +'</h3>' +
        '<!-- Item 2 Subtitle -->' +
        '<h4 class="service-name">'+ position2 +'</h4>' +
        '<!-- Item 2 Description -->' +
        '<p class="text-small">'+ bio2 +'</p>' +
        '<button type="button" class="btn btn-default mt10" data-toggle="modal" data-target="#item2-services">Read More</button>' +
    '</div>' +
'</div><!-- /.column -->' +
'<!-- Begin Item 2 Modal -->' +
'<div class="modal fade" id="item2-services" tabindex="-1" role="dialog">' +
    '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<!-- Modal 2 Header -->' +
            '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="ion-ios-close-empty"></span>' +
                '</button>' +
                '<img src="images/team/'+ photo2 +'">' +
            '<!-- Modal 2 Title -->' + 
                '<h4 class="service-title">'+ name2 +'</h4>' +
            '</div>' +
        '<!-- Modal 2 Body -->' +
            '<div class="modal-body">' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Why us</h5>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' +
                '<h5 class="heading-1 modal-heading mb20">Focusing</h5>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Professionals</h5>' +
                '<p class="no-margin-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' +
            '</div>' +
        '</div><!-- /.modal-content -->' +
    '</div><!-- /.modal-dialog -->' +
'</div><!-- /.modal -->' +
'<!-- End Item 2 Modal -->' +
'<!-- Begin Item 3 Face -->' +
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30-sm mt30-xs">' +
    '<div class="services-box rightReveal">' +
        '<img src="images/team/'+ photo3 +'" style="width:176px;height:176px;margin:0px 60px">' +
        '<!-- Item 3 Title -->' +
        '<h3 class="service-name">'+ name3 +'</h3>' +
        '<!-- Item 3 Subtitle -->' +
        '<h4 class="service-name">'+ position3 +'</h4>' + 
        '<!-- Item 3 Description -->' +
        '<p class="text-small">'+ bio3 +'</p>' +
        '<button type="button" class="btn btn-default mt10" data-toggle="modal" data-target="#item3-services">Read More</button>' +
    '</div>' +
'</div><!-- /.column -->' +
'<!-- End Item 2 Face -->' +
'<!-- Begin Item 3 Modal -->' +
'<div class="modal fade" id="item3-services" tabindex="-1" role="dialog">' +
    '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<!-- Modal 3 header -->' +
            '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="ion-ios-close-empty"></span>' +
                '</button>' +
                '<img src="images/team/'+ photo3 +'">' +
            '<!-- Modal 3 Title -->' +
                '<h4 class="service-title">'+ name3 +'</h4>' +
            '</div>' +
        '<!-- Modal 3 Description -->' +
            '<div class="modal-body">' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' +
                '<h5 class="heading-1 modal-heading mb20">Why us</h5>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' +
                '<h5 class="heading-1 modal-heading mb20">Focusing</h5>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Professionals</h5>'+
                '<p class="no-margin-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' +
            '</div>' +
        '</div><!-- /.modal-content -->' +
    '</div><!-- /.modal-dialog -->' +
'</div><!-- /.modal -->' +
'<!-- End Modal 3 -->';
