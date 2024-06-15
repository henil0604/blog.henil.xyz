---
title: What is stopping us from building ChatPat
publishedAt: 2023-09-19
summary: For the past six months, we have been working on ChatPat, a fully secure and user experience prioritized chat service. The first prototype we created was back in March 2023. Since then, we have developed about five prototypes. One of these prototypes excels in terms of speed, while another one stands out for its user interface. However, when it comes to the overall user experience, all of them fall short. The main challenge we are currently facing is the flow of messages.
---

For the past six months, we have been working on ChatPat, a fully secure and user experience prioritized chat service. The first prototype we created was back in March 2023. Since then, we have developed about five prototypes. One of these prototypes excels in terms of speed, while another one stands out for its user interface. However, when it comes to the overall user experience, all of them fall short. The main challenge we are currently facing is the **flow of messages**.

## What do we mean by _flow of messages_?

The flow of messages simply refers to what happens behind the scenes when you send a message. In an ideal scenario, when you send a message, it should be reliably received by other clients. As of writing this blog, we are grappling with the decision of whether to choose a **Serverless Environment** or a **Server Environment**, each with its own set of pros and cons.

## Why did we choose a Serverless Environment?

From the inception of ChatPat up to the current date, we have been building it in a Serverless Environment, which comes with its fair share of drawbacks that we have encountered over the past few months. Initially, our first choice was Serverless, as [Vercel](https://vercel.com) offers free hosting for a significantly moderated number of users. We opted for the Serverless approach and encountered interesting problems that may arise in future development.

## Problems with Serverless

Let me first explain how our model of the _Flow of Messages_ works. When a user joins any chat room, their browser connects to a [Pusher Channel](https://pusher.com/channels/), which is handled by [Pusher](https://pusher.com) itself. After a successful connection, the user is ready to receive messages from other clients. When a user sends a message, we trigger a [Pusher Event](https://pusher.com/docs/channels/using_channels/events/) from the client side. An important thing to note here is that we trigger the Pusher Event on the client side, which is very fast (usually just a few milliseconds). This significantly reduces the [Transmission Time](https://en.wikipedia.org/wiki/Transmission_time). However, after successfully triggering the event, we send a request to one of our [API Endpoints](https://www.contentful.com/blog/api-endpoint/) along with the message details. The server then processes the request and stores the message in the database. The server's processing time is considerably longer than the TCP connection, resulting in other clients receiving the message before the server does. This is problematic when it comes to message moderation, as the server is unable to verify or moderate the message sent by the user. This may lead to unwanted spam messages. We also considered the idea of processing messages on the client side, but it is very insecure, and tech-savvy individuals may easily intercept it.

## Why is a Serverful Environment a better idea for us?

Serverful is essentially the concept of running a server 24/7. Unlike Serverless, the Serverful environment doesn't get wiped when the user's connection is closed. In a Serverful environment, each client maintains a constant connection with the server, enabling instant messaging between users while retaining the ability to verify and moderate messages. This means that when a user joins a room, a connection is established with our server. Therefore, when a user sends a message, there is no need for API Endpoint requests. Everything operates within the TCP Connection, resulting in no delays and no spam.

## So, what is stopping us from going Serverful?

The simple answer is cost. To host a Serverful environment, the minimum cost is $5 per month, which we cannot afford as students. However, we are planning to transition to a Serverful environment in the coming days. We will evaluate its efficiency and speed. Stay tuned!
