import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://personnel-view";
const d = "M224 320q26 0 49.5 10t41 27.5 27.5 41 10 49.5v64H32v-64q0-26 10-49.5t27.5-41 41-27.5 49.5-10h64zm96 128q0-40-28-68t-68-28h-64q-40 0-68 28t-28 68v32h256v-32zm-32-224q0 40-28 68t-68 28-68-28-28-68 28-68 68-28 68 28 28 68zm-96 64q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM448 32q14 0 23 9t9 23v352q0 14-9 23t-23 9h-64v-32h64V64H128v32H96V64q0-14 9-23t23-9h320z";

registerIcon(name, d);
