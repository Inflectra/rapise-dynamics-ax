// Whatever should be accessible from within Browser is here
// this corresponds to a related browser object.
function DomDynamicsEPPluginAttach(browser, actionHolder)
{
	if(l2) Log2("DomDynamicsEP Plugin Initializing");
	// Context (object information) about object to be executed
	var browserObject = browser;
	
	// return codes of functions
	var R_NOT_OBJECT = 0; // if is not object of this kind
	var R_ACTION_FOUND = 1; // all is ok, object and action found
	var R_OBJECT_FOUND = 2; // this is object of this kind, but action is unknown
	
	
	// tree item state
	var TI_EXPANDED = 0;
	var TI_COLLAPSED = 1;
	var TI_NOCHILDREN = 2;
	
	if(typeof(console) == "undefined") 
	{
		// Install dummy functions, so that logging does not break the code if console is not present
		var console = {};
		console.log = function(msg){};
		console.info = function(msg){};
		console.warn = function(msg){};
	}
	else 
	{
		// console.log provided
	}
	
	//////////////////////////////////////////////////////////////////////
	/// region of recorder functions, all other functions must be upper
	//////////////////////////////////////////////////////////////////////
	
	function IsDomDynamicsEPCombobox(evt, element, eventOpts, objName, description, flavor, items)
	{
		var rvalue =
		{
			root: null, // to define in future the most near element or smth else
			result: null, // here will be old res placed
			rcode: R_NOT_OBJECT // return code
		};
		
	  	//debugger;
	  	var comboType = 1;
		var root = __hasParentWithAttr(element, 'class', /dynGroupDataCell/ig);
		if (!root)
		{
			var root = __hasParentWithAttr(element, 'class', /dynJoiningTable/ig);
			if (!root)
			{
				return rvalue;
			}
			else
			{
				comboType = 2;
			}
		}
		
		var buttons = __doDOMQueryXPath(root, ".//a[@axctrltype='AxLookupButton']", false);
		if (!buttons || buttons.length == 0)
		{
			return rvalue;
		}
		
		if(root)
		{
			var name = "";
			var xpath = "";
			if (comboType == 1)
			{
				var labels = __doDOMQueryXPath(root, "./preceding-sibling::td//label", false);
				if (!labels || labels.length == 0)
				{
					return rvalue;
				}
			
				var label = labels[0];
				name = label.childNodes[0].nodeValue;
				
				xpath = "//td[@class='dynGroupDataCell' and ./preceding-sibling::td[@class='dynGroupHeaderCell']//label/text()='" + name + "']";
				var generatedPath = SeS_GenerateXPath(label);
				if (generatedPath.indexOf("@@@") != -1)
				{
					xpath = generatedPath.split("@@@")[0] + "@@@" + xpath;
				}
			}
			else
			{
				var labels = __doDOMQueryXPath(root, ".//span[contains(@style,'display:inline-block')]", false);
				if (!labels || labels.length == 0)
				{
					return rvalue;
				}
			
				var label = labels[0];
				name = label.innerText;
				
				xpath = "//table[@class='dynJoiningTable' and .//span[contains(@style,'display:inline-block')]/text()='" + name + "']";
				var generatedPath = SeS_GenerateXPath(label);
				if (generatedPath.indexOf("@@@") != -1)
				{
					xpath = generatedPath.split("@@@")[0] + "@@@" + xpath;
				}
			}

			var res = {
				cancel: false,
				object_flavor: 'ComboBox',
				object_name: name,
				object_type: 'DomDynamicsEPCombobox',
				description: 'TODO Action description',
				locator_data: 
				{
					xpath: xpath
	    		}
			};
			
			// Learn
			rvalue.result = res;
			rvalue.root = root;
			rvalue.rcode = R_OBJECT_FOUND;
			
			if(evt == "resolveElementDescriptor")
			{
				res.rect = __getElementRect(root);
				res.action = undefined;
				return rvalue;
			}
			
			var isOpenButton = __getAttribute(element, 'axctrltype') == "AxLookupButton";
			
			if (evt == "Click" && !isOpenButton)
			{
				var actionClick = {
						name: "Click",
						description: "Click input field of \"%object_name%\" combobox"
					};	
				res.action = actionClick;
			}
			else if (evt == "Click")
			{
				var actionOpen = {
						name: "Open",
						description: "Expand \"%object_name%\" combobox"
					};	
				res.action = actionOpen;
			}
			
			// Actions 
			rvalue.rcode = R_ACTION_FOUND;
		}
		
		return rvalue;
	}
	
	function IsDomDynamicsEPInput(evt, element, eventOpts, objName, description, flavor, items)
	{
		var rvalue =
		{
			root: null, // to define in future the most near element or smth else
			result: null, // here will be old res placed
			rcode: R_NOT_OBJECT // return code
		};
		
	  	//debugger;
	  	 
		var root = __hasParentWithAttr(element, 'class', /dynGroupDataCell/ig);
		if (!root)
		{
			return rvalue;
		}
		
		var inputs = __doDOMQueryXPath(root, ".//input[@type='text']", false);
		if (!inputs || inputs.length == 0)
		{
			return rvalue;
		}
		var input = inputs[0];
		
		if(root)
		{
			var labels = __doDOMQueryXPath(root, "./preceding-sibling::td//*", false);
			if (!labels || labels.length == 0)
			{
				return rvalue;
			}
		
			var label = labels[0];
			var name = label.childNodes[0].nodeValue;
			
			var xpath = "//td[@class='dynGroupDataCell' and ./preceding-sibling::td[@class='dynGroupHeaderCell']//*/text()='" + name + "']";
			var generatedPath = SeS_GenerateXPath(label);
			if (generatedPath.indexOf("@@@") != -1)
			{
				xpath = generatedPath.split("@@@")[0] + "@@@" + xpath;
			}

			var res = {
				cancel: false,
				object_flavor: 'Edit',
				object_name: name,
				object_type: 'DomDynamicsEPInput',
				description: 'TODO Action description',
				locator_data: 
				{
					xpath: xpath
	    		}
			};
			
			// Learn
			rvalue.result = res;
			rvalue.root = root;
			rvalue.rcode = R_OBJECT_FOUND;
			
			if(evt == "resolveElementDescriptor")
			{
				res.rect = __getElementRect(root);
				res.action = undefined;
				return rvalue;
			}
			
			if (evt == "Click")
			{
				var actionClick = {
						name: "Click",
						description: "Click input field \"%object_name%\""
					};	
				res.action = actionClick;
			}
			else if (evt == "SetText")
			{
				var text = input.value;
			
				var actionSetText = {
						name: "SetText",
						description: "Set text for \"%object_name%\" input field",
						params: [text]
					};	
				res.action = actionSetText;
			}
			
			// Actions 
			rvalue.rcode = R_ACTION_FOUND;
		}
		
		return rvalue;
	}

	function IsDomDynamicsEPInputPlaceholder(evt, element, eventOpts, objName, description, flavor, items)
	{
		var rvalue =
		{
			root: null, // to define in future the most near element or smth else
			result: null, // here will be old res placed
			rcode: R_NOT_OBJECT // return code
		};
		
	  	//debugger;
	
		var root = false;
		if(root = __hasAttr(element, 'class', /AxInputField/ig))
		{
			var name = __getAttribute(element, "fieldname");
			var xpath = "//input[@type='text' and @fieldname='" + name + "']";
			if (!name)
			{
				name = __getAttribute(element, "aria-labelledby");
				if (name)
				{
					xpath = "//input[@type='text' and @aria-labelledby='" + name + "']";
					name = name.replace("Label_", "").replace("Picker", "");
				}
			}
			var generatedPath = SeS_GenerateXPath(element);
			if (!name)
			{
				// name not calculated, use generated xpath
				xpath = generatedPath;
			}
			else if (generatedPath.indexOf("@@@") != -1)
			{
				xpath = generatedPath.split("@@@")[0] + "@@@" + xpath;
			}

			var res = {
				cancel: false,
				object_flavor: 'Edit',
				object_name: name,
				object_type: 'DomDynamicsEPInputPlaceholder',
				description: 'TODO Action description',
				locator_data: 
				{
					xpath: xpath
	    		}
			};
			
			// Learn
			rvalue.result = res;
			rvalue.root = root;
			rvalue.rcode = R_OBJECT_FOUND;
			
			if(evt == "resolveElementDescriptor")
			{
				res.rect = __getElementRect(root);
				res.action = undefined;
				return rvalue;
			}
			
			if (evt == "Click")
			{
				var actionClick = {
						name: "Click",
						description: "Click input field \"%object_name%\""
					};	
				res.action = actionClick;
			}
			else if (evt == "SetText")
			{
				var text = element.value;
			
				var actionSetText = {
						name: "SetText",
						description: "Set text for \"%object_name%\" input field",
						params: [text]
					};	
				res.action = actionSetText;
			}
			
			// Actions 
			rvalue.rcode = R_ACTION_FOUND;
		}
		
		return rvalue;
	}
	
	function IsDomDynamicsEPButton(evt, element, eventOpts, objName, description, flavor, items)
	{
		var rvalue =
		{
			root: null, // to define in future the most near element or smth else
			result: null, // here will be old res placed
			rcode: R_NOT_OBJECT // return code
		};
		
	  	//debugger;
	  	 
	  	var root = false;
	  	var type = __getAttribute(element, 'type');
		if(type == "submit" || type == "button")
		{
			root = element;
			var name = element.value;
			
			var xpath = "//input[@type='" + type + "' and @value='" + name + "']";
			var generatedPath = SeS_GenerateXPath(element);
			if (generatedPath.indexOf("@@@") != -1)
			{
				xpath = generatedPath.split("@@@")[0] + "@@@" + xpath;
			}			

			var res = {
				cancel: false,
				object_flavor: 'Button',
				object_name: name,
				object_type: 'DomDynamicsEPButton',
				description: 'TODO Action description',
				locator_data: 
				{
					xpath: xpath
	    		}
			};
			
			// Learn
			rvalue.result = res;
			rvalue.root = root;
			rvalue.rcode = R_OBJECT_FOUND;
			
			if(evt == "resolveElementDescriptor")
			{
				res.rect = __getElementRect(root);
				res.action = undefined;
				return rvalue;
			}
			
			if (evt == "Click")
			{
				var actionClick = {
						name: "Click",
						description: "Click button \"%object_name%\""
					};	
				res.action = actionClick;
			}
			
			// Actions 
			rvalue.rcode = R_ACTION_FOUND;
		}
		
		return rvalue;
	}
	
	function IsDomDynamicsEPButtonImage(evt, element, eventOpts, objName, description, flavor, items)
	{
		var rvalue =
		{
			root: null, // to define in future the most near element or smth else
			result: null, // here will be old res placed
			rcode: R_NOT_OBJECT // return code
		};
		
	  	//debugger;
	  	 
	  	var root = false;
		if(root = __hasAttr(element, 'type', /image/ig))
		{
			var name = __getAttribute(element, "title");
			
			var xpath = "//input[@type='image' and @title='" + name + "']";
			var generatedPath = SeS_GenerateXPath(element);
			if (generatedPath.indexOf("@@@") != -1)
			{
				xpath = generatedPath.split("@@@")[0] + "@@@" + xpath;
			}			

			var res = {
				cancel: false,
				object_flavor: 'Button',
				object_name: name,
				object_type: 'DomDynamicsEPButton',
				description: 'TODO Action description',
				locator_data: 
				{
					xpath: xpath
	    		}
			};
			
			// Learn
			rvalue.result = res;
			rvalue.root = root;
			rvalue.rcode = R_OBJECT_FOUND;
			
			if(evt == "resolveElementDescriptor")
			{
				res.rect = __getElementRect(root);
				res.action = undefined;
				return rvalue;
			}
			
			if (evt == "Click")
			{
				var actionClick = {
						name: "Click",
						description: "Click button \"%object_name%\""
					};	
				res.action = actionClick;
			}
			
			// Actions 
			rvalue.rcode = R_ACTION_FOUND;
		}
		
		return rvalue;
	}
	
	function IsDomDynamicsEPGrid(evt, element, eventOpts, objName, description, flavor, items)
	{
		function _getName()
		{
			var title = __doDOMQueryXPath(root, "//div[@class='dynQuickFilterGridTitle']", false);
			if (title && title.length)
			{
				return title[0].innerText;
			}
			return "Grid";
		}
		
		// TODO: Record: Click column
		// Playback: DoClickCell, DoSelectRow, DoSelectAll, DoClickColumn
	
		function _getCell(element)
		{
			var cell = { row: 0, col: 0, selectAll: 0, selectRow: 0, clickColumn: 0, selectItem: null };

			//debugger;			
			var _class = __getAttribute(element, "class");
			if (_class == "AxChkFieldMarkAll")
			{
				var checked = __getAttribute(element, "checked");
				cell.selectAll = checked == "checked" ? -1 : 1;
				return cell;
			}
			else if (_class == "AxChkFieldMark")
			{
				var checked = __getAttribute(element, "checked");
				cell.selectRow = checked == "checked" ? -1 : 1;
				cell.row = __doDOMQueryXPath(element, "count(../../preceding-sibling::tr)", true);
				return cell;
			}
			
			var cellEl = element;
			
			// User may click column header
			var columnHeader = __hasParentWithAttr(cellEl, "class", /dynGridViewHeaderRowTd/ig);
			if (columnHeader)
			{
				cell.clickColumn = 1;
			}
			
			// User may click into a cell that contains a table
			var nestedTable = __hasParentWithAttr(cellEl, "class", /dynJoiningTableSFK|dynJoiningTable/ig);
			if (nestedTable)
			{
				cellEl = nestedTable.parentNode;
			}
			
			
			while(cellEl)
			{
				if (cellEl.tagName.toLowerCase() == "td" || cellEl.tagName.toLowerCase() == "th")
				{
					break;
				}
				cellEl = cellEl.parentNode;
			}
			
			var rowEl = cellEl;
			while(rowEl)
			{
				if (rowEl.tagName.toLowerCase() == "tr")
				{
					break;
				}
				rowEl = rowEl.parentNode;
			}	
			
			var tableEl = rowEl;
			while(tableEl)
			{
				if (tableEl.tagName.toLowerCase() == "table")
				{
					break;
				}
				tableEl = tableEl.parentNode;			
			}
			
			if (cellEl && rowEl && tableEl)
			{
				var colNum = __doDOMQueryXPath(cellEl, "count(./preceding-sibling::*)", true);
				cell.col = colNum;
					
				var column = __doDOMQueryXPath(root, "./thead/tr/th[" + (colNum + 1) + "]", false);
				if (column && column.length)
				{
					var columnName = column[0].innerText;
					if (columnName)
					{
						cell.col = columnName;
					}
				}
				
				if (cell.clickColumn == 0)
				{
					if (element.tagName.toLowerCase() == "select")
					{
						cell.selectItem = element[element.value].textContent;
					}
					else
					{
						cell.row = element.innerText;
					}
					
					if (!cell.row)
					{
						var rowNum = __doDOMQueryXPath(rowEl, "count(./preceding-sibling::tr)", true);
						cell.row = parseInt(rowNum);
					}
				}
			}
			return cell;
		}
		
		var rvalue =
		{
			root: null, // to define in future the most near element or smth else
			result: null, // here will be old res placed
			rcode: R_NOT_OBJECT // return code
		};
	  
	  	//debugger;
		var root = false;
		if(root=__hasParentWithAttr(element, 'class', /dynGridViewTable\b/ig))
		{
			var xpath = SeS_GenerateXPath(root);
	
			var res = {
				cancel: false,
				object_flavor: 'Grid',
				object_name: _getName(),
				object_type: 'DomDynamicsEPGrid',
				description: 'TODO Action description',
				locator_data: 
				{
					xpath: xpath
	    		}
			};
			
			// Learn
			rvalue.result = res;
			rvalue.root = root;
			rvalue.rcode = R_OBJECT_FOUND;
			
			if(evt == "resolveElementDescriptor")
			{
				res.rect = __getElementRect(root);
				res.action = undefined;
				return rvalue;
			}
			
			if (evt == "Click")
			{
				//debugger;
				var cell = _getCell(element);
				if (cell)
				{
					if (cell.selectRow != 0)
					{
						var actionSelectRow = {
								name: "SelectRow",
								description: "Toggle select/deselect of a row",
								params: [cell.row, cell.selectRow == 1]
							};	
						res.action = actionSelectRow;
					}
					else if (cell.selectAll != 0)
					{
						var actionSelectAll = {
								name: "SelectAll",
								description: "Toggle select/deselect all checkbox",
								params: [cell.selectAll == 1]
							};	
						res.action = actionSelectAll;
					}
					else if (cell.clickColumn)
					{
						var columnClick = {
								name: "ClickColumn",
								description: "Click a column in the grid",
								params: [cell.col]
							};
						res.action = columnClick;
					}
					else if (cell.selectItem != null)
					{
						res.cancel = true;
					}
					else
					{
						var isOpenButton = __getAttribute(element, 'axctrltype') == "AxLookupButton";
						if (isOpenButton)
						{
							var actionLookup = {
									name: "Lookup",
									description: "Click lookup button on a cell in the grid",
									params: [cell.row, cell.col]
								};	
							res.action = actionLookup;
						}
						else
						{
							var actionClick = {
									name: "ClickCell",
									description: "Click a cell in the grid",
									params: [cell.row, cell.col]
								};	
							res.action = actionClick;
						}
					}
				}
			}
			else if (evt == "SetText")
			{
				//debugger;
				var cell = _getCell(element);
				
				if (cell.selectAll != 0 || cell.selectRow != 0)
				{
					res.cancel = true;
				}
				else
				{
					var actionText = {
							name: "SetText",
							description: "Set text into a cell of the grid",
							params: [cell.row, cell.col, eventOpts]
						};	
					res.action = actionText;
				}
			}
			else if (evt == "Select")
			{
				var cell = _getCell(element);
				var actionSelect = {
						name: "SelectItem",
						description: "Selects an item in the dropdown of a cell in the grid",
						params: [cell.row, cell.col, cell.selectItem]
					};	
				res.action = actionSelect;
			}
			
			// Actions 
			rvalue.rcode = R_ACTION_FOUND;
		}
		
		return rvalue;
	}
	
	// Entry point to process action recorded event
	// Returns "false" if no relation to current plugin is detected
	// or action information.
	actionHolder.OnActionRecorded = function(evt,element,eventOpts,objName,description, flavor, items)
	{
		if(!element) return false;
		 
		function _checkDomDynamicsEPControls()
		{
			// Test each object type supported by the library
			var r = manageExceptions(IsDomDynamicsEPGrid)(evt, element, eventOpts, objName, description, flavor, items);
			if(r.rcode == R_OBJECT_FOUND || r.rcode == R_ACTION_FOUND)
			{
				return r.result;
			}
			
			var r = manageExceptions(IsDomDynamicsEPCombobox)(evt, element, eventOpts, objName, description, flavor, items);
			if(r.rcode == R_OBJECT_FOUND || r.rcode == R_ACTION_FOUND)
			{
				return r.result;
			}
			
			var r = manageExceptions(IsDomDynamicsEPInput)(evt, element, eventOpts, objName, description, flavor, items);
			if(r.rcode == R_OBJECT_FOUND || r.rcode == R_ACTION_FOUND)
			{
				return r.result;
			}
			
			var r = manageExceptions(IsDomDynamicsEPButton)(evt, element, eventOpts, objName, description, flavor, items);
			if(r.rcode == R_OBJECT_FOUND || r.rcode == R_ACTION_FOUND)
			{
				return r.result;
			}
			
			var r = manageExceptions(IsDomDynamicsEPButtonImage)(evt, element, eventOpts, objName, description, flavor, items);
			if(r.rcode == R_OBJECT_FOUND || r.rcode == R_ACTION_FOUND)
			{
				return r.result;
			}
			
			var r = manageExceptions(IsDomDynamicsEPInputPlaceholder)(evt, element, eventOpts, objName, description, flavor, items);
			if(r.rcode == R_OBJECT_FOUND || r.rcode == R_ACTION_FOUND)
			{
				return r.result;
			}
		}
		
		if(typeof(g_debug)!="undefined"&&g_debug)
		{
			return _checkDomDynamicsEPControls();
		} else {
			try
			{
				return _checkDomDynamicsEPControls();
			}
			catch(exc)
			{
				PrintException("DomDynamicsEP Plugin exception", exc);
			}
		}
		return false;
	}
	
	//#region Debug Functions
	function PrintException(title, exc)
	{
		Log("************** " + title + " *********************\n");
		var vDebug = "";
		for (var prop in exc)
		{
			vDebug += "    ["+ prop+ "]:"+ exc[prop] + "\n";
		}
		Log(vDebug);
		Log('**********************************************************');	
	}

	function print(msg) 
	{
		console.log(msg); // to see it in console if possible
		if(l1)Log1(msg);
	}

	function manageExceptions(func) 
	{
		var orignal = func;
		var decorated = function() 
		{
			// purpose of this wrap is to write function name where error is, if stack is unavailable
			function functionName(fn)
			{
				var name = /\W*function\s+([\w\$]+)\(/.exec(fn);
				if(!name)
				{
					return 'No name';
				}
				return name[1];
			}
			var funcName = functionName(orignal.toString());
			
			if(typeof(g_debug)!="undefined"&&g_debug)
			{
				var _s = new Date();
				if(l3) Log3("Trying:"+funcName);
				var res = orignal.apply(this, arguments);
				if(l3) Log3( (new Date()-_s)+"[ms]" );
				return res;
			} else {
				try 
				{
					return orignal.apply(this, arguments);
				}
				catch(exception) 
				{
					if (!exception.stack) // give user more chances to find out error
					{
						Log("************** Exception in " + funcName + " *********************\n");
					}
					throw exception; // to catch it in the end of recorder
				}
			}			
		}
		return decorated;
	}
	//#endregion
}