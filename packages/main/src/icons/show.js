import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://show";
const d = "M256 96q36 0 72.5 10t70 30 62.5 49.5 51 69.5q-22 40-51 70t-62.5 50.5-70 30.5-72.5 10h-1q-36 0-72.5-10t-70-30T50 326 0 256q22-40 51-70t63-50 70-30 72-10zm-1 288q66 0 124-34.5t96-94.5q-37-60-95-93.5T256 128t-124 34-95 94q37 60 94.5 94T255 384zm1-224q40 0 68 28t28 68-28 68-68 28-68-28-28-68 28-68 68-28zm39 81q11 0 18-7t7-17q0-11-7-18t-18-7q-10 0-17 7t-7 18q0 10 7 17t17 7z";

registerIcon(name, d);
