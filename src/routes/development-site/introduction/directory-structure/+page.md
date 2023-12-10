---
title: Directory Structure
description: Project directory layout 
---

```plaintext
📦soc-dev
 ┣ 📂.git           ---------------------# System Folder
 ┣ 📂.svelte-kit    ---------------------# System Folder
 ┣ 📂.vercel        ---------------------# System Folder
 ┣ 📂.vscode        ---------------------# System Folder
 ┣ 📂node_modules   ---------------------# System Folder
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂email_templates
 ┃ ┃ ┃ ┣ BCYCABaseTemplate.svelte
 ┃ ┃ ┃ ┣ BCYCACommunityEmail.svelte
 ┃ ┃ ┃ ┣ SendRFSPlan.svelte
 ┃ ┃ ┃ ┗ Tester.svelte
 ┃ ┃ ┣ 📂error
 ┃ ┃ ┃ ┗ AuthErrorMessage.svelte
 ┃ ┃ ┣ 📂form
 ┃ ┃ ┃ ┣ 📂address-challenge
 ┃ ┃ ┃ ┃ ┣ AddressChallenge.svelte
 ┃ ┃ ┃ ┃ ┣ AddressEligible.svelte
 ┃ ┃ ┃ ┃ ┣ AddressIneligible.svelte
 ┃ ┃ ┃ ┃ ┣ AddressSystemError.svelte
 ┃ ┃ ┃ ┃ ┣ AddressUnchallenged.svelte
 ┃ ┃ ┃ ┃ ┗ AddressValid.svelte
 ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┣ PasswordEntry.svelte
 ┃ ┃ ┃ ┃ ┣ SetEmail.svelte
 ┃ ┃ ┃ ┃ ┣ SetPassword.svelte
 ┃ ┃ ┃ ┃ ┗ SignUpSuccess.svelte
 ┃ ┃ ┃ ┣ 📂inputs
 ┃ ┃ ┃ ┃ ┣ AutoCompleteLookUp.svelte
 ┃ ┃ ┃ ┃ ┣ AutoCompleteSelect.svelte
 ┃ ┃ ┃ ┃ ┣ EnumOptionSelect.svelte
 ┃ ┃ ┃ ┃ ┣ NumberInput.svelte
 ┃ ┃ ┃ ┃ ┣ StreetSelectInput.svelte
 ┃ ┃ ┃ ┃ ┗ TextAreaInput.svelte
 ┃ ┃ ┃ ┣ 📂survey
 ┃ ┃ ┃ ┃ ┣ Step1.svelte
 ┃ ┃ ┃ ┃ ┣ Step10.svelte
 ┃ ┃ ┃ ┃ ┣ Step11.svelte
 ┃ ┃ ┃ ┃ ┣ Step12.svelte
 ┃ ┃ ┃ ┃ ┣ Step2.svelte
 ┃ ┃ ┃ ┃ ┣ Step3.svelte
 ┃ ┃ ┃ ┃ ┣ Step4.svelte
 ┃ ┃ ┃ ┃ ┣ Step5.svelte
 ┃ ┃ ┃ ┃ ┣ Step6.svelte
 ┃ ┃ ┃ ┃ ┣ Step7.svelte
 ┃ ┃ ┃ ┃ ┣ Step8.svelte
 ┃ ┃ ┃ ┃ ┣ Step9.svelte
 ┃ ┃ ┃ ┃ ┗ SurveyFormContainer.svelte
 ┃ ┃ ┃ ┣ 📂tables
 ┃ ┃ ┃ ┃ ┣ BCYCARequestsTable.svelte
 ┃ ┃ ┃ ┃ ┣ MessagesTable.svelte
 ┃ ┃ ┃ ┃ ┣ NewUsersTable.svelte
 ┃ ┃ ┃ ┃ ┣ TabulatorTable.svelte
 ┃ ┃ ┃ ┃ ┣ TabulatorTableSearch.svelte
 ┃ ┃ ┃ ┃ ┗ custom_tabulator.css
 ┃ ┃ ┃ ┣ AuthErrorMessage.svelte
 ┃ ┃ ┃ ┣ AuthSuccessMessage.svelte
 ┃ ┃ ┃ ┣ ProgressBar.svelte
 ┃ ┃ ┃ ┗ SaveProfilePrompt.svelte
 ┃ ┃ ┣ 📂map
 ┃ ┃ ┃ ┣ 📂leaflet
 ┃ ┃ ┃ ┃ ┣ 📂controls
 ┃ ┃ ┃ ┃ ┃ ┣ CustomEditControl.svelte
 ┃ ┃ ┃ ┃ ┃ ┣ EditorControl.svelte
 ┃ ┃ ┃ ┃ ┃ ┣ LayersControl.svelte
 ┃ ┃ ┃ ┃ ┃ ┗ ScaleControl.svelte
 ┃ ┃ ┃ ┃ ┣ 📂geoman
 ┃ ┃ ┃ ┃ ┃ ┗ custom-geoman.css
 ┃ ┃ ┃ ┃ ┣ 📂layers
 ┃ ┃ ┃ ┃ ┃ ┣ EsriLeafletTiledMapLayer.svelte
 ┃ ┃ ┃ ┃ ┃ ┣ EsriLeafletVectorTilelayer.svelte
 ┃ ┃ ┃ ┃ ┃ ┣ FeatureGroupLayer.svelte
 ┃ ┃ ┃ ┃ ┃ ┣ GeoJSONLayer.svelte
 ┃ ┃ ┃ ┃ ┃ ┣ HereTileLayer.svelte
 ┃ ┃ ┃ ┃ ┃ ┗ LayerGroup.svelte
 ┃ ┃ ┃ ┃ ┣ AboutMapLeaflet.svelte
 ┃ ┃ ┃ ┃ ┣ LeafletMap.svelte
 ┃ ┃ ┃ ┃ ┗ PropertyMapLeaflet.svelte
 ┃ ┃ ┃ ┣ AboutMap.svelte
 ┃ ┃ ┃ ┣ MyPropertyMap.svelte
 ┃ ┃ ┃ ┗ PropertyMap.svelte
 ┃ ┃ ┣ 📂message
 ┃ ┃ ┃ ┣ MessageContainer.svelte
 ┃ ┃ ┃ ┗ ProfileMessage.svelte
 ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┣ 📂logo
 ┃ ┃ ┃ ┃ ┣ Logo.svelte
 ┃ ┃ ┃ ┃ ┗ hall_logo_image_90px.png
 ┃ ┃ ┃ ┣ MobileNavbar.svelte
 ┃ ┃ ┃ ┗ Navbar.svelte
 ┃ ┃ ┣ 📂page
 ┃ ┃ ┃ ┣ Breadcrumbs.svelte
 ┃ ┃ ┃ ┣ Footer.svelte
 ┃ ┃ ┃ ┗ Spinner.svelte
 ┃ ┃ ┣ 📂tabs
 ┃ ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┃ ┣ HallInfoHubTab.svelte
 ┃ ┃ ┃ ┃ ┣ KYNGsTab.svelte
 ┃ ┃ ┃ ┃ ┣ ProjectTab.svelte
 ┃ ┃ ┃ ┃ ┗ WorkshopsTab.svelte
 ┃ ┃ ┃ ┗ Tabs.svelte
 ┃ ┃ ┣ SOCLogo.png
 ┃ ┃ ┣ SOCLogo_half.png
 ┃ ┃ ┗ SOCLogo_quarter.png
 ┃ ┣ 📂lib
 ┃ ┃ ┣ 📂map
 ┃ ┃ ┃ ┗ map.ts
 ┃ ┃ ┣ 📂pdf
 ┃ ┃ ┃ ┗ definition.txt
 ┃ ┃ ┣ 📂server
 ┃ ┃ ┃ ┗ 📂pdf
 ┃ ┃ ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┃ ┃ ┃ ┣ Poppins-Italic.ttf
 ┃ ┃ ┃ ┃ ┃ ┣ Poppins-Medium.ttf
 ┃ ┃ ┃ ┃ ┃ ┣ Poppins-MediumItalic.ttf
 ┃ ┃ ┃ ┃ ┃ ┣ Poppins-Regular.ttf
 ┃ ┃ ┃ ┃ ┃ ┗ SOCLogo.png
 ┃ ┃ ┃ ┃ ┗ generateRfsStreetReport.ts
 ┃ ┃ ┣ custom.types.ts
 ┃ ┃ ┣ db.types.ts
 ┃ ┃ ┣ dbdb.types.ts
 ┃ ┃ ┣ profileOptions.ts
 ┃ ┃ ┣ types.d.ts
 ┃ ┃ ┣ update.db.types.ts
 ┃ ┃ ┗ utils.ts
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┣ 📂bcyca
 ┃ ┃ ┃ ┃ ┣ 📂events
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ 📂information
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ 📂workshops
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┣ 📂emergency
 ┃ ┃ ┃ ┃ ┣ 📂reports
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ 📂service_map
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┣ 📂site
 ┃ ┃ ┃ ┃ ┣ 📂messages
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ 📂roles
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┣ 📂users
 ┃ ┃ ┃ ┃ ┣ 📂kits
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ 📂new
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┣ +layout.server.ts
 ┃ ┃ ┃ ┣ +layout.svelte
 ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┃ ┣ 📂signout
 ┃ ┃ ┃ ┃ ┃ ┗ +server.ts
 ┃ ┃ ┃ ┃ ┗ 📂signup
 ┃ ┃ ┃ ┃ ┃ ┗ +server.ts
 ┃ ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┃ ┗ 📂validateaddress
 ┃ ┃ ┃ ┃ ┃ ┗ +server.ts
 ┃ ┃ ┃ ┣ 📂emails
 ┃ ┃ ┃ ┃ ┗ 📂sendrfsplan
 ┃ ┃ ┃ ┃ ┃ ┗ +server.ts
 ┃ ┃ ┃ ┗ 📂reports
 ┃ ┃ ┃ ┃ ┗ 📂rfs
 ┃ ┃ ┃ ┃ ┃ ┗ 📂street
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂[streetname]
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ +server.ts
 ┃ ┃ ┣ auth
 ┃ ┃ ┃ ┣ 📂confirm
 ┃ ┃ ┃ ┃ ┗ +server.ts
 ┃ ┃ ┃ ┣ 📂redirect
 ┃ ┃ ┃ ┃ ┣ 📂checkemail
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ 📂signup
 ┃ ┃ ┃ ┃ ┃ ┣ 📂survey
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┃ ┗ 📂userexists
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┣ 📂requestresetpassword
 ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┣ 📂resetpassword
 ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┗ 📂signin
 ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┣ 📂contact
 ┃ ┃ ┃ ┣ +page.svelte
 ┃ ┃ ┃ ┗ +page.ts
 ┃ ┃ ┣ 📂policies
 ┃ ┃ ┃ ┣ 📂privacy
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┗ 📂termsofservice
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┣ 📂aboutme
 ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┣ 📂mycommunity
 ┃ ┃ ┃ ┃ ┣ 📂events
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ 📂information
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ 📂map
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ 📂workshops
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┣ 📂myplace
 ┃ ┃ ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ 📂hazards
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ 📂mymap
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ 📂resources
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┣ 📂settings
 ┃ ┃ ┃ ┃ ┣ 📂email
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┣ 📂password
 ┃ ┃ ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┃ ┣ +layout.server.ts
 ┃ ┃ ┃ ┣ +layout.svelte
 ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┣ 📂survey
 ┃ ┃ ┃ ┣ +page.server.ts
 ┃ ┃ ┃ ┗ +page.svelte
 ┃ ┃ ┣ +layout.server.ts
 ┃ ┃ ┣ +layout.svelte
 ┃ ┃ ┣ +layout.ts
 ┃ ┃ ┗ +page.svelte
 ┃ ┣ 📂stores
 ┃ ┃ ┗ addresspoint.ts
 ┃ ┣ app.d.ts
 ┃ ┣ app.html
 ┃ ┣ app.postcss
 ┃ ┣ hooks.client.ts
 ┃ ┣ hooks.server.ts
 ┃ ┣ index.d.ts
 ┃ ┣ index.test.ts
 ┃ ┗ soc_theme.ts
 ┣ 📂static
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ Inter-Black.ttf
 ┃ ┃ ┣ Inter-Black.ttf:Zone.Identifier
 ┃ ┃ ┣ Inter-Bold.ttf
 ┃ ┃ ┣ Inter-Bold.ttf:Zone.Identifier
 ┃ ┃ ┣ Inter-ExtraBold.ttf
 ┃ ┃ ┣ Inter-ExtraBold.ttf:Zone.Identifier
 ┃ ┃ ┣ Inter-ExtraLight.ttf
 ┃ ┃ ┣ Inter-ExtraLight.ttf:Zone.Identifier
 ┃ ┃ ┣ Inter-Light.ttf
 ┃ ┃ ┣ Inter-Light.ttf:Zone.Identifier
 ┃ ┃ ┣ Inter-Medium.ttf
 ┃ ┃ ┣ Inter-Medium.ttf:Zone.Identifier
 ┃ ┃ ┣ Inter-Regular.ttf
 ┃ ┃ ┣ Inter-Regular.ttf:Zone.Identifier
 ┃ ┃ ┣ Inter-SemiBold.ttf
 ┃ ┃ ┣ Inter-SemiBold.ttf:Zone.Identifier
 ┃ ┃ ┣ Inter-Thin.ttf
 ┃ ┃ ┣ Inter-Thin.ttf:Zone.Identifier
 ┃ ┃ ┣ Inter-VariableFont_slnt,wght.ttf
 ┃ ┃ ┣ Inter-VariableFont_slnt,wght.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-Black.ttf
 ┃ ┃ ┣ NotoSans-Black.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-BlackItalic.ttf
 ┃ ┃ ┣ NotoSans-BlackItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-Bold.ttf
 ┃ ┃ ┣ NotoSans-Bold.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-BoldItalic.ttf
 ┃ ┃ ┣ NotoSans-BoldItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-ExtraBold.ttf
 ┃ ┃ ┣ NotoSans-ExtraBold.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-ExtraBoldItalic.ttf
 ┃ ┃ ┣ NotoSans-ExtraBoldItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-ExtraLight.ttf
 ┃ ┃ ┣ NotoSans-ExtraLight.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-ExtraLightItalic.ttf
 ┃ ┃ ┣ NotoSans-ExtraLightItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-Italic.ttf
 ┃ ┃ ┣ NotoSans-Italic.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-Light.ttf
 ┃ ┃ ┣ NotoSans-Light.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-LightItalic.ttf
 ┃ ┃ ┣ NotoSans-LightItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-Medium.ttf
 ┃ ┃ ┣ NotoSans-Medium.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-MediumItalic.ttf
 ┃ ┃ ┣ NotoSans-MediumItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-Regular.ttf
 ┃ ┃ ┣ NotoSans-Regular.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-SemiBold.ttf
 ┃ ┃ ┣ NotoSans-SemiBold.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-SemiBoldItalic.ttf
 ┃ ┃ ┣ NotoSans-SemiBoldItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-Thin.ttf
 ┃ ┃ ┣ NotoSans-Thin.ttf:Zone.Identifier
 ┃ ┃ ┣ NotoSans-ThinItalic.ttf
 ┃ ┃ ┣ NotoSans-ThinItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ OFL.txt
 ┃ ┃ ┣ OFL.txt:Zone.Identifier
 ┃ ┃ ┣ Poppins-Black.ttf
 ┃ ┃ ┣ Poppins-Black.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-BlackItalic.ttf
 ┃ ┃ ┣ Poppins-BlackItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-Bold.ttf
 ┃ ┃ ┣ Poppins-Bold.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-BoldItalic.ttf
 ┃ ┃ ┣ Poppins-BoldItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-ExtraBold.ttf
 ┃ ┃ ┣ Poppins-ExtraBold.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-ExtraBoldItalic.ttf
 ┃ ┃ ┣ Poppins-ExtraBoldItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-ExtraLight.ttf
 ┃ ┃ ┣ Poppins-ExtraLight.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-ExtraLightItalic.ttf
 ┃ ┃ ┣ Poppins-ExtraLightItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-Italic.ttf
 ┃ ┃ ┣ Poppins-Italic.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-Light.ttf
 ┃ ┃ ┣ Poppins-Light.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-LightItalic.ttf
 ┃ ┃ ┣ Poppins-LightItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-Medium.ttf
 ┃ ┃ ┣ Poppins-Medium.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-MediumItalic.ttf
 ┃ ┃ ┣ Poppins-MediumItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-Regular.ttf
 ┃ ┃ ┣ Poppins-Regular.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-SemiBold.ttf
 ┃ ┃ ┣ Poppins-SemiBold.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-SemiBoldItalic.ttf
 ┃ ┃ ┣ Poppins-SemiBoldItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-Thin.ttf
 ┃ ┃ ┣ Poppins-Thin.ttf:Zone.Identifier
 ┃ ┃ ┣ Poppins-ThinItalic.ttf
 ┃ ┃ ┣ Poppins-ThinItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ README.txt
 ┃ ┃ ┣ README.txt:Zone.Identifier
 ┃ ┃ ┣ Roboto-Black.ttf
 ┃ ┃ ┣ Roboto-Black.ttf:Zone.Identifier
 ┃ ┃ ┣ Roboto-BlackItalic.ttf
 ┃ ┃ ┣ Roboto-BlackItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ Roboto-Bold.ttf
 ┃ ┃ ┣ Roboto-Bold.ttf:Zone.Identifier
 ┃ ┃ ┣ Roboto-BoldItalic.ttf
 ┃ ┃ ┣ Roboto-BoldItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ Roboto-Italic.ttf
 ┃ ┃ ┣ Roboto-Italic.ttf:Zone.Identifier
 ┃ ┃ ┣ Roboto-Light.ttf
 ┃ ┃ ┣ Roboto-Light.ttf:Zone.Identifier
 ┃ ┃ ┣ Roboto-LightItalic.ttf
 ┃ ┃ ┣ Roboto-LightItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ Roboto-Medium.ttf
 ┃ ┃ ┣ Roboto-Medium.ttf:Zone.Identifier
 ┃ ┃ ┣ Roboto-MediumItalic.ttf
 ┃ ┃ ┣ Roboto-MediumItalic.ttf:Zone.Identifier
 ┃ ┃ ┣ Roboto-Regular.ttf
 ┃ ┃ ┣ Roboto-Regular.ttf:Zone.Identifier
 ┃ ┃ ┣ Roboto-Thin.ttf
 ┃ ┃ ┣ Roboto-Thin.ttf:Zone.Identifier
 ┃ ┃ ┣ Roboto-ThinItalic.ttf
 ┃ ┃ ┗ Roboto-ThinItalic.ttf:Zone.Identifier
 ┃ ┣ ag.png
 ┃ ┣ favicon-32x32.png
 ┃ ┗ nswg.jpg
 ┣ 📂supabase
 ┣ 📂tests
 ┣ .env
 ┣ .env.example
 ┣ .env.local
 ┣ .eslintignore
 ┣ .eslintrc.cjs
 ┣ .gitignore
 ┣ .markdownlint.json
 ┣ .npmrc
 ┣ .prettierignore
 ┣ .prettierrc
 ┣ README.md
 ┣ package-lock.json
 ┣ package.json
 ┣ playwright.config.ts
 ┣ postcss.config.cjs
 ┣ svelte.config.js
 ┣ tailwind.config.ts
 ┣ tsconfig.json
 ┗ vite.config.ts
```
