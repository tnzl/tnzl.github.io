export const site = {
  name: 'Tanzeel Ur Rahman',
  headline: 'Engineer, badminton player, board-game enthusiast',
  bio: 'I work on AI systems at AMD, and outside of that I’m usually on a badminton court or deep in a board game. This website is under construction — more writing, projects, and photos coming soon.',
  subline: 'AMD · BITS Pilani · Hyderabad',
  email: 'iamtanzeel1998@gmail.com',
  github: 'https://github.com/tnzl',
  linkedin: 'https://www.linkedin.com/in/tnzl',
  url: 'https://tnzl.github.io',
  underConstruction: true,
} as const;

export const nav = [
  { href: '/articles/', label: 'Articles' },
  { href: '/projects/', label: 'Projects' },
  { href: '/notes/', label: 'Notes' },
  { href: '/photography/', label: 'Photography' },
] as const;

export const photos = [
  {
    src: '/photography/pxl-20260531.jpg',
    alt: 'Photograph by Tanzeel Ur Rahman',
    caption: '',
  },
] as const;
