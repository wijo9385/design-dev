import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import Nav from './components/nav';


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: "https://use.typekit.net/djk5aqa.css" }
];

export default function App() {
  return (
    <>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Nav />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
    </> 
  );
}
