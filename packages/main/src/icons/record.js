import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://record";
const d = "M255 145q24 0 44.5 8.5t36 23.5 24 35.5T368 256q0 24-8.5 44t-24 35.5-36 24T255 368q-23 0-43-8.5t-35.5-24-24-35.5-8.5-44q0-23 8.5-43.5t24-35.5 35.5-23.5 43-8.5zM448 32q13 0 22.5 9.5T480 64v384q0 14-9.5 23t-22.5 9H64q-14 0-23-9t-9-23V64q0-13 9-22.5T64 32h384zm0 32H64v384h384V64z";

registerIcon(name, d);
