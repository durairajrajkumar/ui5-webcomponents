import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://employee-pane";
const d = "M352 192q0 40-28 68t-68 28-68-28-28-68 28-68 68-28 68 28 28 68zm-96 64q26 0 45-18.5t19-45.5q0-26-19-45t-45-19-45 19-19 45q0 27 19 45.5t45 18.5zm0 128h96v32h-96v-32zM448 32q14 0 23 9t9 23v384q0 14-9 23t-23 9H64q-13 0-22.5-9T32 448V64q0-14 9.5-23T64 32h384zm-64 384q0-96-96-96h-64q-96 0-96 96v32h256v-32zm64-352H64v384h32v-32q0-26 7-49.5t22.5-41T165 298t59-10h64q35 0 59.5 10t39.5 27.5 22 41 7 49.5v32h32V64z";

registerIcon(name, d);
