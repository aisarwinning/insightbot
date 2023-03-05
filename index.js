/*******************************************************

* Copyright (C) 2023-2024 notaisar <aisarwinning@courvix.com>

*

* This file is part of insight bot.

*

* insight bot can not be copied and/or distributed without the express

* permission of notaisar

*******************************************************/

const express = require('express');
const { ShardingManager, GatewayIntentBits, Partials, Collection, Events } = require('discord.js');
const noblox = require('noblox.js');
const fs = require('fs');
const path = require('path');

const app = express();
const manager = new ShardingManager(path.join(__dirname, 'bot.js'), { token: process.env.TOKEN });

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});

manager.on('shardCreate', shard => {
  console.log(`shard ${shard.id} launched`);
});

manager.spawn();

// error handling
manager.on('error', error => {
  console.log('Sharding manager error:', error);
});

// handle uncaught exceptions
process.on('uncaughtException', error => {
  console.log('Uncaught exception:', error);
});

// handle unhandled rejections
process.on('unhandledRejection', error => {
  console.log('Unhandled rejection:', error);
});

