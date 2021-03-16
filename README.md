# Grafana Status Dot Panel

A Grafana panel plugin to visual node status map.

## Features


## Getting started

1. Install dependencies

   ```bash
   npm install
   ```

2. Build plugin in development mode or run in watch mode

   ```bash
   npm run dev
   ```

   or

   ```bash
   npm run watch
   ```

3. Build plugin in production mode

   ```bash
   npm run build
   ```

## Development

- Getting started guide: [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- module.ts enables to add custom config & input options to your panel
- plugin.json is used to add metadata to your plugin for publishing
- import the plugin file in module.ts, example: StatusDotPanel.tsx in this repository
- StatusDotPanel.tsx: is where you write your plugin using @grafana/data properties & @grafana/ui components
- use { options, data, width, height } panel props to access data, dimensions etc.
- data.series contains the series returned from a data source query. Each series is represented as data frame. A data frame resembles a table, where data is stored by columns, or fields, instead of rows.