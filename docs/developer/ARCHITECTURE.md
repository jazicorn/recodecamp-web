# Architecture

> Project Structure

Project Structure example from [article](https://dreamix.eu/blog/frontpage/node-js-project-structure-a-short-guide).

## Node.js project components

```bash
> src
    > config
    > controllers
    > data
    > middleware
    > models
    > services
    > tests
    > utils
    > validators
```

### Config

the config folder is used to organize configuration files. The most common usage of the config file is to export environment variables to the other parts of the project or some database configurations. This is a must-have file, and you will most likely need to create it and set it up in the beginning of the project. Without it you won’t have a proper place to connect to databases or set up environments (e.g. test, production, etc…).

### Controllers

here we will put the handlers of our routes. As we’ll see in the routes/ component of the Node.js project, when the client “pings” our routes for the different CRUD operations , we create handlers to represent each one of those operations. In the controllers we use the services’ logic to handle responses to the client. A good naming convention is the entity associated to that specific controller followed by controller (statistics-controller.js, contact-controller.js).

### Data/Enum

this is a component designed for implementing constants and enumerables. Instead of using strings for data coming from a third party API, e.g. statuses, you can create constants in the data/ folder which you can reuse easily.

### Middleware

the name speaks clearly – you can have a separate project component for the middlewares that you use in the routes. A good practice is to have subfolders defining the purposes of the middlewares. For instance, you can have auth/ subfolder for all authentication middlewares, store/ subfolder for all the middlewares regarding the store entity, and so on.

### Models

every model is an object matching the fields in the table by name and type. They do not make any changes to the data but simply represent it in your codebase. Depending on the ORM you are using, models will be different but you can store them as separate js files – user.js, group.js, etc.

### Routes

everything related to routing belongs here. Routes are the most essential part of an API, so having them well structured will impact the software development life cycle. Remember the “every file has it’s index” earlier? Here we can make the most out of it by defining more abstraction to your routes, specified in separate project components. That makes it easier and cleaner for everyone to understand which routes relate to which entities. A good naming convention is the name of the entity associated to that specific route followed by routes (contact-routes.js, group-routes.js).

### Services

the business logic in your application is stored here. These are mostly files exporting classes or a giant function depending on your Node.js project requirements. Essentially, theycontain the more complex functionalities in your codebase. In almost all cases, services and models will relate to one another. For example in services you will use the database tables representation coming from the models as data. This data is the same you implement features in the application with.

The service methods are called in the controllers mentioned earlier. It’s a good practice to create a base or a subfolder that will represent the common logic of different services Also, when you have a group of services sharing the same business logic (for example, coming from a third party API), it would be more useful to place them in a subfolder. The two most common naming conventions when it comes to services here are camel case or placing a “.service” at the end of the file name (e.g. statistics.service.js or statisticsService.js and so on).

### Utils

these are the so-called utility or “pure” functions. You pass them an input and they simply mutate it and return an output. They are called utility because you can use them in multiple parts of your system, regardless of the business logic behind them. Notable examples are date conversion or encryption/ decryption of functions.

### Validators

you use validators mainly to approve payloads and configuration, which is essential for the API’s. When receiving data from the client, you want to make sure it is valid so your services can work with it.

### Tests

after you have created the key components in your folder structure, it’s time to implement testing in your project (both unit and integration). Testing is really important when it comes to developing your applications, and I guarantee that the time and effort you put into it are worth it.

---

## More than folders

-   Use a Linter (eslint) – when you have a dev team following some sort of coding conventions such as styling and naming, or when you want to write clean code without producing a mess, ESLint (a static code analysis tool) is your best friend.

-   Environment variables – you store these variables in a so-called “.env” file. As the name implies, they provide information about the environment in which the project is running. For example, you can have credentials for establishing a connection to an API that apply only for you and you do not want to share them remotely on Github. That’s why these files are important since they are always in a .gitignore so they are not shared with anyone remotely.

-   Scripts – create a scripts folder for some bash scripts which you can run easily afterwards.

-   .editorconfig file – this file will help you unify the editor/IDE experience for all the developers who have access to your Node.js project. Here you can specify end of lines, charset, indent size and many more.
