import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-plugin-prettier";
import promise from "eslint-plugin-promise";
import react from "eslint-plugin-react";

export default defineConfig([
    {
        plugins: {prettier, promise, react},
    },
    globalIgnores(["./dist"])
]);
