import {MDCRipple} from "@material/ripple/index";
import {MDCTextField} from "@material/textfield/index";

export class MDCHelper {

    static initAll() {
        document.querySelectorAll('.mdc-text-field').forEach(function (mdcTextField) {
            new MDCTextField(mdcTextField);
        });
        document.querySelectorAll('.mdc-button').forEach(function (mdcButton) {
            new MDCRipple(mdcButton);
        });
    }
}
