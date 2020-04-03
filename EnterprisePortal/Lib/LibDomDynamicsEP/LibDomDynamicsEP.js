/**
 * @fileOverview
 * This is a file defining common rules and behaviors for DomDynamicsEP objects.
 */
DomDynamicsEPPlugin = 
{
    pluginId: "DomDynamicsEPPlugin",
    include: "Lib/LibDomDynamicsEP/LibDomDynamicsEPRecorder.js",
    attachFunctionName: "DomDynamicsEPPluginAttach",
	
	// Connected instance of DomDynamicsEP for interoperation
	Init: function()
	{
		return true; //Plugin initialized
	}
} 
 
eval(g_helper.IncludeOnce("Lib/LibDomDynamicsEP/LibDomDynamicsEPRules.js"));

function DomDynamicsEP_OnXPathNotFound(xpath)
{
	if (l3) Log3("OnXPathNotFound");

	var newXpath = xpath;
	var re = new RegExp("//iframe\\[@(id)=['\"](DlgFrame)[0-9a-z\\-]+['\"]\\]", "ig");
	var match = null;
	
	while(match = re.exec(xpath))
	{
		if (match.length == 3)
		{
			var atStr = match[0];
			var attr = match[1]
			var val = match[2];
			if (l3) Log3("Attribute: " + attr);
			if (l3) Log3("Value: " + val);
			
			//var contains = "contains(@" + attr + ",'" + val + "')";
			var frame = "(//iframe[contains(@id,'DlgFrame')])[last()]";
			newXpath = newXpath.replace(atStr, frame);
		}
	}
	

    // //table[@id='ctl00_m_g_9b6a4788_5cd5_4b01_b622_488d1ef005fe_ctl01_ProjectForm_IdentificationGrp_ctl28_LookupGridTable']
    // guid may change: 9b6a4788_5cd5_4b01_b622_488d1ef005fe
    // ctlNo may change: ctl01

	var xpath = newXpath;
	var re = new RegExp("@id=['\"](ctl([a-z0-9]+|[_]|[A-Z][a-zA-Z]+)+)['\"]", "g");
	while(match = re.exec(xpath))
	{
		var atStr = match[0];
		var val = match[1];
		var res = val.match(/[A-Z][a-zA-Z]+/g);
		if (res && res.length > 0)
		{
			var predicate = "";
			for(var i = 0; i < res.length; i++)
			{
				if (i > 0)
				{
					predicate += " and ";
				}
				predicate += "contains(@id,'" + res[i] + "')";
			}
			newXpath = newXpath.replace(atStr, predicate);
		}
	}
	
	if (!g_recording)
	{
		if (newXpath.indexOf("iframe") == -1)
		{
			// Fix for Chrome iframe issue
			newXpath = "(//iframe[contains(@id,'DlgFrame')])[last()]@@@" + newXpath;
		}
	}
	
	if (l3) Log3("New XPATH: " + newXpath);
	
	return newXpath;
}

g_xpathNotFoundCallbacks.push(DomDynamicsEP_OnXPathNotFound);


function DomDynamicsEP_SeSOnActionRecording(/**SeSObject*/ obj, /**string*/ item, /**string*/ action, /**object*/ param, /**string*/ descr, /**boolean*/override, /**boolean*/show)
{
	if (obj && obj.object_info)
	{
		if (obj.object_info.xpath)
		{
			obj.object_info.xpath = DomDynamicsEP_OnXPathNotFound(obj.object_info.xpath);
		}
		
		if (obj.name)
		{
			if (obj.name.indexOf("ctl00") == 0)
			{
				var parts = obj.name.split("_");
				var newName = parts[parts.length - 1];
				if (descr)
				{
					obj.description = descr.replace(obj.name, newName);
				}
				obj.name = newName;
			}
		}
	}
	
	return false;
}

g_sesOnActionRecordedImpl.push(DomDynamicsEP_SeSOnActionRecording);

// For Chrome to calculate coordinates correctly
g_chromeSingleWindow = true;


var DomDynamicsEP_WebAppProfile = 
{
	record: 
	{
		attributes: [
			{ name: "id", notEmpty: true },
			{ name: "aria-label" },
			{ name: "type" },
			{ name: "role" },
			{ name: "axctrltype" },
			{ name: "axtype" },
			{ name: "fieldname" }
		],
		classes: [
			{ name: "AxInputField" },
			{ name: "dynGridViewTable" },
			{ name: "dynToolbarItem" }
		],
		anchors: [
			 /* { xpath: "//div[@id='shellArea']" } */
		]
	}
}

g_webAppProfile = DomDynamicsEP_WebAppProfile;

Navigator.NativeEvents = true;
Navigator.EnsureVisibleVerticalAlignment = "center";
