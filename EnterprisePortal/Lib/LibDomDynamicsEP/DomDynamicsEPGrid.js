
/** @behavior */
var DomDynamicsEPGridBehavior = {
	actions: [	
		{
			actionName: "ClickCell",
			/** @action */
			DoAction: DomDynamicsEPGridBehavior_DoClickCell
		},
		{
			actionName: "Lookup",
			/** @action */
			DoAction: DomDynamicsEPGridBehavior_DoLookup
		},		
		{
			actionName: "ClickColumn",
			/** @action */
			DoAction: DomDynamicsEPGridBehavior_DoClickColumn
		},
		{
			actionName: "SelectAll",
			/** @action */
			DoAction: DomDynamicsEPGridBehavior_DoSelectAll
		},
		{
			actionName: "SelectRow",
			/** @action */
			DoAction: DomDynamicsEPGridBehavior_DoSelectRow
		},
		{
			actionName: "SetText",
			/** @action */
			DoAction: DomDynamicsEPGridBehavior_DoSetText
		}
	],
	properties:
	{
		/** @property */
		Cell:
		{
			Get: DomDynamicsEPGridBehavior_GetCell
		},		 
		/** @property */
		ColumnCount:
		{
			Get: DomDynamicsEPGridBehavior_GetColumnCount
		},		 
		/** @property */
		RowCount:
		{
			Get: DomDynamicsEPGridBehavior_GetRowCount
		},		 
		/** @property */
		ColumnName:
		{
			Get: DomDynamicsEPGridBehavior_GetColumnName
		},
		/** @property */
		ColumnIndex:
		{
			Get: DomDynamicsEPGridBehavior_GetColumnIndex
		}
	}
}

function DomDynamicsEPGridBehavior_DoSetText(/**number|string*/ row, /**string|number*/ col, /**string*/ text)
{
	var cell = DomDynamicsEPGrid_FindCell(this, row, col);
	if (cell)
	{
		// TODO
	}
	return false;
}

function DomDynamicsEPGridBehavior_DoSelectAll(/**boolean*/ check)
{
	var cb = this._DoDOMQueryXPath("./thead/tr/th/input[contains(@class,'AxChkFieldMarkAll')]");
	if (cb && cb.length)
	{
		var checked = cb[0]._DoDOMGetAttribute("checked") == "checked";
		if (checked != check)
		{
			cb[0]._DoClick();
		}
	}
	return true;
}

function DomDynamicsEPGridBehavior_DoSelectRow(/**number*/ row, /**boolean*/ check)
{
	var cb = this._DoDOMQueryXPath("./tbody/tr[" + (row + 1) + "]/td[1]/input[contains(@class,'AxChkFieldMark')]");
	if (cb && cb.length)
	{
		var checked = cb[0]._DoDOMGetAttribute("checked") == "checked";
		if (checked != check)
		{
			cb[0]._DoClick();
		}
	}
	return true;
}

function DomDynamicsEPGridBehavior_DoClickColumn(/**string|number*/ col)
{
	if (typeof(col) == "string")
	{
		col = this.GetColumnIndex(col);
		if (col == -1)
		{
			return false;
		}
	}
	
	if (typeof(col) != "number")
	{
		return false;
	}
	
	var column = this._DoDOMQueryXPath("./thead/tr/th[" + (col + 1) + "]");
	if (column && column.length > 0)
	{
		return column[0]._DoClick(20);
	}
	
	return false;
}

function DomDynamicsEPGridBehavior_DoClickCell(/**number|string*/ row, /**string|number*/ col, /**string*/ clickType, /**number*/ xOffset, /**number*/ yOffset)
{
	var cell = DomDynamicsEPGrid_FindCell(this, row, col);
	if (cell)
	{
		cell._DoEnsureVisible();
		if (typeof(clickType) == "undefined" || clickType == "L")
		{
			return cell._DoClick(xOffset, yOffset);
		}
		else if (clickType == "LD")
		{
			cell._DoClick(xOffset, yOffset);
			return cell._DoClick(xOffset, yOffset);
		}
	}
	return false;
}

function DomDynamicsEPGridBehavior_DoLookup(/**number|string*/ row, /**string|number*/ col)
{
	var cell = DomDynamicsEPGrid_FindCell(this, row, col);
	if (cell)
	{
		DomDynamicsEPGridBehavior_ClickCenter(cell);
		
		Global.DoSleep(100);
		
		return DomDynamicsEPGridBehavior_ClickLookup(cell);
	}
	return false;
}

function DomDynamicsEPGridBehavior_ClickCenter(cell)
{
	cell._DoEnsureVisible();
	cell._DoClick();
}

function DomDynamicsEPGridBehavior_ClickLookup(cell)
{
	var lookupButton = cell._DoDOMQueryXPath("../..//div[@class='dynLookupButtonImage']");
	if (lookupButton && lookupButton.length)
	{
		return lookupButton[0]._DoClick();
	}
	return false;
}

function DomDynamicsEPGridBehavior_GetCell(/**number|string*/row, /**string|number*/col)  /**string*/ 
{
	var cell = DomDynamicsEPGrid_FindCell(this, row, col);
	var cellValue = DomDynamicsEPGridBehavior_GetCellValue(cell);
	return cellValue;
}

function DomDynamicsEPGridBehavior_GetCellValue(cell)
{
	if (cell)
	{
		return cell.GetText();
	}
	return null;
}

function DomDynamicsEPGridBehavior_GetColumnCount()  /**number*/ 
{
	var res = this.doQuery("count(./thead/tr/th)", 0, true);
	
	if (res && res.length)
	{
		return res[0];
	}
	
	return -1;
}

function DomDynamicsEPGridBehavior_GetRowCount()  /**number*/ 
{
	var res = this.doQuery("count(./tbody/tr)", 0, true);
	
	if (res && res.length > 0)
	{
		return res[0];
	}
	
	return -1;
}

function DomDynamicsEPGridBehavior_GetColumnName(/**number*/ columnIndex)  /**string*/ 
{
	columnIndex = columnIndex || 0;
		
	var column = this._DoDOMQueryXPath("./thead/tr/th[" + (columnIndex + 1) + "]");
	
	if (column && column.length > 0)
	{
		
		var columnName = column[0].GetText();
		if (!columnName)
		{
			return "";
		}
		return columnName;
	}
	
	return null;
}

function DomDynamicsEPGridBehavior_GetColumnIndex(/**string*/columnName)  /**number*/ 
{
	if (!columnName)
	{
		return -1;
	}
	
	var res = this.doQuery("count(./thead/tr/th[.//text()='" + columnName + "']/preceding-sibling::th)", 0, true);
	
	if (res && res.length)
	{
		return res[0];
	}
		
	return -1;
}

function DomDynamicsEPGrid_FindCell(obj, row, col)
{
	if (typeof(col) == "string")
	{
		col = obj.GetColumnIndex(col);
		if (col == -1)
		{
			return null;
		}
	}
	
	if (typeof(col) != "number")
	{
		return null;
	}
	
	var cells = [];
	
	if (typeof(row) == "number")
	{
		cells = obj._DoDOMQueryXPath("./tbody/tr[" + (row + 1) + "]/td[" + (col + 1) + "]");
	}
	else if (typeof(row) == "string")
	{
		cells = obj._DoDOMQueryXPath("./tbody/tr/td[" + (col + 1) + "]//span[text()='" + row + "']");
		if (cells.length == 0)
		{
			cells = obj._DoDOMQueryXPath("./tbody/tr/td[" + (col + 1) + "]//a[text()='" + row + "']");
		}
	}

	if (cells.length > 0)
	{
		var cell = cells[0];
		
		if (typeof(row) == "number")
		{
			// check for more specific internal controls
			var input = cell._DoDOMQueryXPath(".//table//input[@type='text']");
			if (input && input.length > 0)
			{
				cell = input[0];
				return cell;
			}			
			
			var span = cell._DoDOMQueryXPath(".//table//span");
			if (span && span.length > 0)
			{
				cell = span[0];
				return cell;
			}
			
			var span = cell._DoDOMQueryXPath(".//span");
			if (span && span.length > 0)
			{
				cell = span[0];
				return cell;
			}			
			
			var link = cell._DoDOMQueryXPath(".//a");
			if (link && link.length > 0)
			{
				cell = link[0];
				return cell;
			}
		}
		
		return cell;
	}	

	return null;
}
