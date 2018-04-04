import _ from 'lodash';
import workList from './work-list.hbs';
import {MdcHelper} from "../common/mdc-helper";
import {MDCCheckbox} from "@material/checkbox/index";

export class WorkList {

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.data = {
            works: []
        };
        this.idGenerator = 0;
        this.render();
    }

    render() {
        this.rootElement.innerHTML = workList(this.data);
        const removeWorkButton = this.rootElement.querySelector('#work-list button.remove-work');
        const thiz = this;
        removeWorkButton.onclick = function (event) {
            thiz.getSelectedWorkIds().forEach(workId =>
                thiz.removeWorkById(workId)
            );
        };

        MdcHelper.initAll();
    }

    getSelectedWorkIds() {
        return [...this.rootElement.querySelectorAll('.mdc-checkbox')]
            .map(checkbox => new MDCCheckbox(checkbox))
            .filter(checkbox => checkbox.checked === true)
            .map(checkbox => checkbox.root_.getAttribute('workId'))
            .map(workId => parseInt(workId));
    }

    removeWorkById(id) {
        console.log('remove work with id ' + id);
        _.remove(this.data.works, (work) => {
            return work.id === id
        });
        this.render();
    }

    addWork(work) {
        work.id = this.idGenerator++;
        this.data.works.push(work);
        this.render();
    }
}
