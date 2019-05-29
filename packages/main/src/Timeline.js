import Bootstrap from "@ui5/webcomponents-base/src/Bootstrap.js";
import UI5Element from "@ui5/webcomponents-base/src/UI5Element.js";
import ItemNavigation from "@ui5/webcomponents-base/src/delegate/ItemNavigation.js";
import TimelineTemplateContext from "./TimelineTemplateContext.js";
import TimelineItem from "./TimelineItem.js";
import TimelineRenderer from "./build/compiled/TimelineRenderer.lit.js";

// Styles
import styles from "./themes/Timeline.css.js";

// all themes should work via the convenience import (inlined now, switch to json when elements can be imported individyally)
import "./ThemePropertiesProvider.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-timeline",
	defaultSlot: "items",
	slots: /** @lends sap.ui.webcomponents.main.Timeline.prototype */ {
		/**
		 * Determines the content of the <code>ui5-timeline</code>.
		 *
		 * @type {TimelineItem[]}
		 * @slot
		 * @public
		 */
		items: {
			type: TimelineItem,
			multiple: true,
			individualSlots: true,
		},
	},
	properties: /** @lends sap.ui.webcomponents.main.Timeline.prototype */ {
	},
	events: /** @lends sap.ui.webcomponents.main.Timeline.prototype */ {
	},
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The timeline control shows entries (such as objects, events, or posts) in chronological order.
 * A common use case is to provide information about changes to an object, or events related to an object.
 * These entries can be generated by the system (for example, value XY changed from A to B), or added manually.
 * There are two distinct variants of the timeline: basic and social. The basic timeline is read-only,
 * while the social timeline offers a high level of interaction and collaboration, and is integrated within SAP Jam.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.Timeline
 * @extends UI5Element
 * @tagname ui5-timeline
 * @appenddocs TimelineItem
 * @public
 * @since 0.8.0
 */
class Timeline extends UI5Element {
	static get metadata() {
		return metadata;
	}

	static get styles() {
		return styles;
	}

	static get renderer() {
		return TimelineRenderer;
	}

	static get calculateTemplateContext() {
		return TimelineTemplateContext.calculate;
	}

	constructor() {
		super();

		this.initItemNavigation();
	}

	onBeforeRendering() {
		this._itemNavigation.init();
	}

	initItemNavigation() {
		this._itemNavigation = new ItemNavigation(this);
		this._itemNavigation.getItemsCallback = () => this.items;

		this._delegates.push(this._itemNavigation);
	}

	static async define(...params) {
		await TimelineItem.define();

		super.define(...params);
	}
}

Bootstrap.boot().then(_ => {
	Timeline.define();
});

export default Timeline;
