import {Work} from './common/common-entities';
import {WorkList} from './work-list/work-list';
import {WorkDetailPanel} from './work-detail-panel/work-detail-panel';

const workDetailPanel = new WorkDetailPanel(document.getElementById('work-detail-panel'));
const workList = new WorkList(document.getElementById('work-list'));

workList.addWork(new Work('Atemlos', 'Helene Fischer'));
workList.addWork(new Work('Nothing Else Matters', 'Metalica'));
workList.addWork(new Work('Little Dark Age', 'MGMT'));

workDetailPanel.onAddWork = function (work) {
    workList.addWork(work);
};
