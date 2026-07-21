# Contributing to StudyTrack

Thank you for helping improve StudyTrack.

## Before Starting

1. Search existing issues.
2. Create or select an issue describing the work.
3. Comment on the issue when collaboration is needed.
4. Create a focused branch from the latest `main`.

Example:

```bash
git checkout main
git pull origin main
git checkout -b feature/issue-12-task-filters
```

## Development Workflow

1. Install dependencies with `npm install`.
2. Make one focused change at a time.
3. Run `npm run check` and `npm test`.
4. Commit with a descriptive message.
5. Push the branch.
6. Open a pull request and link the related issue.

## Commit Style

Use an action-oriented title:

- `Add task status validation`
- `Fix deadline sorting for overdue tasks`
- `Test observer notifications`
- `Document local setup process`

Avoid vague messages such as `update`, `changes`, or `stuff`.

## Coding Standards

- Use `const` unless reassignment is necessary.
- Use meaningful names.
- Keep functions focused.
- Validate external input.
- Handle errors rather than silently ignoring them.
- Add comments for design decisions, not obvious syntax.
- Keep modules small and reusable.

## Pull Request Checklist

- [ ] The pull request links an issue.
- [ ] The change is focused.
- [ ] Syntax checks pass.
- [ ] Tests pass.
- [ ] New behaviour is tested where practical.
- [ ] Documentation is updated.
- [ ] No secrets or generated database files are committed.

## Code Review

Reviewers should check correctness, readability, security, test coverage, accessibility, and whether the change follows the project architecture. Feedback should explain the reason for a requested change and remain respectful.

## Research & Reflection Record

The student should record actual work in the journal, including issue links, branch names, commits, review feedback, roadblocks, solutions, and next steps. Do not record planned work as completed work.
