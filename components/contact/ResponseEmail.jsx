import * as React from "react";
import { Html, Button, Tailwind } from "@react-email/components";

export default function ResponseEmail(props) {
  const { url } = props;

  return (
    <Tailwind>
      <Button className="bg-black text-white py-2 px-4" href={url}>
        Click me
      </Button>
    </Tailwind>
  );
}
