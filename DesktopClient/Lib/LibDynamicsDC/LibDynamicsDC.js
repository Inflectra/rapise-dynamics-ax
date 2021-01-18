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

function DAX_ShowGridFilterRow(/**objectId*/ grid)
{
	DaxShowGridFilterRow(grid);
}

function DAX_FilterGridByColumn(/**objectId*/ grid, /**string*/ column, /**string*/ value)
{
	DaxFilterGridByColumn(grid, column, value)
}

function DAX_SortGridByColumn(/**objectId*/ grid, /**string*/ column, /**number*/ clicks)
{
	DaxSortGridByColumn(grid, column, clicks);
}

function DAX_GridExpandDropdown(/**objectId*/ grid, /**number*/ row, /**string*/ col)
{
	DaxGridExpandDropdown(grid, row, col);
}

function DAX_GetInfologMessageObject(/**objectId*/ tree, /**string*/ value)
{
	return DaxGetInfologMessageObject(tree, value);
}

function DAX_GetInfologMessage(/**objectId*/ tree, /**string*/ value)
{
	return DaxGetInfologMessage(tree, value);
}

function DAX_ClickInfologMessage(/**objectId*/ tree, /**string*/ value)
{
	return DaxClickInfologMessage(tree, value);
}

if (typeof(SeSGlobalObject) != "undefined")
{
	SeSGlobalObject("DAX");
}
