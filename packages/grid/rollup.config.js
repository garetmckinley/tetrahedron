import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import filesize from "rollup-plugin-filesize";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/tetrahedron.grid.min.js",
    format: "cjs",
  },
  plugins: [
    filesize(),
    babel({
      babelrc: false,
      presets: [
        [
          "es2015",
          {
            modules: false,
          },
        ],
        "react",
      ],
      plugins: [
        [
          "styled-components",
          {
            ssr: false,
            displayName: false,
            fileName: true,
            preprocess: true,
            minify: false,
            transpileTemplateLiterals: false,
          },
        ],
        "transform-object-rest-spread",
        "transform-class-properties",
      ],
    }),
    uglify(),
  ],
};
