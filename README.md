Home & App Listing (AppDataAppsPage)

Display all available apps in a responsive grid layout.

Search functionality to filter apps by title.

Suspense fallback for loading states, with plans for an animated loader.

App Details (AppDetails)

Shows detailed information of the selected app: image, title, developer, downloads, ratings, reviews, and description.

Dynamic BarChart with per-star review counts for each app using Recharts.

Install Now button that:

Stores the app in localStorage under "Installed".

Prevents duplicate installation.

Persists installation state on page reload using useEffect.

Toast notification when an app is installed.

Installed Apps (InstalledApps)

Displays a list of installed apps from localStorage.

Allows sorting by size (ascending/descending).

Routing (router)

Configured dynamic routes using createBrowserRouter:

/ → Home page with app listing.

/app → Full apps catalog.

/installation → Installed apps page.

/AppDetails/:id → Dynamic app details page using loader to fetch data and filter by app ID.

Data Management

Used local JSON files (appsData8.json and appData20.json) as mock API.

Managed state with useState and useEffect.

localStorage to persist installed apps and button states across reloads.