# BidNBuy Project Documentation

## Project Overview
BidNBuy is a web application where users can create auctions, bid on ongoing auctions, and interact with other users. Each auction has a defined owner who can decide when to close it, and the highest bid at the time of closure determines the winner. Additionally, users can comment on auctions (but not their own), and manage their own auctions through a user profile. Users can view their created auctions and the auctions they have won.

### Key Features:
- **Auction Creation**: Users can create new auctions by providing auction details such as the item description, price, category.
- **Bidding**: Users can place bids on active auctions, with each bid needing to be either higher than the current highest bid or higher than or equal to the starting price.
- **Auction Closure**: The auction owner can close the auction manually, and the highest bidder at that time wins the auction.
- **Commenting**: Users can comment on active auctions they are interested in, but they cannot comment on their own auctions.
- **Profile Management**: Users have profiles where they can manage their own auctions, view the auctions they've won, and track their activities.
- **Auction Editing and Deleting**: Auction creators can edit or delete their own auctions, only if they are not closed!

# Project Setup

## Starting the Client
To start the client, navigate to the `client` folder in the terminal and run "npm run dev".

## Starting the Client
To start the server, navigate to the `server` folder in the terminal and run "node server.js".