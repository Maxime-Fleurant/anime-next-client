import { css, SerializedStyles } from '@emotion/core';
import { pointSize16, pointSize1, helveticaMedium } from '../../../../common/globalStyle';
import { ITheme } from '../../../layout/theme';

export const charDesc = (theme: ITheme): SerializedStyles =>
  css([
    { overflowY: 'scroll' },
    { marginTop: pointSize16 },
    css`
      ::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
      }

      a {
        text-decoration: none;
        color: ${theme.base.baseColor900};
        ${helveticaMedium}
      }
    `,
  ]);

export const characterSecondName = css({ marginTop: pointSize16 });

export const descBack = css({ textAlign: 'center', cursor: 'pointer' });

export const picCharact = css({ cursor: 'pointer' });

export const returnButton = (theme: ITheme): SerializedStyles =>
  css(
    {
      padding: `${pointSize16} 0`,
      border: `${pointSize1} solid ${theme.base.baseColor900}`,
    },
    css`
      &:hover {
        color: ${theme.base.baseColor100};
        background-color: ${theme.base.baseColor900};
      }
    `
  );
