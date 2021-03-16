# Grafana Panel Plugin Template

This template is a starting point for building Grafana Panel Plugins in Grafana 7.0+

## What is Grafana Panel Plugin?

Panels are the building blocks of Grafana. They allow you to visualize data in different ways. While Grafana has several types of panels already built-in, you can also build your own panel, to add support for other visualizations.

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

## Learn more

- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System

##Deploying

- https://grafana.com/docs/grafana/latest/installation/docker/#grafana-container-using-bind-mounts
- https://community.grafana.com/t/grafana-docker-compose-downloads-plugins-on-every-start/10976/6
- https://grafana.com/docs/grafana/latest/administration/configure-docker/#default-paths
- https://fossies.org/linux/grafana/packaging/docker/custom/Dockerfile
- https://registry.hub.docker.com/r/appliedis/grafana
- https://github.com/grafana/grafana-docker/issues/134