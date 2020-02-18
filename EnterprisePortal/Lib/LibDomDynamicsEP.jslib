
SeSRegisterLibrary(
	{
		name: 'DomDynamicsEP',
		description: 'DomDynamicsEP - Default user-defined library',
		include: 'Lib/LibDomDynamicsEP/LibDomDynamicsEP.js',
		info: null,
		load_order: 1000,   
		recording: true,
		autoload: true,
		libinit: function(libinfo) 
		{
			SeSHTMLRegisterPlugin(DomDynamicsEPPlugin);
		}
	}
);