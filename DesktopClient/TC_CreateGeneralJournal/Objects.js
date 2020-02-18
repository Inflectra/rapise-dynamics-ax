var saved_script_objects={
	"Tree": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Tree"
						},
						{
							"property": "Name",
							"value": "Tree"
						},
						{
							"property": "AutomationId",
							"value": "Tree"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "AxMainFrame",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIATree",
		"object_flavor": "Tree",
		"object_name": "Tree",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "navPaneTable/Pane/Tab/General ledger/Tree"
	},
	"NewDeleteGroup": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Group"
						},
						{
							"property": "Name",
							"value": "NewDeleteGroup"
						},
						{
							"property": "AutomationId",
							"value": "NewDeleteGroup"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Group",
		"version": 0,
		"object_type": "DynamicsAXMenu",
		"object_flavor": "Menu",
		"object_name": "NewDeleteGroup",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.General journal.*",
		"location": "LayoutContainer/Pane[1]/MiddleRow/Pane/AxContainerControl/ActionPaneTab/NewDeleteGroup"
	},
	"Grid": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Table"
						},
						{
							"property": "Name",
							"value": "Grid"
						},
						{
							"property": "AutomationId",
							"value": "12290"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "DynamicsAXTable",
		"object_flavor": "Table",
		"object_name": "Grid",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.General journal.*",
		"location": "regex:\u202aGeneral journal\u202c.*/regex:.*/TemporaryFormName/Grid"
	},
	"ButtonGroup": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Group"
						},
						{
							"property": "Name",
							"value": "ButtonGroup"
						},
						{
							"property": "AutomationId",
							"value": "ButtonGroup"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Group",
		"version": 0,
		"object_type": "DynamicsAXMenu",
		"object_flavor": "Menu",
		"object_name": "ButtonGroup",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.General journal.*",
		"location": "LayoutContainer/Pane[1]/MiddleRow/Pane/AxContainerControl/ActionPaneTab/ButtonGroup"
	},
	"Date": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Edit"
						},
						{
							"property": "Name",
							"value": "Date"
						},
						{
							"property": "AutomationId",
							"value": "12430"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "AxChildFrame"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Edit",
		"version": 0,
		"object_type": "DynamicsAXTextBox",
		"object_flavor": "Text",
		"object_name": "Date",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.Journal voucher.*",
		"location": "regex:\u202aJournal voucher\u202c.*/LedgerJournalTransDaily/Tab/Overview/overviewGrid/Date"
	},
	"LinesGrid": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Table"
						},
						{
							"property": "Name",
							"value": "overviewGrid"
						},
						{
							"property": "AutomationId",
							"value": "12428"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "AxChildFrame"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "DynamicsAXTable",
		"object_flavor": "Table",
		"object_name": "overviewGrid",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.Journal voucher.*",
		"location": "regex:\u202aJournal voucher\u202c.*/LedgerJournalTransDaily/Tab/Overview/overviewGrid"
	},
	"Debit": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Edit"
						},
						{
							"property": "Name",
							"value": "Debit"
						},
						{
							"property": "AutomationId",
							"value": "12439"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "AxChildFrame"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Edit",
		"version": 0,
		"object_type": "DynamicsAXTextBox",
		"object_flavor": "Text",
		"object_name": "Debit",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.Journal voucher.*",
		"location": "regex:\u202aJournal voucher\u202c.*/LedgerJournalTransDaily/Tab/Overview/overviewGrid/Debit"
	},
	"Button": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Button"
						},
						{
							"property": "AutomationId",
							"value": "dropDownButton"
						}
					],
					"window_name": "\u0000",
					"window_class": "regex:HwndWrapper\\[Ax32\\.exe.+\\]"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "\u0000",
					"window_class": "regex:HwndWrapper\\[Ax32\\.exe.+\\]"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "Button",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Journal voucher.*",
		"location": "Pane/Custom/dropDownButton"
	},
	"110110": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Text"
						},
						{
							"property": "Name",
							"value": "110110"
						},
						{
							"property": "AutomationId",
							"value": "ValueTextBlock"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Text",
		"version": 0,
		"object_type": "UIALabel",
		"object_flavor": "Label",
		"object_name": "110110",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Journal voucher.*",
		"location": "regex:\u202aJournal voucher\u202c.*/Window/Custom/autoCompleteListView/Microsoft.Dynamics.Kernel.Client.UI.WPF.Controls.AutoCompleteDataEntry/Custom/ValueTextBlock"
	},
	"NewDeleteGroup1": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Group"
						},
						{
							"property": "Name",
							"value": "NewDeleteGroup"
						},
						{
							"property": "AutomationId",
							"value": "NewDeleteGroup"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Group",
		"version": 0,
		"object_type": "DynamicsAXMenu",
		"object_flavor": "Menu",
		"object_name": "NewDeleteGroup",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.Journal voucher.*",
		"location": "LayoutContainer/Pane[1]/MiddleRow/Pane/AxContainerControl/ActionPaneTab/NewDeleteGroup"
	},
	"TabControl": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Tab"
						},
						{
							"property": "AutomationId",
							"value": "12426"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "AxChildFrame"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Tab",
		"version": 0,
		"object_type": "UIATabControl",
		"object_flavor": "TabControl",
		"object_name": "TabControl",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Journal voucher.*",
		"location": "regex:\u202aJournal voucher\u202c.*/LedgerJournalTransDaily/Tab"
	},
	"Offset_company_accounts_lookup_b": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Pane"
						},
						{
							"property": "Name",
							"value": "Offset company accounts lookup button"
						},
						{
							"property": "AutomationId",
							"value": "542752340"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "AxChildFrame"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Pane",
		"version": 0,
		"object_type": "UIAObject",
		"object_flavor": "UIAutomation",
		"object_name": "Offset company accounts lookup button",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Journal voucher.*",
		"location": "regex:\u202aJournal voucher\u202c.*/LedgerJournalTransDaily/Tab/General/Offset account/Offset company accounts/Offset company accounts lookup button"
	},
	"Grid1": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Table"
						},
						{
							"property": "Name",
							"value": "Grid"
						},
						{
							"property": "AutomationId",
							"value": "12291"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "DynamicsAXTable",
		"object_flavor": "Table",
		"object_name": "Grid",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.Journal voucher.*",
		"location": "regex:\u202aJournal voucher\u202c.*/regex:.*/SysDataAreaSelectLookup/Grid"
	},
	"TotalDebit": {
		"locations": [
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "AxChildFrame"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Edit",
		"version": 0,
		"object_type": "DynamicsAXTextBox",
		"object_flavor": "Text",
		"object_name": "TotalDebit",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.Journal voucher.*",
		"location": "regex:\u202aJournal voucher\u202c.*/LedgerJournalTransDaily/Pane/Total debit/Journal"
	},
	"TotalCredit": {
		"locations": [
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "AxChildFrame"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Edit",
		"version": 0,
		"object_type": "DynamicsAXTextBox",
		"object_flavor": "Text",
		"object_name": "TotalCredit",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.Journal voucher.*",
		"location": "regex:\u202aJournal voucher\u202c.*/LedgerJournalTransDaily/Pane/Total credit/Journal"
	},
	"Close": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Text"
						},
						{
							"property": "Name",
							"value": "Close"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "",
					"window_class": "regex:HwndWrapper\\[Ax32\\.exe.+\\]"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Text",
		"version": 0,
		"object_type": "UIALabel",
		"object_flavor": "Label",
		"object_name": "Close",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Journal voucher.*",
		"location": "Custom/closeItem/CloseButton/Close"
	},
	"GridOverview": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Table"
						},
						{
							"property": "Name",
							"value": "GridOverview"
						},
						{
							"property": "AutomationId",
							"value": "12337"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "AxChildFrame"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "DynamicsAXTable",
		"object_flavor": "Table",
		"object_name": "GridOverview",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.General journal.*",
		"location": "regex:\u202aGeneral journal\u202c.*/LedgerJournalTable/Pane/Tab/Overview/GridOverview"
	},
	"Yes": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Button"
						},
						{
							"property": "Name",
							"value": "Yes"
						},
						{
							"property": "AutomationId",
							"value": "6"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "Yes",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.General journal.*",
		"location": "regex:\u202aGeneral journal\u202c.*/Microsoft Dynamics/Yes"
	},
	"Close1": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Button"
						},
						{
							"property": "Name",
							"value": "Close"
						},
						{
							"property": "AutomationId",
							"value": "CloseButton"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "",
					"window_class": "regex:HwndWrapper\\[Ax32\\.exe.+\\]"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "Close",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.General journal.*",
		"location": "Custom/closeItem/CloseButton"
	},
	"Description": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Edit"
						},
						{
							"property": "Name",
							"value": "Description"
						},
						{
							"property": "AutomationId",
							"value": "12343"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "AxChildFrame"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Edit",
		"version": 0,
		"object_type": "DynamicsAXTextBox",
		"object_flavor": "Text",
		"object_name": "Description",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.General journal.*",
		"location": "regex:\u202aGeneral journal\u202c.*/LedgerJournalTable/Pane/Tab/Overview/GridOverview/Description"
	},
	"Name": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Edit"
						},
						{
							"property": "Name",
							"value": "Name"
						},
						{
							"property": "AutomationId",
							"value": "12339"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "AxChildFrame"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Edit",
		"version": 0,
		"object_type": "DynamicsAXTextBox",
		"object_flavor": "Text",
		"object_name": "Name",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.General journal.*",
		"location": "regex:\u202aGeneral journal\u202c.*/LedgerJournalTable/Pane/Tab/Overview/GridOverview/Name"
	},
	"Text": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Edit"
						},
						{
							"property": "AutomationId",
							"value": "SegmentTextBox1"
						}
					],
					"window_name": "\u0000",
					"window_class": "regex:HwndWrapper\\[Ax32\\.exe.+\\]"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "\u0000",
					"window_class": "regex:HwndWrapper\\[Ax32\\.exe.+\\]"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Edit",
		"version": 0,
		"object_type": "DynamicsAXTextBox",
		"object_flavor": "Text",
		"object_name": "Text",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.Journal voucher.*",
		"location": "Pane/Custom/SegmentTextBox1"
	}
};