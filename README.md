# UI Kit 

Existing components are the ThemeProvider and the FileTreeBrowser. The theme provider is a simple start at the concept of design tokens being set globally. An application would need to wrap all used components inside the ThemeProvider.

```javascript
<ThemeProvider>
  <FileTreeBrowser data={[]}/>
</ThemeProvider>
```

### Running Locally
```bash
npm i
npm run storybook
```

Checkout localhost:6006


### Todo's
- Specs in Cypress and/or Jest
