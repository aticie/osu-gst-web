// Vite imports environment variables through import.meta.env. import.meta.env does not import docker variables like process.env does. This file patches this.
import fs from "fs";

const vite_env_variables = Object.entries(process.env).filter(variable => variable[0].startsWith("VITE_"));
const vite_env_variable_string = vite_env_variables.map(variable => variable[0] + "=" + variable[1]).join("\n");
fs.writeFileSync(".env", vite_env_variable_string, {encoding: "utf-8"});
