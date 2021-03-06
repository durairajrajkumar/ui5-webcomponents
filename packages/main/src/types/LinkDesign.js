import DataType from "@ui5/webcomponents-base/dist/types/DataType.js";

/**
 * Different types of Button.
 */
const LinkTypes = {
	/**
	 * default type (no special styling)
	 */
	Default: "Default",

	/**
	 * subtle type (appears as regular text, rather than a link)
	 */
	Subtle: "Subtle",

	/**
	 * emphasized type
	 */
	Emphasized: "Emphasized",
};

class LinkDesign extends DataType {
	static isValid(value) {
		return !!LinkTypes[value];
	}
}

LinkDesign.generataTypeAcessors(LinkTypes);

export default LinkDesign;
