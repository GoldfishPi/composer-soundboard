import SoundLoader from '../../Classes/SoundLoader';
var SoundButton = Composer.Controller.extend({
    events: {
        'click input[type=button]' : 'play_sound'
    },

    model: false,

    init: function(path, name) {
        this.sound = new SoundLoader(path);
        this.name = name;
        this.render();
    },

    render: function() {
        var html = '';
        html += '<input class="sound-button" type="button" value="'+this.name+'">'
        this.html(html);
    },

    play_sound: function() {
        this.sound.stop();
        this.sound.play();
    }

});

export default SoundButton;