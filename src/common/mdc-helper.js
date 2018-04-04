import {MDCRipple} from "@material/ripple/index";
import {MDCTextField} from "@material/textfield/index";
import {MDCCheckbox} from "@material/checkbox/index";

export class MdcHelper {

    static initAll() {
        document.querySelectorAll('.mdc-text-field').forEach(mdc => new MDCTextField(mdc));
        document.querySelectorAll('.mdc-button').forEach(mdc => new MDCRipple(mdc));
        document.querySelectorAll('.mdc-checkbox').forEach(mdc => new MDCCheckbox(mdc));
    }
}
