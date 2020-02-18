
/** @behavior */
var DomDynamicsEPInputBehavior = {
	actions: [	
	
	],
	properties:
	{
		/** @property */
		Text:
		{
			Get: DomDynamicsEPInputBehavior_GetText,
			Set: DomDynamicsEPInputBehavior_SetText
		}		
	}
}


function DomDynamicsEPInputBehavior_GetText()
{
	return this.GetValue();
}

function DomDynamicsEPInputBehavior_SetText(/**string*/ value)
{	
	return this._DoSetText(value);
}
