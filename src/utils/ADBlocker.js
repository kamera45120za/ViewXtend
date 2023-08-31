import ViewXtendAPI from "../api/ViewXtendAPI";

class ADBlock {
    constructor() {
        this.VX_API = new ViewXtendAPI();
    }

    block_general_ads() {
        let ad_videos = this.VX_API.get_fake_videos();

        for (let i = 0; i < ad_videos.length; i++) {
            ad_videos[i].style.display = 'none';
            ad_videos[i].parentNode.removeChild(ad_videos[i]);
        }
    }

    block_player_ads() {
        if (this.VX_API.get_player() !== undefined) {
            let ad = document.getElementsByClassName("video-ads ytp-ad-module")[0];
            let vid = this.VX_API.get_player();

            if (ad == undefined) {
                // Preserve the original playback rate
                var pbRate = vid.playbackRate;
            }

            // Close ad overlays
            let closeAble = document.getElementsByClassName("ytp-ad-overlay-close-button");
            for (let i = 0; i < closeAble.length; i++) {
                closeAble[i].click();
            }

            // Hide various ad elements
            let sideAd = document.querySelector(".style-scope.ytd-watch-next-secondary-results-renderer.sparkles-light-cta.GoogleActiveViewElement");
            if (sideAd !== undefined) {
                sideAd.style.display = "none";
            }

            let sideAd_ = document.querySelector(".style-scope.ytd-item-section-renderer.sparkles-light-cta");
            if (sideAd_ !== undefined) {
                sideAd_.style.display = "none";
            }

            let skipBtn = document.querySelector(".ytp-ad-text.ytp-ad-skip-button-text");
            if (skipBtn !== undefined) {
                skipBtn.click();
            }

            let incomingAd = document.querySelector(".ytp-ad-message-container");
            if (incomingAd !== undefined) {
                incomingAd.style.display = "none";
            }

            let companionSlot = document.querySelector(".style-scope.ytd-companion-slot-renderer");
            if (companionSlot !== undefined) {
                companionSlot.remove();
            }

            // Incrementally skip unskippable ad if there's one
            if (ad !== undefined && ad.children.length > 0) {
                let previewText = document.querySelector(".ytp-ad-text.ytp-ad-preview-text");
                if (previewText !== undefined) {
                    vid.playbackRate = 16;
                }
            }
        }
    }
}

export default ADBlock;
