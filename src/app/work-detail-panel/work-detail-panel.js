import {Work} from '../common/common-entities';
import {MdcHelper} from '../common/mdc-helper';
import workDetailPanel from './work-detail-panel.hbs';

export class WorkDetailPanel {

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.render()
    }

    render() {
        this.rootElement.innerHTML = workDetailPanel();
        this.titleElement = this.rootElement.querySelector('input.title');
        this.artistElement = this.rootElement.querySelector('input.artist');
        this.addWorkButton = this.rootElement.querySelector('button.add-work');

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
