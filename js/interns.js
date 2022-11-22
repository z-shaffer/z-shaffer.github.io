/* --Example profile-- 
var photo1 = "intern0.png"; -- Name of photo in team folder
var name1 = "Intern McIntern";
var major1 = "Applied Mathematics";
var bio1 = "Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.";
*/

//Employee One
var photo1 = "intern1.png";
var name1 = "Zachary Shaffer";
var major1 = "Computer Science";
var bio1 = "Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.";

//Employee Two
var photo2 = "intern2.jpg";
var name2 = "Ethan Rosenbaum";
var major2 = "Applied Physics";
var bio2 = "Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.";

//Employee Three
var photo3 = "intern3.png";
var name3 = "You?";
var major3 = "Future Intern";
var bio3 = "Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.";

const interns = document.getElementById('interns');

interns.innerHTML = 
'<!-- Begin Item 1 Body -->' + 
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">' +
    '<div class="services-box leftReveal">' +
        '<!-- Intern Photo -->' +
        '<img src="images/team/'+ photo1 +'" style="height:176px;width:176px;margin:0px 60px">' +
        '<!-- Intern Name -->' +
        '<h3 class="service-name">'+ name1 +'</h3>' +
        '<!-- Intern Major -->' +
        '<h4 class="service-name">'+ major1 +'</h4>' +
        '<!-- Intern Description -->' +
        '<p class="text-small">'+ bio1 +'</p>' +
        '<button type="button" class="btn btn-default mt10" data-toggle="modal" data-target="#item1-services">Read More</button>' +
    '</div>' +
'</div><!-- /.column -->' +
'<!-- End Item 1 Body -->' +
'<!-- Item 1 Modal -->' +
'<div class="modal fade" id="item1-services" tabindex="-1" role="dialog">' +
    '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<!-- Modal Header -->' +
            '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="ion-ios-close-empty"></span>' +
                '</button>' +
            '<!-- Modal Photo -->' +
                '<img src="images/team/'+ photo1 +'">' +
            '<!-- Modal Name -->' +
                '<h4 class="service-title">'+ name1 +'</h4>' +
            '</div>' +
        '<!-- Begin Modal Body -->' +
            '<div class="modal-body">' +
                '<p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Why us</h5>' +
                '<p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Focusing</h5>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Professionals</h5>' +
               '<p class="no-margin-bottom">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>' +
            '</div>' +
        '<!-- End Modal Body -->' +
        '</div><!-- /.modal-content -->' +
    '</div><!-- /.modal-dialog -->' +
'</div><!-- /.modal -->' +
'<!-- End Item 1 -->' +
'<!-- Begin Item 2 Body -->' + 
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30-xs">' +
    '<div class="services-box topReveal">' +
        '<!-- Intern Photo -->' +
        '<img src="images/team/'+ photo2 +'" style="height:176px;width:176px;margin:0px 60px">' +
        '<!-- Intern Name -->' +
        '<h3 class="service-name">'+ name2 +'</h3>' +
        '<!-- Intern Major -->' +
        '<h4 class="service-name">'+ major2 +'</h4>' +
        '<!-- Intern Description -->' +
        '<p class="text-small">'+ bio2 +'</p>' +
        '<button type="button" class="btn btn-default mt10" data-toggle="modal" data-target="#item2-services">Read More</button>' +
    '</div>' +
'</div><!-- /.column -->' +
'<!-- End Item 2 Body -->' +
'<!-- Item 2 Modal -->' +
'<div class="modal fade" id="item2-services" tabindex="-1" role="dialog">' +
    '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<!-- Modal Header -->' +
            '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="ion-ios-close-empty"></span>' +
                '</button>' +
            '<!-- Modal Photo -->' +
                '<img src="images/team/'+ photo2 +'">' +
            '<!-- Modal Name -->' +
                '<h4 class="service-title">'+ name2 +'</h4>' +
            '</div>' +
        '<!-- Begin Modal Body -->' +
            '<div class="modal-body">' +
                '<p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Why us</h5>' +
                '<p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Focusing</h5>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Professionals</h5>' +
               '<p class="no-margin-bottom">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>' +
            '</div>' +
        '<!-- End Item 2 Modal Body -->' +
        '</div><!-- /.modal-content -->' +
    '</div><!-- /.modal-dialog -->' +
'</div><!-- /.modal -->' +
'<!-- End Item 2 -->' +
'<!-- Begin Item 3 Body -->' + 
'<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30-sm mt30-xs">' +
    '<div class="services-box rightReveal">' +
        '<!-- Intern Photo -->' +
        '<img src="images/team/'+ photo3 +'" style="height:176px;width:176px;margin:0px 60px">' +
        '<!-- Intern Name -->' +
        '<h3 class="service-name">'+ name3 +'</h3>' +
        '<!-- Intern Major -->' +
        '<h4 class="service-name">'+ major3 +'</h4>' +
        '<!-- Intern Description -->' +
        '<p class="text-small">'+ bio3 +'</p>' +
        '<button type="button" class="btn btn-default mt10" data-toggle="modal" data-target="#item3-services">Read More</button>' +
    '</div>' +
'</div><!-- /.column -->' +
'<!-- End Item 3 Body -->' +
'<!-- Item 3 Modal -->' +
'<div class="modal fade" id="item3-services" tabindex="-1" role="dialog">' +
    '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<!-- Modal Header -->' +
            '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="ion-ios-close-empty"></span>' +
                '</button>' +
            '<!-- Modal Photo -->' +
                '<img src="images/team/'+ photo3 +'">' +
            '<!-- Modal Name -->' +
                '<h4 class="service-title">'+ name3 +'</h4>' +
            '</div>' +
        '<!-- Begin Modal Body -->' +
            '<div class="modal-body">' +
                '<p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Why us</h5>' +
                '<p>Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Focusing</h5>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>' +
                '<h5 class="heading-1 modal-heading mb20">Professionals</h5>' +
               '<p class="no-margin-bottom">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>' +
            '</div>' +
        '<!-- End Item 3 Modal Body -->' +
        '</div><!-- /.modal-content -->' +
    '</div><!-- /.modal-dialog -->' +
'</div><!-- /.modal -->' +
'<!-- End Item 3 -->';

