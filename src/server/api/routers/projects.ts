import { createTRPCRouter, publicProcedure } from "npm/server/api/trpc";

const projects = [
  {
    "title": "Dogs",
    "about": "This project consists of a social network inspired by Instagram, made especially for dogs. Consume an API and return the data. We can log in, register as a new user, post a new photo, delete photos, recover passwords, etc. all through an API. Developed with React.js.",
    "link": "https://dogs-eta.vercel.app/",
    "sourcelink": "https://github.com/drqueijo/dogs",
    "url": "https://i.gyazo.com/0313d90079239704611501f4557d91e1.png"
  },
  {
    "title": "PickPallet",
    "about": "This project is a clone of ColorHunt. Both web apps have the same intentions: to gather different palettes in order to help designers and artists. Any user can view / create any palette and copy each color from each palette. What's more, it contains an infinite scroll. An API is consumed in which I developed. Developed with React.js.",
    "link": "https://pick-pallet.vercel.app/",
    "sourcelink": "https://github.com/drqueijo/pick_pallet",
    "url": "https://i.gyazo.com/f5d963e93d930ed900ffe580b5849b09.png"
  },
  {
    "title": "CV19Tracker",
    "about": "This was my first project with React.js. This project consumes a Brazilian API that returns the data in real time of the coronavirus situation in Brazil and in the world. I was able to learn a lot from this project. I learned how to consume API's in React and how to use functional components.",
    "link": "https://cv19tracker.netlify.app",
    "sourcelink": "https://github.com/drqueijo/cv19tracker",
    "url": "https://i.gyazo.com/ad7a6db28ac6352ace7f1c99cdc52622.png"
  },
  {
    "title": "Gitfinder",
    "about": "This project consists of consuming the Github API. You enter a Github user and the application will return data from the profile you are looking for. Data such as: User profile picture, name, and more. The repositories with the most stars are also filtered. Developed with React.js.",
    "link": "https://git-overview.netlify.app",
    "sourcelink": "https://github.com/drqueijo/git_finder",
    "url": "https://i.gyazo.com/8be64821c462661185745e7d8db60166.png"
  }
]
export const projectRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(() => {
      return projects.map((project, index) => {
        return {
          ...project,
          index,
          image: {
            url: project.url
          }
        }
      });
    }),
});
