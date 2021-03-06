import { registerIcon } from "@ui5/webcomponents-base/dist/SVGIconRegistry.js";

const name = "sap-icon://measurement-document";
const d = "M224 160h32v320q0 13-9.5 22.5T224 512H64q-14 0-23-9.5T32 480V271q-1-22-5-43-3-18-9-37T1 160h37q5 4 9.5 19.5T56 212q4 20 8 44h96v32H64v32h96v32H64v32h96v32H64v64h160V160zM480 32q13 0 22.5 9t9.5 23v352q0 13-9.5 22.5T480 448H288v-32h192V128H160v32h-32V64q0-14 9-23t23-9h32V0h32v32h192V0h32v32h32zM224 64h-32v32h32V64zm224 0h-32v32h32V64zM320 256v96h32V192h32v160h32v-96h32v128H288V256h32z";

registerIcon(name, d);
