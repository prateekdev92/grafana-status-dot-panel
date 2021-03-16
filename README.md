# Grafana Status Dot Panel

A Grafana panel plugin to visual node status map.

## Features

- Identify the nodes which are unhealth
- Use fields to add units, decimal or thresholds
- Display additional metadata about the nodes using legend
- Enable cross linking dashboards with using external link to each node
- Custom options help you to arrange the dots by size, space between them and shape (circle & square)

![Screenshot 1](https://raw.githubusercontent.com/prateekdev92/grafana-status-dot-panel/master/screenshots/screenshot-1.png)

![Screenshot 2](https://raw.githubusercontent.com/prateekdev92/grafana-status-dot-panel/master/screenshots/screenshot-2.png)

![Screenshot 3](https://raw.githubusercontent.com/prateekdev92/grafana-status-dot-panel/master/screenshots/screenshot-3.png)

![Screenshot 4](https://raw.githubusercontent.com/prateekdev92/grafana-status-dot-panel/master/screenshots/screenshot-4.png)


## Configuration
This section lists the available configuration options for the Gantt panel.

#### Display

| Option | Description |
|--------|-------------|
| externalApp | Enable cross linking dashboards with using external link to each node |
| radius | Define the radius of the node, defualts to responsive size based on panel size |
| shape | Design the shape of the node |
| spacing | Optimize the space between the nodes, lesser space accomodates more dots |
| sortOrder | Specify the order or urgent nodes |

#### Fields

| Option | Description |
|--------|-------------|
| Unit | Enables the unit of measurement |
| Decimals  | Describe the precision with decimal points |
| Threshold | Define the threshold with the indicating color |