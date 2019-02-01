import { storiesOf } from "@storybook/react";
import { withDocs } from "storybook-readme";

import readme from "./README.md";

storiesOf("Overview", module)
  .addDecorator(withDocs(readme))
  .add("Getting started", () => null);
