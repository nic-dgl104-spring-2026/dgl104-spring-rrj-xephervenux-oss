# StudyTrack Task Management System

StudyTrack is a student-focused Task Management System built for the DGL 104 Application Development Coding Project. It supports account creation, authentication, task CRUD operations, assignment, due dates, priorities, status tracking, a Kanban dashboard, smart prioritization, undo/redo, testing, logging, and CI/CD.

## Features

- Register and log in
- Create, read, update, and delete tasks
- Assign tasks to people
- Set due dates and Low, Medium, or High priority
- Track To Do, In Progress, and Completed states
- View tasks on a responsive Kanban board
- Sort manually, by priority, by deadline, or by a smart score
- Undo and redo task changes
- Store data in a file-based JSON datastore
- Run automated tests in GitHub Actions
- Log server activity and errors

## Technology

- Frontend: HTML, CSS, browser JavaScript
- Backend: Node.js and Express
- Authentication: JSON Web Tokens
- Data: JSON document store
- Testing: Node's built-in test runner
- CI/CD: GitHub Actions

## Architecture

The project follows a layered MVC-style architecture:

- **Model:** `src/models` contains users, tasks, and database logic.
- **View:** `public` contains the browser interface.
- **Controller:** `src/controllers` receives requests and returns responses.
- **Service layer:** `src/services` contains application rules.
- **Routes:** `src/routes` maps API endpoints to controllers.
- **Middleware:** authentication and centralized error handling.

## Design Patterns

### Singleton

`Database.js` provides one shared database instance. This prevents different parts of the server from creating competing connections or separate copies of application data.

### Factory

`UserFactory.js` creates Admin, Manager, Developer, or Tester objects from a role value. Creation logic stays in one place.

### Observer

`EventBus.js` lets listeners subscribe to task events. Task creation, updates, and deletion publish events without tightly coupling the task service to every notification feature.

### Strategy

`PriorityStrategies.js` contains interchangeable sorting algorithms: manual, priority, deadline, and smart recommendation.

### Command

`CommandManager.js` wraps create, update, and delete operations as reversible commands, enabling undo and redo.

## Run Locally

1. Install Node.js 20 or newer.
2. Clone the repository.
3. Open a terminal in the project directory.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Optionally copy `.env.example` to `.env` and set a secure JWT secret.
6. Start the application:

   ```bash
   npm start
   ```

7. Open `http://localhost:3000`.

## Testing

Run:

```bash
npm test
```

Check JavaScript syntax:

```bash
npm run check
```

## API Summary

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Create account |
| POST | `/api/auth/login` | Log in |
| GET | `/api/tasks` | List tasks |
| POST | `/api/tasks` | Create task |
| GET | `/api/tasks/:id` | Get one task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |
| POST | `/api/tasks/actions/undo` | Undo last change |
| POST | `/api/tasks/actions/redo` | Redo last undone change |

## Error Handling and Logging

Validation errors are returned as JSON with appropriate HTTP status codes. The centralized error middleware records structured log messages containing a timestamp, level, and message.

## CI/CD

The workflow in `.github/workflows/ci.yml` runs after pushes and pull requests. It installs dependencies, checks syntax, and runs tests.

## Deployment

The application can be deployed to a Node-compatible host. Add `JWT_SECRET` as an environment variable and use `npm start` as the start command. Because the included datastore writes to a local JSON file, a persistent disk is needed for production. A hosted MongoDB database would be a suitable future improvement.

## Known Limitations

- Undo and redo history resets when the server restarts.
- The JSON datastore is intended for coursework and small demonstrations, not high-traffic production use.
- Real-time multi-user editing and offline synchronization are future enhancements.

## Author

Michael H

## Resourses

-MDN Web Docs – Object-Oriented Programming
Explains classes, objects, inheritance, and encapsulation, including how they apply to JavaScript.
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming

MDN – Classes in JavaScript
Useful for explaining how JavaScript uses classes and supports object-oriented code.
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript

MDN – Using Classes
Explains that JavaScript classes are built on prototype-based inheritance.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes

MDN – Inheritance and the Prototype Chain
Good for discussing inheritance and how JavaScript differs from languages such as Java.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain

Wikipedia – JavaScript
Useful for answering whether JavaScript is multi-paradigm. It describes JavaScript as supporting object-oriented, functional, imperative, and event-driven styles.
https://en.wikipedia.org/wiki/JavaScript

Wikipedia – Comparison of Multi-Paradigm Programming Languages
This directly connects to your instructor’s suggestion about researching multi-paradigm languages.
https://en.wikipedia.org/wiki/Comparison_of_multi-paradigm_programming_languages

Refactoring Guru – Design Patterns
Explains why design patterns are used and how they solve common software-design problems.
https://refactoring.guru/design-patterns

Refactoring Guru – Singleton Pattern
Useful for explaining your single shared database manager.
https://refactoring.guru/design-patterns/singleton

Refactoring Guru – Observer Pattern
Useful for explaining notifications when tasks are created or updated.
https://refactoring.guru/design-patterns/observer

Refactoring Guru – Factory Method
Useful for explaining how your program creates different user roles.
https://refactoring.guru/design-patterns/factory-method

Refactoring Guru – Decorator Pattern
Useful if you discuss adding reminders, tags, or other features to tasks.
https://refactoring.guru/design-patterns/decorator

GitHub Docs – GitHub Actions
Useful for discussing CI/CD and automated testing.
https://docs.github.com/actions

GitHub Docs – Building and Testing Node.js
A stronger, more specific source for explaining how your workflow runs Node.js tests automatically.
https://docs.github.com/actions/guides/building-and-testing-nodejs
