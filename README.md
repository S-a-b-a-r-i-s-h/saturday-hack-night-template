This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


![Nextjsgit](https://github.com/user-attachments/assets/d276960c-bfd6-4b41-8ea3-3daa52a0c027)

# Project Name
This a nextjs website that serves as a platform for legitimate crowdsourcing platforms to list their sites. An algorithm runs in the background that checks the website URL and all the details provided to check if the website is trustworthy or not. It integrates the usage of AI for determining whether enough information was provided and whether an organization can be considered legitimate. On passing the algorithm, the website gets listed and you can view it's details on the listing section.
## Team members
1. [Midightcoder04](https://github.com/midnightcoder04)
2. [Sabarish](https://github.com/S-a-b-a-r-i-s-h)
3. [Habeeb](https://github.com/Habeeb00)
2. [Athul Christy](https://github.com/athulchristy)
## Link to product walkthrough
Nil .. You have to fork the repo, and proceed with the how to configure to see it in action
## How it Works ?
1. Companies can give all the necessary details in the form... <br />
2. An algorithm runs in the server side that checks the website URL of the ccompany and the information provided <br />
2.1 WhoisAPI is used to get details of the website from the domain <br />
2.2 Gemini API is used to verify the legitimacy from the information given <br />
3. If the algorithm deems the company as legit, it gets listed on the site <br />
4. The listed sites can be seen from the listings section of home page <br />
## Libraries used
"@google/generative-ai": "^0.21.0", <br />
"firebase": "^10.14.0", <br />
"gsap": "^3.12.5", <br />
"mongodb": "^6.9.0", <br />
"mongoose": "^8.7.0", <br />
"next": "14.2.14", <br />
"react": "^18", <br />
"react-dom": "^18"
## How to configure
1. Fork the repo <br />
2. Perform npm install on the root folder <br />
3. Create a .env.local file on root directory with the API keys from firebase <br />
3.1 NEXT_PUBLIC_API_FIREBASE=(ahh we were supposed to provide this..., so contact us if running...) <br />
NEXT_PUBLIC_API_WHOIS=(Get one from whoisxmlapi website) <br />
NEXT_PUBLIC_API_GEMINI=(Get from Google gemini for model gemini-1.5-flash)
## How to Run
After configuring, just run the project with: npm run dev <br />
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
