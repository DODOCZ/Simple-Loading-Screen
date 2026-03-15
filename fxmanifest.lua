fx_version 'cerulean'
game 'gta5'

name        'ddcz-simpleloadingscreen'
description 'DDCZ Simple Loading Screen'
author      'DDCZ Dev Team'
version     '1.0.0'

loadscreen                 'html/index.html'
loadscreen_manual_shutdown 'yes'
loadscreen_cursor          'yes'

files {
    'html/index.html',
    'html/config.js',
    'html/logo.png',         -- your logo image

    -- Music (place in html/)
    'html/song.mp3',
    -- 'html/song2.mp3',

    -- Gallery images (place in html/gallery/)
    'html/gallery/photo1.jpg',
    'html/gallery/photo2.webp',
    'html/gallery/photo3.png',
    -- 'html/gallery/photo4.jpg',

    -- Videos (place DIRECTLY in html/, NOT in gallery/)
    'html/video1.mp4',
    -- 'html/video2.mp4',
}

client_script 'client.lua'
