import { Notice, Plugin } from "obsidian";

declare module "obsidian" {
	// add type safety for the undocumented methods
	interface App {
		emulateMobile: (toggle: boolean) => void;
		isMobile: () => void;
	}
}

export default class themeDesignUtilities extends Plugin {

	async onload() {

		const freezeDelaySecs = 5;

		this.addCommand({
			id: "test-notice",
			name: "Test Notice",
			callback: () => new Notice ("I am a test notice. 👋 \n\nI will stay here until you click me. ", 0),
		});

		this.addCommand({
			id: "toggle-emulate-mobile",
			name: "Toggle mobile emulation",
			callback: () => {
				if (this.app.isMobile) this.app.emulateMobile(false);
				else this.app.emulateMobile(true);
			},
		});

		this.addCommand({
			id: "freeze-obsidian",
			name: "Freeze Obsidian (triggered with " + freezeDelaySecs.toString() + "s delay)",
			callback: () => {
				new Notice ("Will freeze Obsidian in " + freezeDelaySecs.toString() + "s (if the console is open.)", 3000); // eslint-disable-line no-magic-numbers
				setTimeout(() => {debugger}, freezeDelaySecs * 1000); // eslint-disable-line no-magic-numbers
			},
		});

		this.addCommand({
			id: "cheatsheet-css-classes",
			name: "Cheatsheet: Obsidian CSS Classes",
			callback: () => window.open("https://raw.githubusercontent.com/chrisgrieser/obsidian-theme-design-utilities/master/cheatsheets/css-classes.png"),
		});
		
		this.addCommand({
			id: "cheatsheet-css-classes",
			name: "Cheatsheet: Obsidian CSS Classes",
			callback: () => window.open("https://raw.githubusercontent.com/chrisgrieser/obsidian-theme-design-utilities/master/cheatsheets/css-classes.png"),
		});

		console.log("Theme Design Utilities Plugin loaded.");
	}

	async onunload() {
		console.log("Theme Design Utilities Plugin unloaded.");
	}
}
