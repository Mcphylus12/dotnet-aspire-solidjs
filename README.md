## Desc

this is a combo of the apisre starter app with the blazor project removed as well as the typescript starter template for solidjs

## Modifications

- the vite config has been modified to accept the port from environment variables as well as the addition of service* variables being include so the env vars configured from aspire can be accessed
- the sample component calls the api and displays response
- CORS support was added to the api as the frontend is now making the api calls from the browser rather than server slide blazor
- Added as an NpmApp in the aspire builder 

> Havent tested azd support but it probably wont work as a ihavent made the required dockerfile the aspire is set up to reference. https://github.com/dotnet/aspire-samples/tree/main/samples/AspireWithJavaScript/AspireJavaScript.React could provide help in this area.
> the frontend is now a SPA so no traces or logs will make it to the dashboard.
