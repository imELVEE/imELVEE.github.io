const CracoAlias = require("craco-alias");

module.exports = {
   plugins: [
     {
        plugin: CracoAlias,
        options: {
           source: "tsconfig",
           // baseUrl SHOULD be specified
           // plugin does not take it from tsconfig
           baseUrl: "./",
           /* tsConfigPath should point to the file where "baseUrl" and "paths" 
           are specified*/
           tsConfigPath: "./tsconfig.paths.json"
        }
     }
  ],
  webpack: {
      configure: (config) => ({
         ...config,
         module: {
            ...config.module,
            rules: config.module.rules.map((rule) => {
               if (rule.oneOf instanceof Array) {
                  // Modify the last rule in the `oneOf` array to exclude certain file types
                  rule.oneOf[rule.oneOf.length - 1].exclude = [
                     /\.(js|mjs|jsx|cjs|ts|tsx)$/,
                     /\.html$/,
                     /\.json$/,
                  ];
               }
               return rule;
            }),
         },
      }),
   },
};