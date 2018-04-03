import {Work} from '../common/common-entities';
import {MdcHelper} from '../common/mdc-helper';
import workDetailPanel from './work-detail-panel.hbs';

export class WorkDetailPanel {

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

        MdcHelper.initAll();
    }

    set onAddWork(onAddWorkFunction) {
        let thiz = this;
        this.addWorkButton.onclick = function (event) {
            onAddWorkFunction(thiz.work);
        };
    }

    get work() {
        return new Work(this.titleElement.value, this.artistElement.value);
    }
}
