import * as assert from "assert";
import {
  Schema as ApplicationOptions,
  Style
} from "@schematics/angular/application/schema";
import { Schema as WorkspaceOptions } from "@schematics/angular/workspace/schema";
import { Schema as ModelOptions } from "./schema";
import {
  SchematicTestRunner,
  UnitTestTree
} from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");
let runner = new SchematicTestRunner("schematics", collectionPath);
let appTree: UnitTestTree;

const workspaceOptions: WorkspaceOptions = {
  name: "workspace",
  newProjectRoot: "projects",
  version: "6.0.0"
};

const appOptions: ApplicationOptions = {
  name: "bar",
  inlineStyle: false,
  inlineTemplate: false,
  routing: false,
  style: Style.Css,
  skipTests: false,
  skipPackageJson: false
};

const defaultOptions: ModelOptions = {
  name: "foo",
  project: "bar"
};

describe("hello", () => {
  beforeEach(async () => {
    appTree = await runner
      .runExternalSchematicAsync(
        "@schematics/angular",
        "workspace",
        workspaceOptions
      )
      .toPromise();
    appTree = await runner
      .runExternalSchematicAsync(
        "@schematics/angular",
        "application",
        appOptions,
        appTree
      )
      .toPromise();
  });

  it("should create a hello component", async () => {
    const tree = await runner
      .runSchematicAsync("hello", { ...defaultOptions }, appTree)
      .toPromise();

    // console.log(tree.files);
    assert(tree.files.includes("/projects/bar/src/app/hello-foo/hello-foo.ts"));
  });
});

// examples: https://github.com/angular-extensions/model/blob/master/schematics/model/index.test.ts
