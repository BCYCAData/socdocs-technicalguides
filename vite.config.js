import { defineConfig } from 'vite';
import mermaid from 'remark-mermaidjs';
import { sveltepress } from '@sveltepress/vite';
import { defaultTheme } from '@sveltepress/theme-default';
import navbar from './config/navbar';
import sidebar from './config/sidebar';

const config = defineConfig({
	plugins: [
		sveltepress({
			theme: defaultTheme({
				navbar,
				sidebar,
				editLink:
					'https://github.com/BCYCAData/socdocs-technicalguides/edit/main/src/routes/:route',
				github: 'https://github.com/BCYCAData/socdocs-technicalguides',
				logo: '/SOCLogo_quarter.png',
				preBuildIconifyIcons: {
					carbon: ['user'],
					'grommet-icons': ['system'],
					tabler: ['stack-2']
				},
				themeColor: {
					light: '',
					dark: '',
					primary: '',
					hover: '',
					gradient: {
						start: '#ea580c',
						end: '#fed7aa'
					}
				}
			}),
			siteConfig: {
				title: 'SOC Documentation',
				description: "Documentation for the 'Strengthen Our Community' website"
			},
			remarkPlugins: [
				// @ts-ignore
				[
					mermaid,
					{
						// ...mermaid options
						theme: 'dark',
					}
				]
			]
		})
	]
});

export default config;
