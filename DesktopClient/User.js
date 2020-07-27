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
