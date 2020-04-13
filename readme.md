# My React App

Demo app to learn some React.

## Goals
* Make some CRUD screens
* Link to a DB
* Do some paging
* Some sort of menu

## Stretch Goals
* Add authentication

## Requirements

Install AdventureWorks db from https://docs.microsoft.com/en-gb/sql/samples/adventureworks-install-configure?view=sql-server-ver15

## Notes

So I thought I would be using Axios to get data. Don't need to as can just use fetch().
* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
* https://blog.logrocket.com/axios-or-fetch-api/

## Tasks

1. ~~Make a menu tree thing for AdventureWorks Categories and Subcategories.~~
2. ~~List products for a given Subcategory~~
3. ~~Edit products~~
4. ~~Validation, client and server side~~

## Review
* Visual Studio is very slow starting up. Switch off UseReactDevelopmentServer() in Startup and use UseProxyToSpaDevelopmentServer.
* The Visual Studio template adds lots of extra stuff - as you would expect. 
* https://neutrinojs.org/ - This looks better for creating the react stuff.
* How do I wire up hot-reload with VS web server? The whole page refreshes on script change. Is it a side effect of create-react-app?

https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-3.1&tabs=visual-studio#add-pages-images-styles-modules-etc

## Questions and next steps
* How do you do locally scoped css like Vue.js?
* How to secure API calls? https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity-api-authorization?view=aspnetcore-3.1
* Generate client APIs from Swagger (autorest/NSwag). Is it worth it?
* Is it worth trying Parcel bundler?
* Create a nowmal MVC app with some normal pages. Add some react components to it.
