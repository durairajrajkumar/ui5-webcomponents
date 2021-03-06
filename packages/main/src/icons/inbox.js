import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://inbox";
const d = "M280 278q-10 10-23 10t-22-10L133 177q-12-12 0-23 11-11 22 0l85 85V16q0-16 16-16t16 16v225l87-87q11-11 23 0 5 5 5 11.5t-5 11.5zm200 42q13 0 22.5 9.5T512 352v128q0 14-9.5 23t-22.5 9H32q-14 0-23-9t-9-23V352q0-13 9-22.5t23-9.5h96q0 32 32 32h193q31 0 31-32h96zm0 32h-71q-17 32-56 32H160q-40 0-57-32H32v128h448V352zm-144 64q6 0 11 5t5 11q0 7-5 11.5t-11 4.5H176q-16 0-16-16 0-6 4.5-11t11.5-5h160z";

registerIcon(name, d);
