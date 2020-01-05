# MVC Architecture
MVC architecture is used to attain Separation of Concerns in software development. It helps to organize the source codes of application into three separate sections namely Model, View and Controller.

## Purpose
- Model: In MVC architecture, data of a software or the application state is dedicatedly handled by Model. You can write a class or group of classes to deal with model operations (CRUD) depending on the size of your application. In general, business logic or domain logic goes into model. It is a good practice to not put non business oriented logic into Model. You could use Controller for that purpose. Model is not aware of any view or controller. As Model is agnostic of its clients, it can be shared by different applications or clients or controllers. Therefore, some people would first create the whole of Model before starting any work on UI or controllers.

- View: The GUI or user interface or presentation layer related codes of an application is maintained in one specific place called View. As it takes care of only the presentation, event handling of user actions on that view is not written here. In case of web application view is comprised of the whole of HTML & CSS.

- Controller: The user interaction with the application including mouse click, keyboard input, touch operations is handled by Controller. The controller glues between View and Model. Controller binds event handlers for views, and if that interaction involves data updates, model is invoked and executes CRUD operation.

## Example code
To demostrate the concept via code, I have written down a simple MVC based ToDo list app. Only the codes just enough to understand code organization of an MVC based application is written here. So it has only the option to add an item to list, avoiding other CRUD operations.

There are two similar variants here.
- **Simple MVC**: View is coupled with Controller in this case.
- **MVC leveraging event dispatcher system**: Achieve decent amount of decoupling between View and Controller by using event dispatchment.