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
