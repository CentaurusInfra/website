# centauruscloud.io

Welcome to the GitHub repository for Centaurus' public website https://www.centauruscloud.io. This website is a general purpose project landing page and it also servers as a blog/resources hub for all project related information.

# About

This project is powered by [Gatsby](https://www.gatsbyjs.com/), a React-based static website generator. This allows us to generate new content such as a blog post or resource page simply by adding markdown files to the project. The Gatsby engine will automatically generated desired pages leaving no need to touch any codebase.

## Update Docs

To update docs, you need update markdowns in the `/content` folder. Markdowns are organized into blog and resource.

The general procecure is:

1. Fork the project and create a new branch. ([Contribution Guide](CONTRIBUTING.md))
2. Make your changes and push to remote.
3. Start a pull request.
4. Wait for the automated PR workflow to do some check, when it's ready, you should see a comment like this: `deploy/netlify — Deploy preview ready!`.
5. Preview your changes.
6. Continue updating your doc until you're happy with it.
7. When you're ready, add a comment to the PR and assign a reviewer/approver.
8. When updates are merged into the master branch, they will be automatically deployed and ready in a few minutes.

### Markdown format

In order for your doc to be generated and displayed correctly, it is very important to add the correct frontmatter to your markdown. Frontmatter is just formatted text that's added in the beginning of a markdown, it usually includes title, date etc.

For example:

```
---
title: "An Overview of Project Arktos"
date: "2020-08-04"
category: "presentations"
---
```

**Notice double quotes are reqruied**.

Below is a list of supported frontmatter keywords:

| Keyword   | Behavior              | Required          | Notes                    |
| --------- | --------------------- | ----------------- | ------------------------ |
| title     | Add doc title         | ✅                |                          |
| date      | Add doc date          | ✅                | Format "YYYY-MM-DD"      |
| author    | Add doc author        |                   |                          |
| thumbnail | Add doc thumbnail     |                   |                          |
| category  | Add resource category | ✅(Resource only) |                          |
| url       | Add doc redirect URL  |                   | Redirect to desired url. |

If you have questions, please refer to some of the existed docs.

## Quickstart

For local development:

1. Install the Gatsby CLI

```
npm install -g gatsby-cli
```

2. Clone the project

```
git clone forked-url.git
```

3. Install dependencies

```
npm install
```

4. Start development server

```
gatsby develop
```

## Contribute

If you are not familiar with Github workflow, please read [Contributing Guide](CONTRIBUTING.md) for instructions on how to contribute.
