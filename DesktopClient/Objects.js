var saved_script_objects={
	"G_AddressBarContainer": {
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
							"value": "AddressBarContainer"
						},
						{
							"property": "AutomationId",
							"value": "4915852"
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
		"object_role": "param:object_class",
		"object_class": "Pane",
		"version": 0,
		"object_type": "DynamicsAXAddressBar",
		"object_flavor": "Edit",
		"object_name": "G_AddressBarContainer",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/TopRow/AddressBarContainer"
	},
	"G_File": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "MenuBar"
						},
						{
							"property": "Name",
							"value": "File"
						},
						{
							"property": "AutomationId",
							"value": "2425562"
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
		"object_role": "param:object_class",
		"object_class": "MenuBar",
		"version": 0,
		"object_type": "DynamicsAXMenu",
		"object_flavor": "Menu",
		"object_name": "G_File",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Pane/MiddleRow/Jewel/File"
	},
	"G_TabControl": {
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
							"value": "918512"
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
		"object_role": "param:object_class",
		"object_class": "Tab",
		"version": 0,
		"object_type": "UIATabControl",
		"object_flavor": "TabControl",
		"object_name": "G_TabControl",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "navPaneTable/Pane/Tab"
	},
	"G_NavPaneList": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "List"
						},
						{
							"property": "AutomationId",
							"value": "12292"
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
		"object_class": "List",
		"version": 0,
		"object_type": "UIAObject",
		"object_flavor": "UIAutomation",
		"object_name": "NavPaneList",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Navigation pane options.*",
		"location": "regex:\u202aNavigation pane options\u202c.*/SysNavPaneOptionsDialog/Pane/Display buttons in this order/List"
	},
	"G_Modules_Line_down": {
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
							"value": "Line down"
						},
						{
							"property": "AutomationId",
							"value": "DownButton"
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
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "G_Modules_Line_down",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Navigation pane options.*",
		"location": "regex:\u202aNavigation pane options\u202c.*/SysNavPaneOptionsDialog/Pane/Display buttons in this order/List/NonClientVerticalScrollBar/DownButton"
	},
	"G_Modules_OK": {
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
							"value": "OK"
						},
						{
							"property": "AutomationId",
							"value": "12303"
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
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "G_Modules_OK",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Navigation pane options.*",
		"location": "regex:\u202aNavigation pane options\u202c.*/SysNavPaneOptionsDialog/Pane[1]/Pane/OK"
	},
	"G_CurrentCompany": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Custom"
						},
						{
							"property": "AutomationId",
							"value": "companyItemItem"
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
		"window_class": "AxMainFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Custom",
		"version": 0,
		"object_type": "UIAObject",
		"object_flavor": "UIAutomation",
		"object_name": "G_CurrentCompany",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "Custom/companyItemItem"
	},
	"G_CompanyGrid": {
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
							"value": "12292"
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
		"object_name": "G_CompanyGrid",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.Select company.*",
		"location": "regex:\u202aSelect company\u202c.*/SysDataAreaSelect/Pane/Grid"
	},
	"G_CompanyOK": {
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
							"value": "OK"
						},
						{
							"property": "AutomationId",
							"value": "12298"
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
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "G_CompanyOK",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Select company.*",
		"location": "regex:\u202aSelect company\u202c.*/SysDataAreaSelect/Pane[1]/Pane/OK"
	},
	"G_CloseDax": {
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
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			}
		],
		"window_class": "AxMainFrame",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "G_CloseDax",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Microsoft Dynamics AX.*",
		"location": "regex:\u202aMicrosoft Dynamics AX\u202c.*/TitleBar/Close"
	},
	"G_FastTabs": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Tab"
						}
					],
					"window_name": "param:window_name",
					"window_class": "param:window_class"
				}
			}
		],
		"window_class": "AxTopLevelFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Tab",
		"version": 0,
		"object_type": "DynamicsAXFastTabs",
		"object_flavor": "UIAutomation",
		"object_name": "G_FastTabs",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.*",
		"location": "Tab"
	},
	"G_FilterValue": {
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
							"value": "Text box"
						},
						{
							"property": "AutomationId",
							"value": "LookForFilter.LookForTextBox"
						}
					],
					"window_name": "param:window_name",
					"window_class": "AxPopupFrame"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "AxMainFrame",
		"object_text": "",
		"object_role": "param:object_class",
		"object_class": "Edit",
		"version": 0,
		"object_type": "DynamicsAXTextBox",
		"object_flavor": "Text",
		"object_name": "G_FilterValue",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.*",
		"location": "AxContainerControl/Filter/levelOneFilterPanel/lookForFilter/LookForFilter.LookForTextBox"
	},
	"G_FilterOpen": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "MenuItem"
						},
						{
							"property": "Name",
							"value": "Scope"
						}
					],
					"window_name": "param:window_name",
					"window_class": "AxPopupFrame"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "AxMainFrame",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "DynamicsAXMenuItem",
		"object_flavor": "MenuItem",
		"object_name": "G_FilterOpen",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.*",
		"location": "AxContainerControl/Filter/levelOneFilterPanel/lookForFilter/Scope"
	},
	"G_FilterDropDown": {
		"locations": [
			{
				"locator_name": "UIAutomation2",
				"location": {
					"location": [
						{
							"property": "ControlType",
							"value": "Menu"
						},
						{
							"property": "Name",
							"value": "DropDown"
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
		"window_class": "AxMainFrame",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "DynamicsAXMenuDropDownList",
		"object_flavor": "Menu",
		"object_name": "G_FilterDropDown",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.*",
		"location": "regex:\u202aMicrosoft Dynamics AX\u202c.*/DropDown"
	},
	"G_FilterApply": {
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
							"value": "Action button"
						}
					],
					"window_name": "param:window_name",
					"window_class": "AxPopupFrame"
				}
			},
			{
				"locator_name": "UIAutomation",
				"location": {
					"location": "param:location",
					"window_name": "param:window_name",
					"window_class": "regex:(WindowsForms10.)?Window.\\d+.app[a-z0-9_\\.]+"
				}
			}
		],
		"window_class": "AxMainFrame",
		"object_text": "",
		"object_role": "param:object_flavor",
		"object_class": "param:object_flavor",
		"version": 0,
		"object_type": "UIAButton",
		"object_flavor": "Button",
		"object_name": "G_FilterApply",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.*",
		"location": "AxContainerControl/Filter/levelOneFilterPanel/lookForFilter/Action button"
	},
	"G_FileName": {
		"locations": [
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
		"object_type": "DynamicsAXComboBoxEdit",
		"object_flavor": "ComboBox",
		"object_name": "File name:",
		"ignore_object_name": true,
		"object_library": "DynamicsAX",
		"window_name": "regex:.Document handling.*",
		"location": "Attach file/Pane[1]/File name:"
	},
	"G_OpenFile": {
		"locations": [
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
		"object_name": "Open",
		"ignore_object_name": true,
		"object_library": "UIAutomation",
		"window_name": "regex:.Document handling.*",
		"location": "Attach file/Open"
	}
};