import React from 'react';
import { PanelProps } from '@grafana/data';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import './tooltip.css';
import Tooltip from './tooltip';

function StatusDotPanel(props: PanelProps) {
  const styles = getStyles();
  const MIN_DIAMETER = 8;
  const MAX_DIAMETER = 50;
  const MIN_SPACE = 5;
  const MAX_SPACE = 20;

  const options = props.options;
  const width = props.width;
  const height = props.height;
  const data = props.data;

  function interpolateLabel(legend: string, obj: any) {
    if (!legend) {
      return '';
    }
    for (let key in obj) {
      if (legend.includes(key)) {
        legend = legend.replace(key, obj[key]);
      }
    }
    return legend.replace(/{/g, '').replace(/}/g, '');
  }

  function ascOrder(a: any, b: any) {
    const entityHistoryA = a?.fields[1]?.values.toArray();
    const valueA = entityHistoryA[entityHistoryA.length - 1];

    const entityHistoryB = b?.fields[1]?.values.toArray();
    const valueB = entityHistoryB[entityHistoryB.length - 1];

    return valueA - valueB;
  }

  function descOrder(a: any, b: any) {
    return ascOrder(b,a);
  }

  const customSeries =
    options?.sortOrder === 'asc'
      ? data.series.sort(ascOrder)
      : options?.sortOrder === 'desc'
      ? data.series.sort(descOrder)
      : data.series;

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      {customSeries.map((frame: any) => {
        const entityHistory = frame?.fields[1]?.values.toArray();
        if (!entityHistory) {
          return;
        }
        const config = frame?.fields[1].display(entityHistory[entityHistory.length - 1]);
        config.suffix = config.suffix ? config.suffix : '';
        let legend: any = data?.request?.targets[0] || { legendFormat: '' };
        let approxDiameter = (width * 1.1) / customSeries.length;
        let metric = config.text !== '' ? parseFloat(config.text) : '-';
        approxDiameter =
          parseInt(options?.radius, 10) ||
          (approxDiameter < MIN_DIAMETER
            ? MIN_DIAMETER
            : approxDiameter > MAX_DIAMETER
            ? MAX_DIAMETER
            : approxDiameter);
        const circleStyle = {
          width: approxDiameter + 'px',
          height: approxDiameter + 'px',
          backgroundColor: config.color,
          borderRadius: options?.shape,
        };
        const margin =
          (options?.spacing < MIN_SPACE || options?.spacing > MAX_SPACE ? MIN_SPACE : options?.spacing) + 'px';
        const tooltipContent =
          interpolateLabel(legend.legendFormat, frame.fields[1].labels) + ' (' + metric + config.suffix + ')';
        return (
          <a
            className={cx(
              css`
                margin: ${margin};
              `
            )}
            key={frame.name}
            href={interpolateLabel(options?.externalApp, frame.fields[1].labels)}
            rel="noreferrer"
            target={options?.externalApp ? '_blank' : '_self'}
          >
            <div style={circleStyle}>
              <p
                className={cx(
                  styles.link,
                  css`
                    font-size: ${approxDiameter / 2}px;
                    display: ${options?.showInlineMetric ? 'flex' : 'none'};
                  `
                )}
              >
                {metric}
              </p>
              <Tooltip content={tooltipContent} direction="bottom"></Tooltip>
            </div>
          </a>
        );
      })}
    </div>
  );
}

// StatusDotPanel.propTypes = {
//   options: PropTypes.object,
//   data: PropTypes.object,
//   width: PropTypes.number,
//   height: PropTypes.number,
// };

export default StatusDotPanel;

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      display: flex;
      flex-wrap: wrap;
      overflow: scroll;
      align-content: flex-start;
    `,
    link: css`
      margin: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-weight: 500;
      letter-spacing: -0.6x;
    `,
  };
});
