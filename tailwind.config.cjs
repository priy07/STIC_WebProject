const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'outfit':['Outfit'],
    }
  },
  darkMode: "class",
    theme: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        body: ["Roboto", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
    },
    corePlugins: {
      preflight: false,
    },
  plugins: []
};

module.exports = config;

