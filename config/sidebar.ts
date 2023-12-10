export default {
	'/development-site/': [
		{
			title: 'Site Development',
			to: '/development-site/introduction/'
		}, {
			title: 'Introduction',
			collapsible: true,
			items: [
				{
					title: 'Site Overview',
					to: '/development-site/introduction/'
				}, {
					title: 'Directory Structure',
					to: '/development-site/introduction/directory-structure/'
				}, {
					title: 'Technology',
					to: '/development-site/introduction/technologies/'
				}, {
					title: 'User Journey',
					to: '/development-site/introduction/user-journey/'
				}
			]
		}, {
			title: 'Component Architecture',
			collapsible: true,
			items: [
				{
					title: 'Top-Level Components',
					to: '/development-site/introduction/'
				}, {
					title: 'Reusable Components',
					to: '/development-site/mapping/property-map/'
				}
			]
		}, {
			title: 'Routes',
			collapsible: true,
			items: [
				{
					title: 'Home',
					to: '/development-site/routes/home/'
				}, {
					title: 'About Route',
					to: '/development-site/routes/about/'
				}, {
					title: 'Contact Route',
					to: '/development-site/routes/contact/'
				}, {
					title: 'Policies Route',
					to: '/development-site/routes/policies/'
				}, {
					title: 'Authentication Route',
					to: '/development-site/routes/authentication/'
				}, {
					title: 'User Profile Route',
					to: '/development-site/routes/profile/'
				}, {
					title: 'Onboarding Survey Route',
					to: '/development-site/routes/survey/'
				}, {
					title: 'Administration Route',
					to: '/development-site/routes/admin/'
				}, {
					title: 'API Route',
					to: '/development-site/routes/api/'
				}
			]
		}, {
			title: 'Component Architecture',
			collapsible: true,
			items: [
				{
					title: 'Top-Level Components',
					to: '/development-site/introduction/'
				}, {
					title: 'Reusable Components',
					to: '/development-site/mapping/property-map/'
				}
			]
		}, {
			title: 'Component Architecture',
			collapsible: true,
			items: [
				{
					title: 'Top-Level Components',
					to: '/development-site/introduction/'
				}, {
					title: 'Reusable Components',
					to: '/development-site/mapping/property-map/'
				}
			]
		}, {
			title: 'Component Architecture',
			collapsible: true,
			items: [
				{
					title: 'Top-Level Components',
					to: '/development-site/introduction/'
				}, {
					title: 'Reusable Components',
					to: '/development-site/mapping/property-map/'
				}
			]
		}
	], '/development-db/': [
		{
			title: 'Database Development sidebar',
			to: '/development-db/'
		}, {
			title: 'Development Environment',
			collapsible: true,
			items: [{
				title: 'Overview',
				to: '/development-db/environment/'
			}, {
				title: 'Supabase dashboard',
				to: '/development-db/environment/supabase-dashboard/'
			}, {
				title: 'Local Development',
				to: '/development-db/environment/local-development/'
			}, {
				title: 'External Connections',
				to: '/development-db/environment/external-clients/'
			}, {
				title: 'External Clients',
				collapsible: true,
				items: [{
					title: 'Dbeaver',
					to: '/development-db/environment/external-clients/dbeaver/'
				},
				{
					title: 'PG Admin',
					to: '/development-db/environment/external-clients/pgadmin/'
				}
					,
				{
					title: 'QGIS',
					to: '/development-db/environment/external-clients/qgis/'
				}
					,
				{
					title: 'Arc GIS',
					to: '/development-db/environment/external-clients/arcgis/'
				}
					,
				{
					title: 'Leaflet',
					to: '/development-db/environment/external-clients/leaflet/'
				}
				]
			}
			]
		}, {
			title: 'SOC Database Overview',
			to: '/development-db/soc-database/',
		}, {
			title: 'SOC Database Design Guide',
			collapsible: true,
			items: [
				{
					title: 'Design Overview',
					to: '/development-db/soc-database/design/'
				},
				{
					title: 'Roles',
					to: '/development-db/soc-database/design/roles/'
				}, {
					title: 'Extensions',
					to: '/development-db/soc-database/design/extensions/'
				}, {
					title: 'Schemas',
					to: '/development-db/soc-database/design/schemas/'
				}, {
					title: 'auth Schema',
					to: '/development-db/soc-database/design/schemas/auth/'
				},
				{
					title: 'auth Schema Definitions',
					collapsible: true,
					items: [
						{
							title: 'auth Tables',
							to: '/development-db/soc-database/design/schemas/auth/tables'
						}, {
							title: 'auth Views',
							to: '/development-db/soc-database/design/schemas/auth/views/'
						}, {
							title: 'auth Functions',
							to: '/development-db/soc-database/design/schemas/auth/functions/'
						}, {
							title: 'auth Sequences',
							to: '/development-db/soc-database/design/schemas/auth/sequences/'
						}, {
							title: 'auth Trigger Functions',
							to: '/development-db/soc-database/design/schemas/auth/trigger-functions'
						}]
				}, {
					title: 'private Schema',
					to: '/development-db/soc-database/design/schemas/private/'
				}
				, {
					title: 'private Schema Definitions',
					collapsible: true, items: [
						{
							title: 'private Tables',
							to: '/development-db/soc-database/design/schemas/private/tables'
						}, {
							title: 'private Views',
							to: '/development-db/soc-database/design/schemas/private/views/'
						}, {
							title: 'private Functions',
							to: '/development-db/soc-database/design/schemas/private/functions/'
						}, {
							title: 'private Sequences',
							to: '/development-db/soc-database/design/schemas/private/sequences/'
						}, {
							title: 'private Trigger Functions',
							to: '/development-db/soc-database/design/schemas/private/trigger-functions'
						}
					]
				}, {
					title: 'public Schema',
					to: '/development-db/soc-database/design/schemas/public/'
				}, {
					title: 'private Schema Definitions',
					collapsible: true, items: [
						{
							title: 'public Tables',
							to: '/development-db/soc-database/design/schemas/public/tables'
						}, {
							title: 'public Views',
							to: '/development-db/soc-database/design/schemas/public/views/'
						}, {
							title: 'public Functions',
							to: '/development-db/soc-database/design/schemas/public/functions/'
						}, {
							title: 'public Sequences',
							to: '/development-db/soc-database/design/schemas/public/sequences/'
						}, {
							title: 'public Trigger Functions',
							to: '/development-db/soc-database/design/schemas/public/trigger-functions'
						}
					]
				}
			]
		}, {
			title: 'Administration',
			to: '/development-db/soc-database/administration/'
		}
	],
	'/development-docs/': [
		{
			title: 'Documentation Development',
			collapsible: true,
			collapsed: false,
			items: [
				{
					title: 'Introduction',
					to: '/development-site/introduction/'
				}
			]
		}
	],
	'/faqs/': [
		{
			title: 'Frequently Asked',
			to: '/faqs/faq/'
		}
	]
};
