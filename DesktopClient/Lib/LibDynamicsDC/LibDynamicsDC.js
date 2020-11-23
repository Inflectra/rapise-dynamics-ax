// Put library code here

function DAX_Launch()
{
	return DaxLaunch();
}

function DAX_LaunchWithConfig(/**string*/ config)
{
	return DaxLaunchWithConfig(config);
}

function DAX_Close()
{
	DaxClose();
}

function DAX_OpenModule(/**string*/ module)
{
	DaxOpenModule(module);
}

function DAX_ChangeCompany(/**string*/ company)
{
	DaxChangeCompany(company);
}

function DAX_Navigate(/**string*/ page, /**string*/ company)
{
	DaxNavigate(page, company);
}

function DAX_SelectFastTab(/**string*/ tab)
{
	return DaxSelectFastTab(tab);
}

function DAX_FilterGrid(/**string*/ value, /**string*/ field)
{
	DaxFilterGrid(value, field);
}

function DAX_OpenDropdown(/**objectId*/ objectId)
{
	DaxOpenDropdown(objectId);
}

function DAX_ClickCell(/**objectId*/ objectId, /**objectId*/ waitFor, /**string|number*/ row, /**string|number*/ col, /**string*/ clickType, /**number*/ xOffset, /**number*/ yOffset)
{
	DaxClickCell(objectId, waitFor, row, col, clickType, xOffset, yOffset);
}

function DAX_ChooseFile(/**string*/ fileName)
{
	DaxChooseFile(fileName);
}

if (typeof(SeSGlobalObject) != "undefined")
{
	SeSGlobalObject("DAX");
}
