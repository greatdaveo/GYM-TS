module.exports = {
  plugins: [
    require('prettier-plugin-tailwindcss')({
      configFile: './tailwind.config.js', // Path to your Tailwind CSS configuration file
    }),
  ],
};
