(() => {
    "use strict";
    window.PokiSDK = {
        init: () => Promise.resolve(),
        initWithVideoHB: () => Promise.resolve(),
        commercialBreak: () => Promise.resolve(),
        rewardedBreak: () => Promise.resolve(false),
        displayAd: () => {},
        destroyAd: () => {},
        getLeaderboard: () => Promise.resolve(),
        shareableURL: () => Promise.resolve(""),
        getURLParam: () => "",
        getLanguage: () => navigator.language.toLowerCase().split("-")[0],
        isAdBlocked: () => true,
        getUser: () => Promise.resolve({}),
        getToken: () => Promise.resolve(""),
        login: () => Promise.resolve(),
        
        // Métodos vacíos para analytics y tracking
        captureError: () => {},
        customEvent: () => {},
        gameInteractive: () => {},
        gameLoadingFinished: () => {},
        gameLoadingProgress: () => {},
        gameLoadingStart: () => {},
        gameplayStart: () => {},
        gameplayStop: () => {},
        happyTime: () => {},
        logError: () => {},
        muteAd: () => {},
        roundEnd: () => {},
        roundStart: () => {},
        sendHighscore: () => {},
        setDebug: () => {},
        setDebugTouchOverlayController: () => {},
        setLogging: () => {},
        setPlayerAge: () => {},
        setPlaytestCanvas: () => {},
        enableEventTracking: () => {},
        openExternalLink: () => {},
        playtestSetCanvas: () => {},
        playtestCaptureHtmlOnce: () => {},
        playtestCaptureHtmlForce: () => {},
        playtestCaptureHtmlOn: () => {},
        playtestCaptureHtmlOff: () => {},
        measure: () => {}
    };

    const originalCreateElement = document.createElement;
    document.createElement = function(tagName) {
        const element = originalCreateElement.call(this, tagName);
        if (tagName === 'script') {
            const originalSetAttribute = element.setAttribute;
            element.setAttribute = function(name, value) {
                if (name === 'src' && value && value.includes('poki-sdk')) {
                    return; 
                }
                return originalSetAttribute.call(this, name, value);
            };
        }
        return element;
    };

})();