import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://full-screen";
const d = "M480 0q14 0 23 9.5t9 23.5v143q0 16-16 18-6-1-11-5.5t-5-11.5V57L350 189q-12 10-24 1-10-14 0-24L452 32H336q-14 0-16-14 0-16 16-18h144zM176 480q14 0 16 14 0 16-16 18H32q-14 0-23-9.5T0 479V338q0-16 16-18 6 1 11 5.5t5 11.5v118l130-132q12-10 24-1 10 14 0 24L53 480h123zm272-224h32v192q0 13-9 22.5t-23 9.5H256v-32h192V256zm-384 0H32V64q0-14 9.5-23T64 32h192v32H64v192z";

registerIcon(name, d);
