import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import TableRowTemplate from "./generated/templates/TableRowTemplate.lit.js";

// Styles
import styles from "./generated/themes/TableRow.css.js";

/**
 * @public
 */
const metadata = {
	tag: "ui5-table-row",
	slots: /** @lends sap.ui.webcomponents.main.TableRow.prototype */ {
		/**
		 * Defines the cells of the <code>ui5-table-row</code>.
		 * <br><b>Note:</b> Use <code>ui5-table-cell</code> for the intended design.
		 *
		 * @type {HTMLElement[]}
		 * @slot
		 * @public
		 */
		"default": {
			propertyName: "cells",
			type: HTMLElement,
			individualSlots: true,
		},
	},
	properties: /** @lends sap.ui.webcomponents.main.TableRow.prototype */ {
		_columnsInfo: {
			type: Object,
			multiple: true,
		},
		_tabIndex: {
			type: String,
			defaultValue: "-1",
		},
	},
	events: /** @lends sap.ui.webcomponents.main.TableRow.prototype */ {
		_focused: {},
	},
	_eventHandlersByConvention: true,
};

/**
 * @class
 *
 * <h3 class="comment-api-title">Overview</h3>
 *
 * The <code>ui5-table-row</code> component represents a row in the <code>ui5-table</code>.
 *
 * @constructor
 * @author SAP SE
 * @alias sap.ui.webcomponents.main.TableRow
 * @extends sap.ui.webcomponents.base.UI5Element
 * @tagname ui5-table-row
 * @public
 */
class TableRow extends UI5Element {
	constructor() {
		super();
		this.fnOnCellClick = this._oncellclick.bind(this);
	}

	static get metadata() {
		return metadata;
	}

	static get styles() {
		return styles;
	}

	static get render() {
		return litRender;
	}

	static get template() {
		return TableRowTemplate;
	}

	_onfocusin(event, forceSelfFocus = false) {
		if (forceSelfFocus || this._getActiveElementTagName() === "ui5-table-cell") {
			this.getDomRef().focus();
		}

		this.fireEvent("_focused", event);
	}

	_oncellclick(event) {
		if (this._getActiveElementTagName() === "body") {
			// If the user clickes on non-focusable element within the ui5-table-cell,
			// the focus goes to the body, se we have to bring it back to the row.
			// If the user clicks on input, button or similar clickable element,
			// the focus remains on that element.
			this._onfocusin(event, true /* force row focus */);
		}
	}

	_getActiveElementTagName() {
		return document.activeElement.localName.toLocaleLowerCase();
	}

	onBeforeRendering() {
		this.visibleCells = [];
		this.popinCells = [];

		if (this.cells.length === 0) {
			return;
		}

		this._columnsInfo.forEach((info, index) => {
			const cell = this.cells[index];

			if (!cell) {
				return;
			}

			if (info.visible) {
				this.visibleCells.push(cell);
				cell.firstInRow = (index === 0);
				cell.popined = false;
			} else if (info.demandPopin) {
				this.popinCells.push({
					cell,
					popinText: info.popinText,
				});

				cell.popined = true;
			} else {
				cell.popined = false;
			}
		}, this);

		const lastVisibleCell = this.visibleCells[this.visibleCells.length - 1];

		if (lastVisibleCell) {
			lastVisibleCell.lastInRow = true;
		}
	}

	get styles() {
		const gridTemplateColumns = this._columnsInfo.reduce((acc, info) => {
			return info.visible ? `${acc}minmax(0, ${info.width || "1fr"}) ` : acc;
		}, "");

		return {
			main: {
				"grid-template-columns": gridTemplateColumns,
			},
			popin: {
				"grid-column-end": 6,
			},
		};
	}

	get visibleCellsCount() {
		return this.visibleCells.length;
	}
}

TableRow.define();

export default TableRow;
