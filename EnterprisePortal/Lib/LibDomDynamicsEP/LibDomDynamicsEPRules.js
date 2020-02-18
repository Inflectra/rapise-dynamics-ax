/**
 * @fileOverview
 * This is a file defining common rules for standard DomDynamicsEP objects.
 */

/**#@+
   @library DomDynamicsEP
*/

/**
 * Load behaviors
 */
eval(g_helper.IncludeOnce("Lib/LibDomDynamicsEP/DomDynamicsEPInput.js"));
eval(g_helper.IncludeOnce("Lib/LibDomDynamicsEP/DomDynamicsEPCombobox.js"));
eval(g_helper.IncludeOnce("Lib/LibDomDynamicsEP/DomDynamicsEPButton.js"));
eval(g_helper.IncludeOnce("Lib/LibDomDynamicsEP/DomDynamicsEPInputPlaceholder.js"));
eval(g_helper.IncludeOnce("Lib/LibDomDynamicsEP/DomDynamicsEPGrid.js"));

/** @rule */
var DomDynamicsEPInputRule = new SeSMatcherRule(
	{
		object_type: "DomDynamicsEPInput",
		object_flavor: "Edit",

		extend_rule: "HTMLObject",
		dont_hash: true,

		/** @behaviors */
		behavior: [DomDynamicsEPInputBehavior]
	}
);

/** @rule */
var DomDynamicsEPComboboxRule = new SeSMatcherRule(
	{
		object_type: "DomDynamicsEPCombobox",
		object_flavor: "Edit",

		extend_rule: "HTMLObject",
		dont_hash: true,

		/** @behaviors */
		behavior: [DomDynamicsEPComboboxBehavior]
	}
);

/** @rule */
var DomDynamicsEPButtonRule = new SeSMatcherRule(
	{
		object_type: "DomDynamicsEPButton",
		object_flavor: "Button",

		extend_rule: "HTMLObject",
		dont_hash: true,

		/** @behaviors */
		behavior: [DomDynamicsEPButtonBehavior]
	}
);

/** @rule */
var DomDynamicsEPGridRule = new SeSMatcherRule(
	{
		object_type: "DomDynamicsEPGrid",
		object_flavor: "Grid",

		extend_rule: "HTMLObject",
		dont_hash: true,

		/** @behaviors */
		behavior: [DomDynamicsEPGridBehavior]
	}
);

