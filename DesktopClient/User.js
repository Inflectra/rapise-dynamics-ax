//Put your custom functions and variables in this file

if (!g_recording)
{
	TestInit = function()
	{
		Global.DoLoadObjects("%WORKDIR%/Objects.js");
	}
}

function LogAssert(/**string*/ msg)
{
	Log(msg);
	Tester.Assert(msg, false);
}

function _DaxIsRunning()
{
	var windows = g_util.FindWindows("regex:.Microsoft Dynamics AX.*", "AxMainFrame");
	return windows.length > 0;
}

function _MaximizeDax()
{
	var windows = g_util.FindWindows("regex:.Microsoft Dynamics AX.*", "AxMainFrame");
	if (windows.length > 0)
	{
		windows[0].Maximized = true;
	}
}

/**
 * Launches Dynamics AX desktop client and waits for it to show up on screen.
 * @returns `true` is the client is already running or was started successfully, otherwise - `false`
 */
function DaxLaunch() /**boolean*/
{
	if (_DaxIsRunning())
	{
		Tester.Message("Dynamics AX Client is already running");
		return true;
	}

	var pfFolder = Global.GetSpecialFolderPath("ProgramFilesX86");
	var dynamicsPath = pfFolder + "\\Microsoft Dynamics AX\\60\\Client\\Bin\\Ax32.exe"
    if(!File.Exists(dynamicsPath))
	{
		Tester.Message("Dynamics AX Client is not installed on this computer");
		return false;
	}
	
	Global.DoLaunch(dynamicsPath);
	
	for(var i = 0; i < 60; i++)
	{
		if (_DaxIsRunning())
		{
			Tester.Message("Dynamics AX Client started successfully");
			_MaximizeDax();
			return true;
		}
		Global.DoSleep(1000);
	}
	
	Tester.Message("Dynamics AX Client did not start");
	return false;
}

/**
 * Launches Dynamics AX desktop client using a given Dynamics Configuration File.
 */
function DaxLaunchWithConfig(/**string*/ config)
{
	if (_DaxIsRunning())
	{
		Tester.Message("Dynamics AX Client is already running");
		return true;
	}

	var path = "\"" + Global.GetFullPath(config) + "\"";
	Tester.Message("DXC path: " + path);
	Global.DoLaunch(path);
	
	for(var i = 0; i < 60; i++)
	{
		if (_DaxIsRunning())
		{
			Tester.Message("Dynamics AX Client started successfully");
			_MaximizeDax();
			return true;
		}
		Global.DoSleep(1000);
	}
	
	Tester.Message("Dynamics AX Client did not start");
	return false;	
}

/**
 * Closes Dynamics AX desktop client.
 */
function DaxClose()
{
	SeS("G_CloseDax").DoClick();
}

/**
 * Makes sure that given module is enabled. Use it before doing navigation in the address bar.
 * @param module Name of a module (e.g. General ledger).
 */
function DaxOpenModule(/**string*/ module)
{
    SeS("G_File").DoMenu("File;View;Navigation Pane Options...");
	var list = SeS("G_NavPaneList");
	var scroll = SeS("G_Modules_Line_down");
	if (list)
	{	
		var item = list.GetChildAt(0);
		while(item)
		{
			var typeName = item.GetTypeName();
			if (typeName == "CheckBox")
			{
				item = SeSTryMatch(item.instance);
				var moduleName = item.GetName();
				var moduleState = item.GetChecked();
				
				if (moduleName == module && !moduleState)
				{
					item.DoClick(10);
					break;
				}
				else
				{
					scroll._DoClick();
				}
			}
			item = item.GetNextSibling();		
		}
	}
	SeS("G_Modules_OK")._DoClick();
}

/**
 * Changes current company.
 * @param company Code of a company (e.g. DAT, USSI, USMF).
 */
function DaxChangeCompany(/**string*/ company)
{
	SeS("G_CurrentCompany").DoClick();
	SeS("G_CompanyGrid").DoClickCell(company, "Company");
	SeS("G_CompanyOK").DoClick();
}

/**
 * Navigates to a specific page using address bar.
 * @param page Address of a page (e.g. General ledger/Journals).
 * @param [company] Optional. Name of a company. Specify if it is not the currently opened company.
 */
function DaxNavigate(/**string*/ page, /**string*/ company)
{
	var addressBar = SeS("G_AddressBarContainer");
	if (!company)
	{
		var currentPage = "" + addressBar.GetText();
		company = currentPage.split("/")[0];
	}
	addressBar.DoSetText(company + "/" + page);
}

/**
 * Selects Fast Tab with a given name.
 * @param tab Name of a tab to expand and scroll to.
 */
function DaxSelectFastTab(/**string*/ tab)
{
	if (!tab)
	{
		LogAssert("DaxSelectFastTab: tab is not set");
		return;
	}
	var obj = SeS("G_FastTabs");
	var res = obj._DoSelectTab(tab);
	if (!res)
	{
		var objInfo = _SeSGetObjectInfo("G_FastTabs");
		var condition = UIAutomationLocator2._makePredicate(objInfo.locations[0].location);
		var el = g_UIAutomationWrapper.FindElementByCondition(obj.instance, 4, JSON.stringify(condition));
		if (el)
		{
			var nestedObj = SeSTryMatch(el, DynamicsAXFastTabsRule, objInfo);
			if (nestedObj)
			{
				res = nestedObj._DoSelectTab(tab);
			}
		}
	}
	
	Tester.Assert("Fast Tab selected: " + tab, res);
	
	return res;
}

/**
 * Applies a filter to table data.
 * @param value Filter value.
 * @param field Name of a field to use for filtering.
 */
function DaxFilterGrid(/**string*/ value, /**string*/ field)
{
	if (!value)
	{
		LogAssert("DaxFilterGrid: value is not set");
		return;
	}
	
	if (!field)
	{
		LogAssert("DaxFilterGrid: field is not set");
		return;
	}	

	SeS("G_FilterValue").DoClick();
	SeS("G_FilterValue").DoSetText(value);
	SeS("G_FilterOpen").DoClick();
	SeS("G_FilterDropDown").DoSelectItem(field);
	SeS("G_FilterApply").DoClick();
}

/**
 * Clicks at the right part of an object. Use it to expand dropdowns.
 * @param objectId Id of an object in the object repository.
 */
function DaxOpenDropdown(/**objectId*/ objectId)
{
	if (!objectId)
	{
		LogAssert("DaxOpenDropdown: objectId is not set");
		return;
	}
	var obj = SeS(objectId);
	if (!obj)
	{
		LogAssert("DaxOpenDropdown: object is not found: " + objectId);
		return;	
	}
	obj.DoClick(obj.GetWidth() - 5);
}

/**
 * Clicks into a cell of a grid until placeholder object appears. Sometimes DAX ignores single clicks, this function makes sure that a click goes through.
 * @param objectId Id of a grid object.
 * @param waitFor Id of an object to wait for.
 * @param row This and other remaining parameters are defined in https://rapisedoc.inflectra.com/Libraries/DynamicsAXTable/#DoClickCell
 * @param col
 * @param [clickType]
 * @param [xOffset]
 * @param [yOffset]
 */
function DaxClickCell(/**objectId*/ objectId, /**objectId*/ waitFor, /**string|number*/ row, /**string|number*/ col, /**string*/ clickType, /**number*/ xOffset, /**number*/ yOffset)
{
	var obj = SeS(objectId);
	for(var i = 0; i < 5; i++)
	{
		obj.DoClickCell(row, col, clickType, xOffset, yOffset);
		if (Global.DoWaitFor(waitFor, 1))
		{
			break;
		}
		Global.DoSleep(300);
	}
}

/**
 * Enters file name and clicks Open button in Attach File dialog.
 * @param fileName Path to a file.
 */
function DaxChooseFile(/**string*/ fileName)
{
	SeS('G_FileName').DoSetText(fileName);
	SeS('G_OpenFile').DoClick();
}

/**
 * Reveals filter row for a grid via Ctrl+G shortcut
 * @param grid Grid object id (must be in the object repository)
 */
function DaxShowGridFilterRow(/**objectId*/ grid)
{
	var gridObj = SeS(grid);
	var maxRetry = 5;
	while(maxRetry)
	{
		var columnCell = DynamicsAXTable_FindColumn(gridObj.instance, 1);
		if (columnCell)
		{
			if (columnCell.rect.h < 30)
			{
				gridObj.DoSendKeys('^g');
			}
			else
			{
				break;
			}
		}
		else
		{
			Tester.Assert("DaxShowGridFilter: first column is not found in " + grid);
		}
		maxRetry--;
	}
}

/**
 * Filters the grid by entering the value into the edit field under the column name and pressing Enter key. 
 * To reveal the filter row use `DaxShowGridFilterRow`.
 * @param grid Grid object id
 * @param column Column caption
 * @param value Filter value 
 */
function DaxFilterGridByColumn(/**objectId*/ grid, /**string*/ column, /**string*/ value)
{
	var gridObj = SeS(grid);
	gridObj.DoClickColumn(column, "L", 20, 40);
	//                 Header        Pane          Edit
	var text = gridObj.GetChildAt(0).GetChildAt(0).GetChildAt(1);
	var type = text.GetTypeName();
	if (type == "Edit")
	{
		text = SeSTryMatch(text.instance, DynamicsAXTextBoxRule);
		text.object_name = "text";
		text.DoClick();
		text.DoSetText(value);
		text.DoSendKeys("{ENTER}"); 
	}
	else
	{
		Tester.Assert("DaxFilterGrid: unsupported grid type", false);
	}
}

/**
 * Clicks on a column caption to sort data in the grid
 * @param grid Grid object id
 * @param column Column caption
 * @param clicks Click count
 */
function DaxSortGridByColumn(/**objectId*/ grid, /**string*/ column, /**number*/ clicks)
{
	var gridObj = SeS(grid);
	for(var i = 0; i < clicks; i++)
	{
		gridObj.DoClickColumn(column, "L", 20, 10);
	}
}

/**
 * Expands dropdown for a cell in a grid. Clicks on a cell to set focus then clicks dropdown open button.
 * @param grid Grid object id
 * @param row Row number
 * @param column Column caption
 */
function DaxGridExpandDropdown(/**objectId*/ grid, /**number*/ row, /**string*/ col)
{
	var obj = SeS(grid);
	if (obj)
	{
		var cell = null;
		try
		{
			cell = obj.GetCellObject(row, col);
		}
		catch(e)
		{
		}
		if (cell)
		{
			var w = cell.GetWidth();
			cell.DoClick();
			obj.DoClickCell(row, col, "L", w - 10);
		}
		else
		{
			Tester.Assert("DaxGridExpandDropdown: cell [" + row + ", " + col + "] is not found in grid: " + grid, false);
		}
	}
	else
	{
		Tester.Assert("DaxGridExpandDropdown: grid object is not found: " + grid, false);
	}
}

/**
 * Gets UI object of the infolog message according to the value pattern.
 * @param tree Infolog tree object. Learn it to add to the repository.
 * @param value Exact match string or regular expression starting with regex:
 * @returns Object or null if nothing was found.
 */
function DaxGetInfologMessageObject(/**objectId*/ tree, /**string*/ value)
{
	var obj = SeS(tree);
	if (obj)
	{
		var count = obj.GetChildrenCount();
		for(var i = 0; i < count; i++)
		{
			var item = obj.GetChildAt(i);
			if (item)
			{
				var message = item.GetName();
				if (SeSCheckString(value, message))
				{
					return item;
				}
			}
		}
	}
	else
	{
		Tester.Message("Infolog window is not found");
	}
	return null;
}

/**
 * Gets text of the infolog message according to the value pattern.
 * @param tree Infolog tree object. Learn it to add to the repository.
 * @param value Exact match string or regular expression starting with regex:
 * @returns Message text or null if nothing was found.
 */
function DaxGetInfologMessage(/**objectId*/ tree, /**string*/ value)
{
	var item = DaxGetInfologMessageObject(tree, value);
	if (item)
	{
		return item.GetName();
	}
	return null;
}

/**
 * Clicks on the infolog message according to the value pattern.
 * @param tree Infolog tree object. Learn it to add to the repository.
 * @param value Exact match string or regular expression starting with regex: 
 */
function DaxClickInfologMessage(/**objectId*/ tree, /**string*/ value)
{
	var item = DaxGetInfologMessageObject(tree, value);
	if (item)
	{
		item.DoClick();
	}
}

/**
 * Writes key/value pair to Output.xlsx
 * @param key
 * @param value
 */
function SetOutputValue(/**string*/ key, /**string*/ value)
{
	Global.SetProperty(key, value, "%WORKDIR%\\Output.xlsx");
}


/**
 * Reads value from Output.xlsx
 * @param key
 * @param [defValue]
 */
function GetOutputValue(/**string*/ key, /**string*/ defValue)
{
	return Global.GetProperty(key, defValue, "%WORKDIR%\\Output.xlsx");
}
