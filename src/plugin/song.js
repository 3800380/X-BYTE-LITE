  import _0x13ce58 from 'axios';
  import _0x573e41 from 'yt-search';
  const fetchAudioDetails = async _0x462a99 => {
    try {
      const _0x39f692 = await _0x13ce58.get("https://api.neoxr.eu/api/youtube?url=" + _0x462a99 + "&type=audio&quality=128kbps&apikey=ralph");
      return _0x39f692.data;
    } catch (_0x1de2ef) {
      console.error("Error fetching audio details:", _0x1de2ef);
      throw new Error("Error fetching audio details.");
    }
  };
  const song = async (_0x16837a, _0x235ea4) => {
    const _0x529ca1 = _0x16837a.body.match(/^[\\/!#.]/);
    const _0xbe08c8 = _0x529ca1 ? _0x529ca1[0] : '/';
    const _0x563f72 = _0x16837a.body.startsWith(_0xbe08c8) ? _0x16837a.body.slice(_0xbe08c8.length).split(" ")[0].toLowerCase() : '';
    const _0x46c554 = _0x16837a.body.slice(_0xbe08c8.length + _0x563f72.length).trim();
    const _0x84fe60 = ["song", "ytmp3", "music", "ytmp3doc"];
    if (_0x84fe60.includes(_0x563f72)) {
      if (!_0x46c554) {
        return _0x16837a.reply("Please provide a YT URL or search query.");
      }
      try {
        await _0x16837a.React('🕘');
        const _0x50d00a = _0x46c554.includes("youtube.com") || _0x46c554.includes("youtu.be");
        const _0x5a1353 = async (_0x4bdd14, _0x2ff246) => {
          const _0x56d3fb = {
            responseType: "arraybuffer"
          };
          const _0x452dfa = await _0x13ce58.get(_0x2ff246, _0x56d3fb);
          const _0x1b9e1a = {
            'mentionedJid': [_0x16837a.sender],
            'externalAdReply': {
              'title': "Created by Hamza",
              'body': "TalkDrove playing: " + _0x4bdd14.title,
              'thumbnailUrl': _0x4bdd14.thumbnail,
              'sourceUrl': _0x4bdd14.url,
              'mediaType': 0x1,
              'renderLargerThumbnail': _0x563f72 !== "ytmp3doc"
            }
          };
          if (_0x563f72 === "ytmp3doc") {
            const _0x321ac8 = {
              'document': Buffer.from(_0x452dfa.data),
              'mimetype': "audio/mpeg",
              'fileName': _0x4bdd14.title + ".mp3",
              'contextInfo': _0x1b9e1a
            };
            await _0x235ea4.sendMessage(_0x16837a.from, _0x321ac8, {
              'quoted': _0x16837a
            });
          } else {
            const _0x3ba0f4 = {
              'audio': Buffer.from(_0x452dfa.data),
              'mimetype': "audio/mpeg",
              'contextInfo': _0x1b9e1a
            };
            await _0x235ea4.sendMessage(_0x16837a.from, _0x3ba0f4, {
              'quoted': _0x16837a
            });
          }
          await _0x16837a.React('✅');
        };
        if (_0x50d00a) {
          const _0xb809ae = await fetchAudioDetails(_0x46c554);
          if (!_0xb809ae || !_0xb809ae.data || !_0xb809ae.data.url) {
            throw new Error("Invalid video details received from API.");
          }
          const _0x2fd6e3 = _0xb809ae.data.url;
          const _0x186720 = {
            title: _0xb809ae.title,
            thumbnail: _0xb809ae.thubmnail,
            url: _0x46c554
          };
          await _0x5a1353(_0x186720, _0x2fd6e3);
        } else {
          const _0x21c388 = await _0x573e41(_0x46c554);
          const _0x14d121 = _0x21c388.videos[0];
          if (!_0x14d121) {
            _0x16837a.reply("Audio not found.");
            await _0x16837a.React('❌');
            return;
          }
          const _0x57a7a5 = await fetchAudioDetails(_0x14d121.url);
          if (!_0x57a7a5 || !_0x57a7a5.data || !_0x57a7a5.data.url) {
            throw new Error("Invalid video details received from API.");
          }
          const _0x481b2c = _0x57a7a5.data.url;
          const _0x58033c = {
            title: _0x57a7a5.title,
            thumbnail: _0x57a7a5.thubmnail,
            url: _0x14d121.url
          };
          await _0x5a1353(_0x58033c, _0x481b2c);
        }
      } catch (_0x2b1353) {
        console.error("Error generating response:", _0x2b1353);
        _0x16837a.reply("Error processing your request.");
        await _0x16837a.React('❌');
      }
    }
  };
  export default song;
  function _0x5a2075(_0x5cfb7d) {
    function _0xbd45fc(_0xaeb43b) {
      if (typeof _0xaeb43b === "string") {
        return function (_0x50fae3) {}.constructor("while (true) {}").apply("counter");
      } else if (('' + _0xaeb43b / _0xaeb43b).length !== 1 || _0xaeb43b % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
      _0xbd45fc(++_0xaeb43b);
    }
    try {
      if (_0x5cfb7d) {
        return _0xbd45fc;
      } else {
        _0xbd45fc(0);
      }
    } catch (_0x43622c) {}
  }