# Overview

Home for Enterprise Portal test cases.

- Reusable functions are defined in `User.js`.
- Data for each test case is defined in `Data.xlsx`.
- `Dropdowns.xlsx` contains lists of values for RVL dropdowns.
- `Output.xlsx` is used to persist data between test executions.

The way of test parameterization and reading data from an Excel spreadsheet is described in the docs:

[Data-Driven Testing](https://rapisedoc.inflectra.com/Guide/ddt/)

## Common Functions

All functions are defined in `User.js`. Look into this file for details.

### EpLaunch

Launches `Enterprise Portal` in a browser. `EnterprisePortalUrl`, `UserName`, `Password` must be set in `Config.xlsx`.

![EpLaunch RVL](Media/EpLaunch.png)

### EsLaunch

Launches `Enterprise Portal > Employee Services` in a browser. `EmployeeServicesUrl`, `UserName`, `Password` must be set in `Config.xlsx`.

![EsLaunch RVL](Media/EsLaunch.png)

### EpChangeCompany

Changes current company.

![EpChangeCompany RVL](Media/EpChangeCompany.png)

Opens the dropdown with the list of companies and selects a given company.

![ChangeCompany RVL](Media/ChangeCompany.png)

### EsOpenModule

Navigates to specified module in Employee Services.

![EsOpenModule RVL](Media/EsOpenModule.png)

![OpenModuleEs RVL](Media/OpenModuleEs.png)

### EpOpenModule

Navigates to specified module in Enterprise Portal.

![EpOpenModule RVL](Media/EpOpenModule.png)

![OpenModuleEp RVL](Media/OpenModuleEp.png)

### EpSelectTab

Selects top level tab in current module.

![EpSelectTab RVL](Media/EpSelectTab.png)

![SelectTab RVL](Media/SelectTab.png)

### EpClickRibbon

Clicks a button on the ribbon.

![EpClickRibbon RVL](Media/EpClickRibbon.png)

![ClickRibbon RVL](Media/ClickRibbon.png)

### EpFilterGrid

Applies a filter to table data.

![EpFilterGrid RVL](Media/EpFilterGrid.png)

![FilterGrid RVL](Media/FilterGrid.png)

### EpSelectFastTab

Selects Fast Tab.

![EpSelectFastTab RVL](Media/EpSelectFastTab.png)

![SelectFastTab RVL](Media/SelectFastTab.png)

### SetOutputValue

Writes key/value pair to Output.xlsx

![SetOutputValue RVL](Media/SetOutputValue.png)

### GetOutputValue

Reads value from Output.xlsx

![GetOutputValue RVL](Media/GetOutputValue.png)

