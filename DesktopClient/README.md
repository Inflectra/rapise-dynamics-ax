# Overview

Home for Dynamics AX 2012 desktop client test cases.

- Reusable functions are defined in `User.js`.
- Data for each test case is defined in `Data.xlsx`.
- `Dropdowns.xlsx` contains lists of values for [RVL dropdowns](https://rapisedoc.inflectra.com/Guide/rvl_editor/#param-dropdowns).
- `Output.xlsx` is used to persist data between test executions (see SetOutputValue, GetOutputValue common functions below).

The way of test parameterization and reading data from an Excel spreadsheet is described in the docs:

[Data-Driven Testing](https://rapisedoc.inflectra.com/Guide/ddt/)

## Common Functions

All functions are defined in `User.js`. Look into this file for details.

### DaxLaunch

Launches Dynamics AX desktop client and waits for it to show up on screen.

![DaxLaunch RVL](Media/DaxLaunch.png)

### DaxLaunchWithConfig

Launches Dynamics AX desktop client using a given Dynamics Configuration File.

![DaxLaunchWithConfig RVL](Media/DaxLaunchWithConfig.png)

### DaxClose

Closes Dynamics AX desktop client.

![DaxClose RVL](Media/DaxClose.png)

### DaxChangeCompany

Changes current company.

![DaxChangeCompany RVL](Media/DaxChangeCompany.png)

Opens `Select company` dialog and chooses a company from the list.

<img alt="ChangeCompany RVL" src="Media/ChangeCompany.png" width="382" />

### DaxOpenModule

Makes sure that given module is enabled. Use it before doing navigation in the address bar.

![DaxOpenModule RVL](Media/DaxOpenModule.png)

Opens Navigation Pane Options dialog and sets the checkbox near given module.

<img alt="OpenModule RVL" src="Media/OpenModule.png" width="290" />

### DaxNavigate

Navigates to a specific page using the address bar.

![DaxNavigate RVL](Media/DaxNavigate.png)

This function clicks in the address area, enters a page address and hits enter key.

<img alt="Navigate RVL" src="Media/Navigate.png" width="528" />

### DaxSelectFastTab

Selects Fast Tab with a given name.

![DaxSelectFastTab RVL](Media/DaxSelectFastTab.png)

This function expands a given tab and scrolls to it if necessary.

<img alt="SelectFastTab RVL" src="Media/SelectFastTab.png" width="586" />

### DaxFilterGrid

Applies a filter to table data.

![DaxFilterGrid RVL](Media/DaxFilterGrid.png)

This function enters a filter value, then selects a field for filtering and clicks the filter button.

<img alt="FilterGrid RVL" src="Media/FilterGrid.png" width="312" />

### DaxOpenDropdown

Clicks at the right part of an object. Use it to expand dropdowns.

![DaxOpenDropdown RVL](Media/DaxOpenDropdown.png)

<img alt="OpenDropdown RVL" src="Media/OpenDropdown.png" width="284" />

### DaxClickCell

Clicks into a cell of a grid until placeholder object appears. Sometimes DAX ignores single clicks, this function makes sure that a click goes through.

![DaxClickCell RVL](Media/DaxClickCell.png)

<img alt="ClickCell RVL" src="Media/ClickCell.png" width="818" />

### DaxChooseFile

Enters file name and clicks Open button in Attach File dialog.

![DaxChooseFile RVL](Media/DaxChooseFile.png)

<img alt="ChooseFile RVL" src="Media/ChooseFile.png" width="625" />

### SetOutputValue

Writes key/value pair to Output.xlsx

![SetOutputValue RVL](Media/SetOutputValue.png)

### GetOutputValue

Reads value from Output.xlsx

![GetOutputValue RVL](Media/GetOutputValue.png)
