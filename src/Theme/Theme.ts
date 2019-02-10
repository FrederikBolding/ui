import {
  darken,
  invert,
  lighten,
  modularScale,
  transparentize,
} from 'polished';

const backgroundLight = 'white';
const backgroundDark = '#214772';
export const borderRadius = '0.125em';
export const borderRadiusLarge = '0.375em';
const lightnessMod = 0.06;
const linkLight = '#007a99';
const linkDark = '#1eb8e7';
const outline = '0 0 0 0.125em white, 0 0 0 0.25em ';
const outlineDark = '0 0 0 0.125em #214772, 0 0 0 0.25em ';
const panelBackground = '#282c34';
const panelBackgroundDark = '#163150';
const primary = '#007896';
const primaryDark = '#1eb8e7';
export const scale = (steps: number) => modularScale(steps, undefined, 1.5);
const switchBackgroundGreyable = lighten(0.3, 'grey');
export const transitionDuration = '0.12s';

type Theme = Record<
  | 'name'
  | 'actionPanelBackground'
  | 'actionPanelBorder'
  | 'background'
  | 'cardText'
  | 'controlBackground'
  | 'controlBorder'
  | 'headline'
  | 'iconColor'
  | 'link'
  | 'linkHover'
  | 'outline'
  | 'panelBackground'
  | 'panelBackgroundDark'
  | 'primary'
  | 'primaryDark'
  | 'primaryDarker'
  | 'switchBackgroundGreyable'
  | 'tableHeadBackground'
  | 'tableRowBorder'
  | 'tableHeadBorder'
  | 'text',
  string
>;

export default Theme;

export const light: Theme = {
  name: 'Light',

  actionPanelBackground: darken(0.01, backgroundLight),
  actionPanelBorder: '#e8eaed',
  background: backgroundLight,
  cardText: '#697685',
  controlBackground: backgroundLight,
  controlBorder: transparentize(0.95, '#3f3f44'),
  headline: '#163150',
  iconColor: '#424242',
  link: linkLight,
  linkHover: darken(0.1, linkLight),
  outline: outline + transparentize(0.35, linkLight),
  panelBackground: backgroundLight,
  panelBackgroundDark: darken(lightnessMod, backgroundLight),
  primary,
  primaryDark: darken(lightnessMod, primary),
  primaryDarker: darken(lightnessMod * 2, primary),
  tableHeadBackground: '#fafcfc',
  tableHeadBorder: '#e8eaed',
  tableRowBorder: '#e8eaed',
  switchBackgroundGreyable,
  text: '#424242',
};

export const dark: Theme = {
  name: 'Dark',

  actionPanelBackground: lighten(lightnessMod, backgroundDark),
  actionPanelBorder: invert(light.actionPanelBorder),
  background: backgroundDark,
  cardText: '#dbe0e6',
  controlBackground: panelBackgroundDark,
  controlBorder: linkLight,
  headline: '#FFFFFF',
  iconColor: primaryDark,
  link: linkDark,
  linkHover: lighten(0.1, linkDark),
  outline: outlineDark + transparentize(0.35, linkLight),
  panelBackground: panelBackgroundDark,
  panelBackgroundDark: lighten(lightnessMod, panelBackground),
  primary: primaryDark,
  primaryDark: darken(lightnessMod, primaryDark),
  primaryDarker: darken(lightnessMod * 2, primaryDark),
  tableHeadBackground: darken(lightnessMod, backgroundDark),
  tableHeadBorder: 'rgba(255, 255, 255, .5)',
  tableRowBorder: panelBackgroundDark,
  switchBackgroundGreyable,
  text: '#FFFFFF',
};
