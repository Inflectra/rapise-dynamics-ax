//Put your custom functions and variables in this file

g_browserLibrary = "Chrome";

if (!g_recording)
{
	TestInit = function()
	{
		Global.DoLoadObjects('%WORKDIR%/Objects.js');
	}
}

function LogAssert(/**string*/ msg)
{
	Log(msg);
	Tester.Assert(msg, false);
}

/**
 * Launches Enterprise Portal in a browser. EnterprisePortalUrl, UserName, Password must be set in Config.xlsx
 */
function EpLaunch()
{
	var url = Global.GetProperty("EnterprisePortalUrl", "", "%WORKDIR%\\..\\Config.xlsx");
	var usr = Global.GetProperty("UserName", "", "%WORKDIR%\\..\\Config.xlsx");
	var pwd = Global.GetProperty("Password", "", "%WORKDIR%\\..\\Config.xlsx");
	url = url.replace("://", "://" + usr + ":" + pwd + "@");
	Navigator.Open(url);
	Navigator.SetPosition(0, 0);
}

/**
 * Launches Enterprise Portal > Employee Services in a browser. EmployeeServicesUrl, UserName, Password must be set in Config.xlsx
 */
function EsLaunch()
{
	var url = Global.GetProperty("EmployeeServicesUrl", "", "%WORKDIR%\\..\\Config.xlsx");
	var usr = Global.GetProperty("UserName", "", "%WORKDIR%\\..\\Config.xlsx");
	var pwd = Global.GetProperty("Password", "", "%WORKDIR%\\..\\Config.xlsx");
	url = url.replace("://", "://" + usr + ":" + pwd + "@");
	Navigator.Open(url);
	Navigator.SetPosition(0, 0);
}

/**
 * Changes current company.
 * @param company Code of a company (e.g. DAT, USSI, USMF).
 */
function EpChangeCompany(/**string*/ company)
{
	if (!company)
	{
		LogAssert("EsChangeCompany: company is not set");
		return;
	}

	Navigator.DoClickUntilOnScreen("G_CompanyChooser_Lookup", "G_CompanyChooser_Name", 5, 1000);
	SeS('G_CompanyChooser_Name').DoSetText(company);
	SeS('G_CompanyChooser_Apply_filter').DoClick();
	
	var obj = Navigator.Find("//span[@title='" + company + "']");
	if (!obj)
	{
		LogAssert("EsChangeCompany: company not found: " + company);
		return;
	}
	
	obj.DoClick();
	
	SeS('G_CompanyChooser_OK').DoClick();
	
	for(var i = 0; i < 10; i++)
	{
		Global.DoSleep(1000);
		var label = SeS('G_CompanyChooser_CompanyLabel');
		var text = label.GetText();
		Log(text);
		if (text.indexOf(":" + company) != -1)
		{
			break;
		}
	}
}

/**
 * Navigates to specified module in Employee Services.
 * @param module Name of a module (e.g. Timesheets).
 */
function EsOpenModule(/**string*/ module)
{
	if (!module)
	{
		LogAssert("EsOpenModule: module is not set");
		return;
	}
	
	var xpath = "//span[contains(@class, 'menu-item-text') and text()='" + module + "']";
	var obj = Navigator.DoWaitFor(xpath);
	if (!obj)
	{
		LogAssert("EsOpenModule: module not found: " + module);
		return;
	}
	
	obj.DoClick(); 
	
	Global.DoSleep(1000);
}

/**
 * Navigates to specified module in Enterprise Portal.
 * @param module Name of a module (e.g. Project management).
 */
function EpOpenModule(/**string*/ module)
{
	if (!module)
	{
		LogAssert("EpOpenModule: module is not set");
		return;
	}
	
	var xpath = "//span[contains(@class, 'menu-item-text') and text()='" + module + "']";
	var obj = Navigator.DoWaitFor(xpath);
	if (!obj)
	{
		LogAssert("EpOpenModule: module not found: " + module);
		return;
	}
	
	obj.DoClick(); 
	
	Global.DoSleep(1000);
}

/**
 * Selects top level tab in current module.
 * @param tab Name of a tab (e.g. Project).
 */
function EpSelectTab(/**string*/ tab)
{
	if (!tab)
	{
		LogAssert("EpSelectTab: tab is not set");
		return;
	}
	
	var xpath = "//li[@role='tab']/a/span[text()='" + tab + "']";
	var obj = Navigator.DoWaitFor(xpath);
	if (!obj)
	{
		LogAssert("EpSelectTab: tab not found: " + tab);
		return;
	}
	
	obj.DoClick(); 
	
	Global.DoSleep(1000);	
}

/**
 * Clicks a button on the ribbon.
 * @param button Name of a button
 * @param [waitFor] Id of an object from the object repository. It must appear after clicking on the button.
 */
function EpClickRibbon(/**string*/ button, /**objectId*/ waitFor)
{
	if (!button)
	{
		LogAssert("EpClickRibbon: button name is not set");
		return;
	}
	
	var parts = button.split(" ");
	var containsText = "";
	for(var i = 0; i < parts.length; i++)
	{
		containsText += " and contains(.,'" + parts[i] +"')";
	}
	
	var xpath = "//a[@role='button'" + containsText + "]";
	var obj = Navigator.DoWaitFor(xpath);
	if (!obj)
	{
		LogAssert("EpClickRibbon: button not found: " + button);
		return;
	}
	
	if (waitFor)
	{
		Navigator.DoClickUntilOnScreen(xpath, waitFor, 3);
	}
	else
	{
		obj.DoClick();
	}
}

/**
 * Applies a filter to table data.
 * @param value Filter value.
 * @param field Name of a field to use for filtering.
 * @param [inDialog] Optional. `false` by default. Set to `true` if the table is inside popup dialog.
 */
function EpFilterGrid(/**string*/ value, /**string*/ field, /**boolean*/ inDialog)
{
	var prefix = "";
	if (inDialog)
	{
		prefix = "//iframe[contains(@id,'DlgFrame')]@@@";
	}


	var editField = Navigator.Find(prefix + "//input[contains(@id,'AxQuickFilterEdit') and @type='text']");
	if (!editField)
	{
		LogAssert("EsFilterGrid: edit field not found");
		return;	
	}
	var fieldCombo = Navigator.Find(prefix + "//span[contains(@id,'AxQuickFilterOuter')]/select");
	if (!fieldCombo)
	{
		LogAssert("EsFilterGrid: combobox field not found");
		return;
	}
	var filterButton = Navigator.Find(prefix + "//img[@title='Apply filter' and position()=1]");
	if (!filterButton)
	{
		LogAssert("EsFilterGrid: filter button not found");
		return;
	}
	
	editField.DoClick();
	editField.DoSetText(value);
	fieldCombo.DoSelect(field);
	filterButton.DoClick();
}

/**
 * Selects Fast Tab.
 * @param tab Name of a tab.
 * @param [collapse] Optional. `false` by default. Set to `true` if you want to collapse the Fast Tab.
 */
function EpSelectFastTab(/**string*/ tab, /**boolean*/ collapse)
{
	collapse = collapse || false;

	if (!tab)
	{
		LogAssert("EpSelectFastTab: fast tab not found");
		return;	
	}
	var xpath = "//iframe[contains(@id,'DlgFrame')]@@@//div[@class='dynSectionHeaderCaption' and contains(text(),'" + tab + "')]";
	var obj = Navigator.Find(xpath);
	if (!obj)
	{
		LogAssert("EpSelectFastTab: fast tab not found: " + tab);
		return;
	}
	obj._DoEnsureVisible("start");
	Global.DoSleep(500);
	
	var section = obj._DoDOMQueryXPath("../..");
	if (section && section.length > 0)
	{
		var _class = "" + section[0]._DoDOMGetAttribute("class");
		if (
			(_class.indexOf("dynSectionCollapsed") != -1  && !collapse)
			||
			(_class.indexOf("dynSectionExpanded") != -1  && collapse)
		)
		{
			obj._DoClick();
			Global.DoSleep(1000);
		}
	}
}

/**
 * Clicks on an item in <select> object.
 * @param list Id from the object repository.
 * @param item Text of an item to click.
 */
function ClickListItem(/**objectId*/ list, /**string*/ item)
{
	if (!list)
	{
		LogAssert("ClickListItem: list not set");
		return;		
	}
	var obj = Global.DoWaitFor(list, 1);
	if (!obj)
	{
		LogAssert("ClickListItem: list not found");
		return;
	}
	var item = obj._DoDOMQueryXPath(".//option[text()='" + item + "']");
	if (!item || item.length == 0)
	{
		LogAssert("ClickListItem: item not found");
		return;
	}
	item[0]._DoClick();
}

/**
 * Reads title of the current dialog.
 */
function GetDialogTitle()
{
	var xpath = "//span[@id='dialogTitleSpan']";
	var obj = Navigator.Find(xpath);
	if (obj)
	{
		return obj.GetText();
	}
	return "";
}

/** 
 * Reads header of a section.
 */
function GetSectionTitle()
{
	var xpath = "(//iframe[contains(@id,'DlgFrame')])[last()]@@@//a[contains(@id,'AxSection_ExpenseHeader_AxSectionHeader')]";
	var obj = Navigator.Find(xpath);
	if (obj)
	{
		return obj.GetText();
	}
	return "";
}

/**
 * Reads id of the opened timesheet.
 */
function GetTimesheetId()
{
	var dialogTitle = GetDialogTitle();
	var re = new RegExp("[0-9]+", "ig");
	var match = re.exec(dialogTitle);
	if (match && match.length > 0)
	{
		var id = match[0];
		return id;
	}
	return "";
}

/**
 * Reads id of the opened expense report.
 */
function GetExpenseReportId()
{
	var sectionTitle = GetSectionTitle();
	var re = new RegExp("[0-9]+", "ig");
	var match = re.exec(sectionTitle);
	if (match && match.length > 0)
	{
		var id = match[0];
		return id;
	}
	return "";	
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
