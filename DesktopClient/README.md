# Overview

Home for Dynamics AX 2012 desktop client test cases.

- Reusable functions are defined in `User.js`.
- Data for each test case is defined in `Data.xlsx`.
- `Dropdowns.xlsx` contains lists of values for RVL dropdowns.
- `Output.xlsx` is used to persist data between test executions.

The way of test parameterization and reading data from an Excel spreadsheet is described in the docs:

[Data-Driven Testing](https://rapisedoc.inflectra.com/Guide/ddt/)

## Common Functions

All functions are defined in `User.js`. Look into this file for details.

### DaxLaunch

Launches Dynamics AX desktop client and waits for it to show up on screen.

![DaxLaunch RVL](Media/DaxLaunch.png)

### DaxClose

Closes Dynamics AX desktop client.

![DaxClose RVL](Media/DaxClose.png)

### DaxChangeCompany

Changes current company.

![DaxChangeCompany RVL](Media/DaxChangeCompany.png)

Open `Select company` dialog and chooses a company from the list.

![ChangeCompany RVL](Media/ChangeCompany.png)

### DaxOpenModule

Makes sure that given module is enabled. Use it before doing navigation in the address bar.

![DaxOpenModule RVL](Media/DaxOpenModule.png)

Opens Navigation Pane Options dialog and sets the checkbox near given module.

![OpenModule RVL](Media/OpenModule.png)

### DaxNavigate

Navigates to a specific page using the address bar.

![DaxNavigate RVL](Media/DaxNavigate.png)

This function clicks in the address area, enters a page address and hits enter key.

![Navigate RVL](Media/Navigate.png)

### DaxSelectFastTab

Selects Fast Tab with a given name.

![DaxSelectFastTab RVL](Media/DaxSelectFastTab.png)

This function expands a given tab and scrolls to it if necessary.

![SelectFastTab RVL](Media/SelectFastTab.png)

### DaxFilterGrid

Applies a filter to table data.

![DaxFilterGrid RVL](Media/DaxFilterGrid.png)

This function enters a filter value, then selects a field for filtering and clicks the filter button.

![FilterGrid RVL](Media/FilterGrid.png)

### DaxOpenDropdown

Clicks at the right part of an object. Use it to expand dropdowns.

![DaxOpenDropdown RVL](Media/DaxOpenDropdown.png)

![OpenDropdown RVL](Media/OpenDropdown.png)

### DaxClickCell

Clicks into a cell of a grid until placeholder object appears. Sometimes DAX ignores single clicks, this function makes sure that a click goes through.

![DaxClickCell RVL](Media/DaxClickCell.png)

![ClickCell RVL](Media/ClickCell.png)

### DaxChooseFile

Enters file name and clicks Open button in Attach File dialog.

![DaxChooseFile RVL](Media/DaxChooseFile.png)

![ChooseFile RVL](Media/ChooseFile.png)

### SetOutputValue

Writes key/value pair to Output.xlsx

![SetOutputValue RVL](Media/SetOutputValue.png)

### GetOutputValue

Reads value from Output.xlsx

![GetOutputValue RVL](Media/GetOutputValue.png)
