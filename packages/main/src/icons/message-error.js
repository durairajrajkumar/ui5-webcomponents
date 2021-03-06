import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";
import { ICON_MESSAGE_ERROR } from "../generated/i18n/i18n-defaults.js";

const name = "sap-icon://message-error";
const d = "M257 334q15 0 26.5 10.5T295 372q0 15-11.5 27T257 411q-17 0-28-12t-11-27q0-17 11-27.5t28-10.5zm0-231q15 0 26.5 10.5T295 141l-18 136q-3 14-7.5 18t-12.5 4-13-3.5-7-18.5l-19-136q0-17 11-27.5t28-10.5zM256 0q53 0 100 20t81.5 55 54.5 81.5 20 99.5-20 100-54.5 81.5T356 492t-100 20-99.5-20T75 437.5 20 356 0 256t20-99.5T75 75t81.5-55T256 0zm0 480q46 0 87-17.5t71.5-48 48-71T480 256q0-46-17.5-87t-48-71.5-71.5-48T256 32t-87 17.5-71.5 48-48 71.5T32 256q0 47 17.5 87.5t48 71 71.5 48 87 17.5z";
const acc = ICON_MESSAGE_ERROR;

registerIcon(name, d, acc);
