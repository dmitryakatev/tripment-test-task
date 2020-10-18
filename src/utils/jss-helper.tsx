import jss, { StyleSheet, Styles } from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

type Rules = { [propName: string]: any };

const styleWidgets = new Map<string, StyleSheet>();

const themes = new Map<string, Rules>();
let themeName: string | null = null;

export const styleWidget = (theme: string, styles: Styles) => {
  const sheet: StyleSheet = jss.createStyleSheet(styles, { link: true });

  styleWidgets.set(theme, sheet);

  return sheet.attach();
};

export const addTheme = (theme: string, rules: Rules) => {
  themes.set(theme, rules);
};

export const setTheme = (theme: string) => {
  themeName = theme;

  const rules = themes.get(themeName);

  styleWidgets.forEach((sheet: StyleSheet, component: string) => {
    sheet.update(rules ? (rules[component] || null) : null);
  });
};
