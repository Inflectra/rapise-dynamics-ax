
/** @behavior */
var DomDynamicsEPComboboxBehavior = {
	actions: [	
		{
			actionName: "Open",
			/** @action */
			DoAction: DomDynamicsEPComboboxBehavior_DoOpen
		},
		{
			actionName: "SetText",
			/** @action */
			DoAction: DomDynamicsEPComboboxBehavior_SetText
		}
	],
	properties:
	{
		/** @property */
		Text:
		{
			Get: DomDynamicsEPComboboxBehavior_GetText,
			Set: DomDynamicsEPComboboxBehavior_SetText
		}			
	}
}

function DomDynamicsEPComboboxBehavior_DoOpen()
{
	var openButton = this._DoDOMQueryXPath(".//a[@axctrltype='AxLookupButton']/div");
	if (openButton == null || openButton.length == 0)
	{
		return false;
	}
	
	openButton[0]._DoClick();
}

function DomDynamicsEPComboboxBehavior_GetText()
{
	var input = this._DoDOMQueryXPath(".//input");
	if (input.length > 0)
	{
		return input[0].GetValue();
	}
	return null;
}

function DomDynamicsEPComboboxBehavior_SetText(/**string*/ txt)
{
	var input = this._DoDOMQueryXPath(".//input");
	if (input.length > 0)
	{
		return input[0]._DoSetText(txt);
	}
	return false;
}
