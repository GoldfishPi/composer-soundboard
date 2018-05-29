
var SoundLoader = Composer.Class.extend({
    initialize: function(path) {
        this.audio = new Audio(path);    
    },
    play: function() {
        this.audio.play();
    },
    stop: function() {
        this.audio.pause();
    }
});

export default SoundLoader;