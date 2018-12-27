import Typography from 'typography'

/*
- BannerTitle:

- BannerSubtitle:

- TileTitle:

- TileSubtitle:

- h1: 
  font-size: 2.5em;
  font-weight: 600;
  line-height: 1.65;

- body:
  font-family: Source Sans Pro, Helvetica, sans-serif;
  font-size: 17pt;
  font-weight: 300;
  letter-spacing: 0.025em;
  line-height: 1.65;
*/

const typography = new Typography({
  baseFontSize: '24px',
  baseLineHeight: 1.65,
  scaleRatio: 3.25,
  headerFontFamily: ['Source Sans Pro', 'Helvetica', 'sans-serif'],
  headerWeight: '600',
  bodyWeight: '300',
  boldWeight: '600',
  bodyFontFamily: ['Source Sans Pro', 'Helvetica', 'sans-serif'],
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['300', '300italic', '600', '600italic'],
    },
  ],
})

export default typography
