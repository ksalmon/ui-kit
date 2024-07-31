# UI Kit 
Existing components are the ThemeProvider and the FileTreeBrowser.

### Running Locally
```bash
npm i
npm run storybook
```

Checkout localhost:6006

### The Why?
Total coding time was just over an hour. Built this using vite which was new to me, normally with UI kits I'll use tsup, rollup or just a webpack configuration. Can't say vite saved me time on the startup time but worked well with Storybook which I appreciated as that differs from webpack.

The FileTreeBrowser component is fairly simple with some small animations using useSpring. See the TreeData interface for more context on the data prop structure. The theme provider is a simple start at the concept of design tokens being set globally. An application would need to wrap all used components inside the ThemeProvider.

```javascript
<ThemeProvider>
  <FileTreeBrowser data={[]}/>
</ThemeProvider>
```

### Todo's
- Specs in Cypress and/or Jest
- Add more design tokens to the ThemeProvider and pass to the existing components
