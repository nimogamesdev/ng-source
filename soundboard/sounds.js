/*
taken from https://www.myinstants.com/en/trending/us/

(() => {
  return Array.from(document.querySelectorAll("#instants_container .instant")).map(el => ({
    name: el.querySelector(".instant-link")?.textContent.trim(),
    color: el.querySelector(".circle")?.style.backgroundColor,
    mp3: el.querySelector("button[onclick^='play']")?.getAttribute("onclick")?.match(/'([^']+\.mp3)'/)?.[1]
  }));
})()
*/
export const sounds =
    // SPLITTER ---------------
[
    {
        "name": "VINE BOOM SOUND",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom.mp3"
    },
    {
        "name": "Fahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhh_KcgAXfs.mp3"
    },
    {
        "name": "Fears to Fathom Notification Sound",
        "color": "rgb(10, 59, 51)",
        "mp3": "/media/sounds/fears-to-fathom-notification-sound.mp3"
    },
    {
        "name": "Fart",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/dry-fart.mp3"
    },
    {
        "name": "Among Us role reveal sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among-us-role-reveal-sound.mp3"
    },
    {
        "name": "rizz sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizz-sound-effect.mp3"
    },
    {
        "name": "Anime Wow",
        "color": "rgb(255, 51, 102)",
        "mp3": "/media/sounds/anime-wow-sound-effect.mp3"
    },
    {
        "name": "LIZARD BUTTON",
        "color": "rgb(127, 168, 255)",
        "mp3": "/media/sounds/lizard-button.mp3"
    },
    {
        "name": "FAHHHHHHHHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhhhhhhhhhhhhh.mp3"
    },
    {
        "name": "Apple Pay",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applepay.mp3"
    },
    {
        "name": "67",
        "color": "rgb(199, 255, 30)",
        "mp3": "/media/sounds/67_SQlv2Xv.mp3"
    },
    {
        "name": "Tuco: GET OUT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tuco-get-out.mp3"
    },
    {
        "name": "SpongeBob Fail",
        "color": "rgb(202, 195, 26)",
        "mp3": "/media/sounds/spongebob-fail.mp3"
    },
    {
        "name": "dun dun dunnnnnnnn",
        "color": "rgb(255, 44, 44)",
        "mp3": "/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3"
    },
    {
        "name": "Smoke Detector Beep",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smoke-detector-beep.mp3"
    },
    {
        "name": "Metal pipe clang",
        "color": "rgb(92, 92, 92)",
        "mp3": "/media/sounds/metal-pipe-clang.mp3"
    },
    {
        "name": "Звук литвина",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zvuk-litvina.mp3"
    },
    {
        "name": "Yo phone lining",
        "color": "rgb(95, 255, 46)",
        "mp3": "/media/sounds/yo-phone-lining.mp3"
    },
    {
        "name": "Nothing beats a jet2 holiday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nothing-beats-a-jet2-holiday_IeBO1Mr.mp3"
    },
    {
        "name": "Pew_Pew",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pew_pew-dknight556-1379997159.mp3"
    },
    {
        "name": "Sad Violin (the meme one)",
        "color": "rgb(0, 255, 51)",
        "mp3": "/media/sounds/tf_nemesis.mp3"
    },
    {
        "name": "Rizzbot laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rizzbot-laugh.mp3"
    },
    {
        "name": "dexter song 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dexter-song-2.mp3"
    },
    {
        "name": "Buzzer",
        "color": "rgb(204, 0, 153)",
        "mp3": "/media/sounds/wrong-answer-sound-effect.mp3"
    },
    {
        "name": "baby laughing meme",
        "color": "rgb(0, 233, 255)",
        "mp3": "/media/sounds/baby-laughing-meme.mp3"
    },
    {
        "name": "BRUH",
        "color": "rgb(255, 255, 51)",
        "mp3": "/media/sounds/movie_1.mp3"
    },
    {
        "name": "Galaxy meme",
        "color": "rgb(25, 75, 255)",
        "mp3": "/media/sounds/galaxy-meme.mp3"
    },
    {
        "name": "Discord Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-notification.mp3"
    },
    {
        "name": "Taco Bell Bong",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/taco-bell-bong-sfx.mp3"
    },
    {
        "name": "Fart Button",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/perfect-fart.mp3"
    },
    {
        "name": "italian brainrot ringtone",
        "color": "rgb(120, 38, 38)",
        "mp3": "/media/sounds/italian-brainrot-ringtone.mp3"
    },
    {
        "name": "Bone Crack",
        "color": "rgb(255, 255, 160)",
        "mp3": "/media/sounds/bone-crack.mp3"
    },
    {
        "name": "sad meow song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-meow-song.mp3"
    },
    {
        "name": "67 kid",
        "color": "rgb(255, 190, 40)",
        "mp3": "/media/sounds/67-kid.mp3"
    },
    {
        "name": "Death sound (Fortnite)",
        "color": "rgb(255, 0, 142)",
        "mp3": "/media/sounds/tmp_7901-951678082.mp3"
    },
    {
        "name": "Punch Sound",
        "color": "rgb(42, 141, 255)",
        "mp3": "/media/sounds/punch-gaming-sound-effect-hd_RzlG1GE.mp3"
    },
    {
        "name": "67 kid",
        "color": "rgb(255, 190, 40)",
        "mp3": "/media/sounds/67-kid.mp3"
    },
    {
        "name": "YAAAAAAAAY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kids-saying-yay-sound-effect_3.mp3"
    },
    {
        "name": "The Undertaker Bell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertakers-bell_2UwFCIe.mp3"
    },
    {
        "name": "clash royale hog rida",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/clash-royale-hog-rida.mp3"
    },
    {
        "name": "Hub Intro Sound",
        "color": "rgb(255, 150, 30)",
        "mp3": "/media/sounds/hub-intro-sound.mp3"
    },
    {
        "name": "Long brain fart",
        "color": "rgb(0, 127, 255)",
        "mp3": "/media/sounds/long-brain-fart.mp3"
    },
    {
        "name": "Prowler Sound Effect",
        "color": "rgb(101, 32, 124)",
        "mp3": "/media/sounds/prowler-sound-effect_6bXErot.mp3"
    },
    {
        "name": "ding sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2.mp3"
    },
    {
        "name": "cat laugh meme 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-laugh-meme-1.mp3"
    },
    {
        "name": "fahh but louder",
        "color": "rgb(0, 255, 98)",
        "mp3": "/media/sounds/fahh-but-louder.mp3"
    },
    {
        "name": "ACK",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ack.mp3"
    },
    {
        "name": "-999 Social Credit Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/999-social-credit-siren.mp3"
    },
    {
        "name": "GopGopGop",
        "color": "rgb(255, 250, 206)",
        "mp3": "/media/sounds/gopgopgop.mp3"
    },
    {
        "name": "FAHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhhhh.mp3"
    },
    {
        "name": "oh my god bro oh hell nah man",
        "color": "rgb(7, 255, 6)",
        "mp3": "/media/sounds/oh-my-god-bro-oh-hell-nah-man.mp3"
    },
    {
        "name": "anime ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-ahh.mp3"
    },
    {
        "name": "spiderman meme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song.mp3"
    },
    {
        "name": "a few moments later sponge bob sfx fun",
        "color": "rgb(6, 255, 39)",
        "mp3": "/media/sounds/a-few-moments-later-sponge-bob-sfx-fun.mp3"
    },
    {
        "name": "YOUR PHONE IS RINGING PICK IT UP NOW",
        "color": "rgb(2, 0, 23)",
        "mp3": "/media/sounds/your-phone-is-ringing-pick-it-up-now.mp3"
    },
    {
        "name": "FAAAH",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/faaah.mp3"
    },
    {
        "name": "Fart Meme Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-meme-sound.mp3"
    },
    {
        "name": "lack of a father figure?",
        "color": "rgb(211, 16, 255)",
        "mp3": "/media/sounds/lack-of-a-father-figure.mp3"
    },
    {
        "name": "sexy back",
        "color": "rgb(0, 218, 255)",
        "mp3": "/media/sounds/sexy-back.mp3"
    },
    {
        "name": "asian meme huh?",
        "color": "rgb(186, 255, 255)",
        "mp3": "/media/sounds/huh_37bAoRo.mp3"
    },
    {
        "name": "start digging in your butt twin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/start-digging-in-your-butt-twin.mp3"
    },
    {
        "name": "instagram thud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-sound-effect_KT89XIq.mp3"
    },
    {
        "name": "Huh? Ceeday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceeday-huh-sound-effect.mp3"
    },
    {
        "name": "Pluh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pluh.mp3"
    },
    {
        "name": "fart with reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb.mp3"
    },
    {
        "name": "Emotional Damage Meme",
        "color": "rgb(229, 0, 0)",
        "mp3": "/media/sounds/emotional-damage-meme.mp3"
    },
    {
        "name": "fahhh pump sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhh-pump-sound.mp3"
    },
    {
        "name": "HAha funny laugh",
        "color": "rgb(70, 255, 24)",
        "mp3": "/media/sounds/ny-video-online-audio-converter.mp3"
    },
    {
        "name": "let me know",
        "color": "rgb(255, 22, 208)",
        "mp3": "/media/sounds/let-me-know.mp3"
    },
    {
        "name": "Звук фотоаппарата",
        "color": "rgb(225, 163, 255)",
        "mp3": "/media/sounds/zvuk-fotoapparata.mp3"
    },
    {
        "name": "Shocked sound",
        "color": "rgb(255, 238, 135)",
        "mp3": "/media/sounds/shocked-sound-effect.mp3"
    },
    {
        "name": "Door Knocking SOUND EFFECT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small.mp3"
    },
    {
        "name": "Звук фотоаппарата",
        "color": "rgb(225, 163, 255)",
        "mp3": "/media/sounds/zvuk-fotoapparata.mp3"
    },
    {
        "name": "jixaw metal pipe falling sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jixaw-metal-pipe-falling-sound.mp3"
    },
    {
        "name": "AOL Dial-Up",
        "color": "rgb(4, 0, 109)",
        "mp3": "/media/sounds/aoldialup1.mp3"
    },
    {
        "name": "*Snore* mimimimimimi",
        "color": "rgb(173, 255, 255)",
        "mp3": "/media/sounds/snore-mimimimimimi.mp3"
    },
    {
        "name": "Oh My God Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-meme.mp3"
    },
    {
        "name": "goku drip",
        "color": "rgb(182, 255, 56)",
        "mp3": "/media/sounds/drip-goku-meme-song-original-dragon-ball-super-music-clash-of-gods-in-description.mp3"
    },
    {
        "name": "Huh? Ceeday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceeday-huh-sound-effect.mp3"
    },
    {
        "name": "Mario Jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/maro-jump-sound-effect_1.mp3"
    },
    {
        "name": "\"Aw Shit! Here go again.\" CJ from GTA SA",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3"
    },
    {
        "name": "Gta v notification",
        "color": "rgb(69, 255, 0)",
        "mp3": "/media/sounds/gta-v-notification.mp3"
    },
    {
        "name": "Womp Womp Womp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/downer_noise.mp3"
    },
    {
        "name": "Apple Pay Sound",
        "color": "rgb(33, 77, 255)",
        "mp3": "/media/sounds/apple-pay-sound.mp3"
    },
    {
        "name": "YIPPEEEEEEEEEEEEEE",
        "color": "rgb(40, 137, 255)",
        "mp3": "/media/sounds/yippeeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Whip",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crack_the_whip.mp3"
    },
    {
        "name": "Steal a Brainrot - Dragon Cannelloni",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-dragon-cannelloni.mp3"
    },
    {
        "name": "Censor Beep 1",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-1.mp3"
    },
    {
        "name": "outro song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/outro-song_oqu8zAg.mp3"
    },
    {
        "name": "GunShottttt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshotjbudden.mp3"
    },
    {
        "name": "ROBLOX oof",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound_1.mp3"
    },
    {
        "name": "MLG AIR HORN!!!!!!!!!!!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mlg-airhorn.mp3"
    },
    {
        "name": "Syfm",
        "color": "rgb(145, 183, 255)",
        "mp3": "/media/sounds/syfm.mp3"
    },
    {
        "name": "spongebob boowomp",
        "color": "rgb(255, 249, 26)",
        "mp3": "/media/sounds/spongebob-boowomp.mp3"
    },
    {
        "name": "DRIVING IN MY CAR (asgore",
        "color": "rgb(146, 145, 32)",
        "mp3": "/media/sounds/driving-in-my-car-asgore_RhVxJjP.mp3"
    },
    {
        "name": "he he he ha clash royale (DEEP FRIED)",
        "color": "rgb(88, 85, 255)",
        "mp3": "/media/sounds/he-he-he-ha-clash-royale-deep-fried.mp3"
    },
    {
        "name": "yeah boiii i i i",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeah-boiii-i-i-i.mp3"
    },
    {
        "name": "lego breaking",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/lego-breaking.mp3"
    },
    {
        "name": "ЪЭХ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ekh.mp3"
    },
    {
        "name": "Evolution Mega Knight",
        "color": "rgb(206, 47, 255)",
        "mp3": "/media/sounds/evolution-mega-knight.mp3"
    },
    {
        "name": "Mac Quack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mac-quack.mp3"
    },
    {
        "name": "Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/are-you-out-of-your-mind-greenscreen-change-quality-and-end-wont-cut-off_2.mp3"
    },
    {
        "name": "RUN vine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect.mp3"
    },
    {
        "name": "67 normal",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/67-normal.mp3"
    },
    {
        "name": "Meme final",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-de-creditos-finales.mp3"
    },
    {
        "name": "FNAF Jumpscare Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-full-scream-sound_2.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "Bad to the Bone Meme",
        "color": "rgb(204, 255, 239)",
        "mp3": "/media/sounds/bad-to-the-bone-meme.mp3"
    },
    {
        "name": "Lobotomy Sound Effect",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/lobotomy-sound-effect.mp3"
    },
    {
        "name": "discord call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-call-sound.mp3"
    },
    {
        "name": "ALLAHU AKBAR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/allahu-akbar_ffRVW9R.mp3"
    },
    {
        "name": "'What' Bottom Text Meme (Sanctuary Guardian) - S",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3"
    },
    {
        "name": "Metal Gear Solid Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tindeck_1.mp3"
    },
    {
        "name": "slap hard",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-soundmaster13-49669815_4L20wGP.mp3"
    },
    {
        "name": "Explosion meme",
        "color": "rgb(255, 201, 52)",
        "mp3": "/media/sounds/explosion-meme_dTCfAHs.mp3"
    },
    {
        "name": "what da dog doin",
        "color": "rgb(113, 105, 255)",
        "mp3": "/media/sounds/yt1s_wU4BGgD.mp3"
    },
    {
        "name": "Hornet GIT GUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hornet_gitgud.mp3"
    },
    {
        "name": "doot doot 6 7",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/doot-doot-6-7.mp3"
    },
    {
        "name": "Soda Pop - Kpop Demon Hunters - Saja Boys - MP3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/soda-pop-kpop-demon-hunters-saja-boys-mp3.mp3"
    },
    {
        "name": "You are an idiot!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-are-an-idiot.mp3"
    },
    {
        "name": "Ngakak laugh annoying",
        "color": "rgb(214, 255, 142)",
        "mp3": "/media/sounds/ngakak-laugh-annoying.mp3"
    },
    {
        "name": "oh no no no laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-no-laugh.mp3"
    },
    {
        "name": "Clash Royale Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash-royale-start-up-sound.mp3"
    },
    {
        "name": "Windows XP Error",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/erro.mp3"
    },
    {
        "name": "Awkward cricket",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-cricket-sound-effect.mp3"
    },
    {
        "name": "Chalo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/chalo.mp3"
    },
    {
        "name": "Fart Meme Sound (Better and louder)",
        "color": "rgb(146, 93, 52)",
        "mp3": "/media/sounds/fartmeme.mp3"
    },
    {
        "name": "Tung tung sahur",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tung-tung-sahur.mp3"
    },
    {
        "name": "Strawberry elephant spawn troll steal a brainrot",
        "color": "rgb(56, 242, 255)",
        "mp3": "/media/sounds/strawberry-elephant-spawn-troll-steal-a-brainrot.mp3"
    },
    {
        "name": "BRUH sound effect!",
        "color": "rgb(49, 255, 6)",
        "mp3": "/media/sounds/bruh-sound-effect_WstdzdM.mp3"
    },
    {
        "name": "Discord Leave Noise",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/discord-leave-noise.mp3"
    },
    {
        "name": "Lizard",
        "color": "rgb(11, 192, 53)",
        "mp3": "/media/sounds/lizard.mp3"
    },
    {
        "name": "Wow Anime meme",
        "color": "rgb(255, 60, 0)",
        "mp3": "/media/sounds/anime-wow-sound-effect-mp3cut.mp3"
    },
    {
        "name": "Chipmunk Laugh",
        "color": "rgb(241, 255, 0)",
        "mp3": "/media/sounds/funny_82hiegE.mp3"
    },
    {
        "name": "Jeopardy Theme Song!",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/jeopardy-themelq.mp3"
    },
    {
        "name": "ENRIQUE!",
        "color": "rgb(45, 129, 255)",
        "mp3": "/media/sounds/enrique.mp3"
    },
    {
        "name": "Oh Brother, This Guy Stinks!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks.mp3"
    },
    {
        "name": "MICHAEL DONT LEAVE ME HERE",
        "color": "rgb(131, 0, 0)",
        "mp3": "/media/sounds/michael-dont-leave-me-here.mp3"
    },
    {
        "name": "Sponge Stank Noise",
        "color": "rgb(255, 11, 156)",
        "mp3": "/media/sounds/sponge-stank-noise.mp3"
    },
    {
        "name": "nuclear diarrhea",
        "color": "rgb(109, 58, 10)",
        "mp3": "/media/sounds/nuclear-diarrhea.mp3"
    },
    {
        "name": "SYFM LOUD",
        "color": "rgb(58, 0, 255)",
        "mp3": "/media/sounds/syfm-loud.mp3"
    },
    {
        "name": "Pop SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pop_7e9Is8L.mp3"
    },
    {
        "name": "Extremely loud incorrect buzzer",
        "color": "rgb(173, 255, 96)",
        "mp3": "/media/sounds/extremely-loud-incorrect-buzzer_0cDaG20.mp3"
    },
    {
        "name": "Bruh meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/movie_1_C2K5NH0.mp3"
    },
    {
        "name": "KPop Demon Hunters URRRAH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kpop-demon-hunters-urrrah.mp3"
    },
    {
        "name": "FBI OPEN UP (with explosion)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up_dwLhIFf.mp3"
    },
    {
        "name": "DJ Airhorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-airhorn-sound-effect-kingbeatz_1.mp3"
    },
    {
        "name": "Laughing dog meme",
        "color": "rgb(139, 0, 0)",
        "mp3": "/media/sounds/laughing-dog-meme.mp3"
    },
    {
        "name": "Bruh meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/movie_1_C2K5NH0.mp3"
    },
    {
        "name": "brain fart slowed",
        "color": "rgb(141, 85, 60)",
        "mp3": "/media/sounds/brain-fart-slowed.mp3"
    },
    {
        "name": "heavenly musiic",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heavenly-music-gaming-sound-effect-hd-mp3cut.mp3"
    },
    {
        "name": "Asian Gong & Music",
        "color": "rgb(233, 255, 0)",
        "mp3": "/media/sounds/asian-gong-music.mp3"
    },
    {
        "name": "Huh Cat",
        "color": "rgb(0, 72, 255)",
        "mp3": "/media/sounds/huh-cat.mp3"
    },
    {
        "name": "Wrong Answer Buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-answer-buzzer.mp3"
    },
    {
        "name": "MUSTARDDDDDDDD",
        "color": "rgb(236, 211, 52)",
        "mp3": "/media/sounds/mustardddddddd.mp3"
    },
    {
        "name": "Hello there- obi Wan",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obi-wan-hello-there.mp3"
    },
    {
        "name": "running sound",
        "color": "rgb(93, 255, 202)",
        "mp3": "/media/sounds/1-108.mp3"
    },
    {
        "name": "We do not care (TikTok Sound)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/we-do-not-care_phB0mEB.mp3"
    },
    {
        "name": "Wait wait wait what the hell legend sound",
        "color": "rgb(185, 63, 255)",
        "mp3": "/media/sounds/wait-wait-wait-what-the-hell-legend-sound.mp3"
    },
    {
        "name": "surprise motherfucker!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/surprise-motherfucker_Wd1bsed.mp3"
    },
    {
        "name": "the weeknd rizzz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-weeknd-rizzz.mp3"
    },
    {
        "name": "Oh No No No Tik Tok Song Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-no-no-tik-tok-song-sound-effect.mp3"
    },
    {
        "name": "iPhone Notification",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/notification_o14egLP.mp3"
    },
    {
        "name": "romanceeeeeeeeeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/romanceeeeeeeeeeeeee.mp3"
    },
    {
        "name": "Lagging/loading",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3"
    },
    {
        "name": "Black Ops 3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/call-of-duty-black-ops-iii-activision-loading-sound-audiotrimmer.mp3"
    },
    {
        "name": "What The Hell Meme Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-hell-meme-sound-effect.mp3"
    },
    {
        "name": "GTA V - Wasted",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/gta-v-death-sound-effect-102.mp3"
    },
    {
        "name": "Amongus Sus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/53b1bab6-a8c3-4a1a-82db-7110ce1c29ef_6KNDGWD.mp3"
    },
    {
        "name": "Gay meme",
        "color": "rgb(116, 255, 160)",
        "mp3": "/media/sounds/gay-meme.mp3"
    },
    {
        "name": "Mouse Click Sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/mouse-click-sound.mp3"
    },
    {
        "name": "minecraft eating sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nom-nom-nom_gPJiWn4.mp3"
    },
    {
        "name": "Rehehehe",
        "color": "rgb(108, 255, 150)",
        "mp3": "/media/sounds/rehehehe.mp3"
    },
    {
        "name": "Careless Whisper",
        "color": "rgb(153, 255, 204)",
        "mp3": "/media/sounds/careless_whispers.mp3"
    },
    {
        "name": "HL2 Stalker Scream",
        "color": "rgb(255, 199, 228)",
        "mp3": "/media/sounds/hl2-stalker-scream.mp3"
    },
    {
        "name": "Correct Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/correct.mp3"
    },
    {
        "name": "Strawberry Elephant",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strawberry-elephant_nQHaP3H.mp3"
    },
    {
        "name": "MAN SNORING MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-snoring-meme_ctrllNn.mp3"
    },
    {
        "name": "Dog Clicker",
        "color": "rgb(53, 7, 255)",
        "mp3": "/media/sounds/dog-clicker_IygBqAk.mp3"
    },
    {
        "name": "Core Sound Effect",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/core-sound-effect.mp3"
    },
    {
        "name": "fart with extra reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-extra-reverb.mp3"
    },
    {
        "name": "Careless Whisper",
        "color": "rgb(153, 255, 204)",
        "mp3": "/media/sounds/careless_whispers.mp3"
    },
    {
        "name": "f1 Radio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/f1-radio_QLwLncI.mp3"
    },
    {
        "name": "NFL Bass Boosted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nfl.mp3"
    },
    {
        "name": "HL2 Stalker Scream",
        "color": "rgb(255, 199, 228)",
        "mp3": "/media/sounds/hl2-stalker-scream.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "/media/sounds/wet-fart_1.mp3"
    },
    {
        "name": "danger alarm sound effect meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-alarm-sound-effect-meme.mp3"
    },
    {
        "name": "Rat dance Music",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rat-dance-music.mp3"
    },
    {
        "name": "Camera Flash Sound Effect",
        "color": "rgb(255, 132, 224)",
        "mp3": "/media/sounds/camera-flash-sound-effect.mp3"
    },
    {
        "name": "and his name is John Cenaaaaaa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1.mp3"
    },
    {
        "name": "Hey let her go!",
        "color": "rgb(42, 255, 0)",
        "mp3": "/media/sounds/let-her-go.mp3"
    },
    {
        "name": "PUMP SHOTGUN FORTNITE LOUD",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pump-shotgun-fortnite-loud.mp3"
    },
    {
        "name": "Law and Order DUN DUN",
        "color": "rgb(204, 153, 102)",
        "mp3": "/media/sounds/dun_dun_1.mp3"
    },
    {
        "name": "Fnaf 1 music box",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-1-music-box.mp3"
    },
    {
        "name": "Dog Clicker",
        "color": "rgb(53, 7, 255)",
        "mp3": "/media/sounds/dog-clicker_IygBqAk.mp3"
    },
    {
        "name": "Tom scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/toms-screams.mp3"
    },
    {
        "name": "Duck toy sound",
        "color": "rgb(255, 222, 9)",
        "mp3": "/media/sounds/duck-toy-sound.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "discord join call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yt1s_nYWSz5R.mp3"
    },
    {
        "name": "Elevator Music Background",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/musica-elevador-short.mp3"
    },
    {
        "name": "AUUGHHH",
        "color": "rgb(0, 33, 255)",
        "mp3": "/media/sounds/auughhh.mp3"
    },
    {
        "name": "nelly ahh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ahh_gLSTOu4.mp3"
    },
    {
        "name": "oh shit not good",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wcgertcz074.mp3"
    },
    {
        "name": "metal gear alert sound effect",
        "color": "rgb(127, 185, 255)",
        "mp3": "/media/sounds/metal-gear-alert-sound-effect_XKoHReZ.mp3"
    },
    {
        "name": "Sad Trombone",
        "color": "rgb(255, 204, 51)",
        "mp3": "/media/sounds/sadtrombone.swf.mp3"
    },
    {
        "name": "Roblox Explosion Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-explosion-sound.mp3"
    },
    {
        "name": "you've got mail",
        "color": "rgb(102, 0, 255)",
        "mp3": "/media/sounds/yougotmail.mp3"
    },
    {
        "name": "bonk doge",
        "color": "rgb(255, 201, 121)",
        "mp3": "/media/sounds/bonk_7zPAD7C.mp3"
    },
    {
        "name": "SUBWAY SURFERS BASS BOOSTED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subway-surfers-bass-boosted.mp3"
    },
    {
        "name": "Keyboard Typing Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-typing-sound-effect.mp3"
    },
    {
        "name": "Laughing dog meme",
        "color": "rgb(139, 0, 0)",
        "mp3": "/media/sounds/laughing-dog-meme.mp3"
    },
    {
        "name": "HI HI HI HA clash royale",
        "color": "rgb(255, 250, 76)",
        "mp3": "/media/sounds/hi-hi-hi-ha-clash-royale.mp3"
    },
    {
        "name": "No no Wait Wait!",
        "color": "rgb(0, 255, 11)",
        "mp3": "/media/sounds/no-no-wait-wait.mp3"
    },
    {
        "name": "MI BOMBO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mi-bombo.mp3"
    },
    {
        "name": "They ask you how you are meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/they-ask-you-how-you-are-and-you-just-have-to-say-that-youre-fine-sound-effect_IgYM1CV.mp3"
    },
    {
        "name": "ta-da!",
        "color": "rgb(0, 145, 255)",
        "mp3": "/media/sounds/ta-da_yrvBrlS.mp3"
    },
    {
        "name": "Load and Gunshot Fire",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot-one.mp3"
    },
    {
        "name": "Technoloyia Technologia Tecnologia",
        "color": "rgb(117, 255, 151)",
        "mp3": "/media/sounds/technoloyia-technologia-tecnologia.mp3"
    },
    {
        "name": "No no Wait Wait!",
        "color": "rgb(0, 255, 11)",
        "mp3": "/media/sounds/no-no-wait-wait.mp3"
    },
    {
        "name": "Rat dance Music",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/rat-dance-music.mp3"
    },
    {
        "name": "FAHHHHHH",
        "color": "rgb(255, 63, 201)",
        "mp3": "/media/sounds/fahhhhhh.mp3"
    },
    {
        "name": "They ask you how you are meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/they-ask-you-how-you-are-and-you-just-have-to-say-that-youre-fine-sound-effect_IgYM1CV.mp3"
    },
    {
        "name": "Money SoundFX",
        "color": "rgb(255, 253, 0)",
        "mp3": "/media/sounds/money-soundfx.mp3"
    },
    {
        "name": "FBI open UP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fbi-open-up-sfx.mp3"
    },
    {
        "name": "wet fart",
        "color": "rgb(204, 102, 0)",
        "mp3": "/media/sounds/wet-fart_1.mp3"
    },
    {
        "name": "The Price is Right Losing Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-price-is-right-losing-horn.mp3"
    },
    {
        "name": "nope",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01_1.mp3"
    },
    {
        "name": "yippee tbh",
        "color": "rgb(30, 125, 36)",
        "mp3": "/media/sounds/yippee-tbh.mp3"
    },
    {
        "name": "OH SHIT! (echo)",
        "color": "rgb(255, 0, 255)",
        "mp3": "/media/sounds/oh-shit_4.mp3"
    },
    {
        "name": "mario fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mario-meme.mp3"
    },
    {
        "name": "I Want To Be Ninja",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-want-to-be-ninja.mp3"
    },
    {
        "name": "It was at this moment he knew",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heknew.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "Franklin ringtone",
        "color": "rgb(0, 131, 163)",
        "mp3": "/media/sounds/franklin-ringtone.mp3"
    },
    {
        "name": "Bad to the Bone Riff",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bad-to-the-bone.mp3"
    },
    {
        "name": "Meow 1",
        "color": "rgb(202, 155, 0)",
        "mp3": "/media/sounds/meow-1.mp3"
    },
    {
        "name": "Clapping",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/aplausos_2.mp3"
    },
    {
        "name": "Electric Zoo",
        "color": "rgb(248, 255, 58)",
        "mp3": "/media/sounds/spongebob-squarepants-the-yellow-album-21-electric-zoo-audiotrimmer.mp3"
    },
    {
        "name": "sonic ring",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/26f8b9_sonic_ring_sound_effect.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
    },
    {
        "name": "Roblox Hi Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-hi-sound.mp3"
    },
    {
        "name": "FAHHHH 2",
        "color": "rgb(100, 38, 255)",
        "mp3": "/media/sounds/fahhhh-2.mp3"
    },
    {
        "name": "Low honor RDR 2",
        "color": "rgb(128, 0, 0)",
        "mp3": "/media/sounds/low-honor-rdr-2.mp3"
    },
    {
        "name": "WIDE PUTIN MEME",
        "color": "rgb(33, 255, 100)",
        "mp3": "/media/sounds/my-movie-6_0RlWMvM.mp3"
    },
    {
        "name": "oiia oiia Sound",
        "color": "rgb(136, 126, 36)",
        "mp3": "/media/sounds/oiia-oiia-sound.mp3"
    },
    {
        "name": "Jet2holiday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jet2holiday.mp3"
    },
    {
        "name": "DEJA VU MEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deja-vu.mp3"
    },
    {
        "name": "discord troll",
        "color": "rgb(0, 255, 17)",
        "mp3": "/media/sounds/mikejebait-3.mp3"
    },
    {
        "name": "vine boom bass boost sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boost-sound-effect.mp3"
    },
    {
        "name": "correct (ding)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_1.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "plankton augh",
        "color": "rgb(49, 108, 87)",
        "mp3": "/media/sounds/plankton-augh.mp3"
    },
    {
        "name": "angry roblox",
        "color": "rgb(129, 26, 26)",
        "mp3": "/media/sounds/angry-roblox.mp3"
    },
    {
        "name": "hold up tiktok",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/hold-up-tiktok.mp3"
    },
    {
        "name": "crying goblin clash royale",
        "color": "rgb(140, 255, 0)",
        "mp3": "/media/sounds/crying-goblin-clash-royale.mp3"
    },
    {
        "name": "w speed (fahrad)",
        "color": "rgb(144, 255, 96)",
        "mp3": "/media/sounds/w-speed-fahrad.mp3"
    },
    {
        "name": "WIDE PUTIN MEME",
        "color": "rgb(33, 255, 100)",
        "mp3": "/media/sounds/my-movie-6_0RlWMvM.mp3"
    },
    {
        "name": "Minecraft Click",
        "color": "rgb(255, 102, 153)",
        "mp3": "/media/sounds/minecraft_click.mp3"
    },
    {
        "name": "I Want To Be Ninja",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-want-to-be-ninja.mp3"
    },
    {
        "name": "discordjoin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord-sounds.mp3"
    },
    {
        "name": "Meow 1",
        "color": "rgb(202, 155, 0)",
        "mp3": "/media/sounds/meow-1.mp3"
    },
    {
        "name": "RAAAAH",
        "color": "rgb(255, 84, 84)",
        "mp3": "/media/sounds/raaaah.mp3"
    },
    {
        "name": "windows xp shutdown",
        "color": "rgb(102, 102, 255)",
        "mp3": "/media/sounds/preview_4.mp3"
    },
    {
        "name": "indian song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/indian-song.mp3"
    },
    {
        "name": "correct (ding)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_1.mp3"
    },
    {
        "name": "Jet2holiday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jet2holiday.mp3"
    },
    {
        "name": "Mr Krabs Start diggin in your butt twin",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/mr-krabs-start-diggin-in-your-butt-twin.mp3"
    },
    {
        "name": "Big Back-Tiktok",
        "color": "rgb(29, 76, 255)",
        "mp3": "/media/sounds/big-back-tiktok.mp3"
    },
    {
        "name": "AMOGUS SCREAMING",
        "color": "rgb(255, 214, 49)",
        "mp3": "/media/sounds/guy-yelling-among-us-sound-effect.mp3"
    },
    {
        "name": "Pookie Bear",
        "color": "rgb(255, 0, 200)",
        "mp3": "/media/sounds/pookie-bear.mp3"
    },
    {
        "name": "\"Fish!\" you, me, gas station clip",
        "color": "rgb(92, 129, 213)",
        "mp3": "/media/sounds/fish-you-me-gas-station-clip.mp3"
    },
    {
        "name": "Heyy daddyyyyy⁓ omg",
        "color": "rgb(255, 163, 186)",
        "mp3": "/media/sounds/heyy-daddyyyyy-omg.mp3"
    },
    {
        "name": "gah dayum",
        "color": "rgb(6, 0, 107)",
        "mp3": "/media/sounds/gah-dayum.mp3"
    },
    {
        "name": "TU TU TU DU MAX VERSTAPPEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tu-tu-tu-du-max-verstappen.mp3"
    },
    {
        "name": "(mafioso) scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-scream.mp3"
    },
    {
        "name": "Another One DJ Khaled",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/another-one_dPvHt2Z.mp3"
    },
    {
        "name": "SPONGEBOB A FEW MOMENTS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-few-moments-later-hd.mp3"
    },
    {
        "name": "Sonic.exe scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sonic-exe-scream.mp3"
    },
    {
        "name": "Deltarune Explosion",
        "color": "rgb(52, 106, 255)",
        "mp3": "/media/sounds/deltarune-explosion.mp3"
    },
    {
        "name": "Yesss king",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yesss-king.mp3"
    },
    {
        "name": "Snoop Dogg meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpbxydyrz3.mp3"
    },
    {
        "name": "omg bruh oh hell nah",
        "color": "rgb(164, 0, 255)",
        "mp3": "/media/sounds/omg-bruh-oh-hell-nah.mp3"
    },
    {
        "name": "Popular Riser metallic sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/popular-riser-metallic-sound-effect.mp3"
    },
    {
        "name": "Hey 67 kid",
        "color": "rgb(130, 255, 238)",
        "mp3": "/media/sounds/hey-67-kid.mp3"
    },
    {
        "name": "plankton augh",
        "color": "rgb(49, 108, 87)",
        "mp3": "/media/sounds/plankton-augh.mp3"
    },
    {
        "name": "Family Feud YES Ding",
        "color": "rgb(0, 163, 2)",
        "mp3": "/media/sounds/family-feud-good-answer.mp3"
    },
    {
        "name": "Shut up!",
        "color": "rgb(204, 102, 153)",
        "mp3": "/media/sounds/shutup.swf.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "Awkward Moment",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/awkward-moment.mp3"
    },
    {
        "name": "Snoop Dogg meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpbxydyrz3.mp3"
    },
    {
        "name": "plankton augh",
        "color": "rgb(49, 108, 87)",
        "mp3": "/media/sounds/plankton-augh.mp3"
    },
    {
        "name": "Family Feud YES Ding",
        "color": "rgb(0, 163, 2)",
        "mp3": "/media/sounds/family-feud-good-answer.mp3"
    },
    {
        "name": "Reload Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunreload.mp3"
    },
    {
        "name": "Yesss king",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yesss-king.mp3"
    },
    {
        "name": "Hey 67 kid",
        "color": "rgb(130, 255, 238)",
        "mp3": "/media/sounds/hey-67-kid.mp3"
    },
    {
        "name": "FNAF Yay Children",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crowd_small_chil_ec049202_9klCwI6.mp3"
    },
    {
        "name": "moving stone",
        "color": "rgb(65, 77, 76)",
        "mp3": "/media/sounds/moving-stone.mp3"
    },
    {
        "name": "Spongebob disappointed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-disappointed-sound-effect.mp3"
    },
    {
        "name": "roblox horror",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-not-open.mp3"
    },
    {
        "name": "I got this meme sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-got-this-meme-sound.mp3"
    },
    {
        "name": "\"My leg!\" Fish",
        "color": "rgb(255, 204, 0)",
        "mp3": "/media/sounds/my-leg_2.mp3"
    },
    {
        "name": "Uncle Ruckus",
        "color": "rgb(142, 235, 255)",
        "mp3": "/media/sounds/uncle-ruckus.mp3"
    },
    {
        "name": "Som do Zap Zap estourado",
        "color": "rgb(3, 250, 63)",
        "mp3": "/media/sounds/som-do-zap-zap-estourado.mp3"
    },
    {
        "name": "Гудок поезда",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gudok-poezda.mp3"
    },
    {
        "name": "Doge bonk",
        "color": "rgb(67, 179, 180)",
        "mp3": "/media/sounds/bonk_BEtiM8g.mp3"
    },
    {
        "name": "Dolphin Censor",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/spongebob-dolphin-censor.mp3"
    },
    {
        "name": "Loud Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart_2.mp3"
    },
    {
        "name": "Windows XP - Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-xp-startup.mp3"
    },
    {
        "name": "roblox bye",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-bye.mp3"
    },
    {
        "name": "squidward walking sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/squidward-walking-sound.mp3"
    },
    {
        "name": "THE YANKEES WIN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yankees-win.mp3"
    },
    {
        "name": "Minecraft Damage",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/minecraft_hit_soundmp3converter.mp3"
    },
    {
        "name": "CINEMATIC SUSPENSE RISER",
        "color": "rgb(132, 66, 255)",
        "mp3": "/media/sounds/cinematic-suspense-riser.mp3"
    },
    {
        "name": "tung tung tung tung sahur",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tung-tung-tung-tung-sahur.mp3"
    },
    {
        "name": "Mr. Tenna says IT'S TV TIME",
        "color": "rgb(255, 171, 171)",
        "mp3": "/media/sounds/mr-tenna-says-its-tv-time.mp3"
    },
    {
        "name": "Sneaky Golem",
        "color": "rgb(69, 11, 120)",
        "mp3": "/media/sounds/sneaky-golem.mp3"
    },
    {
        "name": "FAAHHHHHH",
        "color": "rgb(0, 255, 251)",
        "mp3": "/media/sounds/faahhhhhh.mp3"
    },
    {
        "name": "Saja boys \"MMMRAH\" but clean",
        "color": "rgb(175, 25, 255)",
        "mp3": "/media/sounds/saja-boys-mmmrah-but-clean.mp3"
    },
    {
        "name": "Wilhelm Scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/wilhelmscream.mp3"
    },
    {
        "name": "DAMN!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/friday-damn.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "check mark",
        "color": "rgb(255, 129, 33)",
        "mp3": "/media/sounds/check-mark_oPG7Xo5.mp3"
    },
    {
        "name": "Noooo!",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/nooo.swf.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "Windows XP - Startup Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-xp-startup.mp3"
    },
    {
        "name": "Cave Ambience 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave11_0QWMESM.mp3"
    },
    {
        "name": "Family Feud YES Ding",
        "color": "rgb(0, 163, 2)",
        "mp3": "/media/sounds/family-feud-good-answer.mp3"
    },
    {
        "name": "Mr. Tenna says IT'S TV TIME",
        "color": "rgb(255, 171, 171)",
        "mp3": "/media/sounds/mr-tenna-says-its-tv-time.mp3"
    },
    {
        "name": "Minecraft Hurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/classic_hurt.mp3"
    },
    {
        "name": "Loud Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart_2.mp3"
    },
    {
        "name": "Wet fart meme",
        "color": "rgb(109, 73, 20)",
        "mp3": "/media/sounds/wet-fart-meme.mp3"
    },
    {
        "name": "Som do Zap Zap estourado",
        "color": "rgb(3, 250, 63)",
        "mp3": "/media/sounds/som-do-zap-zap-estourado.mp3"
    },
    {
        "name": "Tom AAAAAAAAA scream",
        "color": "rgb(133, 133, 133)",
        "mp3": "/media/sounds/tom-scream.mp3"
    },
    {
        "name": "Arkh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/arkh.mp3"
    },
    {
        "name": "Sneaky Golem",
        "color": "rgb(69, 11, 120)",
        "mp3": "/media/sounds/sneaky-golem.mp3"
    },
    {
        "name": "Death Note Light Yagami Is Sus",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/death-note-light-yagami-is-sus.mp3"
    },
    {
        "name": "Crowd cheering",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/cheering.mp3"
    },
    {
        "name": "Slap *oh*",
        "color": "rgb(114, 88, 255)",
        "mp3": "/media/sounds/slap-oh_LGvkhyt.mp3"
    },
    {
        "name": "BOING . MP3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/boing_lmke36X.mp3"
    },
    {
        "name": "Sonic.EXE laugh",
        "color": "rgb(17, 45, 255)",
        "mp3": "/media/sounds/sonic-exe-laugh.mp3"
    },
    {
        "name": "Saja boys \"MMMRAH\" but clean",
        "color": "rgb(175, 25, 255)",
        "mp3": "/media/sounds/saja-boys-mmmrah-but-clean.mp3"
    },
    {
        "name": "Uncle Ruckus",
        "color": "rgb(142, 235, 255)",
        "mp3": "/media/sounds/uncle-ruckus.mp3"
    },
    {
        "name": "check mark",
        "color": "rgb(255, 129, 33)",
        "mp3": "/media/sounds/check-mark_oPG7Xo5.mp3"
    },
    {
        "name": "FAAHHHHHH",
        "color": "rgb(0, 255, 251)",
        "mp3": "/media/sounds/faahhhhhh.mp3"
    },
    {
        "name": "Slumber That Brother Gone",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slumber-that-brother-gone-meme_pXziXJ1.mp3"
    },
    {
        "name": "Super Mario Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-death-sound-sound-effect.mp3"
    },
    {
        "name": "punch sound effect meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/punch-sound-effect-meme.mp3"
    },
    {
        "name": "THE YANKEES WIN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yankees-win.mp3"
    },
    {
        "name": "Goofy Yell",
        "color": "rgb(51, 102, 255)",
        "mp3": "/media/sounds/goofy-yell.mp3"
    },
    {
        "name": "Pan Hit",
        "color": "rgb(51, 51, 204)",
        "mp3": "/media/sounds/hitsound_2.mp3"
    },
    {
        "name": "Sahur song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sahur-song.mp3"
    },
    {
        "name": "oh my god, wow!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/omgwow.mp3"
    },
    {
        "name": "Hornet GARAMA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hollow-knight-hornet-voice-2-3.mp3"
    },
    {
        "name": "Minecraft Villager Sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minecraft-villager-sound-effect.mp3"
    },
    {
        "name": "I'm Gonna Come Trump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-gonna-come_6HehWm4.mp3"
    },
    {
        "name": "Naruto Sad Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/naruto-sad-music-instant.mp3"
    },
    {
        "name": "spongebob sad song",
        "color": "rgb(255, 228, 58)",
        "mp3": "/media/sounds/spongebob-sad-song.mp3"
    },
    {
        "name": "Hornet EDINO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hornet_edino.mp3"
    },
    {
        "name": "67 brain fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/67-brain-fart.mp3"
    },
    {
        "name": "Lightskin Rizz (Sin City)",
        "color": "rgb(156, 153, 207)",
        "mp3": "/media/sounds/lightskin-rizz-sin-city.mp3"
    },
    {
        "name": "formula 1 radio notification",
        "color": "rgb(126, 255, 107)",
        "mp3": "/media/sounds/formula-1-radio-notification.mp3"
    },
    {
        "name": "Steal a Brainrot - Garama and Mandundung",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-garama-and-mandundung.mp3"
    },
    {
        "name": "Fnaf 2 Hallway",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/hallway-ambiance-extended-five-nights-at-freddys-2-music.mp3"
    },
    {
        "name": "bing chilling",
        "color": "rgb(41, 56, 134)",
        "mp3": "/media/sounds/bing-chilling_fcdGgUc.mp3"
    },
    {
        "name": "Gun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/t-t.mp3"
    },
    {
        "name": "Cute UwU",
        "color": "rgb(113, 32, 255)",
        "mp3": "/media/sounds/cute-uwu.mp3"
    },
    {
        "name": "Cave Ambience 1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cave11_0QWMESM.mp3"
    },
    {
        "name": "The Nut Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nut_ZKo5FA9.mp3"
    },
    {
        "name": "Nani FULL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani-meme-sound-effect.mp3"
    },
    {
        "name": "JonTron - What? WTF",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jontron-what_K9mOgXd.mp3"
    },
    {
        "name": "FAWk",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/fawk_zEmBCoq.mp3"
    },
    {
        "name": "Slumber That Brother Gone",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/slumber-that-brother-gone-meme_pXziXJ1.mp3"
    },
    {
        "name": "Fart Effect",
        "color": "rgb(50, 255, 112)",
        "mp3": "/media/sounds/09037.mp3"
    },
    {
        "name": "Slap *oh*",
        "color": "rgb(114, 88, 255)",
        "mp3": "/media/sounds/slap-oh_LGvkhyt.mp3"
    },
    {
        "name": "Pan Hit",
        "color": "rgb(51, 51, 204)",
        "mp3": "/media/sounds/hitsound_2.mp3"
    },
    {
        "name": "Loud Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-explosion.mp3"
    },
    {
        "name": "Здравствуйте ничтожные нищие смертные",
        "color": "rgb(114, 79, 255)",
        "mp3": "/media/sounds/zdravstvuite-nichtozhnye-nishchie-smertnye.mp3"
    },
    {
        "name": "[FNAF] 6 AM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/five-nights-at-freddys-6-am.mp3"
    },
    {
        "name": "I got this! Ryuko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ryuko-i-got-this_udCWCLO.mp3"
    },
    {
        "name": "English or Spanish Song",
        "color": "rgb(144, 212, 255)",
        "mp3": "/media/sounds/english-or-spanish-song.mp3"
    },
    {
        "name": "Crowd cheering",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/cheering.mp3"
    },
    {
        "name": "Spongebob fog horn",
        "color": "rgb(69, 47, 9)",
        "mp3": "/media/sounds/spongebob-fog-horn.mp3"
    },
    {
        "name": "Pistol-shot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pistol-shot.mp3"
    },
    {
        "name": "Clown Circus music",
        "color": "rgb(17, 231, 255)",
        "mp3": "/media/sounds/clown-circus-music.mp3"
    },
    {
        "name": "LIZARD (stereo)1",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lizard-stereo-1.mp3"
    },
    {
        "name": "HOG RIDER LOUD!!",
        "color": "rgb(184, 248, 255)",
        "mp3": "/media/sounds/hog-rider-loud.mp3"
    },
    {
        "name": "Sahur song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sahur-song.mp3"
    },
    {
        "name": "Re.Zero: Whoaaayeeeaaayaaai~",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ahhyooaaawhoaaa.mp3"
    },
    {
        "name": "JOJO SONG",
        "color": "rgb(255, 252, 90)",
        "mp3": "/media/sounds/jojos-golden-wind_kL2WElB.mp3"
    },
    {
        "name": "Flapjack Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flap-jack-scream.mp3"
    },
    {
        "name": "Saja Boy Jingle",
        "color": "rgb(202, 36, 80)",
        "mp3": "/media/sounds/saja-boy-jingle.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "Очень жёсткий стон яковлива",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ochen-zhiostkii-ston-iakovliva.mp3"
    },
    {
        "name": "Имбо отрыжка",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imbo-otryzhka.mp3"
    },
    {
        "name": "neckhurt",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/neckhurt_MAYlSQg.mp3"
    },
    {
        "name": "quack.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/quack_5.mp3"
    },
    {
        "name": "Доброе утро моя девочка",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/dobroe-utro-moia-devochka.mp3"
    },
    {
        "name": "Roblox old winning sound effect",
        "color": "rgb(255, 246, 8)",
        "mp3": "/media/sounds/roblox-old-winning-sound-effect.mp3"
    },
    {
        "name": "Имбо отрыжка",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imbo-otryzhka.mp3"
    },
    {
        "name": "Mario screaming 1",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpcoj3v_01.mp3"
    },
    {
        "name": "Pistol-shot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pistol-shot.mp3"
    },
    {
        "name": "WEAVE",
        "color": "rgb(132, 0, 255)",
        "mp3": "/media/sounds/weave.mp3"
    },
    {
        "name": "Hornet EDINO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hornet_edino.mp3"
    },
    {
        "name": "Steal a Brainrot - Job Job Job Sahur",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-job-job-job-sahur.mp3"
    },
    {
        "name": "sitcom laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sitcom-laughing-1.mp3"
    },
    {
        "name": "Oh brother this guy STINKS spongebob",
        "color": "rgb(44, 149, 255)",
        "mp3": "/media/sounds/oh-brother-this-guy-stinks_FFdigtm.mp3"
    },
    {
        "name": "Bo-womp",
        "color": "rgb(255, 239, 82)",
        "mp3": "/media/sounds/bo-womp.mp3"
    },
    {
        "name": "You Not Worthy Of My Nut",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-not-worthy-of-my-nut.mp3"
    },
    {
        "name": "Parry ultrakill",
        "color": "rgb(35, 50, 148)",
        "mp3": "/media/sounds/parry-ultrakill.mp3"
    },
    {
        "name": "Train horn meme",
        "color": "rgb(18, 164, 255)",
        "mp3": "/media/sounds/train-horn-meme_v6N3591.mp3"
    },
    {
        "name": "backgroundmusic",
        "color": "rgb(199, 185, 255)",
        "mp3": "/media/sounds/backgroundmusic.mp3"
    },
    {
        "name": "Mimimi clash Royale",
        "color": "rgb(54, 199, 29)",
        "mp3": "/media/sounds/mimimi-clash-royale.mp3"
    },
    {
        "name": "Death Note Light Yagami Is Sus",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/death-note-light-yagami-is-sus.mp3"
    },
    {
        "name": "Crazy Realistic Knocking Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small_mYNcUdA.mp3"
    },
    {
        "name": "Pablo MEME",
        "color": "rgb(90, 255, 8)",
        "mp3": "/media/sounds/yt1s_NSjFWNC.mp3"
    },
    {
        "name": "Sparkleeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fairy-dust-sound-effect.mp3"
    },
    {
        "name": "eh?eh?ehhhh?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eh-eh-ehhhh.mp3"
    },
    {
        "name": "Dream- Mask",
        "color": "rgb(36, 255, 66)",
        "mp3": "/media/sounds/dream-mask_0nCogsv.mp3"
    },
    {
        "name": "Minecraft Villager Sound",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minecraft-villager-sound-effect.mp3"
    },
    {
        "name": "Clown Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clown-horn-sound-effect_1.mp3"
    },
    {
        "name": "om nom nom roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-eating-sound-effect-nom-nom-nom.mp3"
    },
    {
        "name": "Scary Maze Game Scream Sound",
        "color": "rgb(0, 255, 247)",
        "mp3": "/media/sounds/final_60108db6919bc200b087a3a2_239343.mp3"
    },
    {
        "name": "Thick Of It Brainrot",
        "color": "rgb(53, 204, 53)",
        "mp3": "/media/sounds/thick-of-it-brainrot.mp3"
    },
    {
        "name": "Nintendo Game Boy Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nintendo-game-boy-startup.mp3"
    },
    {
        "name": "demon slayer biwa sound",
        "color": "rgb(64, 108, 85)",
        "mp3": "/media/sounds/demon-slayer-biwa-sound.mp3"
    },
    {
        "name": "my mother ate fries",
        "color": "rgb(255, 234, 0)",
        "mp3": "/media/sounds/my-mother-ate-fries_Iw5egij.mp3"
    },
    {
        "name": "goofy ahh runnin",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-ahh-runnin.mp3"
    },
    {
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "Lancer splat",
        "color": "rgb(29, 46, 255)",
        "mp3": "/media/sounds/lancer-splat.mp3"
    },
    {
        "name": "uwu discord gorl",
        "color": "rgb(252, 204, 255)",
        "mp3": "/media/sounds/uwu-discord-gorl.mp3"
    },
    {
        "name": "PUMPKIN MEME",
        "color": "rgb(255, 133, 52)",
        "mp3": "/media/sounds/pumpkin-meme.mp3"
    },
    {
        "name": "Oi Oi! Forsaken",
        "color": "rgb(4, 90, 3)",
        "mp3": "/media/sounds/oi-oi-forsaken.mp3"
    },
    {
        "name": "Scary Maze Game Scream Sound",
        "color": "rgb(0, 255, 247)",
        "mp3": "/media/sounds/final_60108db6919bc200b087a3a2_239343.mp3"
    },
    {
        "name": "Sparkleeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fairy-dust-sound-effect.mp3"
    },
    {
        "name": "raaar",
        "color": "rgb(204, 225, 255)",
        "mp3": "/media/sounds/raaar_FerSY7o.mp3"
    },
    {
        "name": "demon slayer biwa sound",
        "color": "rgb(64, 108, 85)",
        "mp3": "/media/sounds/demon-slayer-biwa-sound.mp3"
    },
    {
        "name": "Dream- Mask",
        "color": "rgb(36, 255, 66)",
        "mp3": "/media/sounds/dream-mask_0nCogsv.mp3"
    },
    {
        "name": "lets go gambling",
        "color": "rgb(30, 0, 255)",
        "mp3": "/media/sounds/lets-go-gambling.mp3"
    },
    {
        "name": "the rock sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-rock-sound-effect.mp3"
    },
    {
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "om nom nom roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-eating-sound-effect-nom-nom-nom.mp3"
    },
    {
        "name": "LOUD ALARM",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/video0_k03U0Iy.mp3"
    },
    {
        "name": "Thick Of It Brainrot",
        "color": "rgb(53, 204, 53)",
        "mp3": "/media/sounds/thick-of-it-brainrot.mp3"
    },
    {
        "name": "uwu discord gorl",
        "color": "rgb(252, 204, 255)",
        "mp3": "/media/sounds/uwu-discord-gorl.mp3"
    },
    {
        "name": "Oi Oi! Forsaken",
        "color": "rgb(4, 90, 3)",
        "mp3": "/media/sounds/oi-oi-forsaken.mp3"
    },
    {
        "name": "among us role reveal sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/among-us-role-reveal-sound-effect.mp3"
    },
    {
        "name": "Please Speed I Need This",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/please-speed-i-need-this.mp3"
    },
    {
        "name": "aura farming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aura-farming.mp3"
    },
    {
        "name": "my mother ate fries",
        "color": "rgb(255, 234, 0)",
        "mp3": "/media/sounds/my-mother-ate-fries_Iw5egij.mp3"
    },
    {
        "name": "Totя",
        "color": "rgb(246, 255, 0)",
        "mp3": "/media/sounds/totia_47CvmFj.mp3"
    },
    {
        "name": "Tai Lung - Como não posso?",
        "color": "rgb(255, 128, 30)",
        "mp3": "/media/sounds/tai-lung-como-nao-posso_NrQYPc2.mp3"
    },
    {
        "name": "Темный принц рингтон",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/temnyi-prints-rington.mp3"
    },
    {
        "name": "СТУЛ АЛЕКСЕЯ НАВАЛЬНОГО",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stul-alekseia-navalnogo.mp3"
    },
    {
        "name": "My Name Is Jeff",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/ringtone_20.mp3"
    },
    {
        "name": "hitmarker.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hitmarker_2.mp3"
    },
    {
        "name": "Objection!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phoenix-objection.mp3"
    },
    {
        "name": "Lancer splat",
        "color": "rgb(29, 46, 255)",
        "mp3": "/media/sounds/lancer-splat.mp3"
    },
    {
        "name": "YAAAYY CHILDREN!!!!",
        "color": "rgb(159, 242, 255)",
        "mp3": "/media/sounds/children-yaysound-effect.mp3"
    },
    {
        "name": "sherma song",
        "color": "rgb(255, 208, 0)",
        "mp3": "/media/sounds/sherma-song.mp3"
    },
    {
        "name": "FAHHHHH 3",
        "color": "rgb(122, 0, 0)",
        "mp3": "/media/sounds/fahhhhh-3.mp3"
    },
    {
        "name": "Визг свиньи",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vizg-svini.mp3"
    },
    {
        "name": "I got a glock in my rori",
        "color": "rgb(255, 51, 204)",
        "mp3": "/media/sounds/fetty_wap_679_feat_2.mp3"
    },
    {
        "name": "nope.avi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/engineer_no01.mp3"
    },
    {
        "name": "GUNSHOT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gunshot1-connor_p-8650_hifi.mp3"
    },
    {
        "name": "Spooky scary skeletons",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spooky-scary-skeleton_WnTSX24.mp3"
    },
    {
        "name": "Do it Lady",
        "color": "rgb(44, 183, 24)",
        "mp3": "/media/sounds/do-it-lady.mp3"
    },
    {
        "name": "soundpad",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/soundpad.mp3"
    },
    {
        "name": "Hornet GARAMA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hollow-knight-hornet-voice-2-3.mp3"
    },
    {
        "name": "Thick Of It Brainrot",
        "color": "rgb(53, 204, 53)",
        "mp3": "/media/sounds/thick-of-it-brainrot.mp3"
    },
    {
        "name": "toilet sounds",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/video0_czt1xZo.mp3"
    },
    {
        "name": "La vida es un carrusel",
        "color": "rgb(85, 0, 255)",
        "mp3": "/media/sounds/la-vida-es-un-carrusel.mp3"
    },
    {
        "name": "Please Speed I Need This",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/please-speed-i-need-this.mp3"
    },
    {
        "name": "Pizza Tower Taunt",
        "color": "rgb(255, 38, 0)",
        "mp3": "/media/sounds/sfx_taunt.mp3"
    },
    {
        "name": "Spooky scary skeletons",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spooky-scary-skeleton_WnTSX24.mp3"
    },
    {
        "name": "Sparkleeeeeee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fairy-dust-sound-effect.mp3"
    },
    {
        "name": "Ankle breaker",
        "color": "rgb(255, 136, 0)",
        "mp3": "/media/sounds/ankle-breaker_j3Df0TU.mp3"
    },
    {
        "name": "sitcom laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sitcom-laughing-1.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
    },
    {
        "name": "Stop the cap (Cut)",
        "color": "rgb(255, 206, 8)",
        "mp3": "/media/sounds/stop-the-cap-cut.mp3"
    },
    {
        "name": "Pan Hit",
        "color": "rgb(51, 51, 204)",
        "mp3": "/media/sounds/hitsound_2.mp3"
    },
    {
        "name": "YAAAYY CHILDREN!!!!",
        "color": "rgb(159, 242, 255)",
        "mp3": "/media/sounds/children-yaysound-effect.mp3"
    },
    {
        "name": "meme violin (sad violin)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-violin-sad-violin.mp3"
    },
    {
        "name": "Tralalero Tralala Meme",
        "color": "rgb(159, 178, 197)",
        "mp3": "/media/sounds/tralalero-tralala-meme_R8mqoQo.mp3"
    },
    {
        "name": "Aayein Meme",
        "color": "rgb(255, 183, 50)",
        "mp3": "/media/sounds/aayein-meme.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial_march.mp3"
    },
    {
        "name": "Mr. Tenna says IT'S TV TIME",
        "color": "rgb(255, 171, 171)",
        "mp3": "/media/sounds/mr-tenna-says-its-tv-time.mp3"
    },
    {
        "name": "Thanks for the follow!",
        "color": "rgb(255, 65, 198)",
        "mp3": "/media/sounds/follow_vrIWkAR.mp3"
    },
    {
        "name": "psu lion roar",
        "color": "rgb(37, 0, 202)",
        "mp3": "/media/sounds/psu-lion-roar.mp3"
    },
    {
        "name": "Bowler clash Royal",
        "color": "rgb(85, 0, 255)",
        "mp3": "/media/sounds/bowler-clash-royal.mp3"
    },
    {
        "name": "sherma song",
        "color": "rgb(255, 208, 0)",
        "mp3": "/media/sounds/sherma-song.mp3"
    },
    {
        "name": "Crazy Realistic Knocking Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-troll-twitch-streamers_small_mYNcUdA.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "Minecraft XP Sound",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/orb.mp3"
    },
    {
        "name": "OK - Même",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/okay-meme.mp3"
    },
    {
        "name": "corny 67",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/corny-67.mp3"
    },
    {
        "name": "iба четка",
        "color": "rgb(2, 0, 0)",
        "mp3": "/media/sounds/iba-chetka.mp3"
    },
    {
        "name": "Fuhhhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuhhhh.mp3"
    },
    {
        "name": "Roblox Death Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-death-sound-effect.mp3"
    },
    {
        "name": "Nani FULL",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nani-meme-sound-effect.mp3"
    },
    {
        "name": "see you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effects-eerie-ghost-voice_kemCjJn.mp3"
    },
    {
        "name": "POU ESTOURADO",
        "color": "rgb(255, 210, 73)",
        "mp3": "/media/sounds/pou-estourado_zIWCpMy.mp3"
    },
    {
        "name": "I got this! Ryuko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ryuko-i-got-this_udCWCLO.mp3"
    },
    {
        "name": "Lizard Meme",
        "color": "rgb(81, 255, 191)",
        "mp3": "/media/sounds/lizard-meme_kRiUyga.mp3"
    },
    {
        "name": "СТУЛ АЛЕКСЕЯ НАВАЛЬНОГО",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stul-alekseia-navalnogo.mp3"
    },
    {
        "name": "mini pekka",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mini-pekka.mp3"
    },
    {
        "name": "To be Continued (jojo)",
        "color": "rgb(204, 153, 51)",
        "mp3": "/media/sounds/untitled_1071.mp3"
    },
    {
        "name": "Crickets",
        "color": "rgb(51, 153, 0)",
        "mp3": "/media/sounds/crickets.swf.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "Fortnite Default Dance Music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fortnite-dance-moves-emote-music-tv9iv8cxmo0-1.mp3"
    },
    {
        "name": "spongebob laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-laughing-sound-effect.mp3"
    },
    {
        "name": "Charlie Brown Teacher",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wha-wha1.mp3"
    },
    {
        "name": "School Bell",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/school-bell-ringing-sound-effect.mp3"
    },
    {
        "name": "let him cook now",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/let-him-cook-now.mp3"
    },
    {
        "name": "hub troll (loud)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hub-troll-loud.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "Mario screaming 1",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpcoj3v_01.mp3"
    },
    {
        "name": "Johnny Test Whip Crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/johnny-test-whip-crack.mp3"
    },
    {
        "name": "Record scratch sound effect",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/record-scratch_1.mp3"
    },
    {
        "name": "random.mp3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/random-mp3.mp3"
    },
    {
        "name": "McDonalds Beeping Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mcdonalds-beeping-sound.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "Do you know what time it is?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jacket-do-you-know-what-time-it-is.mp3"
    },
    {
        "name": "Lock Em Up",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lock-em-up.mp3"
    },
    {
        "name": "Okay let’s go",
        "color": "rgb(14, 174, 255)",
        "mp3": "/media/sounds/meme-okay-lets-go.mp3"
    },
    {
        "name": "mr krabs walking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mr-krabs-walking.mp3"
    },
    {
        "name": "Car Crash SFX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/car-crash_OwBDipR.mp3"
    },
    {
        "name": "Удар от взгляда Скалы",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/udar-ot-vzgliada-skaly.mp3"
    },
    {
        "name": "Cinematic Boom",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cinematicboom.mp3"
    },
    {
        "name": "You're taking too long",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/youre-taking-too-long.mp3"
    },
    {
        "name": "Flashbang + Gah dayum",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flashbang-gah-dayum.mp3"
    },
    {
        "name": "Мама, вызывай такси!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mama-vyzyvai-taksi.mp3"
    },
    {
        "name": "Hey listen !",
        "color": "rgb(51, 153, 255)",
        "mp3": "/media/sounds/hey_listen.mp3"
    },
    {
        "name": "Here Comes The Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/money_2.mp3"
    },
    {
        "name": "FIRE IN THE HOLE Geometry Dash",
        "color": "rgb(18, 255, 0)",
        "mp3": "/media/sounds/fire-in-the-hole-geometry-dash.mp3"
    },
    {
        "name": "Final Jeopardy Thinking Music",
        "color": "rgb(246, 255, 3)",
        "mp3": "/media/sounds/jeopardy-final-jeopardy-thinking-music.mp3"
    },
    {
        "name": "JOJO SONG",
        "color": "rgb(255, 252, 90)",
        "mp3": "/media/sounds/jojos-golden-wind_kL2WElB.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "TF2 Scout Metal Bat",
        "color": "rgb(0, 221, 255)",
        "mp3": "/media/sounds/bat_hit.mp3"
    },
    {
        "name": "Star Wars Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial-alert.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "You What?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-what-spongebob.mp3"
    },
    {
        "name": "Transformers (transforming)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/transforming-sound-from-the-transformers.mp3"
    },
    {
        "name": "Cartoon boing sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon-boing_7vRWDlc.mp3"
    },
    {
        "name": "Drum Roll Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/drum-roll-gaming-sound-effect-hd.mp3"
    },
    {
        "name": "Crow Sound Caw",
        "color": "rgb(33, 41, 159)",
        "mp3": "/media/sounds/raven-caw-caw.mp3"
    },
    {
        "name": "meow meow meow tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meow-meow-meow-tiktok.mp3"
    },
    {
        "name": "Gerson Laugh",
        "color": "rgb(19, 143, 23)",
        "mp3": "/media/sounds/gerson-laugh.mp3"
    },
    {
        "name": "Will you keep quiet",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/will-you-keep-quiet-sound-effect.mp3"
    },
    {
        "name": "AYE 67",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aye-67.mp3"
    },
    {
        "name": "cyberpunk message",
        "color": "rgb(7, 15, 255)",
        "mp3": "/media/sounds/cyberpunk-message.mp3"
    },
    {
        "name": "flashbang cs",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flashbang-cs_qoRhxLn.mp3"
    },
    {
        "name": "We Got Him Meme Song Loud",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ladies-and-gentlemen-we-got-him-song.mp3"
    },
    {
        "name": "Kids Cheering",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/kids_cheering.mp3"
    },
    {
        "name": "Here Comes The Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/money_2.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial_march.mp3"
    },
    {
        "name": "BYE BYE! ~ Lumi Athena SFX",
        "color": "rgb(29, 29, 29)",
        "mp3": "/media/sounds/bye-bye-lumi-athena-sfx.mp3"
    },
    {
        "name": "Man screaming aaaah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/man-screaming-aaaah.mp3"
    },
    {
        "name": "Animatronic in door",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/animatronic-in-door.mp3"
    },
    {
        "name": "HUE HUE HUE metal sonic plush",
        "color": "rgb(0, 16, 127)",
        "mp3": "/media/sounds/hue-hue-hue-metal-sonic-plush.mp3"
    },
    {
        "name": "Кушай Финики",
        "color": "rgb(199, 103, 0)",
        "mp3": "/media/sounds/kushai-finiki.mp3"
    },
    {
        "name": "Coffin Dance Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate-mp3cut_sRzY6rh.mp3"
    },
    {
        "name": "DAMN SON, WHERE'D YA FIND THIS",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/damn-son-whered-you-find-this.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "Thank You For Your Patronage",
        "color": "rgb(255, 217, 63)",
        "mp3": "/media/sounds/thank-you-for-your-patronage.mp3"
    },
    {
        "name": "quandale dingle",
        "color": "rgb(52, 248, 255)",
        "mp3": "/media/sounds/quandale-dingle.mp3"
    },
    {
        "name": "Clash of Clans Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/clash_of_clan_start_up_soundmp3converter.mp3"
    },
    {
        "name": "fart 2",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fart_1.mp3"
    },
    {
        "name": "Keyboard meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-meme.mp3"
    },
    {
        "name": "Ralsei Splat",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ralsei-splat.mp3"
    },
    {
        "name": "see you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effects-eerie-ghost-voice_kemCjJn.mp3"
    },
    {
        "name": "Nokia Kick Ringtone",
        "color": "rgb(148, 193, 60)",
        "mp3": "/media/sounds/nokia-kick-ringtone.mp3"
    },
    {
        "name": "Jet 2 Holiday",
        "color": "rgb(243, 255, 8)",
        "mp3": "/media/sounds/jet-2-holiday_1CLCuwy.mp3"
    },
    {
        "name": "Laugh remix",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-remix.mp3"
    },
    {
        "name": "VERY LOUD AIRHORN",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/veryloudairhorn.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "Pew",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/pew-pew-lame-sound-effect.mp3"
    },
    {
        "name": "Old Spice Whistle = MattHQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-spice-whistle-hq.mp3"
    },
    {
        "name": "Big fart",
        "color": "rgb(153, 51, 0)",
        "mp3": "/media/sounds/faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaart.mp3"
    },
    {
        "name": "Nani what!?",
        "color": "rgb(47, 255, 40)",
        "mp3": "/media/sounds/nani_-meme-sound-effect-su0k4q3yrfw-mp3cut.mp3"
    },
    {
        "name": "im spongebob",
        "color": "rgb(255, 221, 0)",
        "mp3": "/media/sounds/im-spongebob.mp3"
    },
    {
        "name": "Stop the cap (Cut)",
        "color": "rgb(255, 206, 8)",
        "mp3": "/media/sounds/stop-the-cap-cut.mp3"
    },
    {
        "name": "TF2 Scout Metal Bat",
        "color": "rgb(0, 221, 255)",
        "mp3": "/media/sounds/bat_hit.mp3"
    },
    {
        "name": "toilet sounds",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/video0_czt1xZo.mp3"
    },
    {
        "name": "Caramelldansen HD",
        "color": "rgb(255, 0, 243)",
        "mp3": "/media/sounds/caramelldansen-hd.mp3"
    },
    {
        "name": "DDG shazam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ddg-shazam.mp3"
    },
    {
        "name": "Do you know what time it is?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jacket-do-you-know-what-time-it-is.mp3"
    },
    {
        "name": "Nokia Kick Ringtone",
        "color": "rgb(148, 193, 60)",
        "mp3": "/media/sounds/nokia-kick-ringtone.mp3"
    },
    {
        "name": "John doe roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/john-doe-roar.mp3"
    },
    {
        "name": "Five hundred Snicker",
        "color": "rgb(21, 38, 255)",
        "mp3": "/media/sounds/five-hundred-snicker.mp3"
    },
    {
        "name": "Talking ben saying ben",
        "color": "rgb(255, 231, 133)",
        "mp3": "/media/sounds/talking-ben-saying-ben.mp3"
    },
    {
        "name": "discord kitten",
        "color": "rgb(255, 66, 206)",
        "mp3": "/media/sounds/discord-kitten.mp3"
    },
    {
        "name": "Johnny Test Whip Crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/johnny-test-whip-crack.mp3"
    },
    {
        "name": "Grindr Sound",
        "color": "rgb(204, 204, 0)",
        "mp3": "/media/sounds/grindr-notification-sound.mp3"
    },
    {
        "name": "discord cat scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/discord-cat-scream.mp3"
    },
    {
        "name": "Wrong lie incorrect buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-lie-incorrect-buzzer.mp3"
    },
    {
        "name": "The Rake Scream",
        "color": "rgb(217, 215, 158)",
        "mp3": "/media/sounds/the-rake-scream.mp3"
    },
    {
        "name": "clash royale king cry",
        "color": "rgb(33, 13, 255)",
        "mp3": "/media/sounds/clash-royale-king-cry.mp3"
    },
    {
        "name": "roaring knight swoon deltarune",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/roaring-knight-swoon-deltarune.mp3"
    },
    {
        "name": "Mambo曼波 诗歌剧Matikanetannhauser",
        "color": "rgb(255, 211, 172)",
        "mp3": "/media/sounds/mamboman-bo-shi-ge-ju-matikanetannhauser.mp3"
    },
    {
        "name": "Steal a Brainrot - Los Tralaleritos",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-los-tralaleritos.mp3"
    },
    {
        "name": "Fuhhhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuhhhh.mp3"
    },
    {
        "name": "Minnesota Vikings Horn",
        "color": "rgb(67, 22, 104)",
        "mp3": "/media/sounds/vikinghorn.mp3"
    },
    {
        "name": "Hyper-Reallistic Knocking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
    },
    {
        "name": "GET OVER HERE Scorpion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scorpion-get_over_here.mp3"
    },
    {
        "name": "Pokemon-Level Up!",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/12_3.mp3"
    },
    {
        "name": "EAS Alarm (Weather Alert)-",
        "color": "rgb(194, 0, 0)",
        "mp3": "/media/sounds/easalert1_audacityoutput.mp3"
    },
    {
        "name": "lego build",
        "color": "rgb(255, 116, 38)",
        "mp3": "/media/sounds/lego-build.mp3"
    },
    {
        "name": "Rust Headshot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eaolwpzhgsba.mp3"
    },
    {
        "name": "crowd gasp",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gasp_SJHmiqB.mp3"
    },
    {
        "name": "Zelda Secret S",
        "color": "rgb(0, 164, 74)",
        "mp3": "/media/sounds/ringtones-zelda-1.mp3"
    },
    {
        "name": "American Anthem (Gun and Eagle)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/american-anthem-gun-and-eagle.mp3"
    },
    {
        "name": "Rizz walk",
        "color": "rgb(91, 225, 255)",
        "mp3": "/media/sounds/rizz-walk.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial_march.mp3"
    },
    {
        "name": "Cartoon Bite",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cartoon_bite_sound_effect.mp3"
    },
    {
        "name": "COD Zombies Evil Laugh",
        "color": "rgb(0, 108, 13)",
        "mp3": "/media/sounds/cod-zombies-evil-laugh.mp3"
    },
    {
        "name": "Keyboard meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-meme.mp3"
    },
    {
        "name": "Miss!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miss_2G4oN9I.mp3"
    },
    {
        "name": "clash royale king cry",
        "color": "rgb(33, 13, 255)",
        "mp3": "/media/sounds/clash-royale-king-cry.mp3"
    },
    {
        "name": "Eagle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sounds_eng-00381.mp3"
    },
    {
        "name": "bass drop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass-drop-edit_mixdown.mp3"
    },
    {
        "name": "Mina Mexicana™ Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mina-mexicanatm-fart.mp3"
    },
    {
        "name": "BYE BYE! ~ Lumi Athena SFX",
        "color": "rgb(29, 29, 29)",
        "mp3": "/media/sounds/bye-bye-lumi-athena-sfx.mp3"
    },
    {
        "name": "im spongebob",
        "color": "rgb(255, 221, 0)",
        "mp3": "/media/sounds/im-spongebob.mp3"
    },
    {
        "name": "I’m bout to cuh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-bout-to-cuh.mp3"
    },
    {
        "name": "Kissing Sound",
        "color": "rgb(255, 0, 204)",
        "mp3": "/media/sounds/smoochykiss.mp3"
    },
    {
        "name": "TF2 Scout Metal Bat",
        "color": "rgb(0, 221, 255)",
        "mp3": "/media/sounds/bat_hit.mp3"
    },
    {
        "name": "Cash registere sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cash-register-sound-fx.mp3"
    },
    {
        "name": "lizzard-1",
        "color": "rgb(28, 255, 28)",
        "mp3": "/media/sounds/lizzard-1.mp3"
    },
    {
        "name": "cyberpunk message",
        "color": "rgb(7, 15, 255)",
        "mp3": "/media/sounds/cyberpunk-message.mp3"
    },
    {
        "name": "I've got this",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ive-got-this.mp3"
    },
    {
        "name": "SEÑORA SU HIJO ESTA BIENDO...",
        "color": "rgb(50, 144, 255)",
        "mp3": "/media/sounds/senora-su-hijo-esta-biendo.mp3"
    },
    {
        "name": "john doe laugh insane",
        "color": "rgb(45, 136, 255)",
        "mp3": "/media/sounds/john-doe-laugh-insane.mp3"
    },
    {
        "name": "Fart Sound Effect (From 21st Century Memes)",
        "color": "rgb(151, 42, 2)",
        "mp3": "/media/sounds/fart-meme-sound_qo90QRs.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "Old Spice Whistle = MattHQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-spice-whistle-hq.mp3"
    },
    {
        "name": "undertale - megalovania",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/megalovania.mp3"
    },
    {
        "name": "FNaF Golden Freddy Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/full-golden-freddy-scream.mp3"
    },
    {
        "name": "Stop the cap (Cut)",
        "color": "rgb(255, 206, 8)",
        "mp3": "/media/sounds/stop-the-cap-cut.mp3"
    },
    {
        "name": "spongebob walk",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/spongebob-walk.mp3"
    },
    {
        "name": "Ralsei Splat",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ralsei-splat.mp3"
    },
    {
        "name": "Roblox Sword",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/roblox-sword.mp3"
    },
    {
        "name": "Wrong lie incorrect buzzer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong-lie-incorrect-buzzer.mp3"
    },
    {
        "name": "OH MA GAUD VINE",
        "color": "rgb(181, 239, 255)",
        "mp3": "/media/sounds/oh-ma-gaud-vine.mp3"
    },
    {
        "name": "Ankle breaker",
        "color": "rgb(255, 136, 0)",
        "mp3": "/media/sounds/ankle-breaker_j3Df0TU.mp3"
    },
    {
        "name": "GIGGITY GIGGITY GIGGITY GIGGITY GOOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/giggity-giggity-giggity-giggity-gooo.mp3"
    },
    {
        "name": "FINISH HIM!",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/finish-him.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "Ralsei Splat",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ralsei-splat.mp3"
    },
    {
        "name": "Miss!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/miss_2G4oN9I.mp3"
    },
    {
        "name": "Smoke alarm beep",
        "color": "rgb(0, 26, 255)",
        "mp3": "/media/sounds/smoke-alarm-beep.mp3"
    },
    {
        "name": "Crow Sound Caw",
        "color": "rgb(33, 41, 159)",
        "mp3": "/media/sounds/raven-caw-caw.mp3"
    },
    {
        "name": "clash royale king cry",
        "color": "rgb(33, 13, 255)",
        "mp3": "/media/sounds/clash-royale-king-cry.mp3"
    },
    {
        "name": "Kid Screaming Meme meme",
        "color": "rgb(255, 100, 254)",
        "mp3": "/media/sounds/kid-screaming-meme-meme.mp3"
    },
    {
        "name": "GRRRR clash royale",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grrrr-clash-royale.mp3"
    },
    {
        "name": "This is... MASS INFECTION!",
        "color": "rgb(15, 51, 4)",
        "mp3": "/media/sounds/this-is-mass-infection.mp3"
    },
    {
        "name": "cyberpunk message",
        "color": "rgb(7, 15, 255)",
        "mp3": "/media/sounds/cyberpunk-message.mp3"
    },
    {
        "name": "Мама, вызывай такси!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mama-vyzyvai-taksi.mp3"
    },
    {
        "name": "DAMN SON, WHERE'D YA FIND THIS",
        "color": "rgb(0, 0, 204)",
        "mp3": "/media/sounds/damn-son-whered-you-find-this.mp3"
    },
    {
        "name": "undertale - megalovania",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/megalovania.mp3"
    },
    {
        "name": "fart echo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart-with-reverb_NcgStsA.mp3"
    },
    {
        "name": "Don't push the red button!",
        "color": "rgb(102, 0, 0)",
        "mp3": "/media/sounds/explosion-sound-effect.mp3"
    },
    {
        "name": "Imperial march (star wars)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial_march.mp3"
    },
    {
        "name": "spongebob walk",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/spongebob-walk.mp3"
    },
    {
        "name": "Cash registere sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cash-register-sound-fx.mp3"
    },
    {
        "name": "Poop sound effect",
        "color": "rgb(84, 255, 223)",
        "mp3": "/media/sounds/poop-sound-effect.mp3"
    },
    {
        "name": "Annihilation the alien",
        "color": "rgb(10, 27, 255)",
        "mp3": "/media/sounds/annihilation-the-alien.mp3"
    },
    {
        "name": "DDG shazam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ddg-shazam.mp3"
    },
    {
        "name": "I've got this",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ive-got-this.mp3"
    },
    {
        "name": "Spooky Scarys Skeletons",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/spooky-scary-skeletons-remix-extended-mix-2.mp3"
    },
    {
        "name": "Dah Yatim Goblok Main Ling Kek Tolol Anjing",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/dah-yatim-goblok-main-ling-kek-tolol-anjing.mp3"
    },
    {
        "name": "roblox screaming kid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-screaming-kid-140.mp3"
    },
    {
        "name": "Old Spice Whistle = MattHQ",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/old-spice-whistle-hq.mp3"
    },
    {
        "name": "quandale dingle",
        "color": "rgb(52, 248, 255)",
        "mp3": "/media/sounds/quandale-dingle.mp3"
    },
    {
        "name": "instant transmission",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/dragon_ball_z_tele.mp3"
    },
    {
        "name": "Mina Mexicana™ Fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mina-mexicanatm-fart.mp3"
    },
    {
        "name": "Final Jeopardy Thinking Music",
        "color": "rgb(246, 255, 3)",
        "mp3": "/media/sounds/jeopardy-final-jeopardy-thinking-music.mp3"
    },
    {
        "name": "Stop the cap (Cut)",
        "color": "rgb(255, 206, 8)",
        "mp3": "/media/sounds/stop-the-cap-cut.mp3"
    },
    {
        "name": "Munch (eating / biting)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/munch-sound-effect.mp3"
    },
    {
        "name": "Deja vu fade",
        "color": "rgb(138, 0, 0)",
        "mp3": "/media/sounds/deja-vu-fade.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "500 cigarettes",
        "color": "rgb(23, 113, 18)",
        "mp3": "/media/sounds/500-cigarettes.mp3"
    },
    {
        "name": "SEÑORA SU HIJO ESTA BIENDO...",
        "color": "rgb(50, 144, 255)",
        "mp3": "/media/sounds/senora-su-hijo-esta-biendo.mp3"
    },
    {
        "name": "Dragon Cannelloni (Steal A Brainrot)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dragon-cannelloni-steal-a-brainrot.mp3"
    },
    {
        "name": "Chris Smoove Splash",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/chris_smoove_autotune_splash_6qks4-viduu_hi.mp3"
    },
    {
        "name": "Minecraft Level Up Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/levelup.mp3"
    },
    {
        "name": "Jutsu Activation",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/katon.mp3"
    },
    {
        "name": "can i put my balls in your jaws",
        "color": "rgb(0, 82, 255)",
        "mp3": "/media/sounds/can-i-put-my-balls-in-your-jaws.mp3"
    },
    {
        "name": "Cartoon Hammer",
        "color": "rgb(235, 255, 71)",
        "mp3": "/media/sounds/cartoon-hammer.mp3"
    },
    {
        "name": "Suspense strike",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sound-effect-suspense-strike.mp3"
    },
    {
        "name": "Star Wars Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial-alert.mp3"
    },
    {
        "name": "Markiplier: You Right",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fullsizerender.mp3"
    },
    {
        "name": "Charlie Brown Teacher",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wha-wha1.mp3"
    },
    {
        "name": "Violin screech meme",
        "color": "rgb(71, 255, 83)",
        "mp3": "/media/sounds/violin-screech-meme.mp3"
    },
    {
        "name": "WhatsApp Bass Boosted",
        "color": "rgb(40, 39, 39)",
        "mp3": "/media/sounds/whatsapp-bass-boosted.mp3"
    },
    {
        "name": "tenna talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tenna-talking.mp3"
    },
    {
        "name": "tactical nuke incoming!!!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/tactical-nuke.mp3"
    },
    {
        "name": "Thunder",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thunder-sound-effect.mp3"
    },
    {
        "name": "pizza roblox",
        "color": "rgb(211, 255, 108)",
        "mp3": "/media/sounds/trim_7tpktqR.mp3"
    },
    {
        "name": "HUH? Cat meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/huh-cat-meme.mp3"
    },
    {
        "name": "OH MA GAUD VINE",
        "color": "rgb(181, 239, 255)",
        "mp3": "/media/sounds/oh-ma-gaud-vine.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "1,000,000,000 IQ",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-000-000-000-iq.mp3"
    },
    {
        "name": "corny 67",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/corny-67.mp3"
    },
    {
        "name": "smth #67",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smth-67.mp3"
    },
    {
        "name": "Spooky Scarys Skeletons",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/spooky-scary-skeletons-remix-extended-mix-2.mp3"
    },
    {
        "name": "Gundam Start",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mech-manuever.mp3"
    },
    {
        "name": "Final Fantasy Victory Fanfare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final-fantasy-vii-victory-fanfare-1.mp3"
    },
    {
        "name": "GET OUT Tuco",
        "color": "rgb(162, 69, 255)",
        "mp3": "/media/sounds/get-out-tuco.mp3"
    },
    {
        "name": "Stop the Cap",
        "color": "rgb(79, 255, 211)",
        "mp3": "/media/sounds/zias-stop-the-cap_RjHQpxU.mp3"
    },
    {
        "name": "Fart Sound Effect (From 21st Century Memes)",
        "color": "rgb(151, 42, 2)",
        "mp3": "/media/sounds/fart-meme-sound_qo90QRs.mp3"
    },
    {
        "name": "SPONGEBOB 2000 YEARS LATER",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-2000-years-later-2019-download-link.mp3"
    },
    {
        "name": "PACKING LOUDEST",
        "color": "rgb(94, 0, 0)",
        "mp3": "/media/sounds/packing-loudest.mp3"
    },
    {
        "name": "Sneaky Snitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_897.mp3"
    },
    {
        "name": "Cartoon Chase",
        "color": "rgb(24, 255, 32)",
        "mp3": "/media/sounds/chase_QnUxJTk.mp3"
    },
    {
        "name": "Water Droplet Drip",
        "color": "rgb(37, 113, 255)",
        "mp3": "/media/sounds/water-droplet-drip.mp3"
    },
    {
        "name": "Goofy ahhh",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/goofy-ahhh.mp3"
    },
    {
        "name": "let him cook now",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/let-him-cook-now.mp3"
    },
    {
        "name": "Godzilla Roar 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/godzilla_2.mp3"
    },
    {
        "name": "Gotcha Bit** by Dave Chapelle",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gotcha-bit-by-dave-chapelle.mp3"
    },
    {
        "name": "GTA SA Mission Passed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-mission-complete-sound-hq.mp3"
    },
    {
        "name": "Water Droplet Drip",
        "color": "rgb(37, 113, 255)",
        "mp3": "/media/sounds/water-droplet-drip.mp3"
    },
    {
        "name": "Cash registere sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cash-register-sound-fx.mp3"
    },
    {
        "name": "subspace tripmine",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/subspace-tripmine.mp3"
    },
    {
        "name": "Elite Waagh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/waagh.mp3"
    },
    {
        "name": "hey guys whats going on discord troll",
        "color": "rgb(214, 177, 255)",
        "mp3": "/media/sounds/hey-guys-whats-going-on-discord-troll.mp3"
    },
    {
        "name": "Shotgun Pump Reload",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/12g-pumpfull.mp3"
    },
    {
        "name": "confetti pop sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound.mp3"
    },
    {
        "name": "Danger Siren Alarm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/danger-siren-alarm_BfknMds.mp3"
    },
    {
        "name": "horror scream high quality",
        "color": "rgb(15, 147, 255)",
        "mp3": "/media/sounds/horror-scream-high-quality.mp3"
    },
    {
        "name": "a barbershop haircut that costs a quarter",
        "color": "rgb(7, 68, 13)",
        "mp3": "/media/sounds/a-barbershop-haircut-that-costs-a-quarter.mp3"
    },
    {
        "name": "Lizard Meme",
        "color": "rgb(81, 255, 191)",
        "mp3": "/media/sounds/lizard-meme_kRiUyga.mp3"
    },
    {
        "name": "пердеж",
        "color": "rgb(0, 255, 72)",
        "mp3": "/media/sounds/perdezh_YQ5l54B.mp3"
    },
    {
        "name": "bluudude coughing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bluudude-coughing.mp3"
    },
    {
        "name": "FAHHH SOUND EFFECT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fahhh-sound-effect.mp3"
    },
    {
        "name": "jojo - ayayay",
        "color": "rgb(255, 197, 60)",
        "mp3": "/media/sounds/jojos-bizarre-adventure-ay-ay-ay-ay-_-sound-effect.mp3"
    },
    {
        "name": "WHAT DID HE SAY",
        "color": "rgb(68, 247, 255)",
        "mp3": "/media/sounds/5s_to_7s_what_did_he_say_tik_tok.mp3"
    },
    {
        "name": "Applause",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/applause-4.mp3"
    },
    {
        "name": "Plug",
        "color": "rgb(24, 255, 44)",
        "mp3": "/media/sounds/plug.mp3"
    },
    {
        "name": "I always come back - ScrapTrap/William Afton",
        "color": "rgb(75, 159, 73)",
        "mp3": "/media/sounds/ialwayscomeback.mp3"
    },
    {
        "name": "Thunder",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/thunder-sound-effect.mp3"
    },
    {
        "name": "Cartoon Slip and Fall",
        "color": "rgb(204, 255, 51)",
        "mp3": "/media/sounds/slipandfall.mp3"
    },
    {
        "name": "Keyboard meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keyboard-meme.mp3"
    },
    {
        "name": "Michael Myers",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/michael_myers_dbd.mp3"
    },
    {
        "name": "scary movie wazzup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-movie-wazzup.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "DE COPÃO NA MÃO (ESTOURADO)",
        "color": "rgb(239, 79, 255)",
        "mp3": "/media/sounds/de-copao-na-mao-estourado.mp3"
    },
    {
        "name": "jet set radio spray full",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/jet-set-radio-spray-full_DP2X9GC.mp3"
    },
    {
        "name": "Quick Ting",
        "color": "rgb(53, 255, 127)",
        "mp3": "/media/sounds/quick-ting.mp3"
    },
    {
        "name": "49ers Touchdown Foghorn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/san-francisco-49ers-foghorn.mp3"
    },
    {
        "name": "el rap de peru",
        "color": "rgb(131, 94, 27)",
        "mp3": "/media/sounds/el-rap-de-peru.mp3"
    },
    {
        "name": "Weird route jingle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/weird-route-jingle.mp3"
    },
    {
        "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
        "color": "rgb(6, 6, 72)",
        "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
    },
    {
        "name": "BASS BOOST discord call",
        "color": "rgb(93, 0, 255)",
        "mp3": "/media/sounds/bass-boost-discord-call.mp3"
    },
    {
        "name": "Japanese YOOOO",
        "color": "rgb(255, 0, 51)",
        "mp3": "/media/sounds/yooooooooooooooooooooooooo_4.mp3"
    },
    {
        "name": "Classic Batman Transition",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/batman-transition-download-sound-link.mp3"
    },
    {
        "name": "Gaster Vanish",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gaster-vanish.mp3"
    },
    {
        "name": "ROBLOX bass sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bass_vCrw3wU.mp3"
    },
    {
        "name": "Roblox Yummy",
        "color": "rgb(5, 182, 146)",
        "mp3": "/media/sounds/roblox-yummy.mp3"
    },
    {
        "name": "Po Pi Po",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/po-pi-po-2.mp3"
    },
    {
        "name": "Knock 3D",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/knock-3d.mp3"
    },
    {
        "name": "Quick Ting",
        "color": "rgb(53, 255, 127)",
        "mp3": "/media/sounds/quick-ting.mp3"
    },
    {
        "name": "undertaker bell repeat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertaker-bell-repeat.mp3"
    },
    {
        "name": "Im mafiosoing it",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/im-mafiosoing-it.mp3"
    },
    {
        "name": "Cursed plankton",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cursed-plankton.mp3"
    },
    {
        "name": "Shut your f****ng mouth",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shut-your-f-ng-mouth.mp3"
    },
    {
        "name": "Нет иди на...",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/net-idi-na.mp3"
    },
    {
        "name": "Five hundred Snicker",
        "color": "rgb(21, 38, 255)",
        "mp3": "/media/sounds/five-hundred-snicker.mp3"
    },
    {
        "name": "Sicko Mode Meme SFX",
        "color": "rgb(255, 170, 0)",
        "mp3": "/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3"
    },
    {
        "name": "X files",
        "color": "rgb(153, 153, 153)",
        "mp3": "/media/sounds/expedientes-secretos-x-musica22.mp3"
    },
    {
        "name": "Windows 10 Error Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/windows-10-error-sound.mp3"
    },
    {
        "name": "The bluetooth device is ready to pair",
        "color": "rgb(0, 136, 255)",
        "mp3": "/media/sounds/the-bluetooth-device-is-ready-to-pair.mp3"
    },
    {
        "name": "Explosion",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/barrel-exploding-soundbible.mp3"
    },
    {
        "name": "pop",
        "color": "rgb(102, 51, 204)",
        "mp3": "/media/sounds/comedy_pop_finger_in_mouth_001.mp3"
    },
    {
        "name": "police siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/11900601.mp3"
    },
    {
        "name": "GERMAN SPONGEBOB (LOUD AF)",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/german-spongebob.mp3"
    },
    {
        "name": "L theme death note",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/00000000000000000.mp3"
    },
    {
        "name": "Movie Fart!",
        "color": "rgb(15, 59, 3)",
        "mp3": "/media/sounds/fart-sound-effect_C1IXpeL.mp3"
    },
    {
        "name": "Ear Ringing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ear-ringing.mp3"
    },
    {
        "name": "2_ตลกตบมุก_2",
        "color": "rgb(249, 255, 28)",
        "mp3": "/media/sounds/2-tlktbmuk-2.mp3"
    },
    {
        "name": "SDIYBT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sdiybt.mp3"
    },
    {
        "name": "bass boost discord call when headphones are on",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/bass-boost-discord-call-when-headphones-are-on.mp3"
    },
    {
        "name": "Whoosh Wind",
        "color": "rgb(104, 124, 255)",
        "mp3": "/media/sounds/whoosh-wind.mp3"
    },
    {
        "name": "John doe roar",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/john-doe-roar.mp3"
    },
    {
        "name": "AAHHHHHHH RICOLAS - Joel Gonzales",
        "color": "rgb(255, 191, 15)",
        "mp3": "/media/sounds/aahhhhhhh-ricolas-joel-gonzales.mp3"
    },
    {
        "name": "Creation Of Hatred | Shedletsky VS 1x1x1x1",
        "color": "rgb(11, 93, 4)",
        "mp3": "/media/sounds/creation-of-hatred-shedletsky-vs-1x1x1x1.mp3"
    },
    {
        "name": "Vem ca nenem Roblox",
        "color": "rgb(0, 92, 255)",
        "mp3": "/media/sounds/vem-ca-nenem-roblox.mp3"
    },
    {
        "name": "Goofy Laugh Extreme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-laugh-extreme.mp3"
    },
    {
        "name": "Bongo Feet",
        "color": "rgb(51, 0, 153)",
        "mp3": "/media/sounds/bongo-feet.mp3"
    },
    {
        "name": "Zelda - Item Get",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/139-item-catch.mp3"
    },
    {
        "name": "Keemstar Screaming",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/keemstar-screaming.mp3"
    },
    {
        "name": "Wah wah wah waaaaaaaahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wah-wah-sound-effect.mp3"
    },
    {
        "name": "ataasa",
        "color": "rgb(255, 107, 38)",
        "mp3": "/media/sounds/ataasa.mp3"
    },
    {
        "name": "half life button 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/half-life-button-2.mp3"
    },
    {
        "name": "skibidi toilet",
        "color": "rgb(226, 247, 255)",
        "mp3": "/media/sounds/skibidi-toilet.mp3"
    },
    {
        "name": "Come here boy",
        "color": "rgb(131, 79, 168)",
        "mp3": "/media/sounds/daequan-come-here-boy-sound-effect.mp3"
    },
    {
        "name": "undertale - sans talking",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/just-sans-talking.mp3"
    },
    {
        "name": "PS2 Startup",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ps2_start_up.mp3"
    },
    {
        "name": "\"Heartbeat | Stress\" Phasmophobia",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phasmophobia-sound-board-effects-07-sound-effects-heartbeat-stress_ohtStgP.mp3"
    },
    {
        "name": "OK - Même",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/okay-meme.mp3"
    },
    {
        "name": "The Rock Shut Up",
        "color": "rgb(0, 255, 94)",
        "mp3": "/media/sounds/the-rock-shut-up.mp3"
    },
    {
        "name": "La Cucaracha car horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/la-cucaracha.mp3"
    },
    {
        "name": "dramatic tiktok",
        "color": "rgb(6, 0, 122)",
        "mp3": "/media/sounds/bgc-dramatic-music-tiktok-drama-effect-audio-tiktok-new-trend_LYggtlV.mp3"
    },
    {
        "name": "bombardino-crocodilo",
        "color": "rgb(27, 106, 13)",
        "mp3": "/media/sounds/bombardino-crocodilo_MSpHN9M.mp3"
    },
    {
        "name": "undertaker bell repeat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertaker-bell-repeat.mp3"
    },
    {
        "name": "FFT Male Death",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fft-male-death.mp3"
    },
    {
        "name": "you stupid niger uncensor",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-stupid-niger-uncensor.mp3"
    },
    {
        "name": "Hyper-Reallistic Knocking",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/crazy-realistic-knocking-sound-trim.mp3"
    },
    {
        "name": "bye bye mewing",
        "color": "rgb(35, 26, 255)",
        "mp3": "/media/sounds/bye-bye-mewing_fMVssQz.mp3"
    },
    {
        "name": "aughhhh tiktok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhh-tiktok.mp3"
    },
    {
        "name": "Censor Beep 2",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/censor-beep-2.mp3"
    },
    {
        "name": "Okay let’s go",
        "color": "rgb(14, 174, 255)",
        "mp3": "/media/sounds/meme-okay-lets-go.mp3"
    },
    {
        "name": "I always come back - ScrapTrap/William Afton",
        "color": "rgb(75, 159, 73)",
        "mp3": "/media/sounds/ialwayscomeback.mp3"
    },
    {
        "name": "Eagle Screech",
        "color": "rgb(43, 119, 50)",
        "mp3": "/media/sounds/eagle-screech.mp3"
    },
    {
        "name": "Discord Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord_ping_sound_effect.mp3"
    },
    {
        "name": "Chris Smoove Splash",
        "color": "rgb(0, 51, 255)",
        "mp3": "/media/sounds/chris_smoove_autotune_splash_6qks4-viduu_hi.mp3"
    },
    {
        "name": "GTA SA Mission Passed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-mission-complete-sound-hq.mp3"
    },
    {
        "name": "Star Wars Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/imperial-alert.mp3"
    },
    {
        "name": "Pirates Of The Carribean!!!",
        "color": "rgb(220, 222, 0)",
        "mp3": "/media/sounds/pirates-mp3cut_xxOvJfH.mp3"
    },
    {
        "name": "1738 song",
        "color": "rgb(223, 255, 219)",
        "mp3": "/media/sounds/1738-song.mp3"
    },
    {
        "name": "DAMN pukeko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/damn-pukeko.mp3"
    },
    {
        "name": "hub troll (loud)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hub-troll-loud.mp3"
    },
    {
        "name": "Vem ca nenem Roblox",
        "color": "rgb(0, 92, 255)",
        "mp3": "/media/sounds/vem-ca-nenem-roblox.mp3"
    },
    {
        "name": "Hah Gay",
        "color": "rgb(204, 153, 51)",
        "mp3": "/media/sounds/ha-gay_ulqsmZY.mp3"
    },
    {
        "name": "clean my belly / wash my belly",
        "color": "rgb(0, 27, 255)",
        "mp3": "/media/sounds/clean-my-belly-wash-my-belly.mp3"
    },
    {
        "name": "Halo Reach: 7 Killamanjaro",
        "color": "rgb(47, 167, 19)",
        "mp3": "/media/sounds/halo-reach-7-killamanjaro.mp3"
    },
    {
        "name": "Chewbacca",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/chewbacca.swf.mp3"
    },
    {
        "name": "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS",
        "color": "rgb(6, 6, 72)",
        "mp3": "/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3"
    },
    {
        "name": "Sonic spindash",
        "color": "rgb(19, 113, 255)",
        "mp3": "/media/sounds/sonic-spindash.mp3"
    },
    {
        "name": "trollface smile",
        "color": "rgb(94, 94, 94)",
        "mp3": "/media/sounds/trollface-smile.mp3"
    },
    {
        "name": "Rahhh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rahhh.mp3"
    },
    {
        "name": "Hello!!! Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-meme.mp3"
    },
    {
        "name": "Hitting that Spot",
        "color": "rgb(49, 34, 255)",
        "mp3": "/media/sounds/hitting-that-spot.mp3"
    },
    {
        "name": "Popular Riser",
        "color": "rgb(0, 213, 255)",
        "mp3": "/media/sounds/popular-riser.mp3"
    },
    {
        "name": "Greetings Emote Animal Crossing",
        "color": "rgb(165, 132, 255)",
        "mp3": "/media/sounds/greetings-emote-animal-crossing.mp3"
    },
    {
        "name": "Volkswagen das auto remix",
        "color": "rgb(218, 255, 234)",
        "mp3": "/media/sounds/volkswagen-das-auto-remix.mp3"
    },
    {
        "name": "HO HO GREEN GIANT",
        "color": "rgb(38, 255, 49)",
        "mp3": "/media/sounds/ho-ho-ho-green-giant-audio-clip_yJDcgA1.mp3"
    },
    {
        "name": "GIT GUD hornet",
        "color": "rgb(255, 201, 63)",
        "mp3": "/media/sounds/git-gud-hornet.mp3"
    },
    {
        "name": "Bosnov 67",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bosnov-67.mp3"
    },
    {
        "name": "ataasa",
        "color": "rgb(255, 107, 38)",
        "mp3": "/media/sounds/ataasa.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/nooo.mp3"
    },
    {
        "name": "skibidi toilet",
        "color": "rgb(226, 247, 255)",
        "mp3": "/media/sounds/skibidi-toilet.mp3"
    },
    {
        "name": "He Needs Some Milk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/he-needs-some-milk-vine.mp3"
    },
    {
        "name": "windows xp21",
        "color": "rgb(255, 102, 0)",
        "mp3": "/media/sounds/windows-xp-startup_1ph012N.mp3"
    },
    {
        "name": "yoshi tongue",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/yoshi-tongue.mp3"
    },
    {
        "name": "Come here boy",
        "color": "rgb(131, 79, 168)",
        "mp3": "/media/sounds/daequan-come-here-boy-sound-effect.mp3"
    },
    {
        "name": "Vine Boom (Longer)",
        "color": "rgb(255, 195, 217)",
        "mp3": "/media/sounds/vine_boom_sound_effect_longer_verison_for_real_read_description_pleaseyoutubetomp4.mp3"
    },
    {
        "name": "Eagle Screech",
        "color": "rgb(43, 119, 50)",
        "mp3": "/media/sounds/eagle-screech.mp3"
    },
    {
        "name": "GMod ragdoll impact sounds",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpl0bxqky_.mp3"
    },
    {
        "name": "Jutsu Activation",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/katon.mp3"
    },
    {
        "name": "THE LOUDEST NOISE EVER!",
        "color": "rgb(255, 247, 246)",
        "mp3": "/media/sounds/the-loudest-noise-ever.mp3"
    },
    {
        "name": "La Cucaracha car horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/la-cucaracha.mp3"
    },
    {
        "name": "Minecraft Explosions",
        "color": "rgb(162, 92, 0)",
        "mp3": "/media/sounds/minecraft-explosion-green-screen.mp3"
    },
    {
        "name": "Correct Ping",
        "color": "rgb(54, 255, 32)",
        "mp3": "/media/sounds/ding-sound-effect_1_CVUaI0C.mp3"
    },
    {
        "name": "suspense pan",
        "color": "rgb(255, 37, 37)",
        "mp3": "/media/sounds/suspense-1_bLEXV6f.mp3"
    },
    {
        "name": "NOW'S YOUR CHANCE TO BE A BIG SHOT",
        "color": "rgb(246, 255, 0)",
        "mp3": "/media/sounds/nows-your-chance-to-be-a-big-shot.mp3"
    },
    {
        "name": "DJ Stop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dj-stop.mp3"
    },
    {
        "name": "Yes King Now I Understand",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-now-i-understand.mp3"
    },
    {
        "name": "DAMN pukeko",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/damn-pukeko.mp3"
    },
    {
        "name": "Минута пошла",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minuta-poshla_LeSDguC.mp3"
    },
    {
        "name": "The Boiled One Message",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/the-boiled-one-message.mp3"
    },
    {
        "name": "Toothless Dance",
        "color": "rgb(0, 28, 141)",
        "mp3": "/media/sounds/toothless-dance.mp3"
    },
    {
        "name": "Samsung alarm but it's mafioso",
        "color": "rgb(93, 93, 93)",
        "mp3": "/media/sounds/samsung-alarm-but-its-mafioso.mp3"
    },
    {
        "name": "Ни одна мразь",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ni-odna-mraz.mp3"
    },
    {
        "name": "Lancer Laugh",
        "color": "rgb(50, 0, 255)",
        "mp3": "/media/sounds/lancer-laugh.mp3"
    },
    {
        "name": "I MEAN IT'S ALRIGHT LIKE",
        "color": "rgb(86, 52, 19)",
        "mp3": "/media/sounds/i-mean-its-alright-like.mp3"
    },
    {
        "name": "DRAKE 6",
        "color": "rgb(134, 138, 255)",
        "mp3": "/media/sounds/6-god.mp3"
    },
    {
        "name": "Bosnov 67",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bosnov-67.mp3"
    },
    {
        "name": "SEÑORA SU HIJO ESTA BIENDO...",
        "color": "rgb(50, 144, 255)",
        "mp3": "/media/sounds/senora-su-hijo-esta-biendo.mp3"
    },
    {
        "name": "Confess Your Love",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confess-your-love.mp3"
    },
    {
        "name": "White tees rizz",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/white-tees-rizz.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "Rap Battle OOOHHHH!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/the-rap-battle-parody-oh.mp3"
    },
    {
        "name": "TF2 - Frying Pan",
        "color": "rgb(51, 51, 51)",
        "mp3": "/media/sounds/melee_frying_pan_01.mp3"
    },
    {
        "name": "bomb has been planted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
    },
    {
        "name": "Discord Ping",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/discord_ping_sound_effect.mp3"
    },
    {
        "name": "cod zombies scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/call-of-duty-zombie-yell-meme-sound-effect.mp3"
    },
    {
        "name": "Why do I hear boss music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/why-do-i-hear-boss-music.mp3"
    },
    {
        "name": "Mmm Cheezburger ROBLOX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mmm-cheezburger.mp3"
    },
    {
        "name": "Kitchen Nightmare Dramatic Sound Effect",
        "color": "rgb(106, 0, 0)",
        "mp3": "/media/sounds/kitchen-nightmare-dramatic-sound-effect.mp3"
    },
    {
        "name": "Hell nah (dog)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hell-nah-dog_lU72pEf.mp3"
    },
    {
        "name": "Who's That Pokemon!?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whos-that-pokemon_.mp3"
    },
    {
        "name": "Scary girl",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scary-girl.mp3"
    },
    {
        "name": "dog whistle",
        "color": "rgb(255, 247, 250)",
        "mp3": "/media/sounds/dog-whistle.mp3"
    },
    {
        "name": "Tony hawk special trick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tony-hawk-special-trick-sound-effect.mp3"
    },
    {
        "name": "Kirby falling",
        "color": "rgb(255, 40, 215)",
        "mp3": "/media/sounds/kirby-falling.mp3"
    },
    {
        "name": "Pirates Of The Carribean!!!",
        "color": "rgb(220, 222, 0)",
        "mp3": "/media/sounds/pirates-mp3cut_xxOvJfH.mp3"
    },
    {
        "name": "Chick Fila HELP ME HELLLLP (just help)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/chick-fila-help-me-hellllp-just-help.mp3"
    },
    {
        "name": "transponder snail",
        "color": "rgb(42, 84, 255)",
        "mp3": "/media/sounds/transponder_snail.mp3"
    },
    {
        "name": "oohh chinese man",
        "color": "rgb(31, 188, 255)",
        "mp3": "/media/sounds/oohh_chinese_man_sound_.mp3"
    },
    {
        "name": "Lego Batman Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lego-batman-laugh.mp3"
    },
    {
        "name": "anime yamete01",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anime-yamete01.mp3"
    },
    {
        "name": "BOMBACLAAAT",
        "color": "rgb(70, 154, 21)",
        "mp3": "/media/sounds/bombaclaaat.mp3"
    },
    {
        "name": "Saja Boys - Soda Pop",
        "color": "rgb(60, 245, 255)",
        "mp3": "/media/sounds/saja-boys-soda-pop.mp3"
    },
    {
        "name": "scream (roblox)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scream-roblox.mp3"
    },
    {
        "name": "kill bill 808 mafia siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/808-mafia-type-kill-bill-siren-hiphop.mp3"
    },
    {
        "name": "Clash brasil",
        "color": "rgb(46, 255, 164)",
        "mp3": "/media/sounds/clash-brasil.mp3"
    },
    {
        "name": "Harikitte Ikou Kitasan Black",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/harikitte-ikou-kitasan-black.mp3"
    },
    {
        "name": "Yankess Strike Out Whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yankess-strike-out-whistle.mp3"
    },
    {
        "name": "DBD OST - Michael Myers sound end evil inside 3",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dbd-ost-michael-myers-sounds-fin-mal-interieur-3_geQnBkX.mp3"
    },
    {
        "name": "GRRRR clash royale",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grrrr-clash-royale.mp3"
    },
    {
        "name": "Минута пошла",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/minuta-poshla_LeSDguC.mp3"
    },
    {
        "name": "Toothless Dance",
        "color": "rgb(0, 28, 141)",
        "mp3": "/media/sounds/toothless-dance.mp3"
    },
    {
        "name": "Diablo 1 Fresh Meat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/butcher_0NJLHCd.mp3"
    },
    {
        "name": "Sonic Dead or alive is mine",
        "color": "rgb(0, 9, 138)",
        "mp3": "/media/sounds/sonic-dead-or-alive-is-mine.mp3"
    },
    {
        "name": "I MEAN IT'S ALRIGHT LIKE",
        "color": "rgb(86, 52, 19)",
        "mp3": "/media/sounds/i-mean-its-alright-like.mp3"
    },
    {
        "name": "Ни одна мразь",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ni-odna-mraz.mp3"
    },
    {
        "name": "67 Meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/67-meme_cdLcL5q.mp3"
    },
    {
        "name": "Halloween",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sounds_5861469915393822539981.mp3"
    },
    {
        "name": "NO GOD! PLEASE NO!!! NOOOOOOOO",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/no-god-please-no-noooooooooo.mp3"
    },
    {
        "name": "helicopter helicopter parakofer parakofer",
        "color": "rgb(0, 255, 84)",
        "mp3": "/media/sounds/helicopter-helicopter-parakofer-parakofer.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "Fnaf Ambient Noise",
        "color": "rgb(157, 20, 134)",
        "mp3": "/media/sounds/fnaf-ambience-extended_trim.mp3"
    },
    {
        "name": "Fart Beat by ItsJerryAndHarry",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/jerry-farts-united-clean-loop-original-3_48-hd-by-jtf-entertainment.mp3"
    },
    {
        "name": "Super Mario Pipe",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros.mp3"
    },
    {
        "name": "cod zombies scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/call-of-duty-zombie-yell-meme-sound-effect.mp3"
    },
    {
        "name": "EAGLE RAHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-rahhh.mp3"
    },
    {
        "name": "Mmm Cheezburger ROBLOX",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mmm-cheezburger.mp3"
    },
    {
        "name": "SpongeBob - I'M READY",
        "color": "rgb(51, 0, 204)",
        "mp3": "/media/sounds/im-ready.mp3"
    },
    {
        "name": "The Rock Shut Up",
        "color": "rgb(0, 255, 94)",
        "mp3": "/media/sounds/the-rock-shut-up.mp3"
    },
    {
        "name": "Shotgun Reload",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shotgun-reload-old_school-ra_the_sun_god-580332022.mp3"
    },
    {
        "name": "Tony hawk special trick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tony-hawk-special-trick-sound-effect.mp3"
    },
    {
        "name": "Majora's mask bell",
        "color": "rgb(153, 0, 102)",
        "mp3": "/media/sounds/mm_clocktower_bell.mp3"
    },
    {
        "name": "extremely loud correct buzzer",
        "color": "rgb(33, 255, 29)",
        "mp3": "/media/sounds/extremely-loud-correct-buzzer.mp3"
    },
    {
        "name": "Welcome Foolish Mortals",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/welcomefoolishmortals.mp3"
    },
    {
        "name": "LET ME TELL YOU SOMETHING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/let-me-tell-you-something.mp3"
    },
    {
        "name": "whoosh sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whoosh-sfx.mp3"
    },
    {
        "name": "wobbly wiggly",
        "color": "rgb(0, 255, 3)",
        "mp3": "/media/sounds/wobbly-wiggly.mp3"
    },
    {
        "name": "Mentality",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mentality.mp3"
    },
    {
        "name": "Illuminati Confirmed Meme",
        "color": "rgb(128, 0, 255)",
        "mp3": "/media/sounds/x-files-theme-song-copy_dLYAyUk.mp3"
    },
    {
        "name": "smack OH SHIT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/smack-oh-shit.mp3"
    },
    {
        "name": "OUI OUI",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_DO1kVeR.mp3"
    },
    {
        "name": "balerina capuchina",
        "color": "rgb(255, 145, 233)",
        "mp3": "/media/sounds/balerina-capuchina.mp3"
    },
    {
        "name": "Deltarune Weapons Pull",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/deltarune-weapons-pull.mp3"
    },
    {
        "name": "Get Out [MEMES}",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-memes.mp3"
    },
    {
        "name": "Door Slamming",
        "color": "rgb(0, 255, 102)",
        "mp3": "/media/sounds/door-slamming-sound-effect-no-repeats-or-silence-2016.mp3"
    },
    {
        "name": "Shut your Stupid Ass Up",
        "color": "rgb(36, 109, 255)",
        "mp3": "/media/sounds/shut-yo-stupid-ass-up.mp3"
    },
    {
        "name": "Uwu hannah",
        "color": "rgb(222, 74, 255)",
        "mp3": "/media/sounds/uwu-hannah.mp3"
    },
    {
        "name": "Po Pi Po",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/po-pi-po-2.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "Illuminati Confirmed Meme",
        "color": "rgb(128, 0, 255)",
        "mp3": "/media/sounds/x-files-theme-song-copy_dLYAyUk.mp3"
    },
    {
        "name": "FNAF Hooray!!!!",
        "color": "rgb(12, 255, 0)",
        "mp3": "/media/sounds/fnaf-hooray.mp3"
    },
    {
        "name": "cha-ching money",
        "color": "rgb(47, 138, 79)",
        "mp3": "/media/sounds/cha-ching-money.mp3"
    },
    {
        "name": "Kim Possible Sitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kim-possible-ringtone.mp3"
    },
    {
        "name": "Meme Click",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/meme-click.mp3"
    },
    {
        "name": "why did u redeem it",
        "color": "rgb(255, 40, 158)",
        "mp3": "/media/sounds/why-did-u-redeem-it.mp3"
    },
    {
        "name": "horror scream high quality",
        "color": "rgb(15, 147, 255)",
        "mp3": "/media/sounds/horror-scream-high-quality.mp3"
    },
    {
        "name": "LIMBUS COMPANYYYY",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/limbus-companyyyy.mp3"
    },
    {
        "name": "Animal Crossing Catch Sound",
        "color": "rgb(255, 216, 86)",
        "mp3": "/media/sounds/animal-crossing-catch-sound.mp3"
    },
    {
        "name": "Субо братик мой",
        "color": "rgb(200, 255, 0)",
        "mp3": "/media/sounds/subo-bratik-moi.mp3"
    },
    {
        "name": "Diablo 1 Fresh Meat",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/butcher_0NJLHCd.mp3"
    },
    {
        "name": "Red Larva Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/red-larva-scream.mp3"
    },
    {
        "name": "do you wanna play minigames",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-you-wanna-play-minigames.mp3"
    },
    {
        "name": "Spooky Month",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spooky-month.mp3"
    },
    {
        "name": "randy say NGGR",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/randy-say-nggr.mp3"
    },
    {
        "name": "Call of duty mystery box",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/call-of-duty-mystery-box.mp3"
    },
    {
        "name": "Five hundred Snicker",
        "color": "rgb(21, 38, 255)",
        "mp3": "/media/sounds/five-hundred-snicker.mp3"
    },
    {
        "name": "AUGHHHHH... AUGHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aughhhhh-aughhhhh.mp3"
    },
    {
        "name": "Giorno's Theme normal",
        "color": "rgb(255, 250, 114)",
        "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
    },
    {
        "name": "Hallelujah",
        "color": "rgb(0, 204, 204)",
        "mp3": "/media/sounds/hallelujahshort.swf.mp3"
    },
    {
        "name": "Original Sheesh",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/original-sheesh.mp3"
    },
    {
        "name": "pokemon battle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-battle.mp3"
    },
    {
        "name": "FNAF Balloon Boy Hi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/echo1.mp3"
    },
    {
        "name": "dry fart",
        "color": "rgb(204, 102, 51)",
        "mp3": "/media/sounds/dry-fart_3.mp3"
    },
    {
        "name": "WTF is a kilometer",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wtf-is-a-kilometer.mp3"
    },
    {
        "name": "Hello your computer has virus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-your-computer-has-virus-sound-effect.mp3"
    },
    {
        "name": "Joker Shitpost beatbox",
        "color": "rgb(22, 255, 46)",
        "mp3": "/media/sounds/joker-shitpost-beatbox.mp3"
    },
    {
        "name": "The long and winded road fart",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/the-long-and-winded-road-fart-sounds-for-ringtones1.mp3"
    },
    {
        "name": "Party Horn thing",
        "color": "rgb(255, 51, 51)",
        "mp3": "/media/sounds/partyblower.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "Rick Roll lolololol",
        "color": "rgb(12, 255, 191)",
        "mp3": "/media/sounds/rick-rolled-meme-aetrim1602054550919.mp3"
    },
    {
        "name": "Discord Leaving",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/discord_leave_sound_effect_download.mp3"
    },
    {
        "name": "creeper aww man",
        "color": "rgb(21, 223, 55)",
        "mp3": "/media/sounds/revenge3.mp3"
    },
    {
        "name": "Party Horn thing",
        "color": "rgb(255, 51, 51)",
        "mp3": "/media/sounds/partyblower.mp3"
    },
    {
        "name": "Brick hitting metal",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/brick-on-metal-sound-effect12.mp3"
    },
    {
        "name": "Eye Of Rah sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eye-of-rah-sound-effect.mp3"
    },
    {
        "name": "YEAHOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeahoo.mp3"
    },
    {
        "name": "Mario 1UP",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mario-1up.mp3"
    },
    {
        "name": "Kid Screaming Meme meme",
        "color": "rgb(255, 100, 254)",
        "mp3": "/media/sounds/kid-screaming-meme-meme.mp3"
    },
    {
        "name": "Uwu hannah",
        "color": "rgb(222, 74, 255)",
        "mp3": "/media/sounds/uwu-hannah.mp3"
    },
    {
        "name": "Cashh Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/para-sesi-efekti_PaUswM1.mp3"
    },
    {
        "name": "Pokémon plink",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpq91k5v_6.mp3"
    },
    {
        "name": "Kim Possible Sitch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kim-possible-ringtone.mp3"
    },
    {
        "name": "Yamate kudasai",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yamate-kudasai.mp3"
    },
    {
        "name": "Millionaire Suspense",
        "color": "rgb(235, 255, 52)",
        "mp3": "/media/sounds/5000000-music-mp3cut.mp3"
    },
    {
        "name": "Guha (CalebCity)",
        "color": "rgb(185, 133, 30)",
        "mp3": "/media/sounds/guha-calebcity.mp3"
    },
    {
        "name": "Incorrect sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-wrong.mp3"
    },
    {
        "name": "LIMBUS COMPANYYYY",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/limbus-companyyyy.mp3"
    },
    {
        "name": "Steal a Brainrot kid cry",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-kid-cry.mp3"
    },
    {
        "name": "WE ARE FORSAKEN (clean as a whistle!)",
        "color": "rgb(32, 32, 32)",
        "mp3": "/media/sounds/we-are-forsaken-clean-as-a-whistle.mp3"
    },
    {
        "name": "Sybau sound",
        "color": "rgb(25, 0, 123)",
        "mp3": "/media/sounds/sybau-sound.mp3"
    },
    {
        "name": "Steal a Brainrot - La Vacca Saturno Saturnita",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-la-vacca-saturno-saturnita.mp3"
    },
    {
        "name": "uwu",
        "color": "rgb(255, 204, 255)",
        "mp3": "/media/sounds/uwu.mp3"
    },
    {
        "name": "Aí chaves",
        "color": "rgb(143, 255, 67)",
        "mp3": "/media/sounds/ai-chaves.mp3"
    },
    {
        "name": "Doorbell Chimes",
        "color": "rgb(55, 212, 255)",
        "mp3": "/media/sounds/apartment-ding-dong-sound.mp3"
    },
    {
        "name": "Mcdonalds Drip",
        "color": "rgb(249, 255, 35)",
        "mp3": "/media/sounds/mcdonalds-drip.mp3"
    },
    {
        "name": "Final Fantasy Victory Fanfare",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final-fantasy-vii-victory-fanfare-1.mp3"
    },
    {
        "name": "Original Sheesh",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/original-sheesh.mp3"
    },
    {
        "name": "Windows 10 USB disconnect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/disconnect.mp3"
    },
    {
        "name": "Mysterious Button ?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/and-his-name-is-john-cena-1_16.mp3"
    },
    {
        "name": "GTA SA Mission Passed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-mission-complete-sound-hq.mp3"
    },
    {
        "name": "Not Funny, Didn't Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/not-funny-didnt-laugh-donkey-kong-meme-1.mp3"
    },
    {
        "name": "bfdi scream",
        "color": "rgb(103, 255, 141)",
        "mp3": "/media/sounds/the_bfdi_scream.mp3"
    },
    {
        "name": "Rick Roll lolololol",
        "color": "rgb(12, 255, 191)",
        "mp3": "/media/sounds/rick-rolled-meme-aetrim1602054550919.mp3"
    },
    {
        "name": "Fire Whoosh",
        "color": "rgb(238, 228, 23)",
        "mp3": "/media/sounds/fire-whoosh.mp3"
    },
    {
        "name": "GTA V Wasted (Death Sound)",
        "color": "rgb(219, 0, 0)",
        "mp3": "/media/sounds/gta-v-wasted-death-sound.mp3"
    },
    {
        "name": "whoosh sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/whoosh-sfx.mp3"
    },
    {
        "name": "Twitch Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/for-inspiration-twitch_hitbox-alert-sound-normal-donation-sound-youtube.mp3"
    },
    {
        "name": "AW HELL NAH MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aw-hell-nah-man.mp3"
    },
    {
        "name": "Ambatukam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ambatukam.mp3"
    },
    {
        "name": "Hello your computer has virus",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hello-your-computer-has-virus-sound-effect.mp3"
    },
    {
        "name": "Dodgeball Hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dodgeball.mp3"
    },
    {
        "name": "Punch! Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/punch-sound-effect.mp3"
    },
    {
        "name": "fnaf 1 door",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-slamming-fnaf-1-sound-effects.mp3"
    },
    {
        "name": "YEAHOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeahoo.mp3"
    },
    {
        "name": "goofy scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-yell_LvAybRd.mp3"
    },
    {
        "name": "Bedtime",
        "color": "rgb(54, 54, 54)",
        "mp3": "/media/sounds/bedtime.mp3"
    },
    {
        "name": "What the Helly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-helly.mp3"
    },
    {
        "name": "Death Bong",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/death-bong.mp3"
    },
    {
        "name": "I AM GUNNA COME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-am-gunna-come.mp3"
    },
    {
        "name": "Enemy encounter (Undertale)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/enemy-encounter-undertale.mp3"
    },
    {
        "name": "Hollow Purple",
        "color": "rgb(150, 17, 142)",
        "mp3": "/media/sounds/hollow-purple.mp3"
    },
    {
        "name": "Purge Siren Extended",
        "color": "rgb(245, 0, 0)",
        "mp3": "/media/sounds/the-purgesiren-extended.mp3"
    },
    {
        "name": "Guha (CalebCity)",
        "color": "rgb(185, 133, 30)",
        "mp3": "/media/sounds/guha-calebcity.mp3"
    },
    {
        "name": "Incorrect sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/answer-wrong.mp3"
    },
    {
        "name": "Invisible - Duran",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/invisible-duran.mp3"
    },
    {
        "name": "Fish meme sfx",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fish-meme-sfx.mp3"
    },
    {
        "name": "Trippi Troppi Italian brainrot",
        "color": "rgb(107, 225, 255)",
        "mp3": "/media/sounds/trippi-troppi-italian-brainrot.mp3"
    },
    {
        "name": "Villager Complete Trade",
        "color": "rgb(110, 66, 36)",
        "mp3": "/media/sounds/villager-complete-trade.mp3"
    },
    {
        "name": "LIMBUS COMPANYYYY",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/limbus-companyyyy.mp3"
    },
    {
        "name": "Baigan",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/baigan.mp3"
    },
    {
        "name": "Sybau sound",
        "color": "rgb(25, 0, 123)",
        "mp3": "/media/sounds/sybau-sound.mp3"
    },
    {
        "name": "Wake Up Its The first of da month",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wake-up-its-the-first-of-da-month.mp3"
    },
    {
        "name": "Aí chaves",
        "color": "rgb(143, 255, 67)",
        "mp3": "/media/sounds/ai-chaves.mp3"
    },
    {
        "name": "Ahhhhhhhh Daddyyi",
        "color": "rgb(251, 45, 255)",
        "mp3": "/media/sounds/ahhhhhhhh-daddyyi.mp3"
    },
    {
        "name": "trobbio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trobbio.mp3"
    },
    {
        "name": "Wow Guy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wow-.mp3"
    },
    {
        "name": "Tapi Boong hahaha",
        "color": "rgb(7, 255, 23)",
        "mp3": "/media/sounds/tapi-boong-hahaha.mp3"
    },
    {
        "name": "cyka blyat sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cyka-blyat-for-memes.mp3"
    },
    {
        "name": "Close your Eyes Girl",
        "color": "rgb(20, 255, 71)",
        "mp3": "/media/sounds/close-your-eyes-girl.mp3"
    },
    {
        "name": "The crime is your foul existence!",
        "color": "rgb(35, 52, 136)",
        "mp3": "/media/sounds/the-crime-is-your-foul-existence.mp3"
    },
    {
        "name": "Giorno's Theme normal",
        "color": "rgb(255, 250, 114)",
        "mp3": "/media/sounds/giornos-theme-but-only-the-best-part-is-in_vwd15lya_lyb0-online-audio-converter.mp3"
    },
    {
        "name": "Ka-Ching!",
        "color": "rgb(0, 51, 204)",
        "mp3": "/media/sounds/ka-ching.mp3"
    },
    {
        "name": "Fuhhhhh 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fuhhhhh-2.mp3"
    },
    {
        "name": "500 NI...",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/500-ni.mp3"
    },
    {
        "name": "You gon die death",
        "color": "rgb(160, 112, 255)",
        "mp3": "/media/sounds/you-gon-die-death.mp3"
    },
    {
        "name": "Смотрите на этот взрыв",
        "color": "rgb(136, 0, 255)",
        "mp3": "/media/sounds/smotrite-na-etot-vzryv.mp3"
    },
    {
        "name": "a dondeme shevas peluca",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-donde-me-llevas-peluca.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING IN MY SWAMP",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/what-are-you-doing-in-my-swamp-.mp3"
    },
    {
        "name": "Darth Vader NOOOOOOOOO!",
        "color": "rgb(0, 255, 255)",
        "mp3": "/media/sounds/nooo.mp3"
    },
    {
        "name": "*Click* Nice",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/nioce.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "Purge Siren",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/purge_siren.mp3"
    },
    {
        "name": "bomb has been planted",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bomb-has-been-planted-sound-effect-cs-go.mp3"
    },
    {
        "name": "Screaming Goat (best)",
        "color": "rgb(0, 204, 204)",
        "mp3": "/media/sounds/screaming-goat.mp3"
    },
    {
        "name": "Snake death scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal-gear-solid-snake-death-scream-sound-effect_fR1Ryqk.mp3"
    },
    {
        "name": "scooby doo laugh sped up",
        "color": "rgb(148, 71, 26)",
        "mp3": "/media/sounds/scooby-doo-laugh-sped-up.mp3"
    },
    {
        "name": "Linganguliguli Don pollo",
        "color": "rgb(28, 3, 255)",
        "mp3": "/media/sounds/linganguliguli-don-pollo.mp3"
    },
    {
        "name": "LET ME TELL YOU SOMETHING",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/let-me-tell-you-something.mp3"
    },
    {
        "name": "VINE BOOM BASS BOOSTED MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boosted-man.mp3"
    },
    {
        "name": "AUUGHHH!",
        "color": "rgb(125, 0, 255)",
        "mp3": "/media/sounds/auughhh_DPgW9J1.mp3"
    },
    {
        "name": "ishowspeed STFU",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ishowspeed-stfu.mp3"
    },
    {
        "name": "BRR BRR PATAPIM",
        "color": "rgb(255, 164, 164)",
        "mp3": "/media/sounds/brr-brr-patapim.mp3"
    },
    {
        "name": "wobbly wiggly",
        "color": "rgb(0, 255, 3)",
        "mp3": "/media/sounds/wobbly-wiggly.mp3"
    },
    {
        "name": "DDG Boom",
        "color": "rgb(89, 238, 255)",
        "mp3": "/media/sounds/ddg-boom_KZ9NU4w.mp3"
    },
    {
        "name": "blink",
        "color": "rgb(220, 255, 219)",
        "mp3": "/media/sounds/blink_FNZ3zVv.mp3"
    },
    {
        "name": "Dragon Ball Z Heavy Punch",
        "color": "rgb(38, 190, 255)",
        "mp3": "/media/sounds/dragon-ball-z-heavy-punch.mp3"
    },
    {
        "name": "Homelander going crazy angry violin theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/homelander-going-crazy-angry-violin-theme-song.mp3"
    },
    {
        "name": "4092 mango phonk",
        "color": "rgb(255, 85, 13)",
        "mp3": "/media/sounds/4092-mango-phonk.mp3"
    },
    {
        "name": "oh my god bro ah hell nah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-bro-ah-hell-nah.mp3"
    },
    {
        "name": "yoooooooooooo",
        "color": "rgb(26, 30, 255)",
        "mp3": "/media/sounds/yooooooooooooooooooooooooo_4_objp8XX.mp3"
    },
    {
        "name": "Volkswagen das auto remix",
        "color": "rgb(218, 255, 234)",
        "mp3": "/media/sounds/volkswagen-das-auto-remix.mp3"
    },
    {
        "name": "The Boiled One Message",
        "color": "rgb(105, 0, 0)",
        "mp3": "/media/sounds/the-boiled-one-message.mp3"
    },
    {
        "name": "Cyberpunk 2077 phone call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cyberpunk-2077-phone-call.mp3"
    },
    {
        "name": "IM A CAR... BEEP BEEP",
        "color": "rgb(10, 10, 255)",
        "mp3": "/media/sounds/im-a-car-beep-beep.mp3"
    },
    {
        "name": "Hi! Hi! Good Morning",
        "color": "rgb(111, 49, 255)",
        "mp3": "/media/sounds/tiktok-star-hi-hi-good-morning-kid-toddler.mp3"
    },
    {
        "name": "Steal a Brainrot - La Vacca Saturno Saturnita",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-la-vacca-saturno-saturnita.mp3"
    },
    {
        "name": "Harikitte Ikou Kitasan Black",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/harikitte-ikou-kitasan-black.mp3"
    },
    {
        "name": "Dexter Theme",
        "color": "rgb(151, 0, 0)",
        "mp3": "/media/sounds/dexter-theme.mp3"
    },
    {
        "name": "500 NI...",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/500-ni.mp3"
    },
    {
        "name": "Hakari Explanation",
        "color": "rgb(28, 255, 168)",
        "mp3": "/media/sounds/hakari-explanation.mp3"
    },
    {
        "name": "Gas Gas Gas - Manuel (Short)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gas-gas-gaslqshort.mp3"
    },
    {
        "name": "musica triste meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpq7mpzzl9.mp3"
    },
    {
        "name": "Windows 10 USB disconnect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/disconnect.mp3"
    },
    {
        "name": "Super Saiyan Aura",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/saiyan.mp3"
    },
    {
        "name": "Fnaf 6 Jumpscare Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fnaf-6-jumpscare-sound-effect.mp3"
    },
    {
        "name": "Zelda chest opening",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/zelda-chest-opening-and-item-catch.mp3"
    },
    {
        "name": "Flight reacts laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/flightreacts-dolphin-laugh_fW4DqCL.mp3"
    },
    {
        "name": "scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scream.mp3"
    },
    {
        "name": "Minecraft Enderman Teleport Sound",
        "color": "rgb(189, 19, 231)",
        "mp3": "/media/sounds/teleport1_Cw1ot9l.mp3"
    },
    {
        "name": "Western",
        "color": "rgb(255, 153, 0)",
        "mp3": "/media/sounds/o-bom-o-mal-e-o-feio-velho-oeste-desafio-dont-talk-duelo-desafio-armas.mp3"
    },
    {
        "name": "Undertale - Damage Taken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-damage-taken.mp3"
    },
    {
        "name": "tarkov metal hit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal04gr-converted.mp3"
    },
    {
        "name": "Real punch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/punch-notification_sound-493565.mp3"
    },
    {
        "name": "goofy scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/goofy-yell_LvAybRd.mp3"
    },
    {
        "name": "Cod Zombies Bye Bye",
        "color": "rgb(185, 131, 82)",
        "mp3": "/media/sounds/bye-bye_Ua5VOTV.mp3"
    },
    {
        "name": "Cartoon Strings",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/strings_ofg6Kxg.mp3"
    },
    {
        "name": "Windows 10 Notification",
        "color": "rgb(0, 58, 255)",
        "mp3": "/media/sounds/windows-10-notification.mp3"
    },
    {
        "name": "Noob music",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scheming-weasel-faster-1-mp3cutn-mp3cut.mp3"
    },
    {
        "name": "Enemy encounter (Undertale)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/enemy-encounter-undertale.mp3"
    },
    {
        "name": "Uwu hannah",
        "color": "rgb(222, 74, 255)",
        "mp3": "/media/sounds/uwu-hannah.mp3"
    },
    {
        "name": "20th Century Fox Fanfare",
        "color": "rgb(255, 211, 0)",
        "mp3": "/media/sounds/20th-century-fox-fanfare.mp3"
    },
    {
        "name": "goofy ahh laugh meme",
        "color": "rgb(240, 255, 0)",
        "mp3": "/media/sounds/goofy-ahh-laugh-meme.mp3"
    },
    {
        "name": "OUI OUI",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_DO1kVeR.mp3"
    },
    {
        "name": "balerina capuchina",
        "color": "rgb(255, 145, 233)",
        "mp3": "/media/sounds/balerina-capuchina.mp3"
    },
    {
        "name": "ААААААА ЖЕНЩИНА",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aaaaaaa-zhenshchina.mp3"
    },
    {
        "name": "Get Out [MEMES}",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/get-out-memes.mp3"
    },
    {
        "name": "iphone camera shutter fast",
        "color": "rgb(216, 98, 255)",
        "mp3": "/media/sounds/iphone-camera-shutter-fast.mp3"
    },
    {
        "name": "(mafioso) just shut up and rage quit",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-just-shut-up-and-rage-quit.mp3"
    },
    {
        "name": "LIMBUS COMPANYYYY",
        "color": "rgb(255, 230, 0)",
        "mp3": "/media/sounds/limbus-companyyyy.mp3"
    },
    {
        "name": "Kid Slap *oh*",
        "color": "rgb(255, 15, 27)",
        "mp3": "/media/sounds/kid-slap-oh.mp3"
    },
    {
        "name": "Salesman Squid Game Edit Audio - Blah! Phonk",
        "color": "rgb(5, 0, 0)",
        "mp3": "/media/sounds/salesman-squid-game-edit-audio-blah-phonk.mp3"
    },
    {
        "name": "A risada do kiko",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-risada-do-kiko.mp3"
    },
    {
        "name": "Red Larva Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/red-larva-scream.mp3"
    },
    {
        "name": "Nombre chapulín MM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nombre-chapulin-mm.mp3"
    },
    {
        "name": "Italian brainrot ringtone v2222332",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/italian-brainrot-ringtone-v2222332.mp3"
    },
    {
        "name": "Flight Irish Spring Green",
        "color": "rgb(39, 255, 32)",
        "mp3": "/media/sounds/flight-irish-spring-green_sPDXG9p.mp3"
    },
    {
        "name": "Yes King yo somebody get the door",
        "color": "rgb(224, 255, 249)",
        "mp3": "/media/sounds/yes-king-yo-somebody-get-the-door.mp3"
    },
    {
        "name": "akrobeto",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/akrobeto.mp3"
    },
    {
        "name": "Poco X3 Phone",
        "color": "rgb(255, 243, 243)",
        "mp3": "/media/sounds/poco-x3-phone.mp3"
    },
    {
        "name": "ối dồi ôi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate-mp3cut_d1tt0z9.mp3"
    },
    {
        "name": "WHAT ARE YOU DOING STEP BRO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-are-you-doing-step-bro-tik-tok-meme.mp3"
    },
    {
        "name": "I'm fast as f boi",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-fast-as-f-boi.mp3"
    },
    {
        "name": "*Click* Nice",
        "color": "rgb(102, 102, 102)",
        "mp3": "/media/sounds/nioce.mp3"
    },
    {
        "name": "Record Scratch",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/record-scratch.mp3"
    },
    {
        "name": "World's Smallest Violin",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/worlds-smallest-violin.mp3"
    },
    {
        "name": "Imposter Kill (Among Us)",
        "color": "rgb(219, 64, 64)",
        "mp3": "/media/sounds/stationary-kill_gDwMUvN.mp3"
    },
    {
        "name": "packgod packing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/packgod-packing.mp3"
    },
    {
        "name": "Kanye West Wolves Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wolves_-_kanye-6b019add-71f7-4a31-8363-ed112937445e.mp3"
    },
    {
        "name": "NARUTO BATTLE",
        "color": "rgb(255, 156, 53)",
        "mp3": "/media/sounds/naruto-the-raising-fighting-spirit-extended-audiotrimmer_7wvXRts.mp3"
    },
    {
        "name": "Crickets Chirping",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/crickets-chirping.mp3"
    },
    {
        "name": "THX",
        "color": "rgb(0, 102, 255)",
        "mp3": "/media/sounds/thx.mp3"
    },
    {
        "name": "Thug life instrumental",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/snoop-dogg-base-instrumental-mp3cut.mp3"
    },
    {
        "name": "mission failed, we get em next time",
        "color": "rgb(179, 215, 255)",
        "mp3": "/media/sounds/mission-failed-well-get-em-next-time-sound-effect-zxhixnbk.mp3"
    },
    {
        "name": "Talking Ben No",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-ben-no.mp3"
    },
    {
        "name": "Fart poop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/silly_farts-joe-1473367952.mp3"
    },
    {
        "name": "Tom and jerry scream",
        "color": "rgb(145, 255, 126)",
        "mp3": "/media/sounds/ow2-online-audio-converter.mp3"
    },
    {
        "name": "RIGHT FOOT CREEP",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/right-foot-creep.mp3"
    },
    {
        "name": "ObiWan Discord",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/obiwan-discord.mp3"
    },
    {
        "name": "Shotgun sound (Vanoss)",
        "color": "rgb(51, 0, 0)",
        "mp3": "/media/sounds/shotgun_blast-jim_rogers-1914772763.mp3"
    },
    {
        "name": "Dry Bones (death)",
        "color": "rgb(189, 189, 189)",
        "mp3": "/media/sounds/dry-bones-death.mp3"
    },
    {
        "name": "BRR BRR PATAPIM",
        "color": "rgb(255, 164, 164)",
        "mp3": "/media/sounds/brr-brr-patapim.mp3"
    },
    {
        "name": "Poop sound effect",
        "color": "rgb(84, 255, 223)",
        "mp3": "/media/sounds/poop-sound-effect.mp3"
    },
    {
        "name": "Eagle sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/eagle-sound.mp3"
    },
    {
        "name": "Squeak fart with reverb",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fart3.mp3"
    },
    {
        "name": "Courage speak",
        "color": "rgb(213, 139, 255)",
        "mp3": "/media/sounds/courage-speak.mp3"
    },
    {
        "name": "Homelander going crazy angry violin theme song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/homelander-going-crazy-angry-violin-theme-song.mp3"
    },
    {
        "name": "brain farts",
        "color": "rgb(153, 14, 255)",
        "mp3": "/media/sounds/brain-farts.mp3"
    },
    {
        "name": "\"Ah\" Cute Anime Voice Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-cute-anime-voice-sound-effect.mp3"
    },
    {
        "name": "Fast whoosh",
        "color": "rgb(239, 249, 255)",
        "mp3": "/media/sounds/fast-whoosh.mp3"
    },
    {
        "name": "Escreve e apaga",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/escreve-e-apaga.mp3"
    },
    {
        "name": "Ichigo Bankai",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ichigo-bankai_91wUa6g.mp3"
    },
    {
        "name": "Coryxkenshin \"Yeager\" slap sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/coryxkenshin-yeager-slap-sound-effect.mp3"
    },
    {
        "name": "Пук в эхо",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/puk-v-ekho.mp3"
    },
    {
        "name": "Plankton - Oooooh",
        "color": "rgb(40, 112, 79)",
        "mp3": "/media/sounds/plankton-oooooh.mp3"
    },
    {
        "name": "Bob Esponja - Fail Sound",
        "color": "rgb(207, 255, 0)",
        "mp3": "/media/sounds/bob-esponja-fail-sound.mp3"
    },
    {
        "name": "смех ребенка",
        "color": "rgb(255, 213, 0)",
        "mp3": "/media/sounds/smekh-rebenka.mp3"
    },
    {
        "name": "Alexis Texas",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alexis-texas.mp3"
    },
    {
        "name": "о братик ты че тоже здесь литвин",
        "color": "rgb(255, 201, 73)",
        "mp3": "/media/sounds/o-bratik-ty-che-tozhe-zdes-litvin.mp3"
    },
    {
        "name": "homero gimiendo",
        "color": "rgb(219, 76, 255)",
        "mp3": "/media/sounds/homero-gimiendo.mp3"
    },
    {
        "name": "Bluudud “Skill Issue”",
        "color": "rgb(28, 20, 255)",
        "mp3": "/media/sounds/bluudud-skill-issue.mp3"
    },
    {
        "name": "Beavis and Butthead Laughing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/beavis-and-butthead-laughing_CnqvWhZ.mp3"
    },
    {
        "name": "1 EGGS 1 EGGS 1 EGGS 1 EGGS",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-eggs-1-eggs-1-eggs-1-eggs_USqQKWD.mp3"
    },
    {
        "name": "Six seven",
        "color": "rgb(36, 61, 255)",
        "mp3": "/media/sounds/six-seven_okPwnRN.mp3"
    },
    {
        "name": "flashbang full out",
        "color": "rgb(255, 222, 124)",
        "mp3": "/media/sounds/flashbang-full-out.mp3"
    },
    {
        "name": "Woman Scream 1",
        "color": "rgb(204, 0, 153)",
        "mp3": "/media/sounds/woman-scream-1.mp3"
    },
    {
        "name": "Dah Yatim Goblok Main Ling Kek Tolol Anjing",
        "color": "rgb(17, 0, 255)",
        "mp3": "/media/sounds/dah-yatim-goblok-main-ling-kek-tolol-anjing.mp3"
    },
    {
        "name": "CLOCK IT",
        "color": "rgb(255, 135, 139)",
        "mp3": "/media/sounds/clock-it.mp3"
    },
    {
        "name": "Ya ha ha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/out_zpmTQUA.mp3"
    },
    {
        "name": "bass boost",
        "color": "rgb(102, 0, 51)",
        "mp3": "/media/sounds/bass-boost.mp3"
    },
    {
        "name": "Angry Cat Meow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry4.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
    },
    {
        "name": "Tarkov grenade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
    },
    {
        "name": "OOOH MY GOD",
        "color": "rgb(12, 255, 44)",
        "mp3": "/media/sounds/oooh-my-god-vine-mp3cut.mp3"
    },
    {
        "name": "cod zombie scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/img_6228.mp3"
    },
    {
        "name": "Prowler Siren",
        "color": "rgb(124, 0, 204)",
        "mp3": "/media/sounds/prowler_sound.mp3"
    },
    {
        "name": "i believe i can fly",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled2.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "Get yo fat ass back here",
        "color": "rgb(45, 235, 240)",
        "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
    },
    {
        "name": "Metal Gear Solid - Codec",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/codec.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "iCarly Cheers",
        "color": "rgb(39, 248, 255)",
        "mp3": "/media/sounds/icarly-cheers.mp3"
    },
    {
        "name": "Among Us Drip Theme Song",
        "color": "rgb(178, 255, 44)",
        "mp3": "/media/sounds/record-online-voice-recorder_kIwejRI.mp3"
    },
    {
        "name": "Cow Moo",
        "color": "rgb(204, 102, 255)",
        "mp3": "/media/sounds/cow-moo.mp3"
    },
    {
        "name": "can i pet that dog",
        "color": "rgb(73, 255, 79)",
        "mp3": "/media/sounds/can-i-pet-dat-dog-mp3.mp3"
    },
    {
        "name": "Mario - Power Up",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-power-up-mario.mp3"
    },
    {
        "name": "Tokyo Drift Alert",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled_zd2ts4l-audiotrimmer.mp3"
    },
    {
        "name": "Cow Moo",
        "color": "rgb(204, 102, 255)",
        "mp3": "/media/sounds/cow-moo.mp3"
    },
    {
        "name": "Joker Shitpost beatbox",
        "color": "rgb(22, 255, 46)",
        "mp3": "/media/sounds/joker-shitpost-beatbox.mp3"
    },
    {
        "name": "rust c4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rust-c4.mp3"
    },
    {
        "name": "Gegagedigedagedago (Full)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gegagedigedagedago-full.mp3"
    },
    {
        "name": "its time to stop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-time-to-stop-button.mp3"
    },
    {
        "name": "Cannon explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cannon.mp3"
    },
    {
        "name": "Fart poop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/silly_farts-joe-1473367952.mp3"
    },
    {
        "name": "Doorbell",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/door-bell-sound-effect.mp3"
    },
    {
        "name": "JAWS THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jaws-theme_TDORPKA.mp3"
    },
    {
        "name": "Horse Neigh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/horse-neighing-sound-effect.mp3"
    },
    {
        "name": "fire alarm chirp",
        "color": "rgb(164, 147, 255)",
        "mp3": "/media/sounds/fire-alarm-chirp.mp3"
    },
    {
        "name": "Poop sound effect",
        "color": "rgb(84, 255, 223)",
        "mp3": "/media/sounds/poop-sound-effect.mp3"
    },
    {
        "name": "Door Slamming",
        "color": "rgb(0, 255, 102)",
        "mp3": "/media/sounds/door-slamming-sound-effect-no-repeats-or-silence-2016.mp3"
    },
    {
        "name": "FNAF Hooray!!!!",
        "color": "rgb(12, 255, 0)",
        "mp3": "/media/sounds/fnaf-hooray.mp3"
    },
    {
        "name": "\"Ah\" Cute Anime Voice Sound Effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ah-cute-anime-voice-sound-effect.mp3"
    },
    {
        "name": "miku miku beam",
        "color": "rgb(7, 255, 240)",
        "mp3": "/media/sounds/miku-miku-beam.mp3"
    },
    {
        "name": "Uncle Ruckus Got the rope",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/uncle-ruckus-i-got-the-rope_eH5EBBM.mp3"
    },
    {
        "name": "Bratz Ew",
        "color": "rgb(230, 20, 255)",
        "mp3": "/media/sounds/bratz-ew.mp3"
    },
    {
        "name": "oh my god bro ah hell nah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-my-god-bro-ah-hell-nah.mp3"
    },
    {
        "name": "pot of greed",
        "color": "rgb(89, 255, 66)",
        "mp3": "/media/sounds/i-summon-pot-of-greed-vr-chat-audiotrimmer.mp3"
    },
    {
        "name": "Coryxkenshin \"Yeager\" slap sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/coryxkenshin-yeager-slap-sound-effect.mp3"
    },
    {
        "name": "Something in the way(The Batman)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/something-in-the-way-the-batman.mp3"
    },
    {
        "name": "Horse Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/horse-sound.mp3"
    },
    {
        "name": "Blood Splatter 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blood-splatter-2.mp3"
    },
    {
        "name": "Animal Crossing Catch Sound",
        "color": "rgb(255, 216, 86)",
        "mp3": "/media/sounds/animal-crossing-catch-sound.mp3"
    },
    {
        "name": "Alexis Texas",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alexis-texas.mp3"
    },
    {
        "name": "Sybau",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sybau.mp3"
    },
    {
        "name": "Hidup jokowi !!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hidup-jokowi.mp3"
    },
    {
        "name": "do you wanna play minigames",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/do-you-wanna-play-minigames.mp3"
    },
    {
        "name": "Beavis and Butthead Laughing",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/beavis-and-butthead-laughing_CnqvWhZ.mp3"
    },
    {
        "name": "Den Den Mushi ring short&louder",
        "color": "rgb(255, 149, 20)",
        "mp3": "/media/sounds/den-den-mushi-ring-short-louder.mp3"
    },
    {
        "name": "Im a dudeman dude man",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-a-dudeman-dude-man.mp3"
    },
    {
        "name": "500 CIGARETTES (TikTok Version)",
        "color": "rgb(57, 83, 113)",
        "mp3": "/media/sounds/500-cigarettes-tiktok-version.mp3"
    },
    {
        "name": "a calamardo le gusta mi p1t0",
        "color": "rgb(96, 234, 255)",
        "mp3": "/media/sounds/a-calamardo-le-gusta-mi-p1t0.mp3"
    },
    {
        "name": "Hah Gay",
        "color": "rgb(204, 153, 51)",
        "mp3": "/media/sounds/ha-gay_ulqsmZY.mp3"
    },
    {
        "name": "akrobeto",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/akrobeto.mp3"
    },
    {
        "name": "Deez Nuts Got EM AHAHAHAHA",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/deez-nuts-got-eem-original-vine-mp3cut.mp3"
    },
    {
        "name": "We'll be right back",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/well-be-right-back.mp3"
    },
    {
        "name": "Angry Cat Meow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry4.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
    },
    {
        "name": "Tarkov grenade",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grenade-plonk-sound-effect-tarkov-louder.mp3"
    },
    {
        "name": "cod zombie scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/img_6228.mp3"
    },
    {
        "name": "Prowler Siren",
        "color": "rgb(124, 0, 204)",
        "mp3": "/media/sounds/prowler_sound.mp3"
    },
    {
        "name": "bomboclat",
        "color": "rgb(88, 255, 14)",
        "mp3": "/media/sounds/bomboclat.mp3"
    },
    {
        "name": "lord have mercy i'm about to bust",
        "color": "rgb(82, 220, 255)",
        "mp3": "/media/sounds/lord-have-mercy-im-bout-to-bust.mp3"
    },
    {
        "name": "Get yo fat ass back here",
        "color": "rgb(45, 235, 240)",
        "mp3": "/media/sounds/get-yo-fat-ass-back-here.mp3"
    },
    {
        "name": "Metal Gear Solid - Codec",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/codec.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "iCarly Cheers",
        "color": "rgb(39, 248, 255)",
        "mp3": "/media/sounds/icarly-cheers.mp3"
    },
    {
        "name": "Ohhh My God",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh_my_god_vine.mp3"
    },
    {
        "name": "Among Us Drip Theme Song",
        "color": "rgb(178, 255, 44)",
        "mp3": "/media/sounds/record-online-voice-recorder_kIwejRI.mp3"
    },
    {
        "name": "Cow Moo",
        "color": "rgb(204, 102, 255)",
        "mp3": "/media/sounds/cow-moo.mp3"
    },
    {
        "name": "Mario - Power Up",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/01-power-up-mario.mp3"
    },
    {
        "name": "sonic spring",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/sonic-spring.mp3"
    },
    {
        "name": "Hello It's John Cena",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/hello-its-john-cena.mp3"
    },
    {
        "name": "Mario kart start race",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mariostart.mp3"
    },
    {
        "name": "autotune baby crying",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmptj_6rrcb.mp3"
    },
    {
        "name": "Undertale Gaster blaster",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gaster_blaster_sound_effect_1.mp3"
    },
    {
        "name": "Slash undertale",
        "color": "rgb(100, 0, 0)",
        "mp3": "/media/sounds/undertale-attack-slash-green-screen.mp3"
    },
    {
        "name": "daisy bell creepy version",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/daisy-bell-creepy-version.mp3"
    },
    {
        "name": "Pokemon Item Found",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-red_blue_yellow-item-found-sound-effect.mp3"
    },
    {
        "name": "Undertale - Damage Taken",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-damage-taken.mp3"
    },
    {
        "name": "Trump on black supporter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trump-on-black-supporter_-_look-at-my-african-american_-1.mp3"
    },
    {
        "name": "Pistol sound effect",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pistol-sound-effect_zejYI9w.mp3"
    },
    {
        "name": "JAWS THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jaws-theme_TDORPKA.mp3"
    },
    {
        "name": "Baldi Ruler Slap",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ruler-slap.mp3"
    },
    {
        "name": "Disappear",
        "color": "rgb(161, 160, 255)",
        "mp3": "/media/sounds/disappear.mp3"
    },
    {
        "name": "OUTRO SONG (Xenogenesis)",
        "color": "rgb(0, 255, 204)",
        "mp3": "/media/sounds/outro-song-xenogenesis.mp3"
    },
    {
        "name": "what the hell (speed up)",
        "color": "rgb(108, 28, 132)",
        "mp3": "/media/sounds/what-the-hell-speed-up.mp3"
    },
    {
        "name": "I'm tired of this grandpa... That's too damn bad",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/im-tired-of-this-grandpa-thats-too-damn-bad.mp3"
    },
    {
        "name": "GUBBY",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gubby.mp3"
    },
    {
        "name": "raving rabbids - bwaaah",
        "color": "rgb(255, 102, 102)",
        "mp3": "/media/sounds/raving_rabbids.mp3"
    },
    {
        "name": "man shut yo gah damn meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/man-shut-yo-gah-damn-meme.mp3"
    },
    {
        "name": "Cat Call whistle",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cat-call.mp3"
    },
    {
        "name": "long wet smelly ass fart",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/long-wet-smelly-ass-fart.mp3"
    },
    {
        "name": "Whatsapp",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/quem-e-whatsapp.mp3"
    },
    {
        "name": "Mr Krabs Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mr-krabs-money.mp3"
    },
    {
        "name": "miku miku beam",
        "color": "rgb(7, 255, 240)",
        "mp3": "/media/sounds/miku-miku-beam.mp3"
    },
    {
        "name": "Bratz Ew",
        "color": "rgb(230, 20, 255)",
        "mp3": "/media/sounds/bratz-ew.mp3"
    },
    {
        "name": "I can do anything Jevil",
        "color": "rgb(255, 238, 0)",
        "mp3": "/media/sounds/jevil-i-can-do-anything.mp3"
    },
    {
        "name": "fnaf2 ambience",
        "color": "rgb(54, 54, 54)",
        "mp3": "/media/sounds/fnaf2-ambience.mp3"
    },
    {
        "name": "idea (ding sound effect)",
        "color": "rgb(157, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2_bICB0mr.mp3"
    },
    {
        "name": "Tik Tok Dramatic Music",
        "color": "rgb(170, 255, 44)",
        "mp3": "/media/sounds/tik-tok-dramatic-music.mp3"
    },
    {
        "name": "Virus Indian Song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/virus-indian-song.mp3"
    },
    {
        "name": "loud jumpscare scream",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/loud-jumpscare-scream.mp3"
    },
    {
        "name": "SONIDO DROSS",
        "color": "rgb(178, 255, 162)",
        "mp3": "/media/sounds/sonido-perturbador.mp3"
    },
    {
        "name": "Ab tu Gaya beta ab dekh tu (puneet",
        "color": "rgb(255, 69, 151)",
        "mp3": "/media/sounds/ab-tu-gaya-beta-ab-dekh-tu-puneet.mp3"
    },
    {
        "name": "Swish",
        "color": "rgb(132, 71, 255)",
        "mp3": "/media/sounds/swish.mp3"
    },
    {
        "name": "Bomba en casa",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/bomba-en-casa.mp3"
    },
    {
        "name": "Africa crying laugh commercial",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/africa-crying-laugh-commercial.mp3"
    },
    {
        "name": "EXPLODED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/exploded_zfp5Xgm.mp3"
    },
    {
        "name": "ki ki ki ma ma ma - jason vorhees",
        "color": "rgb(20, 69, 57)",
        "mp3": "/media/sounds/ki-ki-ki-ma-ma-ma-jason-vorhees.mp3"
    },
    {
        "name": "FAWK you mean!!!",
        "color": "rgb(245, 255, 26)",
        "mp3": "/media/sounds/fawk-you-mean.mp3"
    },
    {
        "name": "Cyberpunk 2077 phone call",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cyberpunk-2077-phone-call.mp3"
    },
    {
        "name": "Infinity Castle Drop",
        "color": "rgb(255, 113, 12)",
        "mp3": "/media/sounds/infinity-castle-drop.mp3"
    },
    {
        "name": "flea awoo",
        "color": "rgb(255, 202, 104)",
        "mp3": "/media/sounds/flea-awoo.mp3"
    },
    {
        "name": "IIIIIIIHHHHHHHHHÁÁÁÁÁÁÁÁÁÁ!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/comedy-male-yelling-yee-ha-sound-effects-free-download-mp3cut.mp3"
    },
    {
        "name": "even flow",
        "color": "rgb(255, 102, 201)",
        "mp3": "/media/sounds/even-flow.mp3"
    },
    {
        "name": "Nhạc xổ số",
        "color": "rgb(74, 64, 255)",
        "mp3": "/media/sounds/nhac-xo-so.mp3"
    },
    {
        "name": "Mr George",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mr-george.mp3"
    },
    {
        "name": "F@#$ING DINOSAURS!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dinosaurs_1.mp3"
    },
    {
        "name": "Desahuevate ctm",
        "color": "rgb(162, 255, 91)",
        "mp3": "/media/sounds/desahuevate-ctm.mp3"
    },
    {
        "name": "default.ogg",
        "color": "rgb(237, 255, 89)",
        "mp3": "/media/sounds/default_ekfhdK2.mp3"
    },
    {
        "name": "Hakari Explanation",
        "color": "rgb(28, 255, 168)",
        "mp3": "/media/sounds/hakari-explanation.mp3"
    },
    {
        "name": "erm what the sigma",
        "color": "rgb(117, 187, 255)",
        "mp3": "/media/sounds/erm-what-the-sigma_su7GnzC.mp3"
    },
    {
        "name": "Mission Failed",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dank-meme-compilation-volume-17_cutted.mp3"
    },
    {
        "name": "Kamehameha!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/kamehameha.swf.mp3"
    },
    {
        "name": "Wololo",
        "color": "rgb(102, 102, 153)",
        "mp3": "/media/sounds/sound-9.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "Za Warudo - Anime's Time Stop",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/za-warudo-stop-time-sound.mp3"
    },
    {
        "name": "Omni man are you sure",
        "color": "rgb(48, 186, 255)",
        "mp3": "/media/sounds/omni-man-are-you-sure.mp3"
    },
    {
        "name": "Spongebob - Grass Skirt Chase",
        "color": "rgb(255, 244, 43)",
        "mp3": "/media/sounds/spongebob-music_-grass-skirt-chase-1.mp3"
    },
    {
        "name": "Bass Distortion / Dab Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dab-distortion.mp3"
    },
    {
        "name": "Curb Your Enthusiasm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/curb-your-enthusiasm.mp3"
    },
    {
        "name": "Round One Fight",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mortal-kombat-9-sound-drop-round-1-fight.mp3"
    },
    {
        "name": "Windows XP ERROR Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
    },
    {
        "name": "Hello Mario",
        "color": "rgb(0, 170, 6)",
        "mp3": "/media/sounds/hello-mario-audiotrimmer.mp3"
    },
    {
        "name": "Windows 3.1 startup (tada)",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/win31.mp3"
    },
    {
        "name": "OHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rap.mp3"
    },
    {
        "name": "what the hell oh my god no way",
        "color": "rgb(206, 50, 255)",
        "mp3": "/media/sounds/what-the-hell-oh-my-god-no-way.mp3"
    },
    {
        "name": "loading..",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2.mp3"
    },
    {
        "name": "VINE BOOM BASS BOOSTED MAN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vine-boom-bass-boosted-man.mp3"
    },
    {
        "name": "Wide Putin Walkin",
        "color": "rgb(49, 59, 67)",
        "mp3": "/media/sounds/wide-putin-walkin.mp3"
    },
    {
        "name": "Ah Shit, Here We Go Again.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_PHjnAqj.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "DBD Skill Check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dbd_check_start.mp3"
    },
    {
        "name": "Slap! AHH!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-ahh.mp3"
    },
    {
        "name": "yay roblox",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yay-roblox.mp3"
    },
    {
        "name": "Are you serious right neow bro",
        "color": "rgb(138, 61, 61)",
        "mp3": "/media/sounds/are-you-serious-right-neow-bro.mp3"
    },
    {
        "name": "Mega Fart!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mega-fart.mp3"
    },
    {
        "name": "prowler sound (extended)",
        "color": "rgb(164, 34, 255)",
        "mp3": "/media/sounds/prowler-sound-extended.mp3"
    },
    {
        "name": "gato riendo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gato-riendo_6bOc2ur.mp3"
    },
    {
        "name": "which bomboclaat dog i am",
        "color": "rgb(97, 0, 0)",
        "mp3": "/media/sounds/which-bomboclaat-dog-i-am.mp3"
    },
    {
        "name": "Draymond green - NOPE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nope_DUF1LFX.mp3"
    },
    {
        "name": "Bone crack meme",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/bone-crack-meme.mp3"
    },
    {
        "name": "Nuke Bomb!",
        "color": "rgb(255, 119, 8)",
        "mp3": "/media/sounds/nuke-bomb.mp3"
    },
    {
        "name": "Dota - rampage",
        "color": "rgb(102, 0, 102)",
        "mp3": "/media/sounds/announcer_kill_rampage_01.mp3"
    },
    {
        "name": "Oh No Meme (2020)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-meme-2020_hX2n56J.mp3"
    },
    {
        "name": "Buzzer error",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/buzzer-error.mp3"
    },
    {
        "name": "hahaha gago",
        "color": "rgb(9, 255, 34)",
        "mp3": "/media/sounds/gago-effect-by-cong-tv.mp3"
    },
    {
        "name": "ГОЙДА!!!!",
        "color": "rgb(255, 106, 0)",
        "mp3": "/media/sounds/goida_hRZ6vDr.mp3"
    },
    {
        "name": "Titanic flute fail",
        "color": "rgb(4, 0, 255)",
        "mp3": "/media/sounds/titanic-flute-fail.mp3"
    },
    {
        "name": "Formula 1 Car",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/formula-1-car.mp3"
    },
    {
        "name": "Charles Leclerc Scream NOOOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/charles-leclerc-scream-noooo.mp3"
    },
    {
        "name": "Steal a Brainrot - Esok Sekolah",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-esok-sekolah.mp3"
    },
    {
        "name": "slice sfx",
        "color": "rgb(13, 0, 255)",
        "mp3": "/media/sounds/slice-sfx.mp3"
    },
    {
        "name": "Woman Scream 1",
        "color": "rgb(204, 0, 153)",
        "mp3": "/media/sounds/woman-scream-1.mp3"
    },
    {
        "name": "CLOCK IT",
        "color": "rgb(255, 135, 139)",
        "mp3": "/media/sounds/clock-it.mp3"
    },
    {
        "name": "Inception Button",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/inceptionbutton.mp3"
    },
    {
        "name": "Pufferfish",
        "color": "rgb(255, 229, 170)",
        "mp3": "/media/sounds/aaughmp3.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "Za Warudo - Anime's Time Stop",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/za-warudo-stop-time-sound.mp3"
    },
    {
        "name": "Curb Your Enthusiasm",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/curb-your-enthusiasm.mp3"
    },
    {
        "name": "Nokia Arabic Ringstone",
        "color": "rgb(144, 251, 255)",
        "mp3": "/media/sounds/nokia-ringtone-arabic.mp3"
    },
    {
        "name": "tom da tank meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loud-version_7n1qEm2.mp3"
    },
    {
        "name": "Stone Sliding",
        "color": "rgb(115, 114, 118)",
        "mp3": "/media/sounds/stone-sliding.mp3"
    },
    {
        "name": "Ohhh My God",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh_my_god_vine.mp3"
    },
    {
        "name": "sonic spring",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/sonic-spring.mp3"
    },
    {
        "name": "Hello It's John Cena",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/hello-its-john-cena.mp3"
    },
    {
        "name": "autotune baby crying",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmptj_6rrcb.mp3"
    },
    {
        "name": "Windows XP ERROR Song",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3"
    },
    {
        "name": "Hello Mario",
        "color": "rgb(0, 170, 6)",
        "mp3": "/media/sounds/hello-mario-audiotrimmer.mp3"
    },
    {
        "name": "Pokemon Item Found",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pokemon-red_blue_yellow-item-found-sound-effect.mp3"
    },
    {
        "name": "Trump on black supporter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trump-on-black-supporter_-_look-at-my-african-american_-1.mp3"
    },
    {
        "name": "Baldi Ruler Slap",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ruler-slap.mp3"
    },
    {
        "name": "General Lee HORN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/general-lee-horn.mp3"
    },
    {
        "name": "what the hell (speed up)",
        "color": "rgb(108, 28, 132)",
        "mp3": "/media/sounds/what-the-hell-speed-up.mp3"
    },
    {
        "name": "loading..",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2.mp3"
    },
    {
        "name": "Neck crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/neck-crack-sound-effect-free-download.mp3"
    },
    {
        "name": "Slap! AHH!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/slap-ahh.mp3"
    },
    {
        "name": "man shut yo gah damn meme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/man-shut-yo-gah-damn-meme.mp3"
    },
    {
        "name": "Falling sound effect",
        "color": "rgb(70, 255, 196)",
        "mp3": "/media/sounds/thick-rain-falling-lightly.mp3"
    },
    {
        "name": "Whatsapp",
        "color": "rgb(51, 255, 0)",
        "mp3": "/media/sounds/quem-e-whatsapp.mp3"
    },
    {
        "name": "Mega Fart!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mega-fart.mp3"
    },
    {
        "name": "Mr Krabs Money",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mr-krabs-money.mp3"
    },
    {
        "name": "Sqeeling Pig",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sqeeling-pig.mp3"
    },
    {
        "name": "I can do anything Jevil",
        "color": "rgb(255, 238, 0)",
        "mp3": "/media/sounds/jevil-i-can-do-anything.mp3"
    },
    {
        "name": "Nuke Bomb!",
        "color": "rgb(255, 119, 8)",
        "mp3": "/media/sounds/nuke-bomb.mp3"
    },
    {
        "name": "fnaf2 ambience",
        "color": "rgb(54, 54, 54)",
        "mp3": "/media/sounds/fnaf2-ambience.mp3"
    },
    {
        "name": "idea (ding sound effect)",
        "color": "rgb(157, 0, 0)",
        "mp3": "/media/sounds/ding-sound-effect_2_bICB0mr.mp3"
    },
    {
        "name": "THINK FAST CHUCKLENUTS",
        "color": "rgb(255, 11, 11)",
        "mp3": "/media/sounds/think-fast-chucklenuts_3ATncZo.mp3"
    },
    {
        "name": "Buddy Holly Weezer Guitar Lick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/buddy-holly-weezer-guitar-lick.mp3"
    },
    {
        "name": "Singing Angels",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angels-singing.mp3"
    },
    {
        "name": "Ed Edd n Eddy Subaluwa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ed-edd-n-eddy-subaluwa-full-best-version_z4mgiJw.mp3"
    },
    {
        "name": "Yippee meme sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippee-meme-sound-effect.mp3"
    },
    {
        "name": "Man Screaming Meme",
        "color": "rgb(111, 214, 255)",
        "mp3": "/media/sounds/man-screaming-memes-sound-effect-2020-for-pro-content-creators_HU6teNC.mp3"
    },
    {
        "name": "Phasmophobia singing Ghost",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/phasmophobia-singing-ghost.mp3"
    },
    {
        "name": "Fortnite Scar Shot",
        "color": "rgb(231, 200, 0)",
        "mp3": "/media/sounds/ar-epic-shot-1.mp3"
    },
    {
        "name": "3.2.1. Go",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/3-2-1-go-green-screen-footage-2xoehcl8evq.mp3"
    },
    {
        "name": "Boing Boing",
        "color": "rgb(255, 0, 153)",
        "mp3": "/media/sounds/japan-oppai-sound.mp3"
    },
    {
        "name": "Tape Rewind",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/y2mate_S1LPbpU.mp3"
    },
    {
        "name": "THE record scratch",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/record-scratch_u0nwDyU.mp3"
    },
    {
        "name": "Phone Ringing",
        "color": "rgb(0, 51, 51)",
        "mp3": "/media/sounds/ringing_phone-mike_koenig-1503628110.mp3"
    },
    {
        "name": "What do you mean by that",
        "color": "rgb(121, 91, 68)",
        "mp3": "/media/sounds/druski-asks-what-do-you-mean-by-that.mp3"
    },
    {
        "name": "Undertale Savepoint",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/savepoint.mp3"
    },
    {
        "name": "Neck crack",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/neck-crack-sound-effect-free-download.mp3"
    },
    {
        "name": "angry birds theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/angry-birds-theme-song-audiotrimmer.mp3"
    },
    {
        "name": "DDG Boom",
        "color": "rgb(89, 238, 255)",
        "mp3": "/media/sounds/ddg-boom_KZ9NU4w.mp3"
    },
    {
        "name": "blink",
        "color": "rgb(220, 255, 219)",
        "mp3": "/media/sounds/blink_FNZ3zVv.mp3"
    },
    {
        "name": "Falling sound effect",
        "color": "rgb(70, 255, 196)",
        "mp3": "/media/sounds/thick-rain-falling-lightly.mp3"
    },
    {
        "name": "she was a fairy",
        "color": "rgb(104, 150, 255)",
        "mp3": "/media/sounds/she-was-a-fairy.mp3"
    },
    {
        "name": "Stone Cold Smash",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/stone-cold-steve-austin-theme-song-download_cut_part1.mp3"
    },
    {
        "name": "Squidward Walking",
        "color": "rgb(184, 223, 211)",
        "mp3": "/media/sounds/squidward-walking.mp3"
    },
    {
        "name": "Random fart button",
        "color": "rgb(221, 255, 232)",
        "mp3": "/media/sounds/fart9.mp3"
    },
    {
        "name": "Undertaker Bell",
        "color": "rgb(255, 236, 0)",
        "mp3": "/media/sounds/undertaker.mp3"
    },
    {
        "name": "Lie detector meme",
        "color": "rgb(151, 0, 0)",
        "mp3": "/media/sounds/lie-detector-meme.mp3"
    },
    {
        "name": "Baldi - All 7 Notebooks",
        "color": "rgb(0, 198, 7)",
        "mp3": "/media/sounds/baldi-all-7-notebooks.mp3"
    },
    {
        "name": "AGAIN! AGAIN!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/again-again.mp3"
    },
    {
        "name": "GAME)Super Smash Bros",
        "color": "rgb(0, 115, 255)",
        "mp3": "/media/sounds/super-smash-bros-ultimate-final-ko-sound-effect.mp3"
    },
    {
        "name": "Among us Imposter Reveal SE",
        "color": "rgb(221, 0, 0)",
        "mp3": "/media/sounds/among-us-imposter-reveal-se.mp3"
    },
    {
        "name": "VA A JUGAR O QUE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/va-jugar-o-que.mp3"
    },
    {
        "name": "Foi quando Gyro Finalmente Entendeu",
        "color": "rgb(55, 28, 137)",
        "mp3": "/media/sounds/foi-quando-gyro-finalmente-entendeu.mp3"
    },
    {
        "name": "(mafioso) your mine",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/mafioso-your-mine.mp3"
    },
    {
        "name": "The Boiled One Trumpet",
        "color": "rgb(95, 0, 0)",
        "mp3": "/media/sounds/the-boiled-one-trumpet.mp3"
    },
    {
        "name": "A risada do kiko",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-risada-do-kiko.mp3"
    },
    {
        "name": "Dandy's world death sound",
        "color": "rgb(33, 41, 29)",
        "mp3": "/media/sounds/dandys-world-death-sound.mp3"
    },
    {
        "name": "Gaster's Theme",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gasters-theme_PgFVfMX.mp3"
    },
    {
        "name": "DO NOT REDEEM",
        "color": "rgb(101, 26, 26)",
        "mp3": "/media/sounds/do-not-redeem_z7RLKwV.mp3"
    },
    {
        "name": "ih takotnyee",
        "color": "rgb(43, 34, 255)",
        "mp3": "/media/sounds/ih-takotnyee.mp3"
    },
    {
        "name": "Let Me Know (Slowed+Reverb)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/let-me-know-slowed-reverb.mp3"
    },
    {
        "name": "фонк ребенок плачет",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/fonk-rebenok-plachet.mp3"
    },
    {
        "name": "Rupertgamingboy",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rupertgamingboy_NQp7b9o.mp3"
    },
    {
        "name": "fighting sound effect",
        "color": "rgb(40, 83, 255)",
        "mp3": "/media/sounds/fighting-sound-effect.mp3"
    },
    {
        "name": "Deltarune ringtone",
        "color": "rgb(96, 116, 255)",
        "mp3": "/media/sounds/deltarune-ringtone_SnkHGfF.mp3"
    },
    {
        "name": "Stop running from me",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stop-running-from-me.mp3"
    },
    {
        "name": "Ai chega chega",
        "color": "rgb(36, 160, 74)",
        "mp3": "/media/sounds/ai-chega-chega.mp3"
    },
    {
        "name": "Pakad MC",
        "color": "rgb(84, 255, 203)",
        "mp3": "/media/sounds/pakad-mc.mp3"
    },
    {
        "name": "Nakime Biwa",
        "color": "rgb(255, 115, 0)",
        "mp3": "/media/sounds/nakime-biwa.mp3"
    },
    {
        "name": "Gemi2222",
        "color": "rgb(5, 9, 255)",
        "mp3": "/media/sounds/gemi2222.mp3"
    },
    {
        "name": "banana bread",
        "color": "rgb(255, 254, 0)",
        "mp3": "/media/sounds/banana-bread.mp3"
    },
    {
        "name": "Steal a Brainrot - Karkerkar Kurkur",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-karkerkar-kurkur.mp3"
    },
    {
        "name": "Breaking glass Sound effect",
        "color": "rgb(168, 0, 172)",
        "mp3": "/media/sounds/breaking-glass-sound-effect_hJd2A9S.mp3"
    },
    {
        "name": "(EXTREMELY LOUD) I'm Back!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/extremely-loud-im-back-joeysworldtour.mp3"
    },
    {
        "name": "Bhag Arjun",
        "color": "rgb(12, 255, 45)",
        "mp3": "/media/sounds/bhag-arjun.mp3"
    },
    {
        "name": "bobby clash royale",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bobby-clash-royale.mp3"
    },
    {
        "name": "Evil Laugh halloween",
        "color": "rgb(195, 255, 202)",
        "mp3": "/media/sounds/evil-laugh-sound.mp3"
    },
    {
        "name": "SDIYBT Jimmy Neutron",
        "color": "rgb(245, 255, 137)",
        "mp3": "/media/sounds/sdiybt-jimmy-neutron.mp3"
    },
    {
        "name": "Bom dia hadouken",
        "color": "rgb(71, 255, 252)",
        "mp3": "/media/sounds/bom-dia-hadouken.mp3"
    },
    {
        "name": "Hogridé",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hogride.mp3"
    },
    {
        "name": "Alice In Borderland - End Registration",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alice-in-borderland-end-registration.mp3"
    },
    {
        "name": "Morioh Cho Radio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jojos-bizarre-adventure_-diamond-is-unbreakable-ost-morioh-cho-radio_cut.mp3"
    },
    {
        "name": "grab your but cheeks",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grab-your-but-cheeks.mp3"
    },
    {
        "name": "Puggy pibble",
        "color": "rgb(10, 161, 255)",
        "mp3": "/media/sounds/puggy-pibble.mp3"
    },
    {
        "name": "sussy clapping",
        "color": "rgb(219, 255, 227)",
        "mp3": "/media/sounds/sussy-clapping_L260iQO.mp3"
    },
    {
        "name": "Ice Cube - Yay Yayee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ice-cube-yay-yayee.mp3"
    },
    {
        "name": "How in the?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/how-in-the.mp3"
    },
    {
        "name": "dolingo five correct answers",
        "color": "rgb(255, 230, 71)",
        "mp3": "/media/sounds/dolingo-five-correct-answers.mp3"
    },
    {
        "name": "I am going to commit great crime",
        "color": "rgb(18, 52, 112)",
        "mp3": "/media/sounds/i-am-going-to-commit-great-crime.mp3"
    },
    {
        "name": "\"RUN\" vine effect sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect_1.mp3"
    },
    {
        "name": "WHAT ARE YOU AIMING AT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steel_tv-what-are-you-aiming-at.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "Vincent Price Evil Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vincent_price_laugh.mp3"
    },
    {
        "name": "YEAHOO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yeahoo.mp3"
    },
    {
        "name": "JAWS THEME",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jaws-theme_TDORPKA.mp3"
    },
    {
        "name": "Meowww",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-end-meow-by-nekocat-just-3-second-1.mp3"
    },
    {
        "name": "Android Ringtone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/android-sound-effect-meme.mp3"
    },
    {
        "name": "Blue lobster meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/blue-lobster-meme.mp3"
    },
    {
        "name": "ay miguel",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ay-miguel.mp3"
    },
    {
        "name": "YOU NEED TO LEAVE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/you-need-to-leave.mp3"
    },
    {
        "name": "she was a fairy",
        "color": "rgb(104, 150, 255)",
        "mp3": "/media/sounds/she-was-a-fairy.mp3"
    },
    {
        "name": "Blink SquarePants",
        "color": "rgb(255, 247, 0)",
        "mp3": "/media/sounds/spongebob-blinking-sound-effect-mp3cut.mp3"
    },
    {
        "name": "1500 es hora y media",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/1500-es-hora-y-media.mp3"
    },
    {
        "name": "Reverse sound effect",
        "color": "rgb(26, 109, 255)",
        "mp3": "/media/sounds/reverse-sound-effect.mp3"
    },
    {
        "name": "GORILLA TAG MONKEYS",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/gorilla-tag-monkeys.mp3"
    },
    {
        "name": "Steven here",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steven-here.mp3"
    },
    {
        "name": "Infinity Castle Drop",
        "color": "rgb(255, 113, 12)",
        "mp3": "/media/sounds/infinity-castle-drop.mp3"
    },
    {
        "name": "Cid Acp behn*choo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cid-acp-behn-choo.mp3"
    },
    {
        "name": "Tung Tung Sahur Song",
        "color": "rgb(192, 145, 68)",
        "mp3": "/media/sounds/tung-tung-sahur-song.mp3"
    },
    {
        "name": "DRAKE 6",
        "color": "rgb(134, 138, 255)",
        "mp3": "/media/sounds/6-god.mp3"
    },
    {
        "name": "Half Life Base Alarm",
        "color": "rgb(255, 51, 0)",
        "mp3": "/media/sounds/half-life-2-episode-2-base-alarm.mp3"
    },
    {
        "name": "Player 67 eliminated",
        "color": "rgb(94, 31, 88)",
        "mp3": "/media/sounds/player-67-eliminated.mp3"
    },
    {
        "name": "dexter song",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dexter-song.mp3"
    },
    {
        "name": "ANTONIO LOBATO!!!",
        "color": "rgb(6, 0, 0)",
        "mp3": "/media/sounds/antonio-lobato_8zPnpk3.mp3"
    },
    {
        "name": "iба чотко",
        "color": "rgb(255, 249, 29)",
        "mp3": "/media/sounds/iba-chotko.mp3"
    },
    {
        "name": "Your phone Ling ling",
        "color": "rgb(153, 255, 165)",
        "mp3": "/media/sounds/your-phone-ling-ling_B5ryivF.mp3"
    },
    {
        "name": "Vasco da gama",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vasco-da-gama.mp3"
    },
    {
        "name": "Your phone is lining",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/your-phone-is-lining.mp3"
    },
    {
        "name": "WHAT ARE YOU AIMING AT",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steel_tv-what-are-you-aiming-at.mp3"
    },
    {
        "name": "ALL MY FELLAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/all-my-fellas.mp3"
    },
    {
        "name": "WOW! (Happy - Fairy Tail)",
        "color": "rgb(0, 102, 204)",
        "mp3": "/media/sounds/wow_2.mp3"
    },
    {
        "name": "spongebob Hi How Are Ya?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spongebob-hi-how-are-ya-.mp3"
    },
    {
        "name": "FNAF 4 Jumpscare",
        "color": "rgb(0, 153, 204)",
        "mp3": "/media/sounds/jumpscare-sound-fnaf-4.mp3"
    },
    {
        "name": "Ambatukam",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ambatukam.mp3"
    },
    {
        "name": "Ohhh My God",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh_my_god_vine.mp3"
    },
    {
        "name": "Crickets Chirping",
        "color": "rgb(0, 153, 0)",
        "mp3": "/media/sounds/crickets-chirping.mp3"
    },
    {
        "name": "“Mwahahaha”",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mwahahaha.mp3"
    },
    {
        "name": "Social credit music",
        "color": "rgb(255, 245, 0)",
        "mp3": "/media/sounds/social-credit-music.mp3"
    },
    {
        "name": "Morgan Freeman I can smell you",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/morgan-freeman-can-smell-you_Oq9fTvy.mp3"
    },
    {
        "name": "concrete scraping",
        "color": "rgb(66, 116, 255)",
        "mp3": "/media/sounds/concrete-scraping.mp3"
    },
    {
        "name": "ААААААА ЖЕНЩИНА",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/aaaaaaa-zhenshchina.mp3"
    },
    {
        "name": "roblox classic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-classic-jump.mp3"
    },
    {
        "name": "096 scream",
        "color": "rgb(0, 255, 251)",
        "mp3": "/media/sounds/096-scream_0vADOL2.mp3"
    },
    {
        "name": "lonely lonely I guess I'm lonely",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/lonely-lonely-i-guess-im-lonely.mp3"
    },
    {
        "name": "GYYAAAAAT!!!",
        "color": "rgb(255, 174, 230)",
        "mp3": "/media/sounds/gyyaaaaat.mp3"
    },
    {
        "name": "Salesman Squid Game Edit Audio - Blah! Phonk",
        "color": "rgb(5, 0, 0)",
        "mp3": "/media/sounds/salesman-squid-game-edit-audio-blah-phonk.mp3"
    },
    {
        "name": "mario meow",
        "color": "rgb(235, 117, 33)",
        "mp3": "/media/sounds/mario-meow.mp3"
    },
    {
        "name": "Four screeching (BFB)",
        "color": "rgb(20, 111, 255)",
        "mp3": "/media/sounds/four-screeching-bfb.mp3"
    },
    {
        "name": "meow billie eilish",
        "color": "rgb(255, 94, 94)",
        "mp3": "/media/sounds/meow-billie-eilish.mp3"
    },
    {
        "name": "Ocean meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ocean-meme.mp3"
    },
    {
        "name": "man screaming",
        "color": "rgb(217, 255, 57)",
        "mp3": "/media/sounds/man-screaming.mp3"
    },
    {
        "name": "RickRoll Tralalero Tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rickroll-tralalero-tralala.mp3"
    },
    {
        "name": "garam brainrot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/garam-brainrot.mp3"
    },
    {
        "name": "ROM ROM BHAIYO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rom-rom-bhaiyo.mp3"
    },
    {
        "name": "Golden knight ! Clash royale",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/golden-knight-clash-royale.mp3"
    },
    {
        "name": "Cid Acp behn*choo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cid-acp-behn-choo.mp3"
    },
    {
        "name": "Brainrot rap",
        "color": "rgb(69, 124, 57)",
        "mp3": "/media/sounds/brainrot-rap.mp3"
    },
    {
        "name": "QUE RICO DAMELO",
        "color": "rgb(48, 255, 129)",
        "mp3": "/media/sounds/que-rico-damelo_2n6gvwY.mp3"
    },
    {
        "name": "Your too slow!",
        "color": "rgb(37, 197, 255)",
        "mp3": "/media/sounds/slow-sound-effect-download-link.mp3"
    },
    {
        "name": "Rupert Charging Up",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/rupert-charging-up.mp3"
    },
    {
        "name": "Acha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/acha.mp3"
    },
    {
        "name": "hog rider extra loud",
        "color": "rgb(132, 84, 47)",
        "mp3": "/media/sounds/hog-rider-extra-loud.mp3"
    },
    {
        "name": "Whoopty Doo - Young Thung",
        "color": "rgb(83, 255, 53)",
        "mp3": "/media/sounds/whoopty-doo-young-thung.mp3"
    },
    {
        "name": "ANTONIO LOBATO!!!",
        "color": "rgb(6, 0, 0)",
        "mp3": "/media/sounds/antonio-lobato_8zPnpk3.mp3"
    },
    {
        "name": "CEDDIN DEDEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceddin-deden.mp3"
    },
    {
        "name": "du30 masisira buhay mo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/du30-masisira-buhay-mo.mp3"
    },
    {
        "name": "os cara tão na maldade",
        "color": "rgb(255, 223, 35)",
        "mp3": "/media/sounds/os-cara-tao-na-maldade.mp3"
    },
    {
        "name": "67 mangos",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/67-mangos.mp3"
    },
    {
        "name": "Are you guys going trick or treating?",
        "color": "rgb(255, 183, 116)",
        "mp3": "/media/sounds/trim85857c69-f61e-4b6e-8a87-905a.mp3"
    },
    {
        "name": "Final Fantasy level up",
        "color": "rgb(70, 163, 255)",
        "mp3": "/media/sounds/final-fantasy-vii-victory-fanfare-1_dZiSUE7.mp3"
    },
    {
        "name": "King Crimson",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kingu-crimson-no-noriyoku_iyDMsv0.mp3"
    },
    {
        "name": "Tu madre tiene una",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/tu-madre-tiene-una_4GG4162.mp3"
    },
    {
        "name": "rip your balls off Eric Cartman",
        "color": "rgb(233, 255, 65)",
        "mp3": "/media/sounds/rip-your-balls-off-eric-cartman.mp3"
    },
    {
        "name": "im white im black im yellow and im single",
        "color": "rgb(146, 22, 255)",
        "mp3": "/media/sounds/im-white-im-black-im-yellow-and-im-single.mp3"
    },
    {
        "name": "WHAT THE F**K IS GOING ON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-f-k-is-going-on.mp3"
    },
    {
        "name": "im white im black im yellow and im single",
        "color": "rgb(146, 22, 255)",
        "mp3": "/media/sounds/im-white-im-black-im-yellow-and-im-single.mp3"
    },
    {
        "name": "WHAT THE F**K IS GOING ON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-f-k-is-going-on.mp3"
    },
    {
        "name": "yes king why why why why....",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-why-why-why-why.mp3"
    },
    {
        "name": "Modelo Time Foo",
        "color": "rgb(15, 27, 255)",
        "mp3": "/media/sounds/modelo-time-foo.mp3"
    },
    {
        "name": "STFU NIG",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stfu-nig.mp3"
    },
    {
        "name": "Музыкальный Пердёж",
        "color": "rgb(57, 32, 12)",
        "mp3": "/media/sounds/muzykalnyi-perdiozh.mp3"
    },
    {
        "name": "Tick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tick-deepfrozenapps-397275646-2.mp3"
    },
    {
        "name": "Ohno",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no.mp3"
    },
    {
        "name": "Your phone is lining",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/your-phone-is-lining.mp3"
    },
    {
        "name": "Oh Hell No (Vine)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-hell-no-sound-effect-free-download.mp3"
    },
    {
        "name": "You Stupid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ustoopid.mp3"
    },
    {
        "name": "Galaxy brain meme",
        "color": "rgb(168, 245, 255)",
        "mp3": "/media/sounds/galaxy-brain-meme.mp3"
    },
    {
        "name": "ding dong eat it up",
        "color": "rgb(255, 159, 33)",
        "mp3": "/media/sounds/ding-dong-eat-it-up.mp3"
    },
    {
        "name": "Among us Roundstart",
        "color": "rgb(220, 10, 255)",
        "mp3": "/media/sounds/among-us-roundstart.mp3"
    },
    {
        "name": "Can We Get Much Higher-One Piece Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/can-we-get-much-higher-one-piece-meme.mp3"
    },
    {
        "name": "Siren head",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/siren-head-sounds-new.mp3"
    },
    {
        "name": "talking benn yes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-benn-yes.mp3"
    },
    {
        "name": "John Cena ARE YOU SURE",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/are-you-sure-about-that.mp3"
    },
    {
        "name": "Snake death scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/metal-gear-solid-snake-death-scream-sound-effect_fR1Ryqk.mp3"
    },
    {
        "name": "Doom Eternal",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/doom-eternal.mp3"
    },
    {
        "name": "E Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-in-the-game_TyOFKRF.mp3"
    },
    {
        "name": "im bout to end this man caree",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/recording-22.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "DEAD BODY REPORTED (Among Us)",
        "color": "rgb(14, 158, 255)",
        "mp3": "/media/sounds/among-us-dead-body-reported-sound-effect_BsczDVE.mp3"
    },
    {
        "name": "Sike! That's The Wrong Number!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/wrong-number.mp3"
    },
    {
        "name": "scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/scream.mp3"
    },
    {
        "name": "Munch (eating / biting)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/munch-sound-effect.mp3"
    },
    {
        "name": "Caught a Pokemon!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/06-caught-a-pokemon.mp3"
    },
    {
        "name": "creeper explosion minecraft",
        "color": "rgb(93, 255, 75)",
        "mp3": "/media/sounds/creeper-explosion.mp3"
    },
    {
        "name": "Aye Yo WTF",
        "color": "rgb(4, 255, 96)",
        "mp3": "/media/sounds/aye-yo.mp3"
    },
    {
        "name": "I'm Going to Kill You, And then Kill you again.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final_5f99b14b144d4b004b4e5eac_638028.mp3"
    },
    {
        "name": "Chomp",
        "color": "rgb(255, 241, 49)",
        "mp3": "/media/sounds/chomp-1.mp3"
    },
    {
        "name": "Star Wars Cantina",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cantina-band.mp3"
    },
    {
        "name": "moai",
        "color": "rgb(145, 145, 145)",
        "mp3": "/media/sounds/moai.mp3"
    },
    {
        "name": "Turtle mating",
        "color": "rgb(0, 204, 0)",
        "mp3": "/media/sounds/turtle-mating.mp3"
    },
    {
        "name": "pain theme naruto",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/pain-2.mp3"
    },
    {
        "name": "Spooky Scary Skeletons.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/andrew-gold-spooky-scary-skeletons-short.mp3"
    },
    {
        "name": "troll laugh",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/troll-laugh.mp3"
    },
    {
        "name": "Mr George",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mr-george.mp3"
    },
    {
        "name": "F@#$ING DINOSAURS!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/dinosaurs_1.mp3"
    },
    {
        "name": "Za piller men",
        "color": "rgb(255, 243, 173)",
        "mp3": "/media/sounds/za-piller-men.mp3"
    },
    {
        "name": "Desahuevate ctm",
        "color": "rgb(162, 255, 91)",
        "mp3": "/media/sounds/desahuevate-ctm.mp3"
    },
    {
        "name": "default.ogg",
        "color": "rgb(237, 255, 89)",
        "mp3": "/media/sounds/default_ekfhdK2.mp3"
    },
    {
        "name": "callese señora auronplay",
        "color": "rgb(42, 255, 0)",
        "mp3": "/media/sounds/callese-senora-vayase-a-la-mierda-meme-auronplay.mp3"
    },
    {
        "name": "Achievement - Geometry Dash",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/achievement-geometry-dash.mp3"
    },
    {
        "name": "I am going to commit great crime",
        "color": "rgb(18, 52, 112)",
        "mp3": "/media/sounds/i-am-going-to-commit-great-crime.mp3"
    },
    {
        "name": "Kamehameha!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/kamehameha.swf.mp3"
    },
    {
        "name": "ZA WARUDO, TIME STOP !",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hd-stardust-crusaders-za-warudo_1.mp3"
    },
    {
        "name": "LOUD Taco Bell Bong",
        "color": "rgb(255, 245, 176)",
        "mp3": "/media/sounds/taco-bell.mp3"
    },
    {
        "name": "Vincent Price Evil Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/vincent_price_laugh.mp3"
    },
    {
        "name": "talking bennnn noo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-bennnn-noo.mp3"
    },
    {
        "name": "musica triste meme",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmpq7mpzzl9.mp3"
    },
    {
        "name": "talking benn yes",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/talking-benn-yes.mp3"
    },
    {
        "name": "FNAF 4 Jumpscare",
        "color": "rgb(0, 153, 204)",
        "mp3": "/media/sounds/jumpscare-sound-fnaf-4.mp3"
    },
    {
        "name": "yessir tik tok",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yessir-sound-effect.mp3"
    },
    {
        "name": "Big Explosion",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/big-explosion.mp3"
    },
    {
        "name": "Dark souls death",
        "color": "rgb(122, 0, 0)",
        "mp3": "/media/sounds/dark-souls-you-died-sound-effect_hm5sYFG.mp3"
    },
    {
        "name": "E Meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-in-the-game_TyOFKRF.mp3"
    },
    {
        "name": "B SWORD WOOSH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woosh_s21KzKN.mp3"
    },
    {
        "name": "Yep That's me you...",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/original-yep-thats-me-youre-probably-wondering_vRBcfjS.mp3"
    },
    {
        "name": "Yippee meme sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yippee-meme-sound-effect.mp3"
    },
    {
        "name": "Impostor kill sound",
        "color": "rgb(123, 120, 255)",
        "mp3": "/media/sounds/among-us-impostor-kill-music_01.mp3"
    },
    {
        "name": "OHHHHHHH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rap.mp3"
    },
    {
        "name": "Mario Bros Game Over",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/super-mario-bros_2.mp3"
    },
    {
        "name": "heheheha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/heheheha.mp3"
    },
    {
        "name": "Phone Ringing",
        "color": "rgb(0, 51, 51)",
        "mp3": "/media/sounds/ringing_phone-mike_koenig-1503628110.mp3"
    },
    {
        "name": "What do you mean by that",
        "color": "rgb(121, 91, 68)",
        "mp3": "/media/sounds/druski-asks-what-do-you-mean-by-that.mp3"
    },
    {
        "name": "elevator waiting",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/elevator_2jN6tnc.mp3"
    },
    {
        "name": "Ah Shit, Here We Go Again.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_PHjnAqj.mp3"
    },
    {
        "name": "YOU MUST DIE",
        "color": "rgb(204, 51, 51)",
        "mp3": "/media/sounds/you-must-die.mp3"
    },
    {
        "name": "Something In My Ass!",
        "color": "rgb(17, 38, 55)",
        "mp3": "/media/sounds/something-in-my-ass_gCDhPgd.mp3"
    },
    {
        "name": "Explosionnn!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/impact_explosion_03.mp3"
    },
    {
        "name": "goofy ahh laugh meme",
        "color": "rgb(240, 255, 0)",
        "mp3": "/media/sounds/goofy-ahh-laugh-meme.mp3"
    },
    {
        "name": "Baby Crying Tears",
        "color": "rgb(255, 178, 252)",
        "mp3": "/media/sounds/baby-crying-tears.mp3"
    },
    {
        "name": "Got a Item BOTW",
        "color": "rgb(36, 101, 3)",
        "mp3": "/media/sounds/zelda_-botw-item-get-sound-effect_360p-online-audio-converter.mp3"
    },
    {
        "name": "Random fart button",
        "color": "rgb(221, 255, 232)",
        "mp3": "/media/sounds/fart9.mp3"
    },
    {
        "name": "prowler sound (extended)",
        "color": "rgb(164, 34, 255)",
        "mp3": "/media/sounds/prowler-sound-extended.mp3"
    },
    {
        "name": "gato riendo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gato-riendo_6bOc2ur.mp3"
    },
    {
        "name": "Oh Noh Cartoon",
        "color": "rgb(225, 255, 32)",
        "mp3": "/media/sounds/oh-no_h28Tjuw.mp3"
    },
    {
        "name": "Undertaker Bell",
        "color": "rgb(255, 236, 0)",
        "mp3": "/media/sounds/undertaker.mp3"
    },
    {
        "name": "Lie detector meme",
        "color": "rgb(151, 0, 0)",
        "mp3": "/media/sounds/lie-detector-meme.mp3"
    },
    {
        "name": "It was at this moment that he knew he f_cked up",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/it-was-at-this-moment-that-he-knew-he-f-cked-up.mp3"
    },
    {
        "name": "Oh No Meme (2020)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-no-meme-2020_hX2n56J.mp3"
    },
    {
        "name": "Formula 1 Car",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/formula-1-car.mp3"
    },
    {
        "name": "Yes King You Digging In",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/yes-king-you-digging-in.mp3"
    },
    {
        "name": "Gulp with Bubble",
        "color": "rgb(209, 250, 255)",
        "mp3": "/media/sounds/gulp-with-bubble.mp3"
    },
    {
        "name": "ford chime",
        "color": "rgb(206, 71, 255)",
        "mp3": "/media/sounds/ford-chime.mp3"
    },
    {
        "name": "SHUT UP smosh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shut-up-smosh.mp3"
    },
    {
        "name": "Gawk gawk",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/gawk-gawk.mp3"
    },
    {
        "name": "Salesman Squid Game Edit Audio - Blah! Phonk",
        "color": "rgb(5, 0, 0)",
        "mp3": "/media/sounds/salesman-squid-game-edit-audio-blah-phonk.mp3"
    },
    {
        "name": "A risada do kiko",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/a-risada-do-kiko.mp3"
    },
    {
        "name": "Four screeching (BFB)",
        "color": "rgb(20, 111, 255)",
        "mp3": "/media/sounds/four-screeching-bfb.mp3"
    },
    {
        "name": "meow billie eilish",
        "color": "rgb(255, 94, 94)",
        "mp3": "/media/sounds/meow-billie-eilish.mp3"
    },
    {
        "name": "Ocean meme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ocean-meme.mp3"
    },
    {
        "name": "man screaming",
        "color": "rgb(217, 255, 57)",
        "mp3": "/media/sounds/man-screaming.mp3"
    },
    {
        "name": "RickRoll Tralalero Tralala",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rickroll-tralalero-tralala.mp3"
    },
    {
        "name": "garam brainrot",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/garam-brainrot.mp3"
    },
    {
        "name": "Stardust - Music Sounds Better With You",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stardust-music-sounds-better-with-you.mp3"
    },
    {
        "name": "Let Me Know (Slowed+Reverb)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/let-me-know-slowed-reverb.mp3"
    },
    {
        "name": "iphone apple store sound",
        "color": "rgb(255, 10, 10)",
        "mp3": "/media/sounds/iphone-apple-store-sound.mp3"
    },
    {
        "name": "ROM ROM BHAIYO",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rom-rom-bhaiyo.mp3"
    },
    {
        "name": "Stop running from me",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stop-running-from-me.mp3"
    },
    {
        "name": "Kamehameha Charge",
        "color": "rgb(0, 255, 249)",
        "mp3": "/media/sounds/kame_charge.mp3"
    },
    {
        "name": "открой мне базу и верни мне брр бр бадабим",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/otkroi-mne-bazu-i-verni-mne-brr-br-badabim.mp3"
    },
    {
        "name": "Rupert Charging Up",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/rupert-charging-up.mp3"
    },
    {
        "name": "Рингтон Франклина ГТА 5",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/rington-franklina-gta-5.mp3"
    },
    {
        "name": "My name is bluduud",
        "color": "rgb(64, 103, 255)",
        "mp3": "/media/sounds/my-name-is-bluduud.mp3"
    },
    {
        "name": "bobby clash royale",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bobby-clash-royale.mp3"
    },
    {
        "name": "u used to call me on your cellphone",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/u-used-to-call-me-on-your-cellphone.mp3"
    },
    {
        "name": "Steal a Brainrot - Pipi Kiwi",
        "color": "rgb(115, 255, 76)",
        "mp3": "/media/sounds/steal-a-brainrot-pipi-kiwi_g8A3wql.mp3"
    },
    {
        "name": "Ghostface - Hello Sidney",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/ghostface-hello-sidney.mp3"
    },
    {
        "name": "NFL Minions",
        "color": "rgb(126, 154, 255)",
        "mp3": "/media/sounds/nfl-minions.mp3"
    },
    {
        "name": "MR SQUIDWARD I SHOULD KICK YOUR-",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mr-squidward-i-should-kick-your.mp3"
    },
    {
        "name": "Morioh Cho Radio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/jojos-bizarre-adventure_-diamond-is-unbreakable-ost-morioh-cho-radio_cut.mp3"
    },
    {
        "name": "nigers",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nigers_Ks1MVaK.mp3"
    },
    {
        "name": "Are you guys going trick or treating?",
        "color": "rgb(255, 183, 116)",
        "mp3": "/media/sounds/trim85857c69-f61e-4b6e-8a87-905a.mp3"
    },
    {
        "name": "Puggy pibble",
        "color": "rgb(10, 161, 255)",
        "mp3": "/media/sounds/puggy-pibble.mp3"
    },
    {
        "name": "NFL FOOTBALL MUSIC",
        "color": "rgb(101, 0, 0)",
        "mp3": "/media/sounds/nfl-football-music.mp3"
    },
    {
        "name": "Мармок Soundpad BASS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/marmok-soundpad-bass.mp3"
    },
    {
        "name": "anjay gede",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/anjay-gede_jHI20Dx.mp3"
    },
    {
        "name": "i shitted in my pants (parody of ms jackson)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/i-shitted-in-my-pants-parody-of-ms-jackson.mp3"
    },
    {
        "name": "GYATTTTTT",
        "color": "rgb(255, 157, 0)",
        "mp3": "/media/sounds/gyatttttt.mp3"
    },
    {
        "name": "Herbert the Pervert 4",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/herbert_ymca-b51b0d11-60de-4ee1-a71d-6683be56057f.mp3"
    },
    {
        "name": "Granny Jumpscare Sound 2",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/granny-jumpscare-sound-2.mp3"
    },
    {
        "name": "\"RUN\" vine effect sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/run-vine-sound-effect_1.mp3"
    },
    {
        "name": "Evil Laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/evillaugh.swf.mp3"
    },
    {
        "name": "Oh Hell No (Vine)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-hell-no-sound-effect-free-download.mp3"
    },
    {
        "name": "A CERTIFIED HOOD CLASSIC",
        "color": "rgb(255, 204, 102)",
        "mp3": "/media/sounds/this-is-a-certified-hood-classic.mp3"
    },
    {
        "name": "OH NO (Jojo)",
        "color": "rgb(0, 0, 153)",
        "mp3": "/media/sounds/oh-no_7.mp3"
    },
    {
        "name": "Galaxy brain meme",
        "color": "rgb(168, 245, 255)",
        "mp3": "/media/sounds/galaxy-brain-meme.mp3"
    },
    {
        "name": "Valorant teleporter",
        "color": "rgb(14, 159, 255)",
        "mp3": "/media/sounds/valorant-teleporter.mp3"
    },
    {
        "name": "Among us Roundstart",
        "color": "rgb(220, 10, 255)",
        "mp3": "/media/sounds/among-us-roundstart.mp3"
    },
    {
        "name": "Biden SODA!",
        "color": "rgb(52, 21, 255)",
        "mp3": "/media/sounds/yt1s_qwrCPVf.mp3"
    },
    {
        "name": "Real gunshot",
        "color": "rgb(153, 255, 255)",
        "mp3": "/media/sounds/m4a1_single-kibblesbob-8540445.mp3"
    },
    {
        "name": "Freddy's Honk Nose",
        "color": "rgb(102, 51, 0)",
        "mp3": "/media/sounds/fnaf-12-3-freddys-nose-sound.mp3"
    },
    {
        "name": "Super Saiyan Aura",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/saiyan.mp3"
    },
    {
        "name": "PINGAS",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pingas-richard-89282878.mp3"
    },
    {
        "name": "we do not care",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/mike-tomlin-we-do-not-care-trim.mp3"
    },
    {
        "name": "Perfect Street Fighter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/perfect-street-fighter-sound-effect.mp3"
    },
    {
        "name": "The Lion Sleeps Tonight (meme)",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/the-lion-sleeps-tonight.mp3"
    },
    {
        "name": "Buddy Holly Weezer Guitar Lick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/buddy-holly-weezer-guitar-lick.mp3"
    },
    {
        "name": "SNORE MIMIMIMIMI",
        "color": "rgb(104, 169, 178)",
        "mp3": "/media/sounds/snore-mimimimimi.mp3"
    },
    {
        "name": "Tobu - Candyland",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/candyland-cat-meme.mp3"
    },
    {
        "name": "Goofy ahh SpongeBob sound",
        "color": "rgb(208, 215, 0)",
        "mp3": "/media/sounds/goofy-ahh-spongebob-sound.mp3"
    },
    {
        "name": "I'm Going to Kill You, And then Kill you again.",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/final_5f99b14b144d4b004b4e5eac_638028.mp3"
    },
    {
        "name": "creeper aww man",
        "color": "rgb(21, 223, 55)",
        "mp3": "/media/sounds/revenge3.mp3"
    },
    {
        "name": "Fart poop",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/silly_farts-joe-1473367952.mp3"
    },
    {
        "name": "B SWORD WOOSH",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/woosh_s21KzKN.mp3"
    },
    {
        "name": "Undertale - Soul Shatter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-soul-shatter.mp3"
    },
    {
        "name": "what the hell (speed up)",
        "color": "rgb(108, 28, 132)",
        "mp3": "/media/sounds/what-the-hell-speed-up.mp3"
    },
    {
        "name": "goofy run sound",
        "color": "rgb(32, 255, 7)",
        "mp3": "/media/sounds/goofy-run-sound.mp3"
    },
    {
        "name": "Steve Hurt Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/steve-old-hurt-sound_3cQdSVW.mp3"
    },
    {
        "name": "Mario 1UP",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/mario-1up.mp3"
    },
    {
        "name": "Love, love, love...",
        "color": "rgb(0, 0, 255)",
        "mp3": "/media/sounds/untitlede42rewrwerwerwe.mp3"
    },
    {
        "name": "TF2 Notification Sound",
        "color": "rgb(157, 157, 157)",
        "mp3": "/media/sounds/tf2-notification-sound.mp3"
    },
    {
        "name": "followers sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/twitchhitbox-followdonation-sound_AQQtmhI.mp3"
    },
    {
        "name": "Werehog Scream",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/werehog-scream.mp3"
    },
    {
        "name": "C00lkidd hawk tuah",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/c00lkidd-hawk-tuah.mp3"
    },
    {
        "name": "Cat laughing at you",
        "color": "rgb(119, 0, 0)",
        "mp3": "/media/sounds/cat-laughing-at-you.mp3"
    },
    {
        "name": "Are you sure about that? JCena",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/are-you-sure-about-that_3D0ngHY.mp3"
    },
    {
        "name": "Creepy and unsettling soundd",
        "color": "rgb(13, 255, 0)",
        "mp3": "/media/sounds/creepy-and-unsettling-soundd.mp3"
    },
    {
        "name": "windows 7 error sound",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/erro-win-7_3OFHeWK.mp3"
    },
    {
        "name": "CS-GO Flashbang",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cs-go-flashbang.mp3"
    },
    {
        "name": "Something in the way(The Batman)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/something-in-the-way-the-batman.mp3"
    },
    {
        "name": "Bob Esponja - Fail Sound",
        "color": "rgb(207, 255, 0)",
        "mp3": "/media/sounds/bob-esponja-fail-sound.mp3"
    },
    {
        "name": "Meme End",
        "color": "rgb(11, 43, 255)",
        "mp3": "/media/sounds/meme-end.mp3"
    },
    {
        "name": "roblox classic jump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/roblox-classic-jump.mp3"
    },
    {
        "name": "Michael Jackson Billie Jean",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/michael-jackson-billie-jean.mp3"
    },
    {
        "name": "Animal Crossing Catch Sound",
        "color": "rgb(255, 216, 86)",
        "mp3": "/media/sounds/animal-crossing-catch-sound.mp3"
    },
    {
        "name": "YOUR TAKING TOO LONG",
        "color": "rgb(255, 147, 53)",
        "mp3": "/media/sounds/your-taking-too-long.mp3"
    },
    {
        "name": "SHUT UP smosh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/shut-up-smosh.mp3"
    },
    {
        "name": "confetti pop sound effect",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/confetti-pop-sound-effect.mp3"
    },
    {
        "name": "Let Me Know (Slowed+Reverb)",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/let-me-know-slowed-reverb.mp3"
    },
    {
        "name": "homero gimiendo",
        "color": "rgb(219, 76, 255)",
        "mp3": "/media/sounds/homero-gimiendo.mp3"
    },
    {
        "name": "Defy Gravity x God Is Kanye",
        "color": "rgb(0, 222, 7)",
        "mp3": "/media/sounds/defy-gravity-x-god-is-kanye.mp3"
    },
    {
        "name": "Kamehameha Charge",
        "color": "rgb(0, 255, 249)",
        "mp3": "/media/sounds/kame_charge.mp3"
    },
    {
        "name": "1 EGGS 1 EGGS 1 EGGS 1 EGGS",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/1-eggs-1-eggs-1-eggs-1-eggs_USqQKWD.mp3"
    },
    {
        "name": "tehelka omlette",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tehelka-omlette.mp3"
    },
    {
        "name": "FAHHHH 6",
        "color": "rgb(31, 57, 255)",
        "mp3": "/media/sounds/fahhhh-6.mp3"
    },
    {
        "name": "PINK PONY CLUB1!!!!!",
        "color": "rgb(255, 114, 199)",
        "mp3": "/media/sounds/pink-pony-club1.mp3"
    },
    {
        "name": "Generic Ka-ching",
        "color": "rgb(0, 199, 13)",
        "mp3": "/media/sounds/generic-ka-ching.mp3"
    },
    {
        "name": "Nakime Biwa",
        "color": "rgb(255, 115, 0)",
        "mp3": "/media/sounds/nakime-biwa.mp3"
    },
    {
        "name": "Ishowspeed screaming",
        "color": "rgb(255, 182, 82)",
        "mp3": "/media/sounds/ishowspeed-screaming.mp3"
    },
    {
        "name": "Your too slow!",
        "color": "rgb(37, 197, 255)",
        "mp3": "/media/sounds/slow-sound-effect-download-link.mp3"
    },
    {
        "name": "Silksong Flea Howl 03 [raw]",
        "color": "rgb(223, 211, 146)",
        "mp3": "/media/sounds/silksong-flea-howl-03-raw.mp3"
    },
    {
        "name": "banana bread",
        "color": "rgb(255, 254, 0)",
        "mp3": "/media/sounds/banana-bread.mp3"
    },
    {
        "name": "Steal a Brainrot - Karkerkar Kurkur",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-karkerkar-kurkur.mp3"
    },
    {
        "name": "Breaking glass Sound effect",
        "color": "rgb(168, 0, 172)",
        "mp3": "/media/sounds/breaking-glass-sound-effect_hJd2A9S.mp3"
    },
    {
        "name": "Acha",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/acha.mp3"
    },
    {
        "name": "(EXTREMELY LOUD) I'm Back!!!",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/extremely-loud-im-back-joeysworldtour.mp3"
    },
    {
        "name": "Silly Screaming Laughter",
        "color": "rgb(122, 222, 172)",
        "mp3": "/media/sounds/silly-screaming-laughter.mp3"
    },
    {
        "name": "twitch doanation",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/twitch-doanation.mp3"
    },
    {
        "name": "SDIYBT Jimmy Neutron",
        "color": "rgb(245, 255, 137)",
        "mp3": "/media/sounds/sdiybt-jimmy-neutron.mp3"
    },
    {
        "name": "cristiano ronaldo buenas noches",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/cristiano-ronaldo-buenas-noches.mp3"
    },
    {
        "name": "Bom dia hadouken",
        "color": "rgb(71, 255, 252)",
        "mp3": "/media/sounds/bom-dia-hadouken.mp3"
    },
    {
        "name": "du30 masisira buhay mo",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/du30-masisira-buhay-mo.mp3"
    },
    {
        "name": "Hogridé",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hogride.mp3"
    },
    {
        "name": "CalebCity Waiit",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/calebcity-waiit.mp3"
    },
    {
        "name": "Alice In Borderland - End Registration",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/alice-in-borderland-end-registration.mp3"
    },
    {
        "name": "grab your but cheeks",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/grab-your-but-cheeks.mp3"
    },
    {
        "name": "sussy clapping",
        "color": "rgb(219, 255, 227)",
        "mp3": "/media/sounds/sussy-clapping_L260iQO.mp3"
    },
    {
        "name": "King Crimson",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/kingu-crimson-no-noriyoku_iyDMsv0.mp3"
    },
    {
        "name": "Harder Better Faster Stronger",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/untitled-28062018-22.mp3"
    },
    {
        "name": "ghostbusters intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ghostbusters_eNjs1Aq.mp3"
    },
    {
        "name": "Ice Cube - Yay Yayee",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ice-cube-yay-yayee.mp3"
    },
    {
        "name": "WHAT THE F**K IS GOING ON",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/what-the-f-k-is-going-on.mp3"
    },
    {
        "name": "How in the?",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/how-in-the.mp3"
    },
    {
        "name": "Музыкальный Пердёж",
        "color": "rgb(57, 32, 12)",
        "mp3": "/media/sounds/muzykalnyi-perdiozh.mp3"
    },
    {
        "name": "Clannad Horror Sound",
        "color": "rgb(102, 0, 204)",
        "mp3": "/media/sounds/clannad.mp3"
    },
    {
        "name": "Tick",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/tick-deepfrozenapps-397275646-2.mp3"
    },
    {
        "name": "Your phone is lining",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/your-phone-is-lining.mp3"
    },
    {
        "name": "dolingo five correct answers",
        "color": "rgb(255, 230, 71)",
        "mp3": "/media/sounds/dolingo-five-correct-answers.mp3"
    },
    {
        "name": "Granny Jumpscare Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/granny-jumpscare-sound.mp3"
    },
    {
        "name": "Its A Me, Mario",
        "color": "rgb(204, 51, 0)",
        "mp3": "/media/sounds/its-me-mario.mp3"
    },
    {
        "name": "You Stupid",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ustoopid.mp3"
    },
    {
        "name": "Oh Baby A Triple",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/oh-baby-a-triple.mp3"
    },
    {
        "name": "peter griffin laugh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/laugh-3_9wVKqU7.mp3"
    },
    {
        "name": "Woman Slap",
        "color": "rgb(255, 120, 53)",
        "mp3": "/media/sounds/woman-slap.mp3"
    },
    {
        "name": "Vibe check",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/klonk.mp3"
    },
    {
        "name": "CELEBRATION",
        "color": "rgb(153, 0, 0)",
        "mp3": "/media/sounds/celebration.mp3"
    },
    {
        "name": "John Cena ARE YOU SURE",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/are-you-sure-about-that.mp3"
    },
    {
        "name": "Rap Air Horn",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/air-horn_1.mp3"
    },
    {
        "name": "Undertale - Omega Flowey Laugh",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/00002a5b.mp3"
    },
    {
        "name": "DEAD BODY REPORTED (Among Us)",
        "color": "rgb(14, 158, 255)",
        "mp3": "/media/sounds/among-us-dead-body-reported-sound-effect_BsczDVE.mp3"
    },
    {
        "name": "BAWONG",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bawong_sfx.mp3"
    },
    {
        "name": "Sike! That's The Wrong Number!",
        "color": "rgb(255, 255, 0)",
        "mp3": "/media/sounds/wrong-number.mp3"
    },
    {
        "name": "Netflix intro",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nouveau-jingle-netflix.mp3"
    },
    {
        "name": "ayo wtf",
        "color": "rgb(138, 171, 255)",
        "mp3": "/media/sounds/ayo-wtf-meme.mp3"
    },
    {
        "name": "creeper explosion minecraft",
        "color": "rgb(93, 255, 75)",
        "mp3": "/media/sounds/creeper-explosion.mp3"
    },
    {
        "name": "Nice shot! Wii Sports",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/nice-shot-wii-sports_DJJ0VOz.mp3"
    },
    {
        "name": "Dun dun duuun",
        "color": "rgb(204, 0, 0)",
        "mp3": "/media/sounds/dun_dun_dun.mp3"
    },
    {
        "name": "Boi what the hell boi",
        "color": "rgb(8, 142, 255)",
        "mp3": "/media/sounds/boi-what-da-hell-boi.mp3"
    },
    {
        "name": "Homer Simpson Scream",
        "color": "rgb(0, 255, 0)",
        "mp3": "/media/sounds/tmp90lreogl.mp3"
    },
    {
        "name": "White tee - rizz",
        "color": "rgb(40, 12, 141)",
        "mp3": "/media/sounds/white-tee-rizz_MPmHfK0.mp3"
    },
    {
        "name": "Playboi Carti What?",
        "color": "rgb(123, 0, 0)",
        "mp3": "/media/sounds/playboi-carti-what_lCCvSas.mp3"
    },
    {
        "name": "moai",
        "color": "rgb(145, 145, 145)",
        "mp3": "/media/sounds/moai.mp3"
    },
    {
        "name": "Undertale - Soul Shatter",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/undertale-soul-shatter.mp3"
    },
    {
        "name": "Dark Souls - Pain",
        "color": "rgb(204, 0, 204)",
        "mp3": "/media/sounds/voice-mx-damage-m-1.mp3"
    },
    {
        "name": "Door Open AIM",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/open-aim.mp3"
    },
    {
        "name": "FNaF Open Camera Sound",
        "color": "rgb(156, 156, 156)",
        "mp3": "/media/sounds/fnaf-open-camera-sound.mp3"
    },
    {
        "name": "Fire Burning",
        "color": "rgb(255, 192, 31)",
        "mp3": "/media/sounds/fire-burning.mp3"
    },
    {
        "name": "Sad Musicccccc",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/sad-music.mp3"
    },
    {
        "name": "A-10 warthog brrrt",
        "color": "rgb(128, 119, 158)",
        "mp3": "/media/sounds/a-10-warthog-brrrt.mp3"
    },
    {
        "name": "Yes yes no no",
        "color": "rgb(126, 196, 255)",
        "mp3": "/media/sounds/ksi-yes-yes-yes-yes-no-no-no-no.mp3"
    },
    {
        "name": "Wrong Answer GameShow",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/wrong_5.mp3"
    },
    {
        "name": "spiderman meme song 2.0",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/spiderman-meme-song-2-0.mp3"
    },
    {
        "name": "JUDGEMENT",
        "color": "rgb(22, 236, 255)",
        "mp3": "/media/sounds/judgement.mp3"
    },
    {
        "name": "Indiana Jones Theme Song",
        "color": "rgb(102, 0, 0)",
        "mp3": "/media/sounds/indiana-jones-theme-song.mp3"
    },
    {
        "name": "8-bit Happy Birthday",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/hb128.mp3"
    },
    {
        "name": "goofy ahh android low quality",
        "color": "rgb(64, 25, 105)",
        "mp3": "/media/sounds/goofy-ahh-android-low-quality.mp3"
    },
    {
        "name": "Family Feud incorrect buzzer",
        "color": "rgb(8, 255, 185)",
        "mp3": "/media/sounds/the-family-feud-buzzer-sound-effect.mp3"
    },
    {
        "name": "Pokemon Wall Bump",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/bumpintowall_X5CNQPB.mp3"
    },
    {
        "name": "Super idol BASS BOOSTED",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/super-idol-bass-boosted.mp3"
    },
    {
        "name": "SWORD SLASH!",
        "color": "rgb(230, 230, 230)",
        "mp3": "/media/sounds/sword_slash-ab22fe02-3826-345a-80ad-dc22261a9127.mp3"
    },
    {
        "name": "Angel choir with sound effect",
        "color": "rgb(229, 255, 215)",
        "mp3": "/media/sounds/angelchoirmarktreekort.mp3"
    },
    {
        "name": "Undertale - Dust Swoosh",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/killsoundpreview.mp3"
    },
    {
        "name": "concrete scraping",
        "color": "rgb(66, 116, 255)",
        "mp3": "/media/sounds/concrete-scraping.mp3"
    },
    {
        "name": "its coming out but",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/its-coming-out-but.mp3"
    },
    {
        "name": "oh hell naw man wtf man",
        "color": "rgb(255, 255, 255)",
        "mp3": "/media/sounds/oh-hell-naw-man-wtf-man.mp3"
    },
    {
        "name": "096 scream",
        "color": "rgb(0, 255, 251)",
        "mp3": "/media/sounds/096-scream_0vADOL2.mp3"
    },
    {
        "name": "Phonk tun tun",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/phonk-tun-tun.mp3"
    },
    {
        "name": "fnaf foxy scream sfx",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/fnaf-foxy-scream-sfx.mp3"
    },
    {
        "name": "Slay button",
        "color": "rgb(255, 66, 175)",
        "mp3": "/media/sounds/slay-button.mp3"
    },
    {
        "name": "Spamton laugh",
        "color": "rgb(171, 56, 255)",
        "mp3": "/media/sounds/spamton-laugh.mp3"
    },
    {
        "name": "Stranger Things Clock Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/stranger-things-clock-sound.mp3"
    },
    {
        "name": "QUE RICO DAMELO",
        "color": "rgb(48, 255, 129)",
        "mp3": "/media/sounds/que-rico-damelo_2n6gvwY.mp3"
    },
    {
        "name": "Kai cenat Doi doi doi",
        "color": "rgb(227, 128, 255)",
        "mp3": "/media/sounds/kai-cenat-doi-doi-doi.mp3"
    },
    {
        "name": "Murder Mystery 2 Win",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/murder-mystery-2-win.mp3"
    },
    {
        "name": "Come as u are",
        "color": "rgb(102, 33, 255)",
        "mp3": "/media/sounds/come-as-u-are.mp3"
    },
    {
        "name": "Ultra diarrhea",
        "color": "rgb(91, 0, 0)",
        "mp3": "/media/sounds/ultra-diarrhea_l7WLiOV.mp3"
    },
    {
        "name": "Steal a Brainrot - Chicleteira Bicicletera",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/steal-a-brainrot-chicleteira-bicicletera.mp3"
    },
    {
        "name": "Whoopty Doo - Young Thung",
        "color": "rgb(83, 255, 53)",
        "mp3": "/media/sounds/whoopty-doo-young-thung.mp3"
    },
    {
        "name": "ANTONIO LOBATO!!!",
        "color": "rgb(6, 0, 0)",
        "mp3": "/media/sounds/antonio-lobato_8zPnpk3.mp3"
    },
    {
        "name": "CEDDIN DEDEN",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ceddin-deden.mp3"
    },
    {
        "name": "HEHEHEHAWW",
        "color": "rgb(25, 49, 255)",
        "mp3": "/media/sounds/hehehehaww.mp3"
    },
    {
        "name": "trippi troppi troppa trippa",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/trippi-troppi-troppa-trippa.mp3"
    },
    {
        "name": "INDIAN PANINI",
        "color": "rgb(255, 161, 114)",
        "mp3": "/media/sounds/vocaroo_s0t0qqra8hne.mp3"
    },
    {
        "name": "67 boy",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/67-boy.mp3"
    },
    {
        "name": "Pennywise Sound",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/pennywises-creepy-sound_aujFnr8.mp3"
    },
    {
        "name": "os cara tão na maldade",
        "color": "rgb(255, 223, 35)",
        "mp3": "/media/sounds/os-cara-tao-na-maldade.mp3"
    },
    {
        "name": "67 mangos",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/67-mangos.mp3"
    },
    {
        "name": "Abriu o áudio",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/abriu-o-audio.mp3"
    },
    {
        "name": "helldivers 2 extract",
        "color": "rgb(255, 227, 16)",
        "mp3": "/media/sounds/helldivers-2-extract.mp3"
    },
    {
        "name": "Zelda Secret",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/loz_secret_BL9kfi1.mp3"
    },
    {
        "name": "ENNNNRIIIIQQQQUEEEEEEEE",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/ennnnriiiiqqqqueeeeeeee.mp3"
    },
    {
        "name": "Driving in my car shut your F***ing mouth",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/driving-in-my-car-shut-your-f-ing-mouth.mp3"
    },
    {
        "name": "Toodles (Mickey Mouse)",
        "color": "rgb(0, 0, 0)",
        "mp3": "/media/sounds/toodles.mp3"
    },
    {
        "name": "Botw Zelda Guardian Theme",
        "color": "rgb(255, 0, 0)",
        "mp3": "/media/sounds/botw-zelda-guardian-theme.mp3"
    }
]