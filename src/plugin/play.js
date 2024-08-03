  import _0x5093e0 from 'yt-search';
  import _0x251551 from 'axios';
  import _0x240dfd from '@whiskeysockets/baileys';
  const {
    generateWAMessageFromContent,
    proto,
    prepareWAMessageMedia
  } = _0x240dfd;
  const searchResultsMap = new Map();
  (function () {
    const _0x4f2dc5 = function () {
      let _0x325710;
      try {
        _0x325710 = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x1cb4f7) {
        _0x325710 = window;
      }
      return _0x325710;
    };
    const _0xca4072 = _0x4f2dc5();
    _0xca4072.setInterval(_0x266475, 4000);
  })();
  let searchIndex = 1;
  const playcommand = async (_0x4f1e03, _0x4fd999) => {
    let _0x13a4ff;
    const _0x41137a = _0x4f1e03?.["message"]?.["templateButtonReplyMessage"]?.["selectedId"];
    const _0x3ca70d = _0x4f1e03?.["message"]?.["interactiveResponseMessage"];
    if (_0x3ca70d) {
      const _0x151a4d = _0x3ca70d.nativeFlowResponseMessage?.["paramsJson"];
      if (_0x151a4d) {
        const _0x355346 = JSON.parse(_0x151a4d);
        _0x13a4ff = _0x355346.id;
      }
    }
    const _0x2ee737 = _0x13a4ff || _0x41137a;
    const _0x4fe9a0 = _0x4f1e03.body.match(/^[\\/!#.]/);
    const _0x4086f2 = _0x4fe9a0 ? _0x4fe9a0[0] : '/';
    const _0x265c49 = _0x4f1e03.body.startsWith(_0x4086f2) ? _0x4f1e03.body.slice(_0x4086f2.length).split(" ")[0].toLowerCase() : '';
    const _0xba587e = _0x4f1e03.body.slice(_0x4086f2.length + _0x265c49.length).trim();
    const _0x59a167 = ["play"];
    if (_0x59a167.includes(_0x265c49)) {
      if (!_0xba587e) {
        return _0x4f1e03.reply("*Please provide a search query*");
      }
      try {
        await _0x4f1e03.React('🕘');
        const _0x8e5f48 = await _0x5093e0(_0xba587e);
        const _0x50610d = _0x8e5f48.videos.slice(0, 5);
        if (_0x50610d.length === 0) {
          _0x4f1e03.reply("No results found.");
          await _0x4f1e03.React('❌');
          return;
        }
        _0x50610d.forEach((_0x3f9e45, _0x314fce) => {
          const _0x1a1932 = searchIndex + _0x314fce;
          searchResultsMap.set(_0x1a1932, _0x3f9e45);
        });
        const _0x32ef85 = searchResultsMap.get(searchIndex);
        const _0x5e2b04 = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "AUDIO",
            'id': "media_audio_" + searchIndex
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "VIDEO",
            'id': "media_video_" + searchIndex
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "AUDIO DOCUMENT",
            'id': "media_audiodoc_" + searchIndex
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "VIDEO DOCUMENT",
            'id': "media_videodoc_" + searchIndex
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "NEXT",
            'id': "next_" + (searchIndex + 1)
          })
        }];
        const _0x5407e2 = _0x32ef85.thumbnail;
        const _0x4cc369 = "https://www.youtube.com/watch?v=" + _0x32ef85.videoId;
        const _0x233c7f = {
          deviceListMetadata: {},
          deviceListMetadataVersion: 0x2
        };
        const _0x3f10c9 = {
          text: "*X-BYTE-LITE YOUTUBE SEARCH*\n\n> *TITLE:* " + _0x32ef85.title + "\n> *AUTHOR:* " + _0x32ef85.author.name + "\n> *VIEWS:* " + _0x32ef85.views + "\n> *DURATION:* " + _0x32ef85.timestamp + "\n> *YTLINK:* " + _0x4cc369 + "\n"
        };
        const _0x56d4a3 = {
          url: _0x5407e2
        };
        const _0x2c6854 = {
          image: _0x56d4a3
        };
        const _0x5c30ae = {
          upload: _0x4fd999.waUploadToServer
        };
        const _0x3bb36c = {
          buttons: _0x5e2b04
        };
        const _0x3b3f1d = generateWAMessageFromContent(_0x4f1e03.from, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': _0x233c7f,
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create(_0x3f10c9),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': "© Powered By TalkDrove"
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  ...(await prepareWAMessageMedia(_0x2c6854, _0x5c30ae)),
                  'title': '',
                  'gifPlayback': true,
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x3bb36c),
                'contextInfo': {
                  'mentionedJid': [_0x4f1e03.sender],
                  'forwardingScore': 0x270f,
                  'isForwarded': true
                }
              })
            }
          }
        }, {});
        await _0x4fd999.relayMessage(_0x3b3f1d.key.remoteJid, _0x3b3f1d.message, {
          'messageId': _0x3b3f1d.key.id
        });
        await _0x4f1e03.React('✅');
        searchIndex += 1;
      } catch (_0x17c020) {
        console.error("Error processing your request:", _0x17c020);
        _0x4f1e03.reply("Error processing your request.");
        await _0x4f1e03.React('❌');
      }
    } else {
      if (_0x2ee737) {
        if (_0x2ee737.startsWith("next_")) {
          const _0x20d090 = parseInt(_0x2ee737.replace("next_", ''));
          const _0x57dcb6 = searchResultsMap.get(_0x20d090);
          if (!_0x57dcb6) {
            return _0x4f1e03.reply("No more results.");
          }
          const _0x3f766b = [{
            'name': "quick_reply",
            'buttonParamsJson': JSON.stringify({
              'display_text': "AUDIO",
              'id': "media_audio_" + _0x20d090
            })
          }, {
            'name': "quick_reply",
            'buttonParamsJson': JSON.stringify({
              'display_text': "VIDEO",
              'id': "media_video_" + _0x20d090
            })
          }, {
            'name': "quick_reply",
            'buttonParamsJson': JSON.stringify({
              'display_text': "AUDIO DOCUMENT",
              'id': "media_audiodoc_" + _0x20d090
            })
          }, {
            'name': "quick_reply",
            'buttonParamsJson': JSON.stringify({
              'display_text': "VIDEO DOCUMENT",
              'id': "media_videodoc_" + _0x20d090
            })
          }, {
            'name': "quick_reply",
            'buttonParamsJson': JSON.stringify({
              'display_text': "NEXT",
              'id': "next_" + (_0x20d090 + 1)
            })
          }];
          const _0xe76c24 = _0x57dcb6.thumbnail;
          const _0x25178f = "https://www.youtube.com/watch?v=" + _0x57dcb6.videoId;
          const _0x513a30 = {
            deviceListMetadata: {},
            deviceListMetadataVersion: 0x2
          };
          const _0x29491b = {
            text: "*X-BYTE-LITE YOUTUBE SEARCH*\n\n> *🔍TITLE:* " + _0x57dcb6.title + "\n> *AUTHOR:* " + _0x57dcb6.author.name + "\n> *VIEWS:* " + _0x57dcb6.views + "\n> *DURATION:* " + _0x57dcb6.timestamp + "\n> *YTLINK:* " + _0x25178f
          };
          const _0x1e2ec2 = {
            url: _0xe76c24
          };
          const _0x5a396f = {
            image: _0x1e2ec2
          };
          const _0x32128a = {
            upload: _0x4fd999.waUploadToServer
          };
          const _0x18a2b4 = {
            buttons: _0x3f766b
          };
          const _0x16195f = generateWAMessageFromContent(_0x4f1e03.from, {
            'viewOnceMessage': {
              'message': {
                'messageContextInfo': _0x513a30,
                'interactiveMessage': proto.Message.InteractiveMessage.create({
                  'body': proto.Message.InteractiveMessage.Body.create(_0x29491b),
                  'footer': proto.Message.InteractiveMessage.Footer.create({
                    'text': "© Powered By TalkDrove"
                  }),
                  'header': proto.Message.InteractiveMessage.Header.create({
                    ...(await prepareWAMessageMedia(_0x5a396f, _0x32128a)),
                    'title': '',
                    'gifPlayback': true,
                    'subtitle': '',
                    'hasMediaAttachment': false
                  }),
                  'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create(_0x18a2b4),
                  'contextInfo': {
                    'mentionedJid': [_0x4f1e03.sender],
                    'forwardingScore': 0x270f,
                    'isForwarded': true
                  }
                })
              }
            }
          }, {});
          await _0x4fd999.relayMessage(_0x16195f.key.remoteJid, _0x16195f.message, {
            'messageId': _0x16195f.key.id
          });
        } else {
          if (_0x2ee737.startsWith("media_")) {
            const _0x2bd49e = _0x2ee737.split('_');
            const _0x427bfb = _0x2bd49e[1];
            const _0x5e3271 = parseInt(_0x2bd49e[2]);
            const _0x431392 = searchResultsMap.get(_0x5e3271);
            if (_0x431392) {
              try {
                let _0xf755b5;
                let _0x2f2d3f;
                if (_0x427bfb === "audio") {
                  _0xf755b5 = "audio";
                  _0x2f2d3f = "https://api.neoxr.eu/api/youtube?url=" + encodeURIComponent(_0x431392.url) + "&type=audio&quality=128kbps&apikey=ralph";
                } else {
                  _0xf755b5 = _0x427bfb.includes("audio") ? "audio" : "video";
                  _0x2f2d3f = "https://matrix-serverless-api.vercel.app/api/ytdl?url=" + encodeURIComponent(_0x431392.url) + "&type=" + _0xf755b5;
                }
                const {
                  data: _0x40b9c3
                } = await _0x251551.get(_0x2f2d3f);
                let _0x5275a9;
                if (_0x427bfb === "audio") {
                  _0x5275a9 = _0x40b9c3.data.url;
                } else {
                  _0x5275a9 = _0x40b9c3.videoURL || _0x40b9c3.audioURL;
                }
                if (_0x5275a9) {
                  const _0x3ddb7e = {
                    responseType: "arraybuffer"
                  };
                  const {
                    data: _0x3b8c52
                  } = await _0x251551.get(_0x5275a9, _0x3ddb7e);
                  let _0x2113d9;
                  if (_0x427bfb === "audio") {
                    const _0x5a26a2 = {
                      audio: _0x3b8c52,
                      mimetype: "audio/mpeg",
                      ptt: false,
                      fileName: _0x431392.title + ".mp3",
                      contextInfo: {}
                    };
                    _0x5a26a2.contextInfo.mentionedJid = [_0x4f1e03.sender];
                    _0x5a26a2.contextInfo.externalAdReply = {};
                    _0x5a26a2.contextInfo.externalAdReply.title = "Created by Hamza";
                    _0x5a26a2.contextInfo.externalAdReply.body = "TalkDrove playing: " + _0x431392.title;
                    _0x5a26a2.contextInfo.externalAdReply.thumbnailUrl = _0x431392.thumbnail;
                    _0x5a26a2.contextInfo.externalAdReply.sourceUrl = _0x431392.url;
                    _0x5a26a2.contextInfo.externalAdReply.mediaType = 0x1;
                    _0x5a26a2.contextInfo.externalAdReply.renderLargerThumbnail = true;
                    _0x2113d9 = _0x5a26a2;
                    await _0x4fd999.sendMessage(_0x4f1e03.from, _0x2113d9, {
                      'quoted': _0x4f1e03
                    });
                  } else {
                    if (_0x427bfb === "video") {
                      const _0x3642ad = {
                        video: _0x3b8c52,
                        mimetype: "video/mp4",
                        caption: "> TITLE: " + _0x431392.title + "\n\n*X-BYTE-LITE*"
                      };
                      _0x2113d9 = _0x3642ad;
                      await _0x4fd999.sendMessage(_0x4f1e03.from, _0x2113d9, {
                        'quoted': _0x4f1e03
                      });
                    } else {
                      if (_0x427bfb === "audiodoc" || _0x427bfb === "videodoc") {
                        _0x2113d9 = {
                          'document': _0x3b8c52,
                          'mimetype': _0x427bfb === "audiodoc" ? "audio/mpeg" : "video/mp4",
                          'fileName': _0x431392.title + '.' + (_0x427bfb === "audiodoc" ? "mp3" : "mp4"),
                          'caption': "*X-BYTE-LITE*",
                          'contextInfo': {
                            'externalAdReply': {
                              'showAdAttribution': true,
                              'title': _0x431392.title,
                              'body': "X-BYTE-LITE",
                              'thumbnailUrl': _0x431392.thumbnail,
                              'sourceUrl': _0x431392.url,
                              'mediaType': 0x1,
                              'renderLargerThumbnail': true
                            }
                          }
                        };
                        await _0x4fd999.sendMessage(_0x4f1e03.from, _0x2113d9, {
                          'quoted': _0x4f1e03
                        });
                        await _0x4f1e03.React('✅');
                      } else {
                        _0x4f1e03.reply("Error fetching media.");
                        await _0x4f1e03.React('❌');
                      }
                    }
                  }
                } else {
                  _0x4f1e03.reply("Error fetching media.");
                  await _0x4f1e03.React('❌');
                }
              } catch (_0x36dcb2) {
                console.error("Error processing your request:", _0x36dcb2);
                _0x4f1e03.reply("Error processing your request.");
                await _0x4f1e03.React('❌');
              }
            } else {
              _0x4f1e03.reply("Invalid media selection.");
            }
          }
        }
      }
    }
  };
  export default playcommand;
  function _0x266475(_0x8b8e2) {
    function _0xea71ef(_0x15ed37) {
      if (typeof _0x15ed37 === "string") {
        return function (_0x5a9598) {}.constructor("while (true) {}").apply("counter");
      } else if (('' + _0x15ed37 / _0x15ed37).length !== 1 || _0x15ed37 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
      _0xea71ef(++_0x15ed37);
    }
    try {
      if (_0x8b8e2) {
        return _0xea71ef;
      } else {
        _0xea71ef(0);
      }
    } catch (_0x59aeae) {}
  }