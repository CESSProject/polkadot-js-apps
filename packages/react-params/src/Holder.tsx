// Copyright 2017-2022 @polkadot/react-params authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  className?: string;
  withBorder?: boolean;
  withPadding?: boolean;
}

function Holder ({ children, className = '', withBorder, withPadding }: Props): React.ReactElement<Props> {
  return (
    <div className={`ui--Params ${className}${withBorder ? ' withBorder' : ''}${withPadding ? ' withPadding' : ''}`}>
      {children}
    </div>
  );
}

export default React.memo(styled(Holder)`
  &.withBorder {
    padding-left: 1.5rem;

    .ui--Params-Content {
      border-left: 0.25rem solid #f2f2f2;

      .ui--Params.withBorder {
        padding-left: 0.25rem;
      }
    }
  }

  &.withPadding {
    padding-left: 4rem;
  }

  .ui--Param .ui--Labelled label {
    text-transform: none !important;
    font: var(--font-mono);
  }

  .ui--row {
    flex-wrap: wrap;
  }

  .ui--Param-Address {
    font: var(--font-mono);
  }

  .ui--Params-Content {
    box-sizing: border-box;
    padding: 0;

    .ui--Params-Content {
      margin-left: 1.75rem;
    }
  }

  .ui--Param-text {
    display: inline-block;
    font-size: 1rem;
    line-height: 1.714rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ui--Param-text .icon {
    margin-right: 0.5rem !important;
  }

  .ui--Param-text * {
    vertical-align: middle;
  }

  .ui--Param-text.nowrap {
    white-space: nowrap;
  }

  .ui--Param-text.name {
    color: rgba(0, 0, 0, .6);
    font-style: italic;
  }

  .ui--Param-text + .ui--Param-text {
    margin-left: 0.5rem;
  }

  .ui--Param-Vector-buttons {
    text-align: right;
  }

  .ui--Param-composite {
    position: relative;

    .ui--Param-overlay {
      position: absolute;
      top: 0.5rem;
      right: 3.5rem;
    }
  }
`);
