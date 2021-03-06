import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://org-chart";
const d = "M448 352q14 0 23 9.5t9 22.5v64q0 14-9 23t-23 9H320q-13 0-22.5-9t-9.5-23v-64q0-13 9.5-22.5T320 352h64v-32q0-14-9-23t-23-9H160q-14 0-23 9t-9 23v32h64q14 0 23 9.5t9 22.5v64q0 14-9 23t-23 9H64q-13 0-22.5-9T32 448v-64q0-13 9.5-22.5T64 352h32v-32q0-26 19-45t45-19h80v-64h-80q-14 0-23-9t-9-23V64q0-13 9-22.5t23-9.5h192q14 0 23 9.5t9 22.5v96q0 14-9 23t-23 9h-80v64h80q26 0 45 19t19 45v32h32zM64 384v64h128v-64H64zm288-224V64H160v96h192zm96 224H320v64h128v-64z";

registerIcon(name, d);
