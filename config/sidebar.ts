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
					title: 'Getting Started',
					to: '/development-site/introduction/getting-started/'
				}
			]
		}, {
			title: 'User Journeys',
			collapsible: true,
			items: [
				{
					title: 'Overview',
					to: '/development-site/user-journeys/overview/'
				}, {
					title: 'Casual Users',
					to: '/development-site/user-journeys/casual-user/'
				}, {
					title: 'New Users',
					to: '/development-site/user-journeys/new-user/'
				}, {
					title: 'Registered Users',
					to: '/development-site/user-journeys/registered-user/'
				}, {
					title: 'Admin Users',
					to: '/development-site/user-journeys/admin-user/'
				}
			]
		}, {
			title: 'Routes',
			collapsible: true,
			items: [
				{
					title: '/home',
					to: '/development-site/routes/home/'
				}, {
					title: '/about',
					to: '/development-site/routes/about/'
				}, {
					title: '/contact',
					to: '/development-site/routes/contact/'
				}, {
					title: '/policies',
					to: '/development-site/routes/policies/'
				}, {
					title: '/survey',
					to: '/development-site/routes/survey/'
				}, {
					title: '/profile',
					to: '/development-site/routes/profile/'
				}, {
					title: '/admin',
					to: '/development-site/routes/admin/'
				}, {
					title: '/auth',
					to: '/development-site/routes/auth/'
				}, {
					title: '/api',
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
		}
	], '/development-db/': [
		{
			title: 'Database Development',
			to: '/development-db/overview/'
		}, {
			title: 'Development Environment',
			collapsible: true,
			items: [
				{
					title: 'Overview',
					to: '/development-db/environment/'
				}, {
					title: 'Supabase dashboard',
					to: '/development-db/environment/supabase-dashboard/'
				}, {
					title: 'Local Development',
					to: '/development-db/environment/local-development/'
				}
			]
		}, {
			title: 'Administration',
			to: '/development-db/soc-database/administration/'
		}, {
			title: 'External Connections',
			collapsible: true,
			items: [{
				title: 'Overview',
				to: '/development-db/environment/external-clients/'
			}, {
				title: 'Dbeaver',
				to: '/development-db/environment/external-clients/dbeaver/'
			}, {
				title: 'PG Admin',
				to: '/development-db/environment/external-clients/pgadmin/'
			}, {
				title: 'QGIS',
				to: '/development-db/environment/external-clients/qgis/'
			}, {
				title: 'Arc GIS',
				to: '/development-db/environment/external-clients/arcgis/'
			}, {
				title: 'Leaflet',
				to: '/development-db/environment/external-clients/leaflet/'
			}
			]
		}, {
			title: 'SOC Database Design',
			collapsible: true,
			items: [
				{
					title: 'Design Overview',
					to: '/development-db/soc-database/design/overview/'
				}, {
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
				}, {
					title: 'private Schema',
					to: '/development-db/soc-database/design/schemas/private/'
				}, {
					title: 'public Schema',
					to: '/development-db/soc-database/design/schemas/public/'
				},
			]
		}, {
			title: 'SOC Database Processes',
			collapsible: true,
			items: [
				{
					title: 'Processes Overview',
					to: '/development-db/soc-database/processes/overview/'
				}, {
					title: 'Register User',
					to: '/development-db/soc-database/processes/auth/login/'
				}, {
					title: 'Log In User',
					to: '/development-db/soc-database/processes/auth/register/'
				},
			]
		}, {
			title: 'auth Schema Definitions',
			collapsible: true,
			items: [
				{
					title: 'auth Tables',
					to: '/development-db/soc-database/design/schemas/auth/tables/'
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
					to: '/development-db/soc-database/design/schemas/auth/trigger-functions/'
				}]
		}, {
			title: 'private Schema Definitions',
			collapsible: true, items: [
				{
					title: 'private Tables',
					to: '/development-db/soc-database/design/schemas/private/tables/'
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
					to: '/development-db/soc-database/design/schemas/private/trigger-functions/'
				}
			]
		}, {
			title: 'private Schema Definitions',
			collapsible: true, items: [
				{
					title: 'public Tables',
					to: '/development-db/soc-database/design/schemas/public/tables/'
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
					to: '/development-db/soc-database/design/schemas/public/trigger-functions/'
				}
			]
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
