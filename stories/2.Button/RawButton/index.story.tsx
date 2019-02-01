import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { withNotes } from "@storybook/addon-notes";
import { storiesOf } from "@storybook/react";
import React from "react";

import { RawButton } from "../../../src/Buttons";

storiesOf("Buttons", module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes("The best FlatButtom"))
  .add("RawButton", () => <RawButton primary />);
