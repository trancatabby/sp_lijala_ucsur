if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_sp_lijala_ucsur());
}
function Keyboard_sp_lijala_ucsur()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_sp_lijala_ucsur";
  this.KN="Sitelen Pona (Lijala, UCSUR)";
  this.KMINVER="10.0";
  this.KV=null;
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0.4";
  this.KMBM=0 /* 0x0000 */;
  this.KS=1;
  this.KVKD="T_1 T_2 T_d1 T_d2 T_d3 T_d4 T_d5 T_d6 T_box T_circ T_left T_bar T_dot T_emit T_smile T_up T_dash T_x T_open T_down T_hand T_right T_frown T_colon T_SPACE";
  this.KVKL={
  "phone": {
    "font": "nasin-nanpa-kb",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "T_box",
                "text": "󱤪",
                "width": "115"
              },
              {
                "id": "T_circ",
                "text": "󱤌",
                "width": "115",
                "hint": "゚"
              },
              {
                "id": "T_up",
                "text": "^",
                "width": "115",
                "hint": "󱥚"
              },
              {
                "id": "T_dash",
                "text": "󱲚",
                "width": "115"
              },
              {
                "id": "T_x",
                "text": "󱤂",
                "width": "115"
              },
              {
                "id": "T_colon",
                "text": "󱦝",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "T_open",
                "text": "󱥓",
                "width": "180"
              },
              {
                "id": "T_left",
                "text": "<",
                "width": "115",
                "hint": "󱦞"
              },
              {
                "id": "T_right",
                "text": ">",
                "width": "115",
                "hint": "󱦟"
              },
              {
                "id": "T_bar",
                "text": "󱲙",
                "width": "180"
              },
              {
                "id": "T_dot",
                "text": "󱦜",
                "width": "115"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "T_emit",
                "text": "󱥝",
                "width": "115",
                "hint": "゙"
              },
              {
                "id": "T_smile",
                "text": "󱥔",
                "width": "115"
              },
              {
                "id": "T_down",
                "text": "v",
                "width": "115",
                "hint": "󱤏"
              },
              {
                "id": "T_frown",
                "text": "󱤍",
                "width": "115"
              },
              {
                "id": "T_hand",
                "text": "󱤭",
                "width": "115"
              },
              {
                "id": "K_BKSP",
                "text": "󱥶",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_LOPT",
                "text": "󱥬󱦖󱤆",
                "width": "115",
                "sp": "1"
              },
              {
                "id": "T_SPACE",
                "text": "󱥐",
                "width": "375"
              },
              {
                "id": "K_ENTER",
                "text": "󱤅",
                "width": "115",
                "sp": "1"
              },
              {
                "id": "T_abc",
                "text": "abc",
                "width": "115",
                "sp": "1",
                "nextlayer": "abc",
                "layer": "caps",
                "sk": [
                  {
                    "text": "123",
                    "id": "T_new_1301",
                    "nextlayer": "num",
                    "layer": "caps"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "abc",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_P",
                "text": "p",
                "width": "115",
                "hint": "bh"
              },
              {
                "id": "K_T",
                "text": "t",
                "width": "115",
                "hint": "dc"
              },
              {
                "id": "K_K",
                "text": "k",
                "width": "115",
                "hint": "gq"
              },
              {
                "id": "K_S",
                "text": "s",
                "width": "115",
                "hint": "zx"
              },
              {
                "id": "K_M",
                "text": "m",
                "width": "115",
                "hint": ":;"
              },
              {
                "id": "T_2",
                "text": "󱦜󱦜",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_N",
                "text": "n",
                "width": "180",
                "hint": ".,"
              },
              {
                "id": "K_L",
                "text": "l",
                "width": "115",
                "hint": "r｢"
              },
              {
                "id": "K_J",
                "text": "j",
                "width": "115",
                "hint": "y｣ "
              },
              {
                "id": "K_W",
                "text": "w",
                "width": "180",
                "hint": "vf"
              },
              {
                "id": "T_1",
                "text": "󱦜",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_A",
                "text": "a",
                "width": "115",
                "hint": "!?"
              },
              {
                "id": "K_E",
                "text": "e",
                "width": "115",
                "hint": "'\""
              },
              {
                "id": "K_I",
                "text": "i",
                "width": "115"
              },
              {
                "id": "K_O",
                "text": "o",
                "width": "115"
              },
              {
                "id": "K_U",
                "text": "u",
                "width": "115"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "115",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": " ",
                "width": "375"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "115",
                "sp": "1"
              },
              {
                "id": "T_sp",
                "text": "󱥠󱥔",
                "width": "115",
                "sp": "1",
                "nextlayer": "default",
                "layer": "caps",
                "sk": [
                  {
                    "text": "123",
                    "id": "T_num",
                    "nextlayer": "num"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "num",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1",
                "width": "115",
                "hint": "`~"
              },
              {
                "id": "K_2",
                "text": "2",
                "width": "115",
                "hint": "@"
              },
              {
                "id": "K_3",
                "text": "3",
                "width": "115",
                "hint": "#"
              },
              {
                "id": "K_4",
                "text": "4",
                "width": "115",
                "hint": "$•",
                "sk": [
                  {
                    "text": "$",
                    "id": "T_d1"
                  },
                  {
                    "text": "€",
                    "id": "T_d2"
                  },
                  {
                    "text": "₽",
                    "id": "T_d3"
                  },
                  {
                    "text": "¥",
                    "id": "T_d4"
                  },
                  {
                    "text": "₩",
                    "id": "T_d5"
                  },
                  {
                    "text": "₹",
                    "id": "T_d6"
                  }
                ]
              },
              {
                "id": "K_5",
                "text": "5",
                "width": "115",
                "hint": "%"
              },
              {
                "id": "T_2",
                "text": "󱦜󱦜",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_6",
                "text": "6",
                "width": "115",
                "hint": "^"
              },
              {
                "id": "K_7",
                "text": "7",
                "width": "115",
                "hint": "&"
              },
              {
                "id": "K_8",
                "text": "8",
                "width": "115",
                "hint": "*"
              },
              {
                "id": "K_9",
                "text": "9",
                "width": "115",
                "hint": "{"
              },
              {
                "id": "K_0",
                "text": "0",
                "width": "115",
                "hint": "}"
              },
              {
                "id": "T_1",
                "text": "󱦜",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "T_pleft",
                "text": "(",
                "width": "115",
                "hint": "["
              },
              {
                "id": "T_pright",
                "text": ")",
                "width": "115",
                "hint": "]"
              },
              {
                "id": "K_SLASH",
                "text": "/",
                "width": "115",
                "hint": "\\|"
              },
              {
                "id": "K_HYPHEN",
                "text": "-",
                "width": "115",
                "hint": "_"
              },
              {
                "id": "K_EQUAL",
                "text": "=",
                "width": "115",
                "hint": "+"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "115",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": " ",
                "width": "375"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "115",
                "sp": "1"
              },
              {
                "id": "T_abc",
                "text": "abc",
                "width": "115",
                "sp": "1",
                "nextlayer": "abc",
                "layer": "caps",
                "sk": [
                  {
                    "text": "󱥠󱥔",
                    "id": "T_sp",
                    "nextlayer": "default",
                    "layer": "caps"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "fontsize": "1em",
    "displayUnderlying": false
  },
  "tablet": {
    "font": "nasin-nanpa-kb",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "T_box",
                "text": "󱤪",
                "width": "115"
              },
              {
                "id": "T_circ",
                "text": "󱤌",
                "width": "115",
                "hint": "゚"
              },
              {
                "id": "T_up",
                "text": "^",
                "width": "115",
                "hint": "󱥚"
              },
              {
                "id": "T_dash",
                "text": "󱲚",
                "width": "115"
              },
              {
                "id": "T_x",
                "text": "󱤂",
                "width": "115"
              },
              {
                "id": "T_colon",
                "text": "󱦝",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "T_open",
                "text": "󱥓",
                "width": "180"
              },
              {
                "id": "T_left",
                "text": "<",
                "width": "115",
                "hint": "󱦞"
              },
              {
                "id": "T_right",
                "text": ">",
                "width": "115",
                "hint": "󱦟"
              },
              {
                "id": "T_bar",
                "text": "󱲙",
                "width": "180"
              },
              {
                "id": "T_dot",
                "text": "󱦜",
                "width": "115"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "T_emit",
                "text": "󱥝",
                "width": "115",
                "hint": "゙"
              },
              {
                "id": "T_smile",
                "text": "󱥔",
                "width": "115"
              },
              {
                "id": "T_down",
                "text": "v",
                "width": "115",
                "hint": "󱤏"
              },
              {
                "id": "T_frown",
                "text": "󱤍",
                "width": "115"
              },
              {
                "id": "T_hand",
                "text": "󱤭",
                "width": "115"
              },
              {
                "id": "K_BKSP",
                "text": "󱥶",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_LOPT",
                "text": "󱥬󱦖󱤆",
                "width": "115",
                "sp": "1"
              },
              {
                "id": "T_SPACE",
                "text": "󱥐",
                "width": "375"
              },
              {
                "id": "K_ENTER",
                "text": "󱤅",
                "width": "115",
                "sp": "1"
              },
              {
                "id": "T_abc",
                "text": "abc",
                "width": "115",
                "sp": "1",
                "nextlayer": "abc",
                "layer": "caps",
                "sk": [
                  {
                    "text": "123",
                    "id": "T_new_1301",
                    "nextlayer": "num",
                    "layer": "caps"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "abc",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_P",
                "text": "p",
                "width": "115",
                "hint": "bh"
              },
              {
                "id": "K_T",
                "text": "t",
                "width": "115",
                "hint": "dc"
              },
              {
                "id": "K_K",
                "text": "k",
                "width": "115",
                "hint": "gq"
              },
              {
                "id": "K_S",
                "text": "s",
                "width": "115",
                "hint": "zx"
              },
              {
                "id": "K_M",
                "text": "m",
                "width": "115",
                "hint": ":;"
              },
              {
                "id": "T_2",
                "text": "󱦜󱦜",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_N",
                "text": "n",
                "width": "180",
                "hint": ".,"
              },
              {
                "id": "K_L",
                "text": "l",
                "width": "115",
                "hint": "r｢"
              },
              {
                "id": "K_J",
                "text": "j",
                "width": "115",
                "hint": "y｣ "
              },
              {
                "id": "K_W",
                "text": "w",
                "width": "180",
                "hint": "vf"
              },
              {
                "id": "T_1",
                "text": "󱦜",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_A",
                "text": "a",
                "width": "115",
                "hint": "!?"
              },
              {
                "id": "K_E",
                "text": "e",
                "width": "115",
                "hint": "'\""
              },
              {
                "id": "K_I",
                "text": "i",
                "width": "115"
              },
              {
                "id": "K_O",
                "text": "o",
                "width": "115"
              },
              {
                "id": "K_U",
                "text": "u",
                "width": "115"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "115",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": " ",
                "width": "375"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "115",
                "sp": "1"
              },
              {
                "id": "T_sp",
                "text": "󱥠󱥔",
                "width": "115",
                "sp": "1",
                "nextlayer": "default",
                "layer": "caps",
                "sk": [
                  {
                    "text": "123",
                    "id": "T_num",
                    "nextlayer": "num"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "num",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1",
                "width": "115",
                "hint": "`~"
              },
              {
                "id": "K_2",
                "text": "2",
                "width": "115",
                "hint": "@"
              },
              {
                "id": "K_3",
                "text": "3",
                "width": "115",
                "hint": "#"
              },
              {
                "id": "K_4",
                "text": "4",
                "width": "115",
                "hint": "$•",
                "sk": [
                  {
                    "text": "$",
                    "id": "T_d1"
                  },
                  {
                    "text": "€",
                    "id": "T_d2"
                  },
                  {
                    "text": "₽",
                    "id": "T_d3"
                  },
                  {
                    "text": "¥",
                    "id": "T_d4"
                  },
                  {
                    "text": "₩",
                    "id": "T_d5"
                  },
                  {
                    "text": "₹",
                    "id": "T_d6"
                  }
                ]
              },
              {
                "id": "K_5",
                "text": "5",
                "width": "115",
                "hint": "%"
              },
              {
                "id": "T_2",
                "text": "󱦜󱦜",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_6",
                "text": "6",
                "width": "115",
                "hint": "^"
              },
              {
                "id": "K_7",
                "text": "7",
                "width": "115",
                "hint": "&"
              },
              {
                "id": "K_8",
                "text": "8",
                "width": "115",
                "hint": "*"
              },
              {
                "id": "K_9",
                "text": "9",
                "width": "115",
                "hint": "{"
              },
              {
                "id": "K_0",
                "text": "0",
                "width": "115",
                "hint": "}"
              },
              {
                "id": "T_1",
                "text": "󱦜",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "T_pleft",
                "text": "(",
                "width": "115",
                "hint": "["
              },
              {
                "id": "T_pright",
                "text": ")",
                "width": "115",
                "hint": "]"
              },
              {
                "id": "K_SLASH",
                "text": "/",
                "width": "115",
                "hint": "\\|"
              },
              {
                "id": "K_HYPHEN",
                "text": "-",
                "width": "115",
                "hint": "_"
              },
              {
                "id": "K_EQUAL",
                "text": "=",
                "width": "115",
                "hint": "+"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "115",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "115",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": " ",
                "width": "375"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "115",
                "sp": "1"
              },
              {
                "id": "T_abc",
                "text": "abc",
                "width": "115",
                "sp": "1",
                "nextlayer": "abc",
                "layer": "caps",
                "sk": [
                  {
                    "text": "󱥠󱥔",
                    "id": "T_sp",
                    "nextlayer": "default",
                    "layer": "caps"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "fontsize": "1em",
    "displayUnderlying": false
  }
};
  this.KVER="18.0.238.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x100)) {
      if(k.KFCM(1,t,['p'])){
        r=m=1;   // Line 15
        k.KDC(1,t);
        k.KO(-1,t,"b");
      }
      else if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 17
        k.KDC(1,t);
        k.KO(-1,t,"d");
      }
      else if(k.KFCM(1,t,['k'])){
        r=m=1;   // Line 19
        k.KDC(1,t);
        k.KO(-1,t,"g");
      }
      else if(k.KFCM(1,t,['s'])){
        r=m=1;   // Line 21
        k.KDC(1,t);
        k.KO(-1,t,"z");
      }
      else if(k.KFCM(1,t,['m'])){
        r=m=1;   // Line 23
        k.KDC(1,t);
        k.KO(-1,t,":");
      }
      else if(k.KFCM(1,t,['n'])){
        r=m=1;   // Line 25
        k.KDC(1,t);
        k.KO(-1,t,".");
      }
      else if(k.KFCM(1,t,['l'])){
        r=m=1;   // Line 27
        k.KDC(1,t);
        k.KO(-1,t,"r");
      }
      else if(k.KFCM(1,t,['j'])){
        r=m=1;   // Line 29
        k.KDC(1,t);
        k.KO(-1,t,"y");
      }
      else if(k.KFCM(1,t,['w'])){
        r=m=1;   // Line 31
        k.KDC(1,t);
        k.KO(-1,t,"v");
      }
      else if(k.KFCM(1,t,['a'])){
        r=m=1;   // Line 33
        k.KDC(1,t);
        k.KO(-1,t,"!");
      }
      else if(k.KFCM(1,t,['e'])){
        r=m=1;   // Line 35
        k.KDC(1,t);
        k.KO(-1,t,"'");
      }
      else if(k.KFCM(1,t,['1'])){
        r=m=1;   // Line 38
        k.KDC(1,t);
        k.KO(-1,t,"`");
      }
      else if(k.KFCM(1,t,['2'])){
        r=m=1;   // Line 40
        k.KDC(1,t);
        k.KO(-1,t,"@");
      }
      else if(k.KFCM(1,t,['3'])){
        r=m=1;   // Line 41
        k.KDC(1,t);
        k.KO(-1,t,"#");
      }
      else if(k.KFCM(1,t,['4'])){
        r=m=1;   // Line 42
        k.KDC(1,t);
        k.KO(-1,t,"$");
      }
      else if(k.KFCM(1,t,['5'])){
        r=m=1;   // Line 49
        k.KDC(1,t);
        k.KO(-1,t,"%");
      }
      else if(k.KFCM(1,t,['6'])){
        r=m=1;   // Line 50
        k.KDC(1,t);
        k.KO(-1,t,"^");
      }
      else if(k.KFCM(1,t,['7'])){
        r=m=1;   // Line 51
        k.KDC(1,t);
        k.KO(-1,t,"&");
      }
      else if(k.KFCM(1,t,['8'])){
        r=m=1;   // Line 52
        k.KDC(1,t);
        k.KO(-1,t,"*");
      }
      else if(k.KFCM(1,t,['9'])){
        r=m=1;   // Line 53
        k.KDC(1,t);
        k.KO(-1,t,"{");
      }
      else if(k.KFCM(1,t,['0'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"}");
      }
      else if(k.KFCM(1,t,['('])){
        r=m=1;   // Line 55
        k.KDC(1,t);
        k.KO(-1,t,"[");
      }
      else if(k.KFCM(1,t,[')'])){
        r=m=1;   // Line 56
        k.KDC(1,t);
        k.KO(-1,t,"]");
      }
      else if(k.KFCM(1,t,['/'])){
        r=m=1;   // Line 57
        k.KDC(1,t);
        k.KO(-1,t,"\\");
      }
      else if(k.KFCM(1,t,['-'])){
        r=m=1;   // Line 59
        k.KDC(1,t);
        k.KO(-1,t,"_");
      }
      else if(k.KFCM(1,t,['='])){
        r=m=1;   // Line 60
        k.KDC(1,t);
        k.KO(-1,t,"+");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x101)) {
      if(k.KFCM(1,t,['p'])){
        r=m=1;   // Line 16
        k.KDC(1,t);
        k.KO(-1,t,"h");
      }
      else if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 18
        k.KDC(1,t);
        k.KO(-1,t,"c");
      }
      else if(k.KFCM(1,t,['k'])){
        r=m=1;   // Line 20
        k.KDC(1,t);
        k.KO(-1,t,"q");
      }
      else if(k.KFCM(1,t,['s'])){
        r=m=1;   // Line 22
        k.KDC(1,t);
        k.KO(-1,t,"x");
      }
      else if(k.KFCM(1,t,['m'])){
        r=m=1;   // Line 24
        k.KDC(1,t);
        k.KO(-1,t,";");
      }
      else if(k.KFCM(1,t,['n'])){
        r=m=1;   // Line 26
        k.KDC(1,t);
        k.KO(-1,t,",");
      }
      else if(k.KFCM(1,t,['l'])){
        r=m=1;   // Line 28
        k.KDC(1,t);
        k.KO(-1,t,"｢");
      }
      else if(k.KFCM(1,t,['j'])){
        r=m=1;   // Line 30
        k.KDC(1,t);
        k.KO(-1,t,"｣");
      }
      else if(k.KFCM(1,t,['w'])){
        r=m=1;   // Line 32
        k.KDC(1,t);
        k.KO(-1,t,"f");
      }
      else if(k.KFCM(1,t,['a'])){
        r=m=1;   // Line 34
        k.KDC(1,t);
        k.KO(-1,t,"?");
      }
      else if(k.KFCM(1,t,['e'])){
        r=m=1;   // Line 36
        k.KDC(1,t);
        k.KO(-1,t,"\"");
      }
      else if(k.KFCM(1,t,['1'])){
        r=m=1;   // Line 39
        k.KDC(1,t);
        k.KO(-1,t,"~");
      }
      else if(k.KFCM(1,t,['/'])){
        r=m=1;   // Line 58
        k.KDC(1,t);
        k.KO(-1,t,"|");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x108)) {
      if(k.KFCM(1,t,['󱤪'])){
        r=m=1;   // Line 64
        k.KDC(1,t);
        k.KO(-1,t,"󱥼");
      }
      else if(k.KFCM(1,t,['󱤛'])){
        r=m=1;   // Line 169
        k.KDC(1,t);
        k.KO(-1,t,"󱥈");
      }
      else if(1){
        r=m=1;   // Line 231
        k.KDC(0,t);
        k.KO(-1,t,"󱤪");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x109)) {
      if(k.KFCM(1,t,['󱤪'])){
        r=m=1;   // Line 65
        k.KDC(1,t);
        k.KO(-1,t,"󱥂");
      }
      else if(k.KFCM(1,t,['󱤌'])){
        r=m=1;   // Line 71
        k.KDC(1,t);
        k.KO(-1,t,"󱥜");
      }
      else if(k.KFCM(1,t,['󱤬'])){
        r=m=1;   // Line 89
        k.KDC(1,t);
        k.KO(-1,t,"󱥆");
      }
      else if(k.KFCM(1,t,['󱥓'])){
        r=m=1;   // Line 99
        k.KDC(1,t);
        k.KO(-1,t,"󱥃");
      }
      else if(k.KFCM(1,t,['󱥧'])){
        r=m=1;   // Line 104
        k.KDC(1,t);
        k.KO(-1,t,"󱥺");
      }
      else if(k.KFCM(1,t,['󱤧'])){
        r=m=1;   // Line 106
        k.KDC(1,t);
        k.KO(-1,t,"󱤔");
      }
      else if(k.KFCM(1,t,['󱥳'])){
        r=m=1;   // Line 110
        k.KDC(1,t);
        k.KO(-1,t,"󱥞");
      }
      else if(k.KFCM(1,t,['󱦜'])){
        r=m=1;   // Line 117
        k.KDC(1,t);
        k.KO(-1,t,"󱥄");
      }
      else if(k.KFCM(1,t,['󱤭'])){
        r=m=1;   // Line 138
        k.KDC(1,t);
        k.KO(-1,t,"󱤾");
      }
      else if(k.KFCM(1,t,['󱥜'])){
        r=m=1;   // Line 147
        k.KDC(1,t);
        k.KO(-1,t,"󱤟");
      }
      else if(k.KFCM(1,t,['󱥤'])){
        r=m=1;   // Line 150
        k.KDC(1,t);
        k.KO(-1,t,"󱤄");
      }
      else if(k.KFCM(1,t,['󱤱'])){
        r=m=1;   // Line 154
        k.KDC(1,t);
        k.KO(-1,t,"󱤻");
      }
      else if(k.KFCM(1,t,['󱤊'])){
        r=m=1;   // Line 161
        k.KDC(1,t);
        k.KO(-1,t,"󱤰");
      }
      else if(k.KFCM(1,t,['󱥍'])){
        r=m=1;   // Line 173
        k.KDC(1,t);
        k.KO(-1,t,"󱥫");
      }
      else if(k.KFCM(1,t,['󱥀'])){
        r=m=1;   // Line 188
        k.KDC(1,t);
        k.KO(-1,t,"󱤳");
      }
      else if(k.KFCM(1,t,['󱤟'])){
        r=m=1;   // Line 195
        k.KDC(1,t);
        k.KO(-1,t,"󱤜");
      }
      else if(1){
        r=m=1;   // Line 232
        k.KDC(0,t);
        k.KO(-1,t,"󱤌");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10A)) {
      if(k.KFCM(1,t,['󱤪'])){
        r=m=1;   // Line 66
        k.KDC(1,t);
        k.KO(-1,t,"󱦈");
      }
      else if(k.KFCM(1,t,['󱤈'])){
        r=m=1;   // Line 86
        k.KDC(1,t);
        k.KO(-1,t,"󱤖");
      }
      else if(k.KFCM(1,t,['󱥳'])){
        r=m=1;   // Line 113
        k.KDC(1,t);
        k.KO(-1,t,"󱤘");
      }
      else if(k.KFCM(1,t,['󱥝'])){
        r=m=1;   // Line 124
        k.KDC(1,t);
        k.KO(-1,t,"󱥨");
      }
      else if(k.KFCM(1,t,['󱥂'])){
        r=m=1;   // Line 215
        k.KDC(1,t);
        k.KO(-1,t,"󱦐");
      }
      else if(k.KFCM(1,t,['󱥍'])){
        r=m=1;   // Line 217
        k.KDC(1,t);
        k.KO(-1,t,"󱥍󱦗");
      }
      else if(k.KFCM(1,t,['󱤡'])){
        r=m=1;   // Line 219
        k.KDC(1,t);
        k.KO(-1,t,"󱦚");
      }
      else if(1){
        r=m=1;   // Line 237
        k.KDC(0,t);
        k.KO(-1,t,"󱥧");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10B)) {
      if(k.KFCM(1,t,['󱤪'])){
        r=m=1;   // Line 67
        k.KDC(1,t);
        k.KO(-1,t,"󱤎");
      }
      else if(k.KFCM(1,t,['󱤌'])){
        r=m=1;   // Line 76
        k.KDC(1,t);
        k.KO(-1,t,"󱤴");
      }
      else if(k.KFCM(1,t,['󱤬'])){
        r=m=1;   // Line 93
        k.KDC(1,t);
        k.KO(-1,t,"󱤊");
      }
      else if(k.KFCM(1,t,['󱤂'])){
        r=m=1;   // Line 97
        k.KDC(1,t);
        k.KO(-1,t,"󱥱");
      }
      else if(k.KFCM(1,t,['󱥓'])){
        r=m=1;   // Line 102
        k.KDC(1,t);
        k.KO(-1,t,"󱥚");
      }
      else if(k.KFCM(1,t,['󱤧'])){
        r=m=1;   // Line 108
        k.KDC(1,t);
        k.KO(-1,t,"󱥴");
      }
      else if(k.KFCM(1,t,['󱥳'])){
        r=m=1;   // Line 114
        k.KDC(1,t);
        k.KO(-1,t,"󱥮");
      }
      else if(k.KFCM(1,t,['󱦜'])){
        r=m=1;   // Line 121
        k.KDC(1,t);
        k.KO(-1,t,"󱤸");
      }
      else if(k.KFCM(1,t,['󱤨'])){
        r=m=1;   // Line 132
        k.KDC(1,t);
        k.KO(-1,t,"󱤇");
      }
      else if(k.KFCM(1,t,['󱤍'])){
        r=m=1;   // Line 134
        k.KDC(1,t);
        k.KO(-1,t,"󱦁");
      }
      else if(k.KFCM(1,t,['󱤎'])){
        r=m=1;   // Line 145
        k.KDC(1,t);
        k.KO(-1,t,"󱤥");
      }
      else if(k.KFCM(1,t,['󱥜'])){
        r=m=1;   // Line 148
        k.KDC(1,t);
        k.KO(-1,t,"󱤗");
      }
      else if(k.KFCM(1,t,['󱤲'])){
        r=m=1;   // Line 155
        k.KDC(1,t);
        k.KO(-1,t,"󱥾");
      }
      else if(k.KFCM(1,t,['󱤊'])){
        r=m=1;   // Line 163
        k.KDC(1,t);
        k.KO(-1,t,"󱥥");
      }
      else if(k.KFCM(1,t,['󱥞'])){
        r=m=1;   // Line 172
        k.KDC(1,t);
        k.KO(-1,t,"󱥵");
      }
      else if(k.KFCM(1,t,['󱥮'])){
        r=m=1;   // Line 175
        k.KDC(1,t);
        k.KO(-1,t,"󱤼");
      }
      else if(k.KFCM(1,t,['󱥟'])){
        r=m=1;   // Line 176
        k.KDC(1,t);
        k.KO(-1,t,"󱦂");
      }
      else if(k.KFCM(1,t,['󱥊'])){
        r=m=1;   // Line 180
        k.KDC(1,t);
        k.KO(-1,t,"󱥿");
      }
      else if(k.KFCM(1,t,['󱥎'])){
        r=m=1;   // Line 185
        k.KDC(1,t);
        k.KO(-1,t,"󱤚");
      }
      else if(k.KFCM(1,t,['󱥑'])){
        r=m=1;   // Line 200
        k.KDC(1,t);
        k.KO(-1,t,"󱤽");
      }
      else if(k.KFCM(1,t,['󱥥'])){
        r=m=1;   // Line 201
        k.KDC(1,t);
        k.KO(-1,t,"󱥛");
      }
      else if(k.KFCM(1,t,['󱥛'])){
        r=m=1;   // Line 207
        k.KDC(1,t);
        k.KO(-1,t,"󱥘");
      }
      else if(1){
        r=m=1;   // Line 239
        k.KDC(0,t);
        k.KO(-1,t,"󱥳");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10C)) {
      if(k.KFCM(1,t,['󱤪'])){
        r=m=1;   // Line 68
        k.KDC(1,t);
        k.KO(-1,t,"󱥠");
      }
      else if(k.KFCM(1,t,['󱤌'])){
        r=m=1;   // Line 77
        k.KDC(1,t);
        k.KO(-1,t,"󱤮");
      }
      else if(k.KFCM(1,t,['󱤬'])){
        r=m=1;   // Line 94
        k.KDC(1,t);
        k.KO(-1,t,"󱥻");
      }
      else if(k.KFCM(1,t,['󱤂'])){
        r=m=1;   // Line 98
        k.KDC(1,t);
        k.KO(-1,t,"󱥶");
      }
      else if(k.KFCM(1,t,['󱥓'])){
        r=m=1;   // Line 103
        k.KDC(1,t);
        k.KO(-1,t,"󱤅");
      }
      else if(k.KFCM(1,t,['󱤧'])){
        r=m=1;   // Line 109
        k.KDC(1,t);
        k.KO(-1,t,"󱤡");
      }
      else if(k.KFCM(1,t,['󱥳'])){
        r=m=1;   // Line 115
        k.KDC(1,t);
        k.KO(-1,t,"󱥟");
      }
      else if(k.KFCM(1,t,['󱤭'])){
        r=m=1;   // Line 139
        k.KDC(1,t);
        k.KO(-1,t,"󱥙");
      }
      else if(k.KFCM(1,t,['󱥉'])){
        r=m=1;   // Line 157
        k.KDC(1,t);
        k.KO(-1,t,"󱦅");
      }
      else if(k.KFCM(1,t,['󱥆'])){
        r=m=1;   // Line 159
        k.KDC(1,t);
        k.KO(-1,t,"󱤢");
      }
      else if(k.KFCM(1,t,['󱤊'])){
        r=m=1;   // Line 164
        k.KDC(1,t);
        k.KO(-1,t,"󱥸︁");
      }
      else if(k.KFCM(1,t,['󱥚'])){
        r=m=1;   // Line 168
        k.KDC(1,t);
        k.KO(-1,t,"󱥚︁");
      }
      else if(k.KFCM(1,t,['󱤉'])){
        r=m=1;   // Line 170
        k.KDC(1,t);
        k.KO(-1,t,"󱤺");
      }
      else if(k.KFCM(1,t,['󱥄'])){
        r=m=1;   // Line 177
        k.KDC(1,t);
        k.KO(-1,t,"󱤀");
      }
      else if(k.KFCM(1,t,['󱥙'])){
        r=m=1;   // Line 189
        k.KDC(1,t);
        k.KO(-1,t,"󱥢");
      }
      else if(k.KFCM(1,t,['󱤟'])){
        r=m=1;   // Line 197
        k.KDC(1,t);
        k.KO(-1,t,"󱤹");
      }
      else if(1){
        r=m=1;   // Line 240
        k.KDC(0,t);
        k.KO(-1,t,"󱦜");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10D)) {
      if(k.KFCM(1,t,['󱤪'])){
        r=m=1;   // Line 69
        k.KDC(1,t);
        k.KO(-1,t,"󱥡");
      }
      else if(k.KFCM(1,t,['󱤌'])){
        r=m=1;   // Line 78
        k.KDC(1,t);
        k.KO(-1,t,"󱥬");
      }
      else if(k.KFCM(1,t,['󱦜'])){
        r=m=1;   // Line 122
        k.KDC(1,t);
        k.KO(-1,t,"󱥗");
      }
      else if(k.KFCM(1,t,['󱥝'])){
        r=m=1;   // Line 125
        k.KDC(1,t);
        k.KO(-1,t,"󱦢");
      }
      else if(k.KFCM(1,t,['󱥔'])){
        r=m=1;   // Line 128
        k.KDC(1,t);
        k.KO(-1,t,"󱦃");
      }
      else if(k.KFCM(1,t,['󱤭'])){
        r=m=1;   // Line 140
        k.KDC(1,t);
        k.KO(-1,t,"󱥌");
      }
      else if(k.KFCM(1,t,['󱥰'])){
        r=m=1;   // Line 166
        k.KDC(1,t);
        k.KO(-1,t,"󱤕");
      }
      else if(k.KFCM(1,t,['󱤉'])){
        r=m=1;   // Line 171
        k.KDC(1,t);
        k.KO(-1,t,"󱥸");
      }
      else if(k.KFCM(1,t,['󱥎'])){
        r=m=1;   // Line 186
        k.KDC(1,t);
        k.KO(-1,t,"󱥅︁");
      }
      else if(1){
        r=m=1;   // Line 241
        k.KDC(0,t);
        k.KO(-1,t,"󱥝");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10E)) {
      if(k.KFCM(1,t,['󱤪'])){
        r=m=1;   // Line 70
        k.KDC(1,t);
        k.KO(-1,t,"󱥕");
      }
      else if(k.KFCM(1,t,['󱤌'])){
        r=m=1;   // Line 79
        k.KDC(1,t);
        k.KO(-1,t,"󱤱");
      }
      else if(k.KFCM(1,t,['󱤬'])){
        r=m=1;   // Line 95
        k.KDC(1,t);
        k.KO(-1,t,"󱥰");
      }
      else if(k.KFCM(1,t,['󱥔'])){
        r=m=1;   // Line 129
        k.KDC(1,t);
        k.KO(-1,t,"󱤯");
      }
      else if(k.KFCM(1,t,['󱤍'])){
        r=m=1;   // Line 135
        k.KDC(1,t);
        k.KO(-1,t,"󱥊");
      }
      else if(k.KFCM(1,t,['󱥬'])){
        r=m=1;   // Line 211
        k.KDC(1,t);
        k.KO(-1,t,"󱥬󱦖󱥔");
      }
      else if(1){
        r=m=1;   // Line 242
        k.KDC(0,t);
        k.KO(-1,t,"󱥔");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x10F)) {
      if(k.KFCM(1,t,['󱤌'])){
        r=m=1;   // Line 72
        k.KDC(1,t);
        k.KO(-1,t,"󱤑");
      }
      else if(k.KFCM(1,t,['󱤈'])){
        r=m=1;   // Line 82
        k.KDC(1,t);
        k.KO(-1,t,"󱥦");
      }
      else if(k.KFCM(1,t,['󱥳'])){
        r=m=1;   // Line 111
        k.KDC(1,t);
        k.KO(-1,t,"󱤿");
      }
      else if(k.KFCM(1,t,['󱥔'])){
        r=m=1;   // Line 127
        k.KDC(1,t);
        k.KO(-1,t,"󱥷");
      }
      else if(k.KFCM(1,t,['󱤨'])){
        r=m=1;   // Line 131
        k.KDC(1,t);
        k.KO(-1,t,"󱤆");
      }
      else if(k.KFCM(1,t,['󱥤'])){
        r=m=1;   // Line 151
        k.KDC(1,t);
        k.KO(-1,t,"󱤒");
      }
      else if(k.KFCM(1,t,['󱥦'])){
        r=m=1;   // Line 158
        k.KDC(1,t);
        k.KO(-1,t,"󱥽");
      }
      else if(k.KFCM(1,t,['󱥰'])){
        r=m=1;   // Line 165
        k.KDC(1,t);
        k.KO(-1,t,"󱤫");
      }
      else if(k.KFCM(1,t,['󱥷'])){
        r=m=1;   // Line 178
        k.KDC(1,t);
        k.KO(-1,t,"󱥷︁");
      }
      else if(k.KFCM(1,t,['󱥊'])){
        r=m=1;   // Line 182
        k.KDC(1,t);
        k.KO(-1,t,"󱤝");
      }
      else if(k.KFCM(1,t,['󱤟'])){
        r=m=1;   // Line 196
        k.KDC(1,t);
        k.KO(-1,t,"󱦡");
      }
      else if(k.KFCM(1,t,['󱤗'])){
        r=m=1;   // Line 198
        k.KDC(1,t);
        k.KO(-1,t,"󱤣");
      }
      else if(1){
        r=m=1;   // Line 233
        k.KDC(0,t);
        k.KO(-1,t,"󱤈");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x110)) {
      if(k.KFCM(1,t,['󱤌'])){
        r=m=1;   // Line 73
        k.KDC(1,t);
        k.KO(-1,t,"󱤤");
      }
      else if(k.KFCM(1,t,['󱤈'])){
        r=m=1;   // Line 83
        k.KDC(1,t);
        k.KO(-1,t,"󱤞");
      }
      else if(k.KFCM(1,t,['󱤬'])){
        r=m=1;   // Line 90
        k.KDC(1,t);
        k.KO(-1,t,"󱥖");
      }
      else if(k.KFCM(1,t,['󱤂'])){
        r=m=1;   // Line 96
        k.KDC(1,t);
        k.KO(-1,t,"󱤦");
      }
      else if(k.KFCM(1,t,['󱥓'])){
        r=m=1;   // Line 100
        k.KDC(1,t);
        k.KO(-1,t,"󱥇");
      }
      else if(k.KFCM(1,t,['󱥳'])){
        r=m=1;   // Line 112
        k.KDC(1,t);
        k.KO(-1,t,"󱥍");
      }
      else if(k.KFCM(1,t,['󱤤'])){
        r=m=1;   // Line 149
        k.KDC(1,t);
        k.KO(-1,t,"󱤁");
      }
      else if(k.KFCM(1,t,['󱥬'])){
        r=m=1;   // Line 153
        k.KDC(1,t);
        k.KO(-1,t,"󱦄");
      }
      else if(k.KFCM(1,t,['󱥉'])){
        r=m=1;   // Line 156
        k.KDC(1,t);
        k.KO(-1,t,"󱤓");
      }
      else if(k.KFCM(1,t,['󱦣'])){
        r=m=1;   // Line 160
        k.KDC(1,t);
        k.KO(-1,t,"󱥫︁");
      }
      else if(k.KFCM(1,t,['󱤊'])){
        r=m=1;   // Line 162
        k.KDC(1,t);
        k.KO(-1,t,"󱥐");
      }
      else if(k.KFCM(1,t,['󱥍'])){
        r=m=1;   // Line 174
        k.KDC(1,t);
        k.KO(-1,t,"󱥑");
      }
      else if(k.KFCM(1,t,['󱥊'])){
        r=m=1;   // Line 181
        k.KDC(1,t);
        k.KO(-1,t,"󱦇");
      }
      else if(k.KFCM(1,t,['󱤁'])){
        r=m=1;   // Line 199
        k.KDC(1,t);
        k.KO(-1,t,"󱤁︁");
      }
      else if(1){
        r=m=1;   // Line 234
        k.KDC(0,t);
        k.KO(-1,t,"󱤬");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x111)) {
      if(k.KFCM(1,t,['󱤌'])){
        r=m=1;   // Line 74
        k.KDC(1,t);
        k.KO(-1,t,"󱥤");
      }
      else if(k.KFCM(1,t,['󱤈'])){
        r=m=1;   // Line 84
        k.KDC(1,t);
        k.KO(-1,t,"󱥏");
      }
      else if(k.KFCM(1,t,['󱤬'])){
        r=m=1;   // Line 91
        k.KDC(1,t);
        k.KO(-1,t,"󱦣");
      }
      else if(k.KFCM(1,t,['󱦜'])){
        r=m=1;   // Line 118
        k.KDC(1,t);
        k.KO(-1,t,"󱥹");
      }
      else if(k.KFCM(1,t,['󱥤'])){
        r=m=1;   // Line 152
        k.KDC(1,t);
        k.KO(-1,t,"󱤷");
      }
      else if(1){
        r=m=1;   // Line 235
        k.KDC(0,t);
        k.KO(-1,t,"󱤂");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x112)) {
      if(k.KFCM(1,t,['󱤌'])){
        r=m=1;   // Line 75
        k.KDC(1,t);
        k.KO(-1,t,"󱤵");
      }
      else if(k.KFCM(1,t,['󱤈'])){
        r=m=1;   // Line 85
        k.KDC(1,t);
        k.KO(-1,t,"󱥭");
      }
      else if(k.KFCM(1,t,['󱦜'])){
        r=m=1;   // Line 119
        k.KDC(1,t);
        k.KO(-1,t,"󱤏");
      }
      else if(k.KFCM(1,t,['󱥎'])){
        r=m=1;   // Line 184
        k.KDC(1,t);
        k.KO(-1,t,"󱥯");
      }
      else if(1){
        r=m=1;   // Line 236
        k.KDC(0,t);
        k.KO(-1,t,"󱥓");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x113)) {
      if(k.KFCM(1,t,['󱤌'])){
        r=m=1;   // Line 80
        k.KDC(1,t);
        k.KO(-1,t,"󱤲");
      }
      else if(k.KFCM(1,t,['󱤈'])){
        r=m=1;   // Line 88
        k.KDC(1,t);
        k.KO(-1,t,"󱥲");
      }
      else if(k.KFCM(1,t,['󱥳'])){
        r=m=1;   // Line 116
        k.KDC(1,t);
        k.KO(-1,t,"󱥁");
      }
      else if(k.KFCM(1,t,['󱥝'])){
        r=m=1;   // Line 126
        k.KDC(1,t);
        k.KO(-1,t,"󱦠");
      }
      else if(k.KFCM(1,t,['󱤨'])){
        r=m=1;   // Line 133
        k.KDC(1,t);
        k.KO(-1,t,"󱥣");
      }
      else if(k.KFCM(1,t,['󱤍'])){
        r=m=1;   // Line 136
        k.KDC(1,t);
        k.KO(-1,t,"󱥎");
      }
      else if(k.KFCM(1,t,['󱥣'])){
        r=m=1;   // Line 179
        k.KDC(1,t);
        k.KO(-1,t,"󱥋");
      }
      else if(k.KFCM(1,t,['󱥎'])){
        r=m=1;   // Line 187
        k.KDC(1,t);
        k.KO(-1,t,"󱥅");
      }
      else if(k.KFCM(1,t,['󱥌'])){
        r=m=1;   // Line 190
        k.KDC(1,t);
        k.KO(-1,t,"󱦅︁");
      }
      else if(1){
        r=m=1;   // Line 243
        k.KDC(0,t);
        k.KO(-1,t,"󱤨");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x114)) {
      if(k.KFCM(1,t,['󱤌'])){
        r=m=1;   // Line 81
        k.KDC(1,t);
        k.KO(-1,t,"󱥉");
      }
      else if(k.KFCM(1,t,['󱤭'])){
        r=m=1;   // Line 141
        k.KDC(1,t);
        k.KO(-1,t,"󱤋");
      }
      else if(k.KFCM(1,t,['󱤎'])){
        r=m=1;   // Line 146
        k.KDC(1,t);
        k.KO(-1,t,"󱤙");
      }
      else if(k.KFCM(1,t,['󱥰'])){
        r=m=1;   // Line 167
        k.KDC(1,t);
        k.KO(-1,t,"󱤶");
      }
      else if(k.KFCM(1,t,['󱤋'])){
        r=m=1;   // Line 191
        k.KDC(1,t);
        k.KO(-1,t,"󱤐");
      }
      else if(k.KFCM(1,t,['󱥢'])){
        r=m=1;   // Line 202
        k.KDC(1,t);
        k.KO(-1,t,"󱦀");
      }
      else if(k.KFCM(1,t,['󱤐'])){
        r=m=1;   // Line 203
        k.KDC(1,t);
        k.KO(-1,t,"󱤼︁");
      }
      else if(1){
        r=m=1;   // Line 245
        k.KDC(0,t);
        k.KO(-1,t,"󱤭");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x115)) {
      if(k.KFCM(1,t,['󱤈'])){
        r=m=1;   // Line 87
        k.KDC(1,t);
        k.KO(-1,t,"󱥩");
      }
      else if(k.KFCM(1,t,['󱤬'])){
        r=m=1;   // Line 92
        k.KDC(1,t);
        k.KO(-1,t,"󱤃");
      }
      else if(k.KFCM(1,t,['󱥓'])){
        r=m=1;   // Line 101
        k.KDC(1,t);
        k.KO(-1,t,"󱥒");
      }
      else if(k.KFCM(1,t,['󱥧'])){
        r=m=1;   // Line 105
        k.KDC(1,t);
        k.KO(-1,t,"󱤛");
      }
      else if(k.KFCM(1,t,['󱤧'])){
        r=m=1;   // Line 107
        k.KDC(1,t);
        k.KO(-1,t,"󱤉");
      }
      else if(k.KFCM(1,t,['󱦜'])){
        r=m=1;   // Line 120
        k.KDC(1,t);
        k.KO(-1,t,"󱤠");
      }
      else if(k.KFCM(1,t,['󱥊'])){
        r=m=1;   // Line 183
        k.KDC(1,t);
        k.KO(-1,t,"󱥪");
      }
      else if(k.KFCM(1,t,['󱥂'])){
        r=m=1;   // Line 216
        k.KDC(1,t);
        k.KO(-1,t,"󱦑");
      }
      else if(k.KFCM(1,t,['󱥍'])){
        r=m=1;   // Line 218
        k.KDC(1,t);
        k.KO(-1,t,"󱦘");
      }
      else if(k.KFCM(1,t,['󱤡'])){
        r=m=1;   // Line 220
        k.KDC(1,t);
        k.KO(-1,t,"󱦛󱤡");
      }
      else if(1){
        r=m=1;   // Line 238
        k.KDC(0,t);
        k.KO(-1,t,"󱤧");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x116)) {
      if(k.KFCM(1,t,['󱦜'])){
        r=m=1;   // Line 123
        k.KDC(1,t);
        k.KO(-1,t,"󱦆");
      }
      else if(k.KFCM(1,t,['󱥔'])){
        r=m=1;   // Line 130
        k.KDC(1,t);
        k.KO(-1,t,"󱤩");
      }
      else if(k.KFCM(1,t,['󱤍'])){
        r=m=1;   // Line 137
        k.KDC(1,t);
        k.KO(-1,t,"󱥀");
      }
      else if(1){
        r=m=1;   // Line 244
        k.KDC(0,t);
        k.KO(-1,t,"󱤍");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x117)) {
      if(k.KFCM(1,t,['󱥧'])){
        r=m=1;   // Line 221
        k.KDC(1,t);
        k.KO(-1,t,"「");
      }
      else if(k.KFCM(1,t,['󱤧'])){
        r=m=1;   // Line 222
        k.KDC(1,t);
        k.KO(-1,t,"」");
      }
      else if(k.KFCM(1,t,['󱤈'])){
        r=m=1;   // Line 223
        k.KDC(1,t);
        k.KO(-1,t,"󱦕");
      }
      else if(k.KFCM(1,t,['󱤨'])){
        r=m=1;   // Line 224
        k.KDC(1,t);
        k.KO(-1,t,"󱦖");
      }
      else if(k.KFCM(1,t,['󱦝'])){
        r=m=1;   // Line 225
        k.KDC(1,t);
        k.KO(-1,t,"　");
      }
      else if(k.KFCM(1,t,['󱥝'])){
        r=m=1;   // Line 226
        k.KDC(1,t);
        k.KO(-1,t,"゙");
      }
      else if(k.KFCM(1,t,['󱤌'])){
        r=m=1;   // Line 227
        k.KDC(1,t);
        k.KO(-1,t,"゚");
      }
      else if(1){
        r=m=1;   // Line 246
        k.KDC(0,t);
        k.KO(-1,t,"󱦝");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x102)) {
      if(1){
        r=m=1;   // Line 43
        k.KDC(0,t);
        k.KO(-1,t,"$");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x103)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"€");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x104)) {
      if(1){
        r=m=1;   // Line 45
        k.KDC(0,t);
        k.KO(-1,t,"₽");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x105)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"¥");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x106)) {
      if(1){
        r=m=1;   // Line 47
        k.KDC(0,t);
        k.KO(-1,t,"₩");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x107)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"₹");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, 0x118)) {
      if(1){
        r=m=1;   // Line 247
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    return r;
  };
}
