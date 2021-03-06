import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://video";
const d = "M480 64q13 0 22.5 9t9.5 23v320q0 14-9.5 23t-22.5 9q-9 0-16-4L352 324v28q0 27-19 45.5T288 416H64q-26 0-45-18.5T0 352V160q0-26 19-45t45-19h224q26 0 45 19t19 45v29L464 69q8-5 16-5zm-160 96q0-13-9-22.5t-23-9.5H64q-14 0-23 9.5T32 160v192q0 14 9 23t23 9h224q14 0 23-9t9-23V160zm160-64L352 230v53l128 133V96z";

registerIcon(name, d);
