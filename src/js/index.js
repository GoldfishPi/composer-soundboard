import SoundLoader from './Classes/SoundLoader';
import SoundButton from './Containers/SoundButton';

var SoundBoard = Composer.Controller.extend({
    buttons: [],
    init: function() {
        this.render();
    },
    render: function() {
        this.html('<div id="sound-board"></div>')
    },
    addButton: function(name, path) {
        this.buttons.push(new SoundButton({inject: '#sound-board'}));
        this.buttons[this.buttons.length-1].init(path, name);
    }
});

var SoundBoard = new SoundBoard({inject: '#app'});
SoundBoard.addButton('Punch', '../res/punch.mp3');
SoundBoard.addButton('Airhorn', '../res/airhorn.mp3');
SoundBoard.addButton('XFiles', '../res/x_files.mp3');
SoundBoard.addButton('WomboCombo', '../res/wombo_combo.mp3');