
/** @behavior */
var DomDynamicsEPInputPlaceholderBehavior = {
	actions: [	
	
	],
	properties:
	{
		/** @property */
		Text:
		{
			Get: DomDynamicsEPInputPlaceholderBehavior_GetText,
			Set: DomDynamicsEPInputPlaceholderBehavior_SetText
		}		
	}
}


function DomDynamicsEPInputPlaceholderBehavior_GetText()
{
	return this.GetValue();
}

function DomDynamicsEPInputPlaceholderBehavior_SetText(/**string*/ value)
{	
	return this._DoSetText(value);
}
