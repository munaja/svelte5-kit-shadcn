# Svelte 5 - SvelteKit - Shadcn Svelte

Admin page sample using Svelte 5 and SvelteKit with components.

## Commands

```sh
# installing dependencies
pnpm install

# debug-running the project 
pnpm dev

```

## The Directory Structure
In the `src` directory, there are the following directories:
- `routes`: the routes directory (default from svelte)
- `lib`: the library directory (default from svelte), contains any file that's not related to the business logic
- `app`:  the app directory, contains any file that is related to the business logic

The usage of the non-default `app` directory making it easier to maintain the code because it's more easier to focus on main flow.

## The Layers
For non API routes, there are 3 layers that handles the flow of a request: 
1.	Route<br />
	Provides urls that can be accessed, basically, it is the sitemap of the application that is first to handle any request.<br />
	Handles non-page response<br />
	Responsible for the non page layout (global or group)<br />
	Placed under `./src/routes`<br />
2.	`Content`<br />
	Understands the page structure, and have control of how the flow goes from one page to other<br />
	Handles any request to the backend<br />
	Handles any respond to browser (page level)<br />
	Responsible of how layout of a page content being structured (not to be confused with the main layout)<br />
	Resposible for data validaity before being sent to the component<br />
	Placed under `./src/app/content` <br /> 
3.	`Component`<br />
	Doesn't understand the route structure, unless it's specilized for routing needs (like pagination)<br />
	Responsible of how data being shown<br />
	Interactivity of anything related to the data that needs to be synced with BE emits / utilizes event <br />
	Receives only valid data in the most cases<br />
	Placed under `./src/app/comps` for busines related component<br />
	Placed under `./src/lib/comps` for non-busines related component<br />

