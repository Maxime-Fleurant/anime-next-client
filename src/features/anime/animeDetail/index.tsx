import { FunctionComponent } from 'react';
import Youtube from 'react-youtube';

import { useTheme } from 'emotion-theming';
import {
  font40,
  helveticaMedium,
  helveticaRegular,
  regularText,
  fontRegular,
  textLineHeight,
} from '../../../common/globalStyle';
import { Cell } from '../../../common/components/cell';
import { titleMargin, youtubeContainer, desc, descBlock, studioCell, studioQu } from './style';
import { Anime } from '../../../common/graphqlType';
import { DetailCharacterList } from './component/characterList';
import { ExternalLinkList } from './component/externalLinkList';

import { ITheme } from '../../layout/theme';

// TYPE
type TAnimeDetail = FunctionComponent<{ anime: Anime }>;

// REACT
export const AnimeDetail: TAnimeDetail = ({ anime }) => {
  const indexComponent = <div>loading</div>;
  const theme = useTheme<ITheme>();

  if (anime) {
    const regex = /\\n|<br>|<br \/>/g;
    let formatedText = '';

    if (anime.desciption) {
      formatedText = anime.desciption.replace(regex, '');
    }

    const detailLayout = (
      <>
        <DetailCharacterList characterList={anime.characters} />

        <Cell
          deskPos={{ rowStart: 12, columnStart: 1, columnEnd: 7 }}
          tabPos={{ rowStart: 8, rowEnd: 17, columnStart: 1, columnEnd: 10 }}
          autoRow
          extraCss={[]}
        >
          <ExternalLinkList externalLinks={anime.externalLinks} />
        </Cell>

        <Cell
          deskPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 7 }}
          tabPos={{ rowStart: 4, rowEnd: 6, columnStart: 1, columnEnd: 9 }}
          extraCss={[theme.imgBorder]}
          backgroundImg={anime.xLargeCoverImage}
          ratio={1.3}
        />

        <Cell
          deskPos={{ rowStart: 9, rowEnd: 10, columnStart: 7, columnEnd: 15 }}
          tabPos={{ rowStart: 5, rowEnd: 6, columnStart: 9, columnEnd: 25 }}
          extraCss={[studioCell, theme.text.textColor900]}
        >
          {anime.studio.name}
          &nbsp;
          <span css={[studioQu, theme.text.textColor600]}>Studio</span>
        </Cell>

        <Cell
          deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 7, columnEnd: 15 }}
          tabPos={{ rowStart: 4, rowEnd: 5, columnStart: 9, columnEnd: 25 }}
        >
          <div>
            <div css={[textLineHeight, font40, helveticaMedium, theme.text.textColor900]}>
              {anime.romajiTitle}
            </div>
            <div
              css={[
                titleMargin,
                textLineHeight,
                fontRegular,
                helveticaRegular,
                theme.text.textColor600,
              ]}
            >
              {anime.englishTitle}
            </div>
            <div
              css={[
                titleMargin,
                textLineHeight,
                fontRegular,
                helveticaRegular,
                theme.text.textColor400,
              ]}
            >
              {anime.nativeTitle}
            </div>
          </div>
        </Cell>

        <Cell
          deskPos={{ rowStart: 10, columnStart: 7, columnEnd: 15 }}
          tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
          extraCss={[...regularText, ...desc]}
          autoRow
        >
          <div
            css={[descBlock(theme), theme.text.textColor900]}
            dangerouslySetInnerHTML={{
              __html: formatedText as string,
            }}
          />
        </Cell>

        <Cell
          deskPos={{ rowStart: 4, rowEnd: 10, columnStart: 15, columnEnd: 25 }}
          tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
          ratio={0.56}
          relative
          extraCss={[youtubeContainer]}
        >
          <Youtube videoId={anime.trailer} opts={{ width: '100%', height: '100%' }} />
        </Cell>
      </>
    );

    return detailLayout;
  }

  return indexComponent;
};
