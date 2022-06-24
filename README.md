## Challenge rules

---

```

```

- The data must be dynamically populated based on the imported file.
  - There is no need for the data to persist, meaning no need to store it for use in between sessions;
  - Must demonstrate state management expertise
- Adhere styling to the design reference (provided through Figma)
  - Responsiveness is not required, your app will be tested on a 13-inch laptop;
- Component usage
  - Feel free to use any component library you see fit to complete the challenge. The only exception is the [Formation Overview](https://www.notion.so/React-Developer-Code-Challenge-278786931afd4253afd60ec069a932d3), which should be **fully custom made**.
- You must deploy you application using a solution of your choice (i.e. Netlify)

## Specifications

The specifications for each page and feature of the test are described in the Code Challenge video. However, here you’ll find written references for what was described there for each page:

### Roster Details

Here there are 4 features

1. Editable Team Name
   1. If the name has not been changed before, the edit icon should be _always visible;_
   2. After changing the name once, the icon should only be _visible when hovering the name;_
2. Search Field
   1. A search bar to filter players by name and/or position;
   2. The search could filter based on the complete name or a substring;
   3. It should handle keystrokes:
      1. `Enter`: Execute the search (same as clicking “search”);
      2. `Escape`(ESC): Cancel the search and clear the criteria;
   4. After searching, clicking `x` should remove the search (and criteria) and show all results;
3. Roster Importer
   1. Error handling:
      1. Make sure the file contains no empty values, if one is found, return an error to the user;
   2. Ensure only .csv files can be used;
   3. If a valid file is shared, show a summary of counting the total players and count of each positions that would be added if the user accepts;
   4. Once accepted, the contents of the file should be stored in the application state;
   5. If there is already a roster added, the import button should change to “Re-Import”
      1. If used, the state should be cleared and refreshed with the new import;
4. Roster Table
   1. The Table should contain the data from the application state
      1. If the state is empty, show a message instead of the table;
   2. Along with the player name, include the country flag for the player
      1. You’ll find a column named `Flag Image` with a path to the required image;
   3. For `Height` and `Weight`, you’ll need to use the numbers to display a more readable value
      1. (i.e. 180 → 1.80 m);
   4. Each row should have a actions menu, when used there would be the option to edit or delete a players
      1. When editing, ensure all fields are filled before allowing an edit;
      2. When deleting, ask if the user is sure before deleting;

### Formation Overview

There are 2 features:

1. Formation Preview
   1. The 4-3-3 formation should be displayed on the field. Where the players are positioned accordingly.
      1. For each player, display a circle with their jersey number and the player name;
   2. The code should check the starters of each position available on the roster:
      1. Goalkeeper, of which **one** is required;
      2. Defender, of which **four** are required;
      3. Midfielder, of which **three** are required;
      4. Forward, of which **three** are required;
   3. There are three conditions to display the formation:
      1. There is a roster;
      2. There are enough starters;
      3. There aren’t too many starters;
   4. If any of the conditions above are not met, show a respective message instead of the preview
      1. See the messages in Figma;
2. Player Details
   1. The user should see details about the players in the formation, by default the goalkeeper should be shown;
   2. The user could then click on a player to see their details;
   3. In the player detail, show the information and stats related to the player;

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
