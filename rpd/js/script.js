let files = [
    {
        name: 'DATA.txt',
        type: 'notepad',
        content: `
        This file is your data.
        <br><br>
        Your email. Your passwords. Your usernames. Your date of birth. Your mother’s maiden name. The name of your first pet. The street you grew up on. The photos on your devices. Your chat history. Your browser history. Your most treasured memories. Your mannerisms. Your likes. Your dislikes. Your fears. The colour of the pants you’re wearing. The last time you went shopping. Your friends. The friends of your friends. The friends of the friends of your friends. Everything you have ever seen, heard, touched, smelled, felt, and done ever since you’ve been.
        <br><br>
        But it’s more than that.
        <br><br>
        So much more, in fact, that it could never live up to what it’s trying to represent. And so, what this file really is is an introduction—because that’s the best it could hope to be. An introduction to what?
        <br><br>
        Welcome to this research process document, [IP ADDRESS].
        <br><br>
        We deal with data every day of our lives. Whether consciously or not, the creation and manipulation of data is a continuous natural process. Over a period of 12 weeks, I dived deep into various projects and experiments which (directly or indirectly) contributed to my understanding of data.
        <br><br>
        It would be disingenuous to imply that I sought to uncover this topic from the very beginning; that I always intended to learn about the way people think about—and deal with—data. In reality, I stumbled upon this field. In this case, my words did not influence my actions, but the other way around. Nevertheless, these actions helped me get a grasp of what “data” is, how it originates, how it flows, and what people think of it. In this document, I will be breaking down the various aspects of data and diving into how my actions (and their consequences) interacted with them.
        <br><br>
        It is important to clarify that I do not have a clear answer to any of the questions I address. Instead, my research process has been one of inventing questions, attempting to answer them, and raising several more in the process. But that is also precisely what makes it so exciting—the unending well of discussion to be had is nothing short of mind porn, while also being undeniably practical in terms of “real-world” consequences.
        <br><br>
        There are 8 primary aspects of data that I discuss in this document. As you get around to discovering them all, I hope to incite the same sense of curiosity that I felt while (often unknowingly) conducting this research.
        `,
        parent: -1
    },
    {
        name: 'HELP.exe',
        type: 'progress',
        content: '',
        parent: -1
    },
    {
        name: 'END.txt',
        type: 'notepad',
        content: `
        Creating this research process document has broadened my perspective on how I think about data. As I analysed my projects to see how I dealt with the subject, my internal definition of data transformed from just emails, passwords, preferences, and other online details, to a wider paradigm in which we live and breath data even independent from any digital social media context.
        <br><br>
        The questions I encountered cover a small portion of what there is to ask about data. In fact, you may well disagree with the conclusions I draw. However, consciously thinking about the subject is progress in itself. The term “data” is often thrown around in the media— there was a “data breach”, a group of researchers engaged in “data mining”, or perhaps just the nth post about Facebook “stealing” your data. In this context, it is valuable to take a step back and differentiate truth from hyperbole (or at least your perspective on what these may be).
        <br><br>
        Thanks for making it this far, [INSERT IP ADDRESS HERE]. I hope this website contributed to the way you think about data.
        <br><br>
        Designed by Arimit Bhattacharya (arimitb.com)
        `,
        parent: -1
    },
    {
        name: 'THE_ORIGINAL.html',
        type: 'html',
        content: `./sections/original/index.html`,
        parent: -1
    },
    {
        name: 'THE_COPIED.html',
        type: 'html',
        content: `./sections/copy/index.html`,
        parent: -1
    },
    {
        name: 'THE_MANIPULATED.html',
        type: 'html',
        content: `./sections/manipulate/index.html`,
        parent: -1
    },
    {
        name: 'THE_COMBINED.html',
        type: 'html',
        content: `./sections/combine/index.html`,
        parent: -1
    },
    {
        name: 'THE_PRIVATE.html',
        type: 'html',
        content: `./sections/private/index.html`,
        parent: -1
    },
    {
        name: 'THE_ANALYSED.html',
        type: 'html',
        content: `./sections/analyse/index.html`,
        parent: -1
    },
    {
        name: 'THE_ABSTRACTED.html',
        type: 'html',
        content: `./sections/abstract/index.html`,
        parent: -1
    },
    {
        name: 'THE_VALUED.html',
        type: 'html',
        content: `./sections/value/index.html`,
        parent: -1
    }
];

$.getJSON("http://api.db-ip.com/v2/free/self")
    .then(addrInfo => {
        clientIp = addrInfo.ipAddress;
        files[0].content = `
            This file is your data.
            <br><br>
            Your email. Your passwords. Your usernames. Your date of birth. Your mother’s maiden name. The name of your first pet. The street you grew up on. The photos on your devices. Your chat history. Your browser history. Your most treasured memories. Your mannerisms. Your likes. Your dislikes. Your fears. The colour of the pants you’re wearing. The last time you went shopping. Your friends. The friends of your friends. The friends of the friends of your friends. Everything you have ever seen, heard, touched, smelled, felt, and done ever since you’ve been.
            <br><br>
            But it’s more than that.
            <br><br>
            So much more, in fact, that it could never live up to what it’s trying to represent. And so, what this file really is is an introduction—because that’s the best it could hope to be. An introduction to what?
            <br><br>
            Welcome to this research process document, [${clientIp}].
            <br><br>
            We deal with data every day of our lives. Whether consciously or not, the creation and manipulation of data is a continuous natural process. Over a period of 12 weeks, I dived deep into various projects and experiments which (directly or indirectly) contributed to my understanding of data.
            <br><br>
            It would be disingenuous to imply that I sought to uncover this topic from the very beginning; that I always intended to learn about the way people think about—and deal with—data. In reality, I stumbled upon this field. In this case, my words did not influence my actions, but the other way around. Nevertheless, these actions helped me get a grasp of what “data” is, how it originates, how it flows, and what people think of it. In this document, I will be breaking down the various aspects of data and diving into how my actions (and their consequences) interacted with them.
            <br><br>
            It is important to clarify that I do not have a clear answer to any of the questions I address. Instead, my research process has been one of inventing questions, attempting to answer them, and raising several more in the process. But that is also precisely what makes it so exciting—the unending well of discussion to be had is nothing short of mind porn, while also being undeniably practical in terms of “real-world” consequences.
            <br><br>
            There are 8 primary aspects of data that I discuss in this document. As you get around to discovering them all, I hope to incite the same sense of curiosity that I felt while (often unknowingly) conducting this research.
        `;
        files[2].content = `
            Creating this research process document has broadened my perspective on how I think about data. As I analysed my projects to see how I dealt with the subject, my internal definition of data transformed from just emails, passwords, preferences, and other online details, to a wider paradigm in which we live and breath data even independent from any digital social media context.
            <br><br>
            The questions I encountered cover a small portion of what there is to ask about data. In fact, you may well disagree with the conclusions I draw. However, consciously thinking about the subject is progress in itself. The term “data” is often thrown around in the media— there was a “data breach”, a group of researchers engaged in “data mining”, or perhaps just the nth post about Facebook “stealing” your data. In this context, it is valuable to take a step back and differentiate truth from hyperbole (or at least your perspective on what these may be).
            <br><br>
            Thanks for making it this far, [${clientIp}]. I hope this website contributed to the way you think about data.
            <br><br>
            Designed by Arimit Bhattacharya (arimitb.com)
        `;
    });

const sections = {
    original: {
        name: 'THE_ORIGINAL.html',
        unlocked: false,
        requires: '',
        hint: '',
        unlocks: ['Copy', 'Paste'],
        unlockMessage: 'You can now copy and paste files.'
    },
    copy: {
        name: 'THE_COPIED.html',
        unlocked: false,
        requires: 'original',
        hint: 'Copy a file. Paste it. Reap the benefits.',
        unlocks: ['New Folder'],
        unlockMessage: 'You can now create folders.'
    },
    manipulate: {
        name: 'THE_MANIPULATED.html',
        unlocked: false,
        requires: 'original',
        hint: 'You can write inside text (.txt) files. The possibilities are endless.'
    },
    combine: {
        name: 'THE_COMBINED.html',
        unlocked: false,
        requires: 'copy',
        hint: 'Organisation tip: Collect some files into a folder.',
        unlocks: ['Encrypt'],
        unlockMessage: 'You can now encrypt files and folders.'
    },
    private: {
        name: 'THE_PRIVATE.html',
        unlocked: false,
        requires: 'combine',
        hint: `Stay one step ahead of the CIA - protect your files with a password by selecting "Encrypt".`,
        unlocks: ['Properties'],
        unlockMessage: 'You can now view file properties.'
    },
    analyse: {
        name: 'THE_ANALYSED.html',
        hint: 'Ever wonder how big a file is? Wonder no longer - you can view the properties of any file you wish.',
        unlocked: false,
        requires: 'private'
    },
    abstract: {
        name: 'THE_ABSTRACTED.html',
        hint: "View a file's properties. Click the button. Bask in your eternal glory.",
        unlocked: false,
        requires: 'private'
    },
    value: {
        name: 'THE_VALUED.html',
        hint: ';)',
        unlocked: false,
        requires: 'analyse'
    }
};

let contextMenuContent = {
    file: [
        ['Open', true],
        ['Copy', false],
        ['Encrypt', false],
        ['Properties', false]
    ],
    desktop: [
        ['Paste', false],
        ['New Folder', false]
    ]
};

const narration = {
    intro: [
        "This website is data.",
        "Just like you.",
        "Just like me.",
        "And just like all other websites, actually.",
        "But you already knew that, didn't you?",
        "What's more interesting is what we do with this data.",
        "In fact, what <i>can</i> we do with this data?",
        "Look at this file.",
        "Look at its subtle curves, the way the pixels flow on the icon, all the little bits and bytes that resulted in this showing up on your screen...",
        "...beautiful, isn't it?",
        "Almost as beautiful as what it represents.",
        "Every thought you've ever had...",
        "...every memory you've ever experienced...",
        "...your likes and dislikes...",
        "...this is your data.",
        "What will you do with it?"
    ]
}

$(() => {
    setTimeout(introduction, 1000);
});

function introduction() {
    let curLine = -1;
    const narrationTextEl = $('.narration-text');
    const narrationControlsEl = $('.narration-controls');
    let textAnimInterval;
    let canProceed = true;
    $('body').on('click', () => {
        if (canProceed) {
            nextLine();
        }
    });
    $('body').on('keyup', e => {
        if (e.keyCode == 13 && canProceed) {
            nextLine();
        }
    });
    nextLine();
    function nextLine() {
        canProceed = false;
        setTimeout(function() {
            canProceed = true;
        }, 500);
        curLine++;
        $(narrationControlsEl).removeClass('controls-anim');
        $(narrationTextEl).empty();
        if (narration.intro[curLine].indexOf('Look at this file.') != -1) {
            addIcon(0, {
                position: {
                    x: window.innerWidth / 2,
                    y: window.innerHeight / 2
                },
                flicker: true,
                intro: true
            });
            $('.desktop-icon').css({
                'top': `${parseInt($('.desktop-icon').css('top')) - ($('.desktop-icon').height() / 2)}px`,
                'left': `${parseInt($('.desktop-icon').css('left')) - ($('.desktop-icon').width() / 2)}px`,
            });
        }
        let curChar = 0;
        clearInterval(textAnimInterval);
        textAnimInterval = setInterval(function() {
            $(narrationTextEl).html(narration.intro[curLine].slice(0, curChar++));
            if (curChar > narration.intro[curLine].length) {
                if (curLine < narration.intro.length - 1) {
                    void narrationControlsEl.offsetWidth;
                    $(narrationControlsEl).addClass('controls-anim');
                } else {
                    $('.desktop-icon-intro').removeClass('desktop-icon-intro');
                    enableDesktopControls();
                    setTimeout(function() {
                        $('.narration-overlay').addClass('flicker-out');
                    }, 5000);
                }
                clearInterval(textAnimInterval);
            }
            if (curLine > 0) {
                playAudio('beep');
            }
        }, 25);
        if (curLine == narration.intro.length - 1) {
            $('body').off('click');
            $('body').off('keyup');
        }
    }
}

function enableDesktopControls() {
    let dragState = 0;
    let dragOffset = [];
    let dragItem;
    let mouseDownPos;

    function handleFileContextMenu(e) {
        if (dragState != 2 || (Math.abs(e.clientX - mouseDownPos[0]) < 10 && Math.abs(e.clientY - mouseDownPos[1]) < 10)) {
            toggleContextMenu('file', {
                x: e.pageX,
                y: e.pageY
            });
        }
    }

    $(document).on('mousedown', () => {
        playAudio('mousedown');
    });
    $(document).on('mouseup', () => {
        playAudio('mouseup');
    });
    $(document).on('keydown', () => {
        playAudio('keydown');
    });

    $('body').on('mousedown', '.desktop-icon', e => {
        mouseDownPos = [e.clientX, e.clientY];
        dragItem = $(e.target).closest('.desktop-icon');
        dragState = 1;
        dragOffset = [mouseDownPos[0] - parseInt($(dragItem).css('left')), mouseDownPos[1] - parseInt($(dragItem).css('top'))];
    });
    $('body').on('mousedown', '.titlebar', e => {
        dragItem = $(e.target).closest('.desktop-window');
        dragState = 1;
        dragOffset = [e.clientX - parseInt($(dragItem).css('left')), e.clientY - parseInt($(dragItem).css('top'))];
        curContextMenuTargetIndex = parseInt($(dragItem).attr('data-id'));
    });
    $('body').on('mousemove', e => {
        if (dragState != 0) {
            $(dragItem).css({
                'left': `${e.clientX - dragOffset[0]}px`,
                'top': `${e.clientY - dragOffset[1]}px`
            });
            dragState = 2;
        }
    });
    $('body').on('mouseup', '.desktop-icon', e => {
        curContextMenuTargetIndex = parseInt($(e.target).closest('.desktop-icon').attr('data-id'));
        handleFileContextMenu(e);
    });
    $('body').on('mouseup', '.file-explorer-icon', e => {
        curContextMenuTargetIndex = parseInt($(e.target).closest('.file-explorer-icon').attr('data-id'));
        handleFileContextMenu(e);
    });
    $('body').on('mousedown', '.desktop-window', e => {
        focusWindow(e.target);
    });
    $('body').on('mouseup', () => {
        dragState = 0;
    });
    $('body').on('click', '.context-menu-item', e => {
        if (!$(e.target).hasClass('content-menu-item-disabled')) {
            toggleContextMenu();
        }
    });
    $('body').on('click', (e) => {
        if ($(e.target).hasClass('desktop-container') || $(e.target).hasClass('file-explorer-body')) {
            if (contextMenuActive) {
                toggleContextMenu();
            } else {
                if ($(e.target).hasClass('file-explorer-body')) {
                    curContextMenuTargetIndex = parseInt($(e.target).parents('.desktop-window').attr('data-id'), 10);
                } else {
                    curContextMenuTargetIndex = -1;
                }
                toggleContextMenu('desktop', {
                    x: e.pageX,
                    y: e.pageY
                });
            }
        }
    });

    $('body').on('input', '.notepad-textarea', () => {
        setTimeout(function () {
            addSection('manipulate');
        }, 2000);
    })

    $('body').on('click', '.context-menu-item', e => {
        if (!$(e.target).hasClass('context-menu-item-disabled')) {
            if ($(e.target).text() == 'Open') {
                if (files[curContextMenuTargetIndex].password) {
                    addAlert('encryption-input', { fileId: curContextMenuTargetIndex });
                } else {
                    addWindow(curContextMenuTargetIndex);
                }
            } else if ($(e.target).text() == 'Copy') {
                copyFileIndex = curContextMenuTargetIndex;
            } else if ($(e.target).text() == 'Paste') {
                if (copyFileIndex != null) {
                    files.push(Object.assign({}, files[copyFileIndex]));
                    if (curContextMenuTargetIndex != -1 && files[curContextMenuTargetIndex].type == 'folder') {
                        files[files.length - 1].parent = curContextMenuTargetIndex;
                        addIcon(files.length - 1, {
                            folderId: curContextMenuTargetIndex
                        });
                    } else {
                        addIcon(files.length - 1, {
                            position: {
                                x: e.clientX,
                                y: e.clientY
                            }
                        });
                    }
                    setTimeout(function () {
                        addSection('copy');
                    }, 2000);
                }
            } else if ($(e.target).text() == 'New Folder') {
                files.push({
                    name: 'New Folder',
                    type: 'folder',
                    content: '',
                    parent: -1,
                    date: `${(new Date().toUTCString())}`
                });
                addIcon(files.length - 1, {
                    position: {
                        x: e.clientX,
                        y: e.clientY
                    }
                });
            } else if ($(e.target).text() == 'Encrypt') {
                addAlert('encryption-set', { fileId: curContextMenuTargetIndex });
            } else if ($(e.target).text() == 'Properties') {
                addWindow(curContextMenuTargetIndex, { type: 'properties' });
            }
        }
    });

    $('body').on('click', '.button', e => {
        if ($(e.target).hasClass('close-window')) {
            if ($(e.target).hasClass('add-icon')) {
                let fileId = parseInt($(e.target).parents('.desktop-window').attr('data-id'), 10);
                addIcon(fileId, { flicker: true });
            }
            if ($(e.target).hasClass('open-file')) {
                let fileId = parseInt($(e.target).parents('.desktop-window').attr('data-id'), 10);
                addWindow(fileId);
                addIcon(fileId, { flicker: true });
            }
            if ($(e.target).hasClass('view-progress')) {
                addWindow(1);
            }

            $(e.target).parents('.desktop-window').remove();
        } else if ($(e.target).hasClass('close-alert')) {
            $(e.target).parents('.desktop-alert-container').remove();
        } else if ($(e.target).hasClass('encryption-confirm')) {
            let fileId = parseInt($(e.target).parents('.desktop-alert-container').attr('data-id'), 10);
            files[fileId].password = $('.encryption-input > input').val();
            $(e.target).parents('.desktop-alert-container').remove();
            setTimeout(function () {
                addSection('private');
            }, 2000);
        } else if ($(e.target).hasClass('encryption-open')) {
            let fileId = parseInt($(e.target).parents('.desktop-alert-container').attr('data-id'), 10);
            if (files[fileId].password == $('.encryption-input > input').val()) {
                $(e.target).parents('.desktop-alert-container').remove();
                addWindow(fileId);
            } else {
                $('label').html(`Incorrect password.<br>Enter password:`);
            }
        } else if ($(e.target).hasClass('view-source')) {
            let fileId = parseInt($(e.target).parents('.desktop-window').attr('data-id'), 10);
            addWindow(fileId, { type: 'cmd' });
        } else if ($(e.target).hasClass('show-hint')) {
            addAlert('hint', {
                hint: sections[$(e.target).attr('data-section')].hint
            });
        }
    });

    $('body').on('click', '.titlebar-quit-icon', e => {
        if ($(e.target).parents('.desktop-window').length > 0) {
            if ($(e.target).parents('.desktop-window').attr('data-id')) {
                const fileId = parseInt($(e.target).parents('.desktop-window').attr('data-id'), 10);
                if (fileId == 0) {
                    setTimeout(function () {
                        addSection('original');
                    }, 2000);
                } else if (files[fileId].name == 'THE_VALUED.html') {
                    if ($('.desktop-icon[data-id="2"]').length == 0) {
                        setTimeout(function() {
                            addIcon(2, {
                                flicker: true
                            });
                        }, 2000);
                    }
                }
            }
            $(e.target).parents('.desktop-window').remove();
        } else {
            $(e.target).parents('.desktop-alert-container').remove();
        }
    });
}

function enableContextMenuItem(val) {
    for (el in contextMenuContent) {
        for (let i = 0; i < contextMenuContent[el].length; i++) {
            if (contextMenuContent[el][i][0] == val) {
                contextMenuContent[el][i][1] = true;
                break;
            }
        }
    }
}

const desktopContainer = $('.desktop-container')[0];
const contextMenu = $('.context-menu')[0];
let contextMenuDimensions;
let contextMenuActive = 0;
let curContextMenuTargetIndex = 0;
let copyFileIndex = null;

function addIcon(fileIndex, options) {
    if (!options.folderId) {
        let position = {};
        if (options.position) {
            position = {
                x: options.position.x,
                y: options.position.y
            };
        } else {
            if ($('.proxy-column').last().children().length >= 5) {
                $('.proxy-container').append(`
                <div class="proxy-column">
                    <div class="proxy-item"></div>
                </div>
            `);
            } else {
                $('.proxy-column').last().append(`
                <div class="proxy-item"></div>
            `);
            }
            position = {
                x: $('.proxy-item').last().offset().left,
                y: $('.proxy-item').last().offset().top
            };
        }

        if (options.type) {
            if (options.type == 'progress') {
                $(desktopContainer).append(`
                <div class="desktop-icon${options.flicker ? ' flicker-in' : ''}" data-id="${fileIndex}" style="left: ${position.x}px; top: ${position.y}px">
                    <img class="desktop-icon-img ${files[fileIndex].type}-icon">
                    <div class="desktop-icon-name">${files[fileIndex].name}</div>
                </div>
            `);
            }
        } else {
            $(desktopContainer).append(`
            <div class="desktop-icon${options.flicker ? ' flicker-in' : ''}${options.intro ? ' desktop-icon-intro' : ''}" data-id="${fileIndex}" style="left: ${position.x}px; top: ${position.y}px">
                <img class="desktop-icon-img ${files[fileIndex].type}-icon">
                <div class="desktop-icon-name">${files[fileIndex].name}</div>
            </div>
        `);
        }
    } else {
        $(`.desktop-window[data-id="${curContextMenuTargetIndex}"]`).children('.file-explorer-body').append(`
            <div class="file-explorer-icon" data-id="${fileIndex}">
                <img class="desktop-icon-img ${files[fileIndex].type}-icon">
                <div class="desktop-icon-name">${files[fileIndex].name}</div>
            </div>
        `);
        if ($(`.desktop-window[data-id="${curContextMenuTargetIndex}"]`).children('.file-explorer-body').children().length >= 2) {
            setTimeout(function () {
                addSection('combine');
            }, 2000);
        }
    }
}

function addWindow(fileId, options) {
    if (options) {
        if (options.type == 'notice') {
            $(desktopContainer).append(`
                <div class="desktop-window" style="left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 2000" data-id="${fileId}">
                    <div class="titlebar">
                        <div class="window-title">Alert</div>
                        <div class="titlebar-quit-icon">
                            <img src="images/quit-icon.svg">
                        </div>
                    </div>
                    <div class="alert-container">
                        <div class="alert-content">
                            <img class="alert-icon" src="images/alert-icon.svg">
                            <div class="alert-message">
                                You have unlocked:
                                <br>
                                <b>${files[fileId].name}</b>
                                ${options.featureMessage ? `<br><br>${options.featureMessage}` : ''}
                            </div>
                        </div>
                        <div class="alert-options">
                            <div class="button close-window add-icon">Close</div>
                            <div class="button open-file close-window">Open ${files[fileId].name.split('.')[0]}</div>
                        </div>
                    </div>
                </div>
            `);
            playAudio('alert');
        } else if (options.type == 'properties') {
            $(desktopContainer).append(`
                <div class="desktop-window" data-id="${fileId}" style="left: ${Math.random() * window.innerWidth / 2}px; top: ${Math.random() * window.innerHeight / 2}px">
                    <div class="titlebar">
                        <div class="window-title">File Properties</div>
                        <div class="titlebar-quit-icon">
                            <img src="images/quit-icon.svg">
                        </div>
                    </div>
                    <div class="file-properties-container">
                        <div class="file-property">
                            <div class="property-name">File name</div>
                            <div class="property-value">${files[fileId].name}</div>
                        </div>
                        <div class="file-property">
                            <div class="property-name">File type</div>
                            <div class="property-value">${files[fileId].type == 'notepad' ? 'Text file (.txt)' : 'Folder'}</div>
                        </div>
                        <div class="file-property">
                            <div class="property-name">File size on disk</div>
                            <div class="property-value">${files[fileId].content.length} bytes</div>
                        </div>
                        <div class="file-property">
                            <div class="property-name">File created</div>
                            <div class="property-value">${files[fileId].date ? files[fileId].date : 'Thur, 01 Jan 1970 00:00:00 GMT'}</div>
                        </div>
                        <div class="button view-source">View Source</div>
                    </div>
                </div>
            `);
            setTimeout(function () {
                addSection('analyse');
            }, 2000);
        } else if (options.type == 'cmd') {
            let binaryInsert = '';
            for(let i = 0; i < files[fileId].content.length; i++) {
                binaryInsert = binaryInsert.concat(files[fileId].content.charCodeAt(i).toString(2) + ' ');
            }
            $(desktopContainer).append(`
                <div class="desktop-window" data-id="${fileId}" style="left: ${Math.random() * window.innerWidth / 2}px; top: ${Math.random() * window.innerHeight / 2}px">
                    <div class="titlebar">
                        <div class="titlebar-icon">
                            <img src="images/cmd-icon.svg">
                        </div>
                        <div class="window-title">C:\\Server\\cmd.exe</div>
                        <div class="titlebar-quit-icon">
                            <img src="images/quit-icon.svg">
                        </div>
                    </div>
                    <div class="cmd-container">
                        <div class="cmd-container-scroll">${binaryInsert + `<br>C:\\>`}</div>
                    </div>
                </div>
            `);
            $('.cmd-container-scroll').scrollTop(parseInt($('.cmd-container-scroll')[0].scrollHeight, 10));
            setTimeout(function () {
                addSection('abstract');
            }, 2000);
        }
    } else if (files[fileId].type == 'notepad') {
        $(desktopContainer).append(`
            <div class="desktop-window" data-id="${fileId}" style="left: ${Math.random() * window.innerWidth / 2}px; top: ${Math.random() * window.innerHeight / 2}px">
                <div class="titlebar">
                    <div class="titlebar-icon">
                        <img src="images/notepad-icon.svg">
                    </div>
                    <div class="window-title">${files[fileId].name} - Notepad</div>
                    <div class="titlebar-quit-icon">
                        <img src="images/quit-icon.svg">
                    </div>
                </div>
                <div class="menu-bar">
                    <div class="menu-bar-item">File</div>
                    <div class="menu-bar-item">Edit</div>
                    <div class="menu-bar-item">Help</div>
                </div>
                <div class="notepad-textarea-container">
                    <div class="notepad-textarea" contentEditable="true">${files[fileId].content}</div>
                </div>
            </div>
        `);
    } else if (files[fileId].type == 'html') {
        $(desktopContainer).append(`
            <div class="desktop-window" data-id="${fileId}" style="left: ${Math.random() * window.innerWidth / 2}px; top: ${Math.random() * window.innerHeight / 2}px">
                <div class="titlebar">
                    <div class="titlebar-icon">
                        <img src="images/html-icon.png">
                    </div>
                    <div class="window-title">Internet Explorer - ${files[fileId].name}</div>
                    <div class="titlebar-quit-icon">
                        <img src="images/quit-icon.svg">
                    </div>
                </div>
                <div class="menu-bar">
                    <div class="menu-bar-item">File</div>
                    <div class="menu-bar-item">Edit</div>
                    <div class="menu-bar-item">Help</div>
                </div>
                <div class="html-container">
                    <iframe src="${files[fileId].content}">
                </div>
            </div>
        `);
    } else if (files[fileId].type == 'folder') {
        let iconsHtml = '';
        for(let i = 0; i < files.length; i++) {
            if (files[i].parent == fileId) {
                iconsHtml = iconsHtml.concat(`
                    <div class="file-explorer-icon" data-id="${i}">
                        <img class="desktop-icon-img ${files[i].type}-icon">
                        <div class="desktop-icon-name">${files[i].name}</div>
                    </div>
                `);
            }
        }
        $(desktopContainer).append(`
            <div class="desktop-window" data-id="${fileId}" style="left: ${Math.random() * window.innerWidth / 2}px; top: ${Math.random() * window.innerHeight / 2}px">
                <div class="titlebar">
                    <div class="titlebar-icon">
                        <img src="images/folder-icon.svg">
                    </div>
                    <div class="window-title">File Explorer - New Folder</div>
                    <div class="titlebar-quit-icon">
                        <img src="images/quit-icon.svg">
                    </div>
                </div>
                <div class="menu-bar">
                    <div class="menu-bar-item">File</div>
                    <div class="menu-bar-item">Edit</div>
                    <div class="menu-bar-item">Help</div>
                </div>
                <div class="file-explorer-body">
                    ${iconsHtml}
                </div>
            </div>
        `);
    } else if (files[fileId].type == 'progress') {
        $(desktopContainer).append(`
            <div class="desktop-window" style="left: ${Math.random() * window.innerWidth / 2}px; top: ${Math.random() * window.innerHeight / 2}px">
                <div class="titlebar">
                    <div class="titlebar-icon">
                        <img src="images/exe-icon.svg">
                    </div>
                    <div class="window-title">HELP.exe</div>
                    <div class="titlebar-quit-icon">
                        <img src="images/quit-icon.svg">
                    </div>
                </div>
                <div class="progress-container">
                </div>
            </div>
        `);
        updateProgress();
    }
}

function updateProgress() {
    if ($('.progress-container').length > 0) {
        let totalCount = 0;
        let unlockedCount = 0;
        let progressInsertion = '';
        let hintSection = null;
        for (el in sections) {
            totalCount++;
            if (sections[el].unlocked) {
                unlockedCount++;
            }
            nameStr = '????';
            if (sections[el].unlocked) {
                nameStr = sections[el].name.split('.')[0];
            } else if (sections[sections[el].requires]) {
                if (sections[sections[el].requires].unlocked) {
                    if (!hintSection) {
                        hintSection = el;
                    }
                    nameStr = sections[el].name.split('.')[0];
                }
            }
            progressInsertion = progressInsertion.concat(`
                <div class="progress-item">
                    <div class="progress-item-name">
                        ${nameStr}
                    </div>
                    <div class="progress-item-value">
                        ${sections[el].unlocked ? 'Unlocked' : 'Locked'}
                    </div>
                </div>
            `);
            lastEl = el;
        }
        $('.progress-container').empty().append(`
            <div class="progress-item">
                <div class="progress-item-name">
                    Progress:
                </div>
                <div class="progress-item-value">
                    ${unlockedCount} / ${totalCount}
                </div>
            </div>
            ${progressInsertion}
            <div class="progress-bar-container">
                <div class="progress-count">${Math.round(100 * unlockedCount / totalCount)}%</div>
                <div class="progress-bar" style="transform: scaleX(${unlockedCount / totalCount})"></div>
            </div>
            <div class="progress-bar-input">
                <div class="button show-hint" data-section="${hintSection}">Give me a hint!</div>
                <div class="button close-window">OK</div>
            </div>
        `);
    }
}

function addAlert(type, options) {
    if (type == 'encryption-set') {
        $(desktopContainer).append(`
            <div class="desktop-alert-container" data-id="${options.fileId}">
                <div class="desktop-alert">
                    <div class="titlebar">
                        <div class="window-title">Encrypt File</div>
                        <div class="titlebar-quit-icon">
                            <img src="images/quit-icon.svg">
                        </div>
                    </div>
                    <div class="encryption-container">
                        <div class="encryption-icon">
                            <img src="images/password-icon.svg">
                        </div>
                        <div class="encryption-input">
                            <label for="password">New password:</label><br>
                            <input id="password" type="password">
                        </div>
                        <div class="encryption-confirm">
                            <div class="button encryption-confirm">Encrypt</div>
                            <div class="button close-alert">Cancel</div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    } else if (type == 'encryption-input') {
        $(desktopContainer).append(`
            <div class="desktop-alert-container" data-id="${options.fileId}">
                <div class="desktop-alert">
                    <div class="titlebar">
                        <div class="window-title">Encrypt File</div>
                        <div class="titlebar-quit-icon">
                            <img src="images/quit-icon.svg">
                        </div>
                    </div>
                    <div class="encryption-container">
                        <div class="encryption-icon">
                            <img src="images/password-icon.svg">
                        </div>
                        <div class="encryption-input">
                            <label for="password">Enter password:</label><br>
                            <input id="password" type="password">
                        </div>
                        <div class="encryption-confirm">
                            <div class="button encryption-open">Open</div>
                            <div class="button close-alert">Cancel</div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    } else if (type == 'hint') {
        $(desktopContainer).append(`
            <div class="desktop-alert-container" data-id="${options.fileId}">
                <div class="desktop-alert">
                    <div class="titlebar">
                        <div class="window-title">Hint</div>
                        <div class="titlebar-quit-icon">
                            <img src="images/quit-icon.svg">
                        </div>
                    </div>
                    <div class="hint-container">
                        ${options.hint}
                        <div class="button close-alert">OK</div>
                    </div>
                </div>
            </div>
        `);
    }
}

function toggleContextMenu(target, position) {
    if(target) {
        $(contextMenu).empty();
        if(target == 'file') {
            contextMenuContent.file.forEach((e) => {
                let enabled = e[1];
                if (e[0] == 'Encrypt' && files[curContextMenuTargetIndex].password) {
                    enabled = false;
                }
                $(contextMenu).append(`
                    <div class="context-menu-item${enabled ? '' : ' context-menu-item-disabled'}">${e[0]}</div>
                `);
            });
        } else if(target == 'desktop') {
            contextMenuContent.desktop.forEach((e) => {
                let enabled = e[1];
                if (e[0] == 'Paste' && copyFileIndex == null) {
                    enabled = false;
                }
                $(contextMenu).append(`
                    <div class="context-menu-item${enabled ? '' : ' context-menu-item-disabled'}">${e[0]}</div>
                `);
            });
        }
        if (contextMenuDimensions) {
            posCorrection();
        }
        $(contextMenu).css({
            'left' : `${position.x}px`,
            'top' : `${position.y}px`,
            'display' : 'block'
        });
        if (!contextMenuDimensions) {
            contextMenuDimensions = [$(contextMenu).width(), $(contextMenu).height()];
            posCorrection();
        }
        function posCorrection() {
            if (position.x + contextMenuDimensions[0] > window.innerWidth) {
                position.x = window.innerWidth - contextMenuDimensions[0];
            }
            if (position.y + contextMenuDimensions[1] > window.innerHeight) {
                position.y = position.y - contextMenuDimensions[1];
            }
        }
        contextMenuActive = 1;
    } else {
        $(contextMenu).css('display', 'none');
        contextMenuActive = 0;
    }
}

function addSection(name) {
    if(sections[name]) {
        if(!sections[name].unlocked) {
            sections[name].unlocked = true;
            let sectionFileIndex  = null;
            for(let i = 0; i < files.length; i++) {
                if(files[i].name == sections[name].name) {
                    sectionFileIndex = i;
                    break;
                }
            }
            if(sectionFileIndex == null) {
                console.error(`File not found: "${sections[name].name}"`);
            } else {
                let unlockedCount = 0;
                let totalCount = 0;
                for (el in sections) {
                    totalCount++;
                    if (sections[el].unlocked) {
                        unlockedCount++;
                    }
                }
                if (unlockedCount == totalCount - 1) {
                    toggleHack();
                }
                if (unlockedCount == 1) {
                    addIcon(1, {
                        type: 'progress',
                        flicker: true
                    });
                }
                if (sections[name].unlocks) {
                    for (let i = 0; i < sections[name].unlocks.length; i++) {
                        enableContextMenuItem(sections[name].unlocks[i]);
                    }
                    addWindow(sectionFileIndex, {
                        type: 'notice',
                        featureMessage: sections[name].unlockMessage
                    });
                } else {
                    addWindow(sectionFileIndex, {
                        type: 'notice'
                    });
                }
                updateProgress();
            }
        }
    } else {
        console.error(`Invalid section call: "${name}"`);
    }
}

function focusWindow(el) {
    $('.desktop-window-focus').removeClass('desktop-window-focus');
    $(el).closest('.desktop-window').addClass('desktop-window-focus');
}

window.addEventListener('contextmenu', e => e.preventDefault());

const canvas = $('#glitch-canvas')[0];
const ctx = canvas.getContext('2d');

window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
    canvas.width = $(window).width();
    canvas.height = $(window).height();
}
resizeCanvas();

const maxGlitchIntensity = 100;
const glitchTransitionDuration = 10;
let glitchIntensity = 0;

function drawGlitch() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.fillStyle = Math.random() >= 0.5 ? `rgba(255, 255, 255, ${Math.random() * 0.1})` : `rgba(0, 0, 0, ${Math.random() * 0.1})`;
    for (let i = 0; i < glitchIntensity; i++) {
        ctx.beginPath();
        const curWidth = Math.random() * canvas.width / 3;
        ctx.rect((Math.random() * (canvas.width + curWidth)) - curWidth, Math.random() * canvas.height, curWidth, Math.random() * 20);
        ctx.fill();
    }
    ctx.restore();
    if(ransomMode) {
        window.requestAnimationFrame(drawGlitch);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

let ransomMode = false;
let timerInterval;

function toggleHack() {
    clearInterval(timerInterval);
    if(!ransomMode) {
        ransomMode = true;
        playAudio('glitchtransition');
        function triggerOverlay() {
            playAudio('glitchloop');
            $(desktopContainer).append(`
                <div class="ransomware-container flicker-in">
                    <div>
                        <div class="timer-container flicker-in" style="animation-delay: 0.25s;">
                            <p>Time till data wipe:</p>
                            <div class="rw-timer">00:00:00</div>
                        </div>
                        <div class="rw-info flicker-in" style="animation-delay: 0.4s;">
                            Your system has been compromised.
                            <br>
                            All data will be deleted unless the following instructions are followed.
                            <br><br>
                            <span class="step">Step 1:</span> Enter your email address.
                            <br><br>
                            <span class="step">Step 2:</span> Enter the password to your email.
                            <br><br>
                            <span class="step">Step 3:</span> Enter your phone number.
                            <br><br>
                            <span class="step">Step 4:</span> Click the "OK" button.
                            <br><br>
                            <span class="highlight">Failure to comply within the time limit will result in a data wipe.</span>
                        </div>
                    </div>
                    <div>
                        <form class="rw-form flicker-in" style="animation-delay: 0.5s;">
                            <input type="text" placeholder="Email">
                            <input type="text" placeholder="Password">
                            <input type="number" placeholder="Phone Number">
                            <input type="submit" value="OK">
                        </form>
                    </div>
                </div>
            `);
            $('.rw-form > input[type="submit"]').on('click', e => { 
                e.preventDefault();
                toggleHack();
            });
            const ransomwareTimer = $('.rw-timer');
            let curTime = [1, 30, 0];
            timerInterval = setInterval(function () {
                if (curTime[2] > 0) {
                    curTime[2]--;
                } else {
                    if (curTime[1] > 0) {
                        curTime[1]--;
                        curTime[2] = 99;
                    } else {
                        if (curTime[0] > 0) {
                            curTime[0]--;
                            curTime[1] = 59;
                            curTime[2] = 99;
                        }
                    }
                }
                $(ransomwareTimer).text(`${curTime[0].toString(10).padStart(2, '0')}:${curTime[1].toString(10).padStart(2, '0')}:${curTime[2].toString(10).padStart(2, '0')}`);
                if (curTime[0] == 0 && curTime[1] == 0 && curTime[2] == 0) {
                    toggleHack();
                }
            }, 10);
        }
        drawGlitch();
        let glitchInterval = setInterval(function () {
            if (glitchIntensity < maxGlitchIntensity) {
                glitchIntensity++;
            } else {
                clearInterval(glitchInterval);
                triggerOverlay();
            }
        }, 1000 * glitchTransitionDuration / maxGlitchIntensity);
    } else {
        $('.ransomware-container').addClass('flicker-out');
        ransomMode = false;
        playAudio('glitchloop');
        setTimeout(function() {
            $('.ransomware-container').remove();
            setTimeout(function() {
                addSection('value');
            }, 2000);
        }, 1000);
    }
}

const audioEl = $('.audio-effect')[0];
const sources = {
    beep : [
        'misc/audio/beep-1.mp3',
        'misc/audio/beep-2.mp3',
        'misc/audio/beep-3.mp3',
        'misc/audio/beep-4.mp3'
    ],
    mousedown : [
        'misc/audio/mousedown-1.mp3',
        'misc/audio/mousedown-2.mp3',
        'misc/audio/mousedown-3.mp3'
    ],
    mouseup : [
        'misc/audio/mouseup-1.mp3',
        'misc/audio/mouseup-2.mp3',
        'misc/audio/mouseup-3.mp3'
    ],
    keydown: [
        'misc/audio/keydown-1.mp3',
        'misc/audio/keydown-2.mp3',
        'misc/audio/keydown-3.mp3',
        'misc/audio/keydown-4.mp3'
    ],
    glitchtransition: ['misc/audio/glitch-transition.mp3'],
    glitchloop: ['misc/audio/glitch-loop.mp3'],
    alert: ['misc/audio/alert.mp3']
};
let canPlayAudio = true;
$(() => {
    for(sound in sources) {
        if (Array.isArray(sources[sound])) {
            for (let i = 0; i < sources[sound].length; i++) {
                $(desktopContainer).append(`<audio src="${sources[sound][i]}"${sound.indexOf('loop') != -1 ? ' loop' : ''}></audio>`);
            }
        } else {
            $(desktopContainer).append(`<audio src="${sources[sound]}"></audio>`);
        }
    }
});
function playAudio(type) {
    if (canPlayAudio && sources[type]) {
        let audioEl = null;
        if (Array.isArray(sources[type])) {
            audioEl = $(`audio[src="${sources[type][Math.floor(Math.random() * sources[type].length)]}"]`)[0];
        } else {
            audioEl = $(`audio[src="${sources[type]}"]`)[0];
        }
        if (audioEl) {
            audioEl.currentTime = 0;
            if (type.indexOf('loop') != -1 && !audioEl.paused) {
                audioEl.pause();
            } else {
                audioEl.play();
            }
            canPlayAudio = false;
            if (type == 'beep') {
                setTimeout(function() {
                    canPlayAudio = true;
                }, 80);
            } else {
                canPlayAudio = true;
            }
        }
    }
}