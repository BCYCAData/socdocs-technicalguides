<script>
	import '@svelteness/kit-docs/client/polyfills/index.js';
	import '@svelteness/kit-docs/client/styles/normalize.css';
	import '@svelteness/kit-docs/client/styles/fonts.css';
	import '@svelteness/kit-docs/client/styles/theme.css';

	import '$lib/styles/soc-techdocs.css';

	import { page } from '$app/stores';

	import { KitDocs, KitDocsLayout, SocialLink, createSidebarContext } from '@svelteness/kit-docs';

	/** @type {import('./$types').LayoutData} */
	export let data;

	$: ({ meta, sidebar } = data);

	/** @type {import('@svelteness/kit-docs').NavbarConfig} */
	const navbar = {
		links: [
			{ title: 'Frequently Asked Questions', slug: '/faqs', match: /\/faqs/ },
			{
				title: 'Website Development',
				slug: '/development-site',
				match: /\/development-site/
			},
			{ title: 'Database Development', slug: '/development-db', match: /\/development-db/ },
			{ title: 'Documentation Development', slug: '/development-docs', match: /\/development-docs/ }
		]
	};

	const { activeCategory } = createSidebarContext(sidebar);

	/**
	 * @typedef {'faqs' | 'development-site' | 'development-db' | 'development-docs'} BookNameKey
	 */
	/**
	 * @type {Object.<BookNameKey, string>}
	 */
	const bookNames = {
		faqs: 'Frequently Asked Questions',
		'development-site': 'Website Development',
		'development-db': 'Database Development',
		'development-docs': 'Documentation Development'
	};

	$: category = $activeCategory ? `${$activeCategory}: ` : '';
	$: title = meta ? `${category}${meta.title} | KitDocs` : null;
	$: description = meta?.description;

	let book = '';
	$: book = $page.url.pathname.split('/')[1];
	$: bookName = bookNames[book];
</script>

<svelte:head>
	{#key $page.url.pathname}
		{#if title}
			<title>{title}</title>
		{/if}
		{#if description}
			<meta name="description" content={description} />
		{/if}
	{/key}
</svelte:head>

<KitDocs {meta}>
	<KitDocsLayout {navbar} {sidebar}>
		<div class="socials" slot="navbar-right-alt">
			<SocialLink type="gitHub" href="https://github.com/sveltejs/svelte" />
		</div>
		<div class="logo" slot="navbar-left">
			<a href="/">
				<img height="24" src="/SOCLogo_quarter.png" alt="SOC Documentation" />
				<h1 style="padding-left: 20px; font-size: 1.5em; color:#050B17">SOC Documentation</h1>
			</a>
		</div>
		<div slot="sidebar-top">
			<h1 class="bookName">{bookName}</h1>
		</div>
		<div slot="main-top">Main Top</div>
		<div slot="main-bottom">Main Bottom</div>
		<slot />
	</KitDocsLayout>
</KitDocs>

<style>
	:global(:root) {
		--kd-color-brand-rgb: 234, 88, 12;
	}

	:global(:root.dark) {
		--kd-color-brand-rgb: 213, 149, 76;
	}

	.logo :global(a) {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo :global(svg) {
		height: 36px;
		overflow: hidden;
	}

	.bookName {
		font-size: 20px;
		font-weight: bolder;
		color: tomato;
	}
</style>
