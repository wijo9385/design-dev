import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   _pink: {
    //     100: '#BB5BFD',
    //     200: '#AF54EB',
    //     300: '#8C44BD',
    //     400: '#5D2D7D',
    //     500: '#2E163D',
    //   },
    //   _indigo: {
    //     100: '#8756F0',
    //     200: '#8152E3',
    //     300: '#764BD1',
    //     400: '#5C3BA3',
    //     500: '#382463',
    //   },
    //   _purple: {
    //     100: '#6F67FA',
    //     200: '#665FE8',
    //     300: '#524CBA',
    //     400: '#36327A',
    //     500: '#1A183B',
    //   },
    //   _blue: {
    //     100: '#5678F0',
    //     200: '#5271E3',
    //     300: '#4B68D1',
    //     400: '#3B51A3',
    //     500: '#243263',
    //   },
    //   _cyan: {
    //     100: '#5BA8FD',
    //     200: '#549DEB',
    //     300: '#447EBD',
    //     400: '#2D547D',
    //     500: '#16293D',
    //   }
    // },
    extend: {},
  },
  plugins: [],
} satisfies Config;
