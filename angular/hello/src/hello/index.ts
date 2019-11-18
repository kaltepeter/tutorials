import {
  Rule,
  SchematicContext,
  Tree,
  url,
  apply,
  template,
  mergeWith
} from "@angular-devkit/schematics";
import { Schema } from "./schema";
import { strings } from "@angular-devkit/core";

const addExclamation = (value: string): string => {
  return `${value}!`;
};

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function hello(_options: Schema): Rule {
  return (_: Tree, _context: SchematicContext) => {
    const sourceTemplates = url("./files");

    const sourceParametrizedTemplate = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings,
        addExclamation
      })
    ]);

    return mergeWith(sourceParametrizedTemplate);
    // return mergeWith(sourceParametrizedTemplate)(tree, _context);
  };
}
