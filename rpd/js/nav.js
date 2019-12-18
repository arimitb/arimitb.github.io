$(() => {
    // Navigation

    const navEl = $('nav')[0];
    const navHeight = $(navEl).height();
    let sections = [];
    $('.site-container > section').each(function() {
        if($(this).attr('id')) {
            sections.push($(this).attr('id'));
        }
    });
    for (let i = 0; i < sections.length; i++) {
        $(navEl).append(`
            <a href="#${sections[i]}">${sections[i]}</a>
            ${i < sections.length - 1 ? '<div><div></div></div>' : ''}
        `);
    }

    $('.site-container').on('scroll', () => {
        for (let i = 1; i < sections.length; i++) {
            let nextOffset = $(`#${sections[i]}`).offset().top;
            if (nextOffset > navHeight) {
                let lastOffset = $(`#${sections[i - 1]}`).offset().top;
                let curSection = $(`a[href="#${sections[i]}"]`);
                $(curSection).prevAll('div').children('div').css('transform', 'scaleX(1)');
                $(curSection).prev('div').children('div').css('transform', `scaleX(${Math.abs(lastOffset) / (Math.abs(lastOffset) + Math.abs(nextOffset))})`);
                $(curSection).nextAll('div').children('div').css('transform', 'scaleX(0)');
                break;
            }
        }
    });

    // Lightbox

    let lightboxActive = false;

    function toggleLightbox(src) {
        if(src && !lightboxActive) {
            lightboxActive = true;
            $('.site-container').append(`
                <div class="lightbox" style="background-image: ${src.indexOf('url') != -1 ? src.replace(`"`, `'`) : `url('${src}')`}">
                    <img src="../../images/quit-icon.svg">
                </div>
            `);
        } else {
            lightboxActive = false;
            $('.lightbox').remove();
        }
    }

    $('img').on('click', e => {
        if (!lightboxActive) {
            const src = $(e.target).attr('src');
            toggleLightbox(src);
        }
    });
    $('.gallery > div').on('click', e => {
        if ($(e.target).css('background-image') && !lightboxActive) {
            toggleLightbox($(e.target).css('background-image'));
        }
    });
    $('.image-cover').on('click', e => {
        if ($(e.target).css('background-image') && !lightboxActive) {
            toggleLightbox($(e.target).css('background-image'));
        }
    });
    $('body').on('click', '.lightbox > img', () => {
        if (lightboxActive) {
            toggleLightbox();
        }
    });

    // Remove orphans

    const orphanCount = 2;
    const replacement = '&nbsp;';
    $('p, h1, h2, h3, h4, h5, h6').each(function() {
        let curHtml = $(this).html();
        for (let i = 0; i < orphanCount; i++) {
            const curPos = curHtml.lastIndexOf(' ');
            if (curPos != -1) {
                curHtml = curHtml.slice(0, curPos) + replacement + curHtml.slice(curPos + 1);
            } else {
                break;
            }
        }
        $(this).html(curHtml);
    });
});