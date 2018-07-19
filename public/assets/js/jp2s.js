
jQuery(document).ready(function () {
    $.get( "/ajax/get-menu", function( data ) {
        $( ".menuloadController" ).html( data );
    });

    $("#frmRegister").validate({
        rules: {
            user_name: "required",
            user_mobile: {required: true,number:true},
            user_pass: {
                required: true,
                minlength: 5
            },
            user_repass: {
                required: true,
                minlength: 5,
                equalTo: "#user_pass"
            },
            user_email: {
                required: true,
                email: true
            }
        },
        messages: {
            user_name: "Nhập họ tên",
            user_mobile: "Nhập lại sô điện thoại ",
            user_pass: {
                required: "Nhập lại mật khẩu",
                minlength: "Mật khẩu phải chứa ít nhất 6 kí tự."
            },
            user_repass: {
                required: "Nhập mật lại",
                minlength: "Mật khẩu phải chứa ít nhất 6 kí tự.",
                equalTo: "Mật khẩu nhập lại không đúng"
            },
            user_email: "Email không hợp lệ"
        }
    });

});

function megaMenuClick() {
    if (jQuery('.mega-menu-category').is(':visible')) {
        jQuery('.mega-menu-category').slideUp();
    } else {
        jQuery('.mega-menu-category').slideDown();
    }


    jQuery("#mobile-menu").mobileMenu({
        MenuWidth: 250,
        SlideSpeed: 300,
        WindowsMaxWidth: 767,
        PagePush: !0,
        FromLeft: !0,
        Overlay: !0,
        CollapseMenu: !0,
        ClassName: "mobile-menu"

    });
    jQuery('.mega-menu-category .nav > li').hover(function() {
        jQuery(this).addClass("active");
        jQuery(this).find('.popup').stop(true, true).fadeIn('slow');
    }, function() {
        jQuery(this).removeClass("active");
        jQuery(this).find('.popup').stop(true, true).fadeOut('slow');
    });


    jQuery('.mega-menu-category .nav > li.view-more').on('click', function(e) {
        if (jQuery('.mega-menu-category .nav > li.more-menu').is(':visible')) {
            jQuery('.mega-menu-category .nav > li.more-menu').stop().slideUp();
            jQuery(this).find('a').text('More category');
        } else {
            jQuery('.mega-menu-category .nav > li.more-menu').stop().slideDown();
            jQuery(this).find('a').text('Close menu');
        }
        e.preventDefault();
    });
}


$(function () {

    setTimeout(function () {

        $('.item_kanji,.jp_txt_main span,.fz2s_35').click(function (b) {
            b.preventDefault();
            $('small',this).remove();
            var text = $.trim($(this).text());
            $('#dialog_abc').modal();
            $('#cach_viet_chu').text(text);
            var num = Math.floor(Math.random() * 10000000);
            var kanji_draw = 'kanji_draw_'+num;
            $("#kanji_draw").next('.jp_kanji_draw').remove();
            $("#kanji_draw").after("<div class='jp_kanji_draw' id='"+kanji_draw+"'><span>"+text+"</span></div>");
            kanji_draw = $('#'+ kanji_draw);
            setTimeout(function(){kanji_draw.dmak(text);},500);

            $("#sample-btn").find("button").on("click", function (e) {
                e.preventDefault();
                switch ($(this).attr("id")) {
                    case 'p':
                        kanji_draw.dmak('rewind', 1);
                        break;
                    case 's':
                        kanji_draw.dmak('pause');
                        $(this).toggle();
                        $("#g").toggle();
                        break;
                    case 'g':
                        kanji_draw.dmak('play');
                        $(this).toggle();
                        $("#s").toggle();
                        break;
                    case 'n':
                        kanji_draw.dmak('forward', 1);
                        break;
                    case 'r':
                        kanji_draw.dmak('reset');
                        break;
                }
            })
        });
    }, 2000)
});

function show_kanji_search() {
    var text = $.trim($('#kanji_text_input').val());
    $('#dialog_abc').modal();
    $('#cach_viet_chu').text(text);

    var num = Math.floor(Math.random() * 10000000);
    var kanji_draw = 'kanji_draw_'+num;
    $("#kanji_draw").next('.jp_kanji_draw').remove();
    $("#kanji_draw").after("<div class='jp_kanji_draw' id='"+kanji_draw+"'><span>"+text+"</span></div>");
    kanji_draw = $('#'+ kanji_draw);
    setTimeout(function(){kanji_draw.dmak(text);},500);

    $("#sample-btn").find("button").on("click", function (e) {
        e.preventDefault();
        switch ($(this).attr("id")) {
            case 'p':
                kanji_draw.dmak('rewind', 1);
                break;
            case 's':
                kanji_draw.dmak('pause');
                $(this).toggle();
                $("#g").toggle();
                break;
            case 'g':
                kanji_draw.dmak('play');
                $(this).toggle();
                $("#s").toggle();
                break;
            case 'n':
                kanji_draw.dmak('forward', 1);
                break;
            case 'r':
                kanji_draw.dmak('reset');
                break;
        }
    })

}