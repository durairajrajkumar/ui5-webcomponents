import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://it-system";
const d = "M320 304q0-16 16-16h64q16 0 16 16t-16 16h-64q-16 0-16-16zm96-176q0 14-9 23t-23 9-23-9-9-23 9-23 23-9 23 9 9 23zm-192 0q13 0 22.5 9t9.5 23v288q0 14-9.5 23t-22.5 9H64q-14 0-23-9t-9-23V160q0-14 9-23t23-9h160zm0 32H64v288h160V160zM112 416q-16 0-16-16t16-16h64q16 0 16 16t-16 16h-64zm48-160q-14 0-23-9t-9-23 9-23 23-9 23 9 9 23-9 23-23 9zM448 32q13 0 22.5 9t9.5 23v288q0 14-9.5 23t-22.5 9H288v-32h160V64H288v32h-32V64q0-14 9-23t23-9h160z";

registerIcon(name, d);
