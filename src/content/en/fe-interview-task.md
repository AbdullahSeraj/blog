---
title: Frontend Developer Interview Task
date: "2025-04-10"
tags: ["next-js", "math", "ols"]
draft: false
summary: "In this task, you will develop a blog website using Nuxt 3 and Nuxt Content, following the provided specifications. The goal is to create a performant, well-structured, and maintainable codebase that demonstrates your technical skills and attention to detail."
---

# Frontend Developer Interview Task: Nuxt Content Blog

## Overview

In this task, you will develop a blog website using Nuxt 3 and Nuxt Content, following the provided specifications. The goal is to create a performant, well-structured, and maintainable codebase that demonstrates your technical skills and attention to detail.

## Project Requirements

### Technical Stack

- Node.js (latest LTS version)
- npm (latest version)
- Vite
- Nuxt 3 with Nuxt Content
- Pinia for state management
- Vue I18n for localization
- VueUse for composition utilities
- SCSS for styling
- ESLint + Prettier for code quality
- Cypress and Vitest for testing

### Architecture and Design Patterns

- **Atomic Design Pattern**: Structure components into atoms, molecules, organisms, templates, and pages
- **Pinia Stores**: Implement state management with Pinia
- **Modular Structure**: Organize code into reusable and maintainable modules

### Performance Requirements

- Google Lighthouse scores of 100% in all categories
- Optimized assets and code splitting
- Proper SEO setup

### Features to Implement

1. **Blog Content System**

   - Create a blog with multiple posts using Nuxt Content
   - Implement content rendering with Markdown support
   - Create a tagging system for blog posts

2. **Multilingual Support**

   - Implement language switching functionality
   - Create localization files for at least two languages

3. **Component Examples**

   - Create reusable UI components following atomic design
   - Implement basic form elements (buttons, selects, etc.)
   - Create a data fetching example using `useFetch`

4. **Routing System**

   - Implement Nuxt's routing system
   - Set up proper page titles and meta tags

5. **Static Assets Configuration**
   - Configure public folder with necessary files (robots.txt, .htaccess, humans.txt)
   - Set up proper favicon and site icons

## Deliverables

1. **Codebase**: Complete code repository with all implemented features
2. **Documentation**: Brief documentation explaining architecture decisions
3. **Testing**: Basic E2E tests with Cypress and unit tests with Vitest

## Development Guidelines

### Project Structure

- `/src/components/`: Follow atomic design pattern (atom, molecule, organism, template)
- `/src/content/`: Store blog content in Markdown files
- `/src/public/`: Static assets and configuration files
- `/src/store/`: Pinia stores for state management

### Coding Standards

- Follow ESLint and Prettier configurations
- Implement proper error handling
- Write clean, readable, and maintainable code
- Use composition API with `<script setup>` syntax

### Performance Optimization

- Optimize images and assets
- Implement lazy loading where appropriate
- Ensure responsive design for all screen sizes

### Testing

- Write basic E2E tests with Cypress
- Implement unit tests for key components

## Evaluation Criteria

Your submission will be evaluated based on:

1. **Code Quality**: Clean, well-structured, and maintainable code
2. **Architecture**: Proper implementation of design patterns and project structure
3. **Performance**: Lighthouse scores and overall site performance
4. **Feature Completeness**: Implementation of all required features
5. **UI/UX**: Clean and intuitive user interface
6. **Testing**: Quality and coverage of tests
7. **Documentation**: Clear and concise documentation

## Resources

- [Nuxt Documentation](https://nuxt.com/docs)
- [Nuxt Content Documentation](https://content.nuxtjs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue I18n Documentation](https://vue-i18n.intlify.dev/)
- [VueUse Documentation](https://vueuse.org/)
- [Atomic Design Pattern](https://bradfrost.com/blog/post/atomic-web-design/)

## Submission

Your completed project should be submitted as a Git repository with clear commit history showing your development process. Include a README file with instructions for running the project locally.

Good luck!
