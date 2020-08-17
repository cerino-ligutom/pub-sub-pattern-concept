# pub-sub-pattern-concept-experiment

Experimenting with Pub-Sub in the context of Systems Design.

![image](https://user-images.githubusercontent.com/6721822/90346611-16f5a880-e05d-11ea-98e5-6d81deb2f1ae.png)

## Get started

Install dependencies

```terminal
npm install
```

Prepare 8 terminals

### 1st terminal for the server

Run the server that servers as the hub for the publishers, subscribers and topics.

```terminal
npm run start:server
```

### 2nd to 5th terminals for the subscribers

Run `subscriber1` which listens for messages on `topic_foo`

```terminal
npm run start:subscriber1
```

Run `subscriber2` which listens for messages on `topic_foo`

```terminal
npm run start:subscriber2
```

Run `subscriber3` which listens for messages on `topic_bar`

```terminal
npm run start:subscriber3
```

Run `subscriber4` which listens for messages on `topic_foobar`

```terminal
npm run start:subscriber4
```

### 6th to 8th terminals for the publishers

Run `foo-publisher` to publish messages to `topic_foo`

```terminal
npm run start:foo-publisher
```

Run `bar-publisher` to publish messages to `topic_bar`

```terminal
npm run start:bar-publisher
```

Run `foobar-publisher` to publish messages to `topic_foobar`

```terminal
npm run start:foobar-publisher
```

Try sending messages (write some text to the terminal, enter to send) from the publishers. If you send from `foo-publisher`, since we have 2 subscribers listening to `topic_foo`, `subscriber1` and `subscriber2` should then respond as per implementation for this demo and visualized on the diagram above. Observe the subscribers when sending from `bar-publisher` and `foobar-publisher` as well. Notice how subscribers react only to the topic they're interested/subscribed when a message is published to their respective topics?
