import type { ReactElement } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';

import type { StyledLineSvgProps } from '../../../types/Styles.types';
import getColor from '../../../utils/themeHelpers';
import type { CommonProps } from './Common';
import { sharedBehaviour } from './Common';

function Upload(props: CommonProps): ReactElement {
  return (
    <svg version="1.1" x="0px" y="0px" viewBox="0 0 29.977 29.977" {...props}>
      <g>
        <path
          d="M25.462,19.104v6.848H4.512v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.012,2.012h24.971
		c1.115,0,2.016-0.9,2.016-2.012v-8.861H25.462z"
        />
        <path
          d="M14.618,0.267L8.856,7.229c0,0-0.875,0.826,0.074,0.826c0.951,0,3.246,0,3.246,0s0,0.561,0,1.414
      c0,2.455,0,6.912,0,8.729c0,0-0.131,0.492,0.617,0.492c0.75,0,4.037,0,4.57,0c0.537,0,0.521-0.414,0.521-0.414
      c0-1.766,0-6.375,0-8.742c0-0.77,0-1.273,0-1.273s1.846,0,3.002,0S21.171,7.4,21.171,7.4s-4.904-6.508-5.588-7.195
      C15.091-0.29,14.618,0.267,14.618,0.267z"
        />
      </g>
    </svg>
  );
}

export default styled(Upload)<StyledLineSvgProps>`
  ${({ theme, paused, completed }) => css`
    ${sharedBehaviour(getColor(theme.icons, { paused, completed }))};
  `}
`;
