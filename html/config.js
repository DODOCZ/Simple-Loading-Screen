/* ================================================================
   DDCZ Simple Loading Screen — config.js
   ================================================================
   This is the ONLY file you need to edit.
   Do NOT touch index.html or client.lua.
   ================================================================ */

const CONFIG = {

    /* ── BRANDING ─────────────────────────────────────────────
       serverName : shown top-left next to the icon
       serverIp   : shown below the server name
       gameMode   : shown in the info bar (e.g. 'ROLEPLAY')     */
    serverName:  'YOUR SERVER NAME',
    serverIp:    'connect.yourserver.cz',
    gameMode:    'ROLEPLAY',

    /* ── LOGO (top-right) ──────────────────────────────────────
       Place your logo image in html/ and set the filename here.
       Supported: .png .jpg .webp (transparent PNG recommended)
       Leave as '' to show the placeholder box.                 */
    logoFile:    'logo.png',

    /* ── LINKS ─────────────────────────────────────────────────
       Clicking Discord/Website in the info bar opens the link.  */
    discordUrl:  'https://discord.gg/YOURCODE',
    websiteUrl:  'https://yourwebsite.com',

    /* ── MUSIC ─────────────────────────────────────────────────
       Place MP3 files in html/ and list filenames here.
       Also add each file to fxmanifest.lua -> files {}.
       musicVolume: 0.0 = silent, 1.0 = max  (0.05 = 5%)        */
    musicFiles: [
        'song.mp3',
        // 'song2.mp3',
    ],
    musicVolume: 0.05,

    /* ── GALLERY (fullscreen background) ───────────────────────
       IMAGE: place in html/gallery/ + add to fxmanifest
       VIDEO: place DIRECTLY in html/ + add to fxmanifest
              !! Videos must NOT be in html/gallery/ !!
       galleryInterval: ms each image slide is shown            */
    galleryInterval: 6000,
    gallery: [
        { type: 'image', src: 'gallery/photo1.jpg',  caption: '' },
        { type: 'video', src: 'video1.mp4',           caption: '' },
        { type: 'image', src: 'gallery/photo2.webp',  caption: '' },
        { type: 'image', src: 'gallery/photo3.png',   caption: '' },
        // { type: 'image', src: 'gallery/photo4.jpg', caption: '' },
        // { type: 'video', src: 'video2.mp4',         caption: '' },
    ],

    /* ── TIPS ───────────────────────────────────────────────────
       Shown below the loading bar. Rotate every tipInterval ms. */
    tipInterval: 6000,
    tips: [
        'TIP TEXT HERE - e.g. Use /help to see all available commands.',
        'TIP TEXT HERE - e.g. Report rule breakers via F8 or Discord.',
        'TIP TEXT HERE - e.g. Always stay in character during roleplay.',
        'TIP TEXT HERE - e.g. Admins are available 24/7 on Discord.',
        'TIP TEXT HERE - e.g. Make sure you are in a safe zone before logging off.',
    ],

    /* ── LOADING STEPS ──────────────────────────────────────── */
    steps: [
        'Loading resources...',
        'Connecting to database...',
        'Streaming map data...',
        'Syncing entities...',
        'Loading player data...',
        'Loading vehicles...',
        'Checking inventory...',
        'Running system checks...',
        'Finalizing connection...',
    ],
};
