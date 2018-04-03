// import _ from 'lodash';
import workDetailPanel from './templates/work-detail-panel.hbs';
import workList from './templates/work-list.hbs';
import {MDCHelper} from './mdcHelper'


class Work {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }
}

class InputPanel {

    constructor() {
        this.titleElement;
        this.artistElement;
        this.addWorkButton;
        this.render()
    }

    render() {
        document.getElementById('work-detail-panel').innerHTML = workDetailPanel();
        this.titleElement = document.getElementById('title');
        this.artistElement = document.getElementById('artist');
        this.addWorkButton = document.getElementById('addWork');

        MDCHelper.initAll();
    }

    get work() {
        return new Work(this.titleElement.value, this.artistElement.value);
    }
}

class List {

    constructor() {
        this.data = {
            works: []
        };
        this.render();
    }

    render() {
        document.getElementById('work-list').innerHTML = workList(this.data);
    }

    addWork(work) {
        work.id = this.data.works.length + 1;
        this.data.works.push(work);
        this.render();
    }
}

const inputPanel = new InputPanel();
const list = new List();

list.addWork(new Work('Atemlos', 'Helene Fischer'));
list.addWork(new Work('Nothing Else Matters', 'Metalica'));
list.addWork(new Work('Little Dark Age', 'MGMT'));

inputPanel.addWorkButton.onclick = function (event) {
    list.addWork(inputPanel.work);
};
