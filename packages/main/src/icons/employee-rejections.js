import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://employee-rejections";
const d = "M445 95l65 65-32 32-63-65-65 65-32-32 65-65-65-63 32-32 65 64 63-64 32 32zM194 320q26 0 49.5 10t41 27.5T312 398t10 50v64H2v-64q0-27 10-50t27.5-40.5 41-27.5 49.5-10h64zm96 128q0-40-28-68t-68-28h-64q-40 0-68 28t-28 68v32h256v-32zm-32-224q0 40-28 68t-68 28-68-28-28-68 28-68 68-28 68 28 28 68zm-96 64q26 0 45-19t19-45q0-27-19-45.5T162 160t-45 18.5T98 224q0 26 19 45t45 19z";

registerIcon(name, d);
