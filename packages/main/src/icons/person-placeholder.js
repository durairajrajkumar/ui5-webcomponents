import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://person-placeholder";
const d = "M384 128q0 27-10 50t-27.5 40.5-41 27.5-49.5 10q-27 0-50-10t-40.5-27.5T138 178t-10-50q0-26 10-49.5t27.5-41T206 10t50-10q26 0 49.5 10t41 27.5 27.5 41 10 49.5zm-128 96q40 0 68-28t28-68-28-68-68-28-68 28-28 68 28 68 68 28zm64 32q26 0 49.5 10t41 27.5 27.5 41 10 49.5v128H64V384q0-26 10-49.5t27.5-41T142 266t50-10h128zm96 128q0-40-28-68t-68-28H192q-40 0-68 28t-28 68v96h320v-96z";

registerIcon(name, d);
