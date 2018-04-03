import workList from './work-list.hbs';

export class WorkList {

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
