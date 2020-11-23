
function EP_Launch()
{
	EpLaunch();
}

function EP_EsLaunch()
{
	EsLaunch();
}

function EP_ChangeCompany(/**string*/ company)
{
	EpChangeCompany(company);
}

function EP_EsOpenModule(/**string*/ module)
{
	EsOpenModule(module);
}

function EP_OpenModule(/**string*/ module)
{
	EpOpenModule(module);
}

function EP_SelectTab(/**string*/ tab)
{
	EpSelectTab(tab);
}

function EP_ClickRibbon(/**string*/ button, /**objectId*/ waitFor)
{
	EpClickRibbon(button, waitFor);
}

function EP_FilterGrid(/**string*/ value, /**string*/ field, /**boolean*/ inDialog)
{
	EpFilterGrid( value, field, inDialog);
}

function EP_SelectFastTab(/**string*/ tab, /**boolean*/ collapse)
{
	EpSelectFastTab(tab, collapse);
}

function EP_ClickListItem(/**objectId*/ list, /**string*/ item)
{
	ClickListItem(list, item);
}

function EP_GetDialogTitle()
{
	return GetDialogTitle();
}

function EP_GetSectionTitle()
{
	return GetDialogTitle();
}

function EP_GetTimesheetId()
{
	return GetTimesheetId();
}

function EP_GetExpenseReportId()
{
	return GetExpenseReportId();
}

if (typeof(SeSGlobalObject) != "undefined")
{
	SeSGlobalObject("EP");
}
