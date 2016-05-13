(function($) {
    $(document).ready(function() {
        $('#container').fullpage({
            navigation: true,
            navigationTooltips: ['自我介绍', '前端基础', '其他技能', '练习作品', '联系方式'],
            css3: true,
            afterLoad: function(anchorLink, index) {
                var loadedSection = $(this);

                if (index == 1) {
                    loadedSection.find('h1').removeClass('hidden').addClass('animated swing');
                    loadedSection.find('h2').removeClass('hidden').addClass('animated fadeInUp');
                    loadedSection.find('h3').removeClass('hidden').addClass('animated fadeInUp');
                }

                if (index == 2) {
                    loadedSection.find('h1').removeClass('hidden').addClass('animated flipInX');
                    loadedSection.find('p').removeClass('hidden').addClass('animated fadeInUp');
                    $('.progress-bar span').eq(0).addClass('progress-html');
                    $('.progress-bar span').eq(1).addClass('progress-css');
                    $('.progress-bar span').eq(2).addClass('progress-js');
                }

                if (index == 3) {
                    loadedSection.find('h1').removeClass('hidden').addClass('animated flipInX');
                    loadedSection.find('h2').removeClass('hidden').addClass('animated tada');
                    loadedSection.find('p').removeClass('hidden').addClass('animated fadeInUp');
                }

                if (index == 4) {
                    loadedSection.find('h1').removeClass('hidden').addClass('animated flipInX');
                    loadedSection.find('img').removeClass('hidden').addClass('animated zoomIn');
                    loadedSection.find('h2').removeClass('hidden').addClass('animated fadeDown');
                    loadedSection.find('p').removeClass('hidden').addClass('animated fadeInUp');
                }

                if (index == 5) {
                    loadedSection.find('h1').removeClass('hidden').addClass('animated flipInX');
                    loadedSection.find('h2').removeClass('hidden').addClass('animated fadeInUp');
                    loadedSection.find('h3').removeClass('hidden').addClass('animated fadeInDown');
                    loadedSection.find('p').removeClass('hidden').addClass('animated fadeInUp');
                }
            }
        });
        $('#fp-nav span').css('background-color', '#fff');
    });
})(jQuery);