/* global Module */

/* Magic Mirror
 * Module: MMM-WordsOfAffirmation
 *
 * By Tavian Taylor
 */

const affirmations = require("./affirmations.js")

Module.register("MMM-WordsOfAffirmation", {
    default:  {
        updateInterval: 12 * 60 * 60 * 1000, //every day
        fadeSpeed: 3000,
        initialLoadDelay: 1250,
        retryDelay: 2500
    },

    getStyles: function() {
        return ["MMM-WordsOfAffirmation.css"];
    },

    start: function() {
        Log.info("Starting module: " + this.name);
        this.affirmation = ""
        this.scheduleUpdate()
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        switch (this.config.size) {
            case 'xsmall':
                wrapper.className = "bright xsmall";
                break;
            case 'small':
                wrapper.className = "bright small";
                break;
            case 'medium':
                wrapper.className = "bright medium";
                break;
            case 'large':
                wrapper.className = "bright large";
                break;
            default:
                wrapper.className = "bright medium";
        }
        wrapper.innerHTML = this.affirmation
        return wrapper

    },

    scheduleUpdate: function() {
        setInterval(() => {
            this.getAffirmation()
        }, this.config.updateInterval)

    },

    getAffirmation: function() {
        this.affirmation = affirmations[Math.floor(Math.random() * affirmations.length)]
    }
})