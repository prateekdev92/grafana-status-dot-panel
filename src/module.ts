import { FieldConfigProperty, PanelPlugin, PanelProps } from '@grafana/data';
import StatusDotPanel from './StatusDotPanel';

export const plugin = new PanelPlugin<PanelProps>(StatusDotPanel)
  .useFieldConfig({
    disableStandardOptions: [
      FieldConfigProperty.Min,
      FieldConfigProperty.Max,
      FieldConfigProperty.Links,
      FieldConfigProperty.DisplayName,
      FieldConfigProperty.NoValue,
      FieldConfigProperty.Mappings,
    ],
  })
  .setPanelOptions((builder) => {
    return builder
      .addTextInput({
        path: 'externalApp',
        name: 'External Link',
        description: 'Enter url, use {var} for legends/labels',
        defaultValue: '',
      })
      .addRadio({
        path: 'radius', // old plugin var name
        name: 'Dot Size',
        defaultValue: 'false',
        settings: {
          options: [
            {
              value: 'false',
              label: 'Default',
            },
            {
              value: '15',
              label: 'Small',
            },
            {
              value: '20',
              label: 'Medium',
            },
            {
              value: '25',
              label: 'Large',
            },
            {
              value: '30',
              label: 'Extra large',
            },
          ],
        },
      })
      .addRadio({
        path: 'shape',
        name: 'Dot Shape',
        defaultValue: '100%',
        settings: {
          options: [
            {
              value: '100%',
              label: 'Default',
            },
            {
              value: '0%',
              label: 'Square',
            },
          ],
        },
      })
      .addRadio({
        path: 'spacing',
        name: 'Dot Spacing',
        defaultValue: '10',
        settings: {
          options: [
            {
              value: '10',
              label: 'Default',
            },
            {
              value: '5',
              label: 'Less',
            },
            {
              value: '15',
              label: 'Medium',
            },
            {
              value: '20',
              label: 'More',
            },
          ],
        },
      })
      .addRadio({
        path: 'sortOrder',
        name: 'Sort Order',
        defaultValue: 'no',
        settings: {
          options: [
            {
              value: 'asc',
              label: 'ASC',
            },
            {
              value: 'desc',
              label: 'DSC',
            },
          ],
        },
      });
    // .addBooleanSwitch({
    //   path: 'showInlineMetric',
    //   name: 'Show metric inline',
    //   defaultValue: false,
    // })
  });
