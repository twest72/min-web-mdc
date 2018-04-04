import app from './app.hbs';
import {Work} from './common/common-entities';
import {WorkList} from './work-list/work-list';
import {WorkDetailPanel} from './work-detail-panel/work-detail-panel';

class App {

    constructor(rootElement) {
        this.rootElement = rootElement;

        this.render()
    }

    render() {
        this.rootElement.innerHTML = app();

        this.workDetailPanel = new WorkDetailPanel(this.rootElement.querySelector('.work-detail-panel'));
        this.workList = new WorkList(this.rootElement.querySelector('.work-list'));

        let thiz = this;
        this.workDetailPanel.onAddWork = function (work) {
            thiz.workList.addWork(work);
        };
    }

    addTestData() {
        this.workList.addWork(new Work('Atemlos', 'Helene Fischer'));
        this.workList.addWork(new Work('Nothing Else Matters', 'Metalica'));
        this.workList.addWork(new Work('Little Dark Age', 'MGMT'));
    }
}

export function initApp(rootElement) {
    return new App(rootElement);
}
